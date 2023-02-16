import { Col, Row, DatePicker } from 'antd';
import { CheckOutlined } from '@ant-design/icons';
import classNames from 'classnames/bind';
import React from 'react';
import AppInput from '~/components/AppInput';
import AppSelectInput from '~/components/AppSelectInput';
import styles from './RegistCard.module.sass';
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
function RegistCard(props) {
    const onSubmit = (data) => {
        console.log(data);
    };
    const handleSubmitClick = () => {};
    return (
        <div>
            <div className={cx('header')}>Đăng ký thẻ</div>
            <div className={cx('imformation')}>
                <AppForm onSubmit={onSubmit} className={cx('form')}>
                    <Row gutter={[24, 12]}>
                        <Col xs={24}>
                            <Row className={cx('input-wrapper')}>
                                <Col xs={8}>họ và tên</Col>
                                <Col xs={16}>
                                    <div className={cx('input')}>
                                        <AppInput name="name" placeholder="họ và tên" />
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <Col xs={24}>
                            <Row className={cx('input-wrapper')}>
                                <Col xs={8}>CCCD</Col>
                                <Col xs={16}>
                                    <div className={cx('input')}>
                                        <AppInput name="cccd" placeholder="chứng minh nhân dân " />
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <Col xs={24}>
                            <Row className={cx('input-wrapper')}>
                                <Col xs={8}>tên thẻ</Col>
                                <Col xs={16}>
                                    <div className={cx('input')}>
                                        <AppSelectInput name="tên thẻ" options={['thẻ thường', 'thẻ vip']} />
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <Col xs={24}>
                            <Row className={cx('input-wrapper')}>
                                <Col xs={8}>loại gói </Col>
                                <Col xs={16}>
                                    <div className={cx('input')}>
                                        <AppSelectInput name="loại gói" options={['theo tháng', 'theo năm']} />
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <Col xs={24}>
                            <Row className={cx('input-wrapper')}>
                                <Col xs={8}>gia hạn</Col>
                                <Col xs={16}>
                                    <div className={cx('input')}>
                                        <AppSelectInput
                                            name="gia hạn"
                                            options={['tự động gia hạn', 'gia hạn thủ công']}
                                        />
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <Col span={24}>
                            <div className="bottom-right" onClick={handleSubmitClick}>
                                <AppButton type="search">
                                    <CheckOutlined />
                                    Xác nhận
                                </AppButton>
                            </div>
                        </Col>
                    </Row>
                </AppForm>
            </div>
        </div>
    );
}

export default RegistCard;
