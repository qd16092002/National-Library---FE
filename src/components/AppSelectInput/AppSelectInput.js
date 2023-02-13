import classNames from 'classnames/bind';
import { useEffect, useRef, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { CheckIcon, ChevronDown } from '~/assets/svgs';
import styles from './AppSelectInput.module.sass';

const cx = classNames.bind(styles);

const AppSelectInput = ({ name, options, label, ...props }) => {
    const { register, setValue } = useFormContext();
    const [selectValue, setSelectValue] = useState(options[0]);
    const [active, setActive] = useState(0);
    const [iconClick, setIconClick] = useState(false);
    const selections = useRef();
    const wrapperRef = useRef();

    const handleSelect = (value, index) => {
        setValue(name, value);
        setSelectValue(value);
        setActive(index);
        handleSelectClick();
    };

    const handleSelectClick = () => {
        selections.current.classList.toggle('hide');
        setIconClick(!iconClick);
    };

    const handleClick = (event) => {
        const { target } = event;

        if (!selections.current.classList.contains('hide'))
            if (!wrapperRef.current.contains(target)) {
                selections.current.classList.add('hide');
                setIconClick(!iconClick);
            }
    };

    useEffect(() => {
        setValue(name, options[0]);
        document.addEventListener('click', handleClick);
        return () => {
            document.removeEventListener('click', handleClick);
        };
    }, []);

    return (
        <div ref={wrapperRef}>
            <div
                value={selectValue}
                className={cx('form-select')}
                {...register(name, props.validate ? props.validate : { required: 'This field is required!' })}
            >
                <label className={cx('label')} for="select">
                    {label}
                </label>
                <div onClick={() => handleSelectClick()} className={cx('select-wrapper')}>
                    <div>{selectValue}</div>
                    <div className={cx(iconClick ? 'click' : 'un-click', 'flex-center')}>
                        <ChevronDown />
                    </div>
                </div>
                <ul ref={selections} className={cx('selections', 'hide')} id="select">
                    {options.map((option, index) => {
                        return (
                            <li
                                key={index}
                                className={cx(active === index ? 'active' : '')}
                                onClick={() => handleSelect(option, index)}
                            >
                                <div>{option}</div>
                                <div className={cx(active !== index ? 'hide' : '')}>
                                    <CheckIcon />
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
};

export default AppSelectInput;
