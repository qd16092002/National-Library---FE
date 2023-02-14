import { Col, Row } from 'antd';
import classNames from 'classnames/bind';
import { Fragment } from 'react';
import AppButton from '~/components/AppButton';
import AppDateInput from '~/components/AppDateInput';
import AppDisable from '~/components/AppDisable';
import AppFileInput from '~/components/AppFileInput';
import AppForm from '~/components/AppForm';
import AppInput from '~/components/AppInput';
import AppSelectInput from '~/components/AppSelectInput';
import { getEmailValidationRegex, getPhoneNumberValidationRegex } from '~/helpers/validator';
import Modal from '../AppModal/AppModal';
import styles from './ModalAddStaff.module.sass';

const cx = classNames.bind(styles);
const options = ['option 1', 'option 2', 'option 3', 'option 4', 'option 5', 'option 6'];

function ModalAddStaff(props) {
    const onSubmit = (data) => {
        console.log(data);
    };
    return (
        <Fragment>
            <Modal
                width="1000px"
                height="auto"
                style={{ overflow: 'scroll' }}
                triggerBtn={<AppButton>Thêm nhân sự mới</AppButton>}
            >
                <AppForm onSubmit={onSubmit}>
                    <div className={cx('header')}>Thêm người mới</div>
                    <div className={cx('main-input')}>
                        <Row gutter={50}>
                            <Col xs={8}>
                                <AppInput label="Họ và tên*" placeholder="Họ và tên" name="name" />
                                <AppDateInput label="Ngày sinh" name="birth-day" />
                                <AppSelectInput label="Trực thuộc" name="tructhuoc" options={options} />
                                <AppSelectInput label="Chức vụ" name="chucvu" options={options} />
                            </Col>
                            <Col xs={8}>
                                <AppInput label="ID_HRM S*" placeholder="ID_HRM S" name="id_hrm_s" />
                                <AppInput
                                    label="Email"
                                    placeholder="Email"
                                    name="email"
                                    type="email"
                                    validate={{
                                        required: 'This field is required!',
                                        pattern: { value: getEmailValidationRegex(), message: 'Email is not valid' },
                                    }}
                                />

                                <AppSelectInput label="Phòng ban chính" name="phongbanchinh" options={options} />
                                <AppFileInput label="Ảnh dấu" name="anhdau" />
                            </Col>
                            <Col xs={8}>
                                <AppInput
                                    label="SĐT*"
                                    placeholder="SĐT"
                                    name="sdt"
                                    validate={{
                                        required: 'This field is required!',
                                        pattern: {
                                            value: getPhoneNumberValidationRegex(),
                                            message: 'Phone number is not valid!',
                                        },
                                    }}
                                />
                                <AppSelectInput label="Giới tính*" name="sex" options={options} />
                                <AppSelectInput
                                    label="Phòng ban kiểm nghiệm"
                                    name="phongbankiemnghiem"
                                    options={options}
                                />
                            </Col>
                        </Row>
                    </div>
                    <AppDisable name="isDisable" />
                    <div className={cx('button-wrapper', 'flex-end')} style={{ gap: '20px', marginRight: '40px' }}>
                        <AppButton type="submit">Xác nhận</AppButton>
                        <AppButton type="button">Cấu hình ký</AppButton>
                    </div>
                </AppForm>
            </Modal>
        </Fragment>
    );
}

export default ModalAddStaff;
