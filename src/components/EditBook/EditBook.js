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
import styles from './EditBook.module.sass';

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
                <div className={cx('title_header')}>Chỉnh sửa Sách</div>
                <Row gutter={20} className={cx('row_modal_add')}>
                    <Row gutter={[24, 12]}>
                        <Col xs={24}>
                            <Row className={cx('input-wrapper')}>
                                <Col xs={8}>Tên Sách</Col>
                                <Col xs={16}>
                                    <div className={cx('input')}>
                                        <AppInput name="namebook" placeholder="Nhập Tên Sách" />
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <Col xs={24}>
                            <Row className={cx('input-wrapper')}>
                                <Col xs={8}>Nhà Xuất Bản</Col>
                                <Col xs={16}>
                                    <div className={cx('input')}>
                                        <AppInput name="publisher" placeholder="Nhập Nhà Xuất Bản" />
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <Col xs={24}>
                            <Row className={cx('input-wrapper')}>
                                <Col xs={8}>Tác giả </Col>
                                <Col xs={16}>
                                    <div className={cx('input')}>
                                        <AppInput name="author" placeholder="Nhập Tác giả " />
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <Col xs={24}>
                            <Row className={cx('input-wrapper')}>
                                <Col xs={8}>Năm xuất bản</Col>
                                <Col xs={16}>
                                    <div className={cx('input')}>
                                        <AppInput name="publishing_year" placeholder="Nhập Năm xuất bản" />
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <Col xs={24}>
                            <Row className={cx('input-wrapper')}>
                                <Col xs={8}>Thể Loại</Col>
                                <Col xs={16}>
                                    <div className={cx('input')}>
                                        <AppInput name="category" placeholder="Nhập Thể Loại" />
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <Col xs={24}>
                            <Row className={cx('input-wrapper')}>
                                <Col xs={8}>Ngày Nhập</Col>
                                <Col xs={16}>
                                    <div className={cx('input')}>
                                        <AppInput name="date_added" placeholder="Ngày Nhập" />
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <Col xs={24}>
                            <Row className={cx('input-wrapper')}>
                                <Col xs={8}>Số lượng</Col>
                                <Col xs={16}>
                                    <div className={cx('input')}>
                                        <AppInput name="quantity" placeholder="Nhập Số lượng" />
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
