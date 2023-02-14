import classNames from 'classnames/bind';
import { useRef } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import AppButton from '~/components/AppButton';
import AppInput from '~/components/AppInput';
import AppTextArea from '~/components/AppTextArea';
import Modal from '~/components/Modal/AppModal';
import styles from './ModalConfirmWithMessage.module.sass';

const cx = classNames.bind(styles);
export const ConfirmModes = {
    INPUT: 'INPUT',
    TEXTAREA: 'TEXTAREA',
};

function ModalConfirmWithMessage({
    confirmText,
    cancelText,
    triggerBtn,
    textareaProps = {
        label: '',
        formKey: 'message',
        placeholder: '',
        rows: 3,
        required: true,
    },
    inputProps = {
        label: '',
        formKey: 'totp',
        placeholder: '',
        required: true,
    },
    mode = ConfirmModes.TEXTAREA,
    onSubmit = () => {},
    onCancel = () => {},
}) {
    const methods = useForm();
    const closeRef = useRef();
    const onCloseModal = () => {
        onCancel();
        closeRef.current.click();
    };

    const onConfirm = (data) => {
        onSubmit(data);
        closeRef.current.click();
    };
    return (
        <Modal
            className="ant-modal"
            width={500}
            triggerBtn={triggerBtn}
            btnJustifyContent="center"
            contentStyle={{
                padding: '20px 20px 0px 20px',
            }}
            btnBoxStyle={{
                marginTop: '10px',
            }}
            closeRef={closeRef}
        >
            <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit((data) => onConfirm(data))} className="form">
                    {mode === ConfirmModes.TEXTAREA && (
                        <AppTextArea
                            label={textareaProps?.label}
                            required={textareaProps?.required}
                            name={textareaProps?.formKey}
                            placeholder={textareaProps?.placeholder}
                            rows={textareaProps?.rows}
                        />
                    )}

                    {mode === ConfirmModes.INPUT && (
                        <AppInput required={true} name={inputProps.formKey} {...inputProps} />
                    )}

                    <div className={cx('button-handle')}>
                        <AppButton
                            onClick={onCloseModal}
                            bgColor="#F0F2FA"
                            textColor="#616879"
                            additionalStyle={{ marginRight: '10px' }}
                        >
                            {cancelText}
                        </AppButton>
                        <AppButton type="submit" bgColor="#2080F6">
                            {confirmText}
                        </AppButton>
                    </div>
                </form>
            </FormProvider>
        </Modal>
    );
}

export default ModalConfirmWithMessage;
