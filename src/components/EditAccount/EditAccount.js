import { dispatch } from '@adobe/redux-saga-promise';
import { Col, Row } from 'antd';
import classNames from 'classnames/bind';
import { useEffect } from 'react';
import { Controller, FormProvider, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { DocumentBookType, REQUEST_STATE, UserRoles, UserRolesConfig } from '~/app-configs';
import AppButton from '~/components/AppButton';
import AppInput from '~/components/AppInput';
import { EDIT_DOCUMENT_BOOK, RESET_EDIT_DOCUMENT_BOOK } from '~/containers/app/screens/Feature/redux/action';
import styles from './EditAccount.module.sass';

const cx = classNames.bind(styles);
function EditAccount({ onClose, title, refreshListTitle = () => {} }) {
    const defaultTitleValue = {
        ...title,
    };
    const dispatch = useDispatch();
    const updateAccount = useSelector((state) => state?.clerical?.editBook);
    console.log('updateAccount: ', updateAccount);

    const methods = useForm({
        defaultValues: defaultTitleValue,
    });

    function handleEditTitle(data) {
        console.log('data: ', data);
        dispatch(EDIT_DOCUMENT_BOOK(data));
    }

    useEffect(() => {
        if (updateAccount?.state === REQUEST_STATE.SUCCESS) {
            onClose();
            refreshListTitle();
            dispatch(RESET_EDIT_DOCUMENT_BOOK());
        }
    }, [updateAccount?.state]);

    return (
        <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit((data) => handleEditTitle(data))} className="form">
                <div className={cx('title_header')}>Chỉnh sửa sổ văn bản</div>
                <Row gutter={20} className={cx('row_modal_add')}>
                    <Row gutter={[24, 12]}>
                        <Col xs={24}>
                            <Row className={cx('input-wrapper')}>
                                <Col xs={8}>Họ và tên</Col>
                                <Col xs={16}>
                                    <div className={cx('input')}>
                                        <AppInput name="name" placeholder="Họ và tên" />
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <Col xs={24}>
                            <Row className={cx('input-wrapper')}>
                                <Col xs={8}>CCCD</Col>
                                <Col xs={16}>
                                    <div className={cx('input')}>
                                        <AppInput name="cccd" placeholder="CCCD" />
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <Col xs={24}>
                            <Row className={cx('input-wrapper')}>
                                <Col xs={8}>Email</Col>
                                <Col xs={16}>
                                    <div className={cx('input')}>
                                        <AppInput name="email" placeholder="Nhập Email" />
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <Col xs={24}>
                            <Row className={cx('input-wrapper')}>
                                <Col xs={8}>Ngày sinh</Col>
                                <Col xs={16}>
                                    <div className={cx('input')}>
                                        <AppInput name="birthday" placeholder="Ngày sinh" />
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <Col xs={24}>
                            <Row className={cx('input-wrapper')}>
                                <Col xs={8}>Giới tính</Col>
                                <Col xs={16}>
                                    <div className={cx('input')}>
                                        <AppInput name="gender" />
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <Col xs={24}>
                            <Row className={cx('input-wrapper')}>
                                <Col xs={8}>Số điện thoại</Col>
                                <Col xs={16}>
                                    <div className={cx('input')}>
                                        <AppInput name="phone" placeholder="Nhập Số điện thoại" />
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Row>
                <Row
                    style={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                    }}
                >
                    <AppButton
                        type="submit"
                        style={{ marginLeft: '10px' }}
                        color="#2080F6"
                        bgColor="var(--primary-color)"
                        isLoading={updateAccount?.state === REQUEST_STATE.REQUEST}
                    >
                        Cập nhật
                    </AppButton>
                </Row>
            </form>
        </FormProvider>
    );
}

export default EditAccount;
