import { Col, Row, DatePicker } from 'antd';
import { CheckOutlined } from '@ant-design/icons';
import classNames from 'classnames/bind';
import React from 'react';
import AppInput from '~/components/AppInput';
import AppSelectInput from '~/components/AppSelectInput';
import styles from './SettingBook.module.css';
import AppForm from '~/components/AppForm';
import AppDateInput from '~/components/AppDateInput';
import AppButton from '~/components/AppButton';
import iconLock from '~/assets/svgs/iconLock.svg';
import ModalConfirm from '~/components/Modal/ModalConfirm';
const onChange = (value) => {
    console.log(`selected ${value}`);
};
const onSearch = (value) => {
    console.log('search:', value);
};
const { RangePicker } = DatePicker;
const cx = classNames.bind(styles);

function getYearsOptions(startYear, endYear) {
    const options = [];

    for (let year = startYear; year <= endYear; year++) {
        options.push(
            <option key={year} value={year}>
                {year}
            </option>,
        );
    }

    return options;
}

function AppYearInput({ name, options }) {
    return <select name={name}>{options}</select>;
}

function SettingBook(props) {
    const onSubmit = (data) => {
        console.log(data);
    };
    const handleSubmitClick = () => {};

    return (
        <div>
            <div className={cx('header')}>Nhập thông tin sách</div>
            <div className={cx('information')}>
                <AppForm onSubmit={onSubmit} className={cx('form')}>
                    <Row gutter={[24, 12]}>
                        <Col xs={24}>
                            <Row className={cx('input-wrapper')}>
                                <Col xs={8}>Tên sách</Col>
                                <Col xs={16}>
                                    <div className={cx('input')}>
                                        <AppInput name="nameBook" placeholder="Nhập tên sách" />
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <Col xs={24}>
                            <Row className={cx('input-wrapper')}>
                                <Col xs={8}>Tên tác giả</Col>
                                <Col xs={16}>
                                    <div className={cx('input')}>
                                        <AppInput name="nameAuthor" placeholder="Nhập tên tác giả" />
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <Col xs={24}>
                            <Row className={cx('input-wrapper')}>
                                <Col xs={8}>Nhà xuất bản</Col>
                                <Col xs={16}>
                                    <div className={cx('input')}>
                                        <AppInput name="publish" placeholder="Nhập tên nhà xuất bản" />
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <Col xs={24}>
                            <Row className={cx('input-wrapper')}>
                                <Col xs={8}>Năm xuất bản</Col>
                                <Col xs={16}>
                                    <div className={cx('input')}>
                                        <AppYearInput name="year" options={getYearsOptions(1975, 2023)} />
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <Col xs={24}>
                            <Row className={cx('input-wrapper')}>
                                <Col xs={8}>Thể loại</Col>
                                <Col xs={16}>
                                    <div className={cx('input')}>
                                        <AppSelectInput
                                            name="category"
                                            options={[
                                                'Trinh thám',
                                                'Tiểu thuyết',
                                                'Truyện tranh',
                                                'Khoa học',
                                                'Đời sống',
                                                'Truyện ngắn',
                                                'Tự truyện',
                                                'Lịch sử',
                                            ]}
                                        />
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <Col xs={24}>
                            <Row className={cx('input-wrapper')}>
                                <Col xs={8}>Loại sách</Col>
                                <Col xs={16}>
                                    <div className={cx('input')}>
                                        <AppSelectInput name="type" options={['Sách thường', 'Sách quý giá']} />
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <Col xs={24}>
                            <Row className={cx('input-wrapper')}>
                                <Col xs={8}>Số lượng</Col>
                                <Col xs={16}>
                                    <div className={cx('input')}>
                                        <AppInput name="number" placeholder="Nhập số lượng sách" min="0" />
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </AppForm>
            </div>
            <div>
                <Row>
                    <Col span={24}>
                        <div className={cx('bottom-center')} onClick={handleSubmitClick}>
                            <ModalConfirm
                                // onConfirm={(e) => handleDeleteTitle(record?._id)}
                                triggerBtn={
                                    <AppButton
                                        type="submit"
                                        style={{ marginLeft: '10px' }}
                                        color="#2080F6"
                                        bgColor="var(--primary-color)"
                                    >
                                        Lưu thay đổi
                                    </AppButton>
                                }
                            ></ModalConfirm>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default SettingBook;
