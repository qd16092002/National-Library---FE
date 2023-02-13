import { LockOutlined, SearchOutlined, SettingOutlined, UnlockOutlined } from '@ant-design/icons';
import { Button, Col, Input, Row, Select, DatePicker, Space } from 'antd';
import classNames from 'classnames/bind';
import React from 'react';
import { Link } from 'react-router-dom';
import AppButton from '~/components/AppButton';
import AppDateInput from '~/components/AppDateInput';
import AppForm from '~/components/AppForm';
import AppInput from '~/components/AppInput';
import AppSelectInput from '~/components/AppSelectInput';
import styles from './PersonalImformation.module.sass';
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
            <div className={cx('header')}>Thông tin cá nhân</div>
            <AppForm onSubmit={onSubmit} className={cx('form')}>
                <div className={cx('search')}>
                    <Row>
                        <Col
                            span={8}
                            style={{
                                paddingBottom: 10,
                            }}
                        >
                            <AppInput className="search" name="id" placeholder="Nhập mã độc giả muốn xem" />
                        </Col>
                        <Col span={1}></Col>
                        <Col span={8}>
                            <AppButton type="search">
                                <SearchOutlined />
                                Search
                            </AppButton>
                        </Col>
                    </Row>
                </div>
            </AppForm>

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
                                        <AppInput name="email" placeholder="Email" />
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
                                        <AppInput name="phonenumber" placeholder="Số điện thoại" />
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={8}>
                            <div className="bottom-left" onClick={handleSubmitClick}>
                                <AppButton type="search">
                                    <LockOutlined />
                                    Khóa tài khoản
                                </AppButton>
                            </div>
                        </Col>
                        <Col span={8}>
                            <div className="bottom-left" onClick={handleSubmitClick}>
                                <AppButton type="search">
                                    <UnlockOutlined />
                                    Mở tài khoản
                                </AppButton>
                            </div>
                        </Col>
                        <Col span={8}>
                            <Link to={'/setting'} style={{ display: 'block', width: '450px' }}>
                                <div className="bottom-left" onClick={handleSubmitClick}>
                                    <AppButton type="search">
                                        <SettingOutlined />
                                        Chỉnh sửa
                                    </AppButton>
                                </div>
                            </Link>
                        </Col>
                    </Row>
                </AppForm>
            </div>
        </div>
    );
}

export default Search;
