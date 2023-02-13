import classNames from 'classnames/bind';
import { useFormContext } from 'react-hook-form';
import styles from './AppInput.module.sass';

const cx = classNames.bind(styles);

function AppInput({ name, defaultValue, wrapperStyle = {}, required = false, onChange = () => {}, ...props }) {
    const {
        register,
        formState: { errors },
    } = useFormContext();
    let timeoutChangeId;

    const handleInputChange = (value) => {
        clearTimeout(timeoutChangeId);
        timeoutChangeId = setTimeout(() => {
            onChange(value);
        }, 500);
    };

    return (
        <div className={cx('input-wrapper')} style={wrapperStyle}>
            <label className={cx(required ? 'required' : '')}>{props.label}</label>
            <input
                id={name}
                type={props.type || 'text'}
                className={cx('input')}
                placeholder={props.placeholder || ''}
                autoComplete="off"
                {...register(name, {
                    ...(required ? { required: 'Trường này không được để trống' } : {}),
                    ...props.validate,
                    onChange: (e) => handleInputChange(e.target.value),
                })}
                {...props}
            />
            {errors[name]?.type === 'required' && <div className={cx('error-message')}>{errors[name].message}</div>}
            {errors[name]?.type === 'pattern' && <div className={cx('error-message')}>{errors[name].message}</div>}
        </div>
    );
}

export default AppInput;
