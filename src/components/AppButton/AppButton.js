import classNames from 'classnames/bind';
import InfinityLoading from '../Loading/InfinityLoading';
import styles from './AppButton.module.sass';

const cx = classNames.bind(styles);

function AppButton({
    children,
    type = 'button',
    bgColor = 'var(--primary-color)',
    textColor = '',
    form,
    isLoading = false,
    additionalStyle = {},
    onClick = () => {},
    ...buttonProps
}) {
    return (
        <button
            type={type}
            style={{
                backgroundColor: isLoading ? '#fff' : bgColor,
                color: textColor,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                transition: 'all 0.5s',
                outline: 'none',
                border: `1px solid ${isLoading ? bgColor : 'transparent'}`,
                ...additionalStyle,
            }}
            className={cx('primary-btn')}
            form={form}
            onClick={isLoading ? null : onClick}
            {...buttonProps}
        >
            {isLoading ? (
                <InfinityLoading
                    wrapperStyle={{
                        width: '50px',
                    }}
                />
            ) : (
                children
            )}
        </button>
    );
}

export default AppButton;
