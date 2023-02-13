import classNames from 'classnames/bind';
import { Fragment, memo, useEffect, useRef, useState } from 'react';
import { CheckIcon, ChevronDown } from '~/assets/svgs';
import InfinityLoading from '../Loading/InfinityLoading';
import styles from './AppSelect.module.sass';

const cx = classNames.bind(styles);
export const APP_SELECT_MODES = {
    MULTIPLE: {
        code: 'MULTIPLE',
    },
    SINGLE: {
        code: 'SINGLE',
    },
};
const AppSelect = ({
    field,
    errors,
    options = [],
    data = {},
    wrapperStyle = {},
    selectionsStyle = {},
    selectModes = APP_SELECT_MODES.SINGLE.code,
    label = '',
    required = false,
    isLoading = false,
    isGetMore = false,
    emptyText = 'Danh sách trống',
    onOpenChange = (value) => {},
    fetchMoreData = () => {},
    afterSelect = () => {},
    defaultValue = [],
}) => {
    const [selectValue, setSelectValue] = useState(defaultValue);
    const [iconClick, setIconClick] = useState(false);
    const currentData = useRef(data);
    const selections = useRef();
    const wrapperRef = useRef();
    const handleSelect = (select, index) => {
        if (selectModes === APP_SELECT_MODES.SINGLE.code) {
            setSelectValue([select]);
            afterSelect(select);
            handleSelectClick();
        }

        if (selectModes === APP_SELECT_MODES.MULTIPLE.code) {
            const itemIndex = selectValue.findIndex((item) => item.value === select.value);
            if (itemIndex === -1) {
                const newValues = [...selectValue, select];
                setSelectValue(newValues);
                afterSelect(newValues);
                return;
            }
            selectValue.splice(itemIndex, 1);
            setSelectValue([...selectValue]);
            afterSelect([...selectValue].map((item) => item.value));
        }
    };

    const handleSelectClick = () => {
        selections.current.classList.toggle('hide');
        onOpenChange(!selections.current.classList.contains('hide'));
        setIconClick(!iconClick);
    };

    const handleClick = (event) => {
        if (selections.current) {
            const { target } = event;

            if (!selections.current.classList.contains('hide') && !wrapperRef.current.contains(target)) {
                selections.current.classList.add('hide');
                onOpenChange(false);
                setIconClick(!iconClick);
            }
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClick);
        return () => {
            document.removeEventListener('click', handleClick);
        };
    }, [iconClick]);

    useEffect(() => {
        // Update data
        currentData.current = data;
    }, [data]);

    useEffect(() => {
        const handleFetchMoreData = () => {
            if (selections.current.offsetHeight + selections.current.scrollTop >= selections.current.scrollHeight) {
                fetchMoreData(currentData.current);
            }
        };
        selections.current.addEventListener('scroll', handleFetchMoreData);
        return () => {
            if (selections?.current) {
                selections?.current?.removeEventListener('scroll', handleFetchMoreData);
            }
        };
    }, []);

    // Using for update selected option
    useEffect(() => {
        if (field && selectModes === APP_SELECT_MODES.SINGLE.code) {
            field.onChange(selectValue[0]);
        }
        if (field && selectModes === APP_SELECT_MODES.MULTIPLE.code) {
            field.onChange(selectValue);
        }
    }, [selectValue]);

    return (
        <div ref={wrapperRef} style={wrapperStyle}>
            <div className={cx('form-select')}>
                <label className={cx('label', required ? 'required' : '')} htmlFor="select">
                    {label}
                </label>
                <div onClick={() => handleSelectClick()} className={cx('select-wrapper')}>
                    <div className={cx('over-flow-1')}>
                        {selectValue.length > 0
                            ? selectValue.map((value, index) => (
                                  <span key={index}>
                                      {index > 0 && ','}
                                      {value?.title}
                                  </span>
                              ))
                            : 'Vui lòng chọn...'}
                    </div>
                    <div className={cx(iconClick ? 'click' : 'un-click', 'flex-center')}>
                        <ChevronDown />
                    </div>
                </div>
                <ul ref={selections} style={{ ...selectionsStyle }} className={cx('selections', 'hide')} id="select">
                    {isLoading && (
                        <div className={cx('options-loading')}>
                            <InfinityLoading
                                wrapperStyle={{
                                    width: '40px',
                                }}
                            />
                        </div>
                    )}

                    {!isLoading && options.length > 0 && (
                        <Fragment>
                            {options.map((option, index) => {
                                return (
                                    <li
                                        key={option?.value}
                                        className={cx(
                                            selectValue.find((select) => select?.value === option?.value)
                                                ? 'active'
                                                : '',
                                        )}
                                        onClick={() => handleSelect(option, index)}
                                    >
                                        <div className={cx('over-flow-1')}>{option.title}</div>
                                        <div
                                            className={cx(
                                                'check-icon',
                                                !selectValue.find((select) => select?.value === option?.value)
                                                    ? 'hide'
                                                    : '',
                                            )}
                                        >
                                            <CheckIcon />
                                        </div>
                                    </li>
                                );
                            })}
                            {isGetMore && (
                                <div className={cx('options-get_more')}>
                                    <InfinityLoading
                                        wrapperStyle={{
                                            width: '40px',
                                        }}
                                    />
                                </div>
                            )}
                        </Fragment>
                    )}

                    {!isLoading && options.length === 0 && <div className={cx('options-empty')}>{emptyText}</div>}
                </ul>
            </div>

            {field?.name && errors[field?.name] && errors[field?.name]?.type === 'required' && (
                <div className={cx('error-required')}>
                    {errors[field?.name]?.message ?? 'Bạn phải chọn trường nyaf'}
                </div>
            )}
        </div>
    );
};

export default memo(AppSelect);
