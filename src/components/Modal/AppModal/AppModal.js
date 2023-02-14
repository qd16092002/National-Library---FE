import React, { forwardRef, useRef } from 'react';
import styles from './AppModal.module.sass';
import classNames from 'classnames/bind';
import * as Dialog from '@radix-ui/react-dialog';
import { Spin } from 'antd';

const cx = classNames.bind(styles);
// calculate sum of two number
const AppModal = forwardRef(
    ({
        closeRef,
        contentStyle,
        onOpenChange,
        btnBoxStyle,
        hasCloseAfterConfirm = true,
        onConfirm = () => {},
        ...props
    }) => {
        const close = closeRef ?? useRef();
        const handleConfirm = () => {
            onConfirm();
            hasCloseAfterConfirm &&
                setTimeout(() => {
                    close.current.click();
                }, 100);
        };
        return (
            <Dialog.Root onOpenChange={onOpenChange}>
                <Dialog.Trigger asChild>
                    <div style={{ width: props.is100 ? '100%' : '' }} className={cx('trigger-btn')}>
                        {props.triggerBtn}
                    </div>
                </Dialog.Trigger>
                <Dialog.Portal>
                    <Dialog.Overlay className={cx('DialogOverlay')} />
                    <Dialog.Content
                        style={{ width: props.width, height: props.height, ...contentStyle }}
                        className={cx('DialogContent')}
                    >
                        {props.children}
                        {
                            <div
                                style={
                                    props.cancelBtn || props.submitBtn
                                        ? {
                                              display: 'flex',
                                              justifyContent: props.btnJustifyContent
                                                  ? props.btnJustifyContent
                                                  : 'flex-end',
                                              gap: '16px',
                                              ...btnBoxStyle,
                                          }
                                        : {}
                                }
                            >
                                {props.cancelBtn && <Dialog.Close asChild>{props.cancelBtn}</Dialog.Close>}
                                {props.submitBtn && <div onClick={handleConfirm}>{props.submitBtn}</div>}
                            </div>
                        }
                        <Dialog.Close
                            style={{ visibility: 'hidden', width: '0px' }}
                            ref={close}
                            asChild={false}
                        ></Dialog.Close>
                        <Dialog.Close asChild>
                            {props.close && (
                                <button className={cx('IconButton')} aria-label="Close">
                                    {props.close}
                                </button>
                            )}
                        </Dialog.Close>
                    </Dialog.Content>
                </Dialog.Portal>
            </Dialog.Root>
        );
    },
);

export default AppModal;
