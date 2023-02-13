import { Button, Col, Input, Row, Select, DatePicker, Space } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import classNames from 'classnames/bind';
import React from 'react';
import AppInput from '~/components/AppInput';
import AppSelectInput from '~/components/AppSelectInput';
import styles from './Search.module.sass';
import AppForm from '~/components/AppForm';
import AppDateInput from '~/components/AppDateInput';
import AppButton from '~/components/AppButton';
const onChange = (value) => {
    console.log(`selected ${value}`);
};
const onSearch = (value) => {
    console.log('search:', value);
};
const { RangePicker } = DatePicker;
const cx = classNames.bind(styles);
function Search(props) {
    const onSubmit = (data) => {
        console.log(data);
    };
    const handleSubmitClick = () => {};
    return (
        <div>
            <div className={cx('header')}>Tìm kiếm độc giả</div>
            <div className={cx('imformation')}>
                <AppForm onSubmit={onSubmit} className={cx('form')}>
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
                                        <AppDateInput name="birthday" placeholder="Ngày sinh" />
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <Col xs={24}>
                            <Row className={cx('input-wrapper')}>
                                <Col xs={8}>Giới tính</Col>
                                <Col xs={16}>
                                    <div className={cx('input')}>
                                        <AppSelectInput name="gender" options={['Nam', 'Nữ', 'Khác']} />
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <Col xs={24}>
                            <Row className={cx('input-wrapper')}>
                                <Col xs={8}>Số điện thoại</Col>
                                <Col xs={16}>
                                    <div className={cx('input')}>
                                        <AppInput name="phonenumber" placeholder="Nhập Số điện thoại" />
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <Col xs={24}>
                            <Row className={cx('input-wrapper')}>
                                <Col xs={8}>Mã độc giả</Col>
                                <Col xs={16}>
                                    <div className={cx('input')}>
                                        <AppInput name="id" placeholder="Nhập Mã độc giả" />
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={24}>
                            <div className="bottom-right" onClick={handleSubmitClick}>
                                <AppButton type="search">
                                    <SearchOutlined />
                                    Tìm kiếm
                                </AppButton>
                            </div>
                        </Col>
                    </Row>
                </AppForm>
            </div>
        </div>
    );
}

export default Search;
