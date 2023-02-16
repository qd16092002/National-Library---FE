import { CheckOutlined, FormOutlined } from '@ant-design/icons';
import { Col, Row, DatePicker } from 'antd';
import classNames from 'classnames/bind';
import React from 'react';
import AppButton from '~/components/AppButton';
import AppDateInput from '~/components/AppDateInput';
import AppForm from '~/components/AppForm';
import AppInput from '~/components/AppInput';
import AppSelectInput from '~/components/AppSelectInput';
import styles from './AddBook.module.sass';
const onChange = (value) => {
    console.log(`selected ${value}`);
};
const onSearch = (value) => {
    console.log('search:', value);
};
const { RangePicker } = DatePicker;
const cx = classNames.bind(styles);
function AddBook(props) {
    const onSubmit = (data) => {
        console.log(data);
    };
    const handleSubmitClick = () => {};
    return (
        <div>
            <div className={cx('header')}>Thêm Sách</div>

            <div className={cx('imformation')}>
                <AppForm onSubmit={onSubmit} className={cx('form')}>
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
                                        <AppDateInput name="date_added" placeholder="Ngày Nhập" />
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
                    <Row>
                        <Col span={24}>
                            <div className="bottom-right" onClick={handleSubmitClick}>
                                <AppButton type="AddBook">
                                    <FormOutlined />
                                    Thêm sách
                                </AppButton>
                            </div>
                        </Col>
                    </Row>
                </AppForm>
            </div>
        </div>
    );
}

export default AddBook;
