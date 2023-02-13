import classNames from 'classnames/bind';
import { useFormContext } from 'react-hook-form';
import styles from './AppDateInput.module.sass';

const cx = classNames.bind(styles);
function AppDateInput({ name, required = false, onChange = () => {}, ...props }) {
    const {
        register,
        formState: { errors },
    } = useFormContext();
    return (
        <div className={cx('input-wrapper')}>
            <label className={cx(required ? 'required' : '')}>{props.label}</label>
            <input
                {...register(name, {
                    ...(required ? { required: 'Vui lòng chọn ngày' } : {}),
                    ...props.validate,
                    onChange: (e) => onChange(e.target.value),
                })}
                className="input"
                type="date"
            />
            {errors[name]?.type === 'required' && <div className={cx('error-message')}>{errors[name].message}</div>}
        </div>
    );
}

export default AppDateInput;
