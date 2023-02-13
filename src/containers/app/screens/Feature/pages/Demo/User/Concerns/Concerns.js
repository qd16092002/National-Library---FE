import { CheckOutlined } from '@ant-design/icons';
import { Col, Row, DatePicker } from 'antd';
import classNames from 'classnames/bind';
import React from 'react';
import AppButton from '~/components/AppButton';
import AppDateInput from '~/components/AppDateInput';
import AppForm from '~/components/AppForm';
import AppInput from '~/components/AppInput';
import AppSelectInput from '~/components/AppSelectInput';
import styles from './Concerns.module.sass';
const onChange = (value) => {
    console.log(`selected ${value}`);
};
const onSearch = (value) => {
    console.log('search:', value);
};
const { RangePicker } = DatePicker;
const cx = classNames.bind(styles);
function Concerns(props) {
    const onSubmit = (data) => {
        console.log(data);
    };
    const handleSubmitClick = () => {};
    return (
        <div>
            <div className={cx('header')}>Mối quan tâm của bạn là gì ?</div>
            {/* <AppForm onSubmit={onSubmit} className={cx('form')}>
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
            </AppForm> */}

            <div className={cx('imformation')}>
                <AppForm onSubmit={onSubmit} className={cx('form')}>
                    <Row gutter={[24, 12]}>
                        <Col xs={24}>
                            <Row className={cx('input-wrapper')}>
                                <Col xs={8}>Tác giả yêu thích</Col>
                                <Col xs={16}>
                                    <div className={cx('input')}>
                                        <AppInput name="author" placeholder="Nhập Tác giả yêu thích" />
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <Col xs={24}>
                            <Row className={cx('input-wrapper')}>
                                <Col xs={8}>Thể loại yêu thích</Col>
                                <Col xs={16}>
                                    <div className={cx('input')}>
                                        <AppInput name="category" placeholder="Nhập Thể loại yêu thích" />
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <Col xs={24}>
                            <Row className={cx('input-wrapper')}>
                                <Col xs={8}>Nhà xuất bản yêu thích</Col>
                                <Col xs={16}>
                                    <div className={cx('input')}>
                                        <AppInput name="publishing_company" placeholder="Nhập Nhà xuất bản yêu thích" />
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={24}>
                            <div className="bottom-right" onClick={handleSubmitClick}>
                                <AppButton type="search">
                                    <CheckOutlined />
                                    Cập nhật
                                </AppButton>
                            </div>
                        </Col>
                    </Row>
                </AppForm>
            </div>
        </div>
    );
}

export default Concerns;
