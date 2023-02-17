import { Button, Col, Modal, notification, Row, Spin } from 'antd';
import { REQUEST_STATE } from '~/app-configs';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { LOGIN, REGISTER_USER, RESET_REGISTER_USER } from '~/redux/actions/user';
import blockChain from '~/assets/images/login/blockchain.png';
import { useForm } from 'react-hook-form';
import styles from './Login.css';
import './animated.css';
import backgroundlogin from '~/assets/images/login/library.jpg';
import Checkbox from 'antd/lib/checkbox/Checkbox';
import classNames from 'classnames/bind';
import { EyeClose, EyeShow } from '~/assets/svgs';
import AppForm from '~/components/AppForm';
import AppInput from '~/components/AppInput';
import AppDateInput from '~/components/AppDateInput';
import AppSelectInput from '~/components/AppSelectInput';
import AppButton from '~/components/AppButton';
const cx = classNames.bind(styles);

const Login = () => {
    const [open, setOpen] = useState(false);

    const [eyeShow, setEyeShow] = useState(false);
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user);
    const history = useHistory();
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm();
    const registerState = useSelector((state) => state.user.registerState);

    const onRegister = (data) => {
        console.log(data);
        dispatch(REGISTER_USER(data));
    };

    const onSubmit = (data) => {
        dispatch(LOGIN(data));
    };

    const showModal = () => setOpen(true);

    useEffect(() => {
        if (user.authState == REQUEST_STATE.SUCCESS || user?.verifyAuthState == REQUEST_STATE.SUCCESS) {
            history.push('/');
        }
        if (user?.authState === REQUEST_STATE.ERROR || user?.verifyAuthState == REQUEST_STATE.ERROR) {
            notification.error({
                message: 'Thất bại',
                description: 'Tài khoản hoặc mật khẩu không chính xác!',
            });
        }
    }, [user?.authState, user?.verifyAuthState]);

    useEffect(() => {
        if (registerState === REQUEST_STATE.SUCCESS) {
            setOpen(false);
            dispatch(RESET_REGISTER_USER());
        }
    }, [registerState]);

    return (
        <div
            className={cx('login flex-center animated-block__area')}
            style={{
                // backgroundImage: `url(${backgroundImage})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                position: 'relative',
                // margin: '260px',
            }}
        >
            <Col className={cx('name_prj')}>
                <div>National Library</div>
            </Col>

            <div className={cx('backgroundlogin')}>
                <img src={backgroundlogin}></img>
            </div>

            <div
                className={cx('login__box')}
                style={{
                    position: 'absolute',
                    zIndex: 99,
                }}
            >
                <form onSubmit={handleSubmit(onSubmit)} className={cx('auth__form')}>
                    <div className={cx('auth__header is-flex-col al-center ju-center')}>
                        {/* <div className="auth__header--icon is-flex al-center ju-center ">
                            <svg
                                className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                                focusable="false"
                                aria-hidden="true"
                                viewBox="0 0 24 24"
                                data-testid="LockOutlinedIcon"
                            >
                                <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"></path>
                            </svg>
                        </div> */}
                        <div className={cx('auth__header--label')}>Đăng nhập</div>
                        <div className={cx('auth__header--label_2')}>Đăng nhập hệ thống</div>
                    </div>
                    <div className={cx('auth__body is-flex-col')}>
                        <div className={cx('auth__label required')}>Email</div>
                        <div className={cx('input-effect')}>
                            <input
                                {...register('username', {
                                    required: true,
                                    // pattern: getEmailValidationRegex(),
                                })}
                                className="effect effect__email"
                                type="text"
                                placeholder="Địa chỉ Email"
                                autoComplete="false"
                            />
                            <span className={cx('focus-border')}>
                                <i></i>
                            </span>
                        </div>
                        {errors.username?.type === 'required' && (
                            <div className={cx('auth__error')}>Trường này không được để trống</div>
                        )}
                        {errors.username?.type === 'pattern' && (
                            <div className={cx('auth__error')}>Email bạn nhập không đúng định dạng</div>
                        )}
                        <div className={cx('auth__label required')}>Mật khẩu</div>
                        <div className={cx('input-effect')}>
                            <input
                                {...register('password', { required: true })}
                                className={cx('effect effect__pw')}
                                type={eyeShow === true ? 'text' : 'password'}
                                placeholder="Mật khẩu"
                                autoComplete="false"
                            />
                            <div className={cx('eye-icon')} onClick={() => setEyeShow(!eyeShow)}>
                                {eyeShow ? <EyeClose /> : <EyeShow />}
                            </div>
                        </div>

                        <div>
                            <Row className={cx('password')}>
                                <Row>
                                    <div style={{ margin: '0 12px 0 10px' }}>
                                        <Checkbox></Checkbox>
                                    </div>
                                    <div>Nhớ mật khẩu</div>
                                </Row>

                                <Link>
                                    <div className={cx('Forgot_password')}>Quên mật khẩu</div>
                                </Link>
                            </Row>
                        </div>
                        {/* <div className={cx('Sub')}>Đăng ký</div> */}
                        {errors.password?.type === 'required' && (
                            <div className={cx('auth__error')}>Trường này không được để trống</div>
                        )}
                        <button className="auth__box is-flex al-center ju-center">
                            {user?.authState === REQUEST_STATE.REQUEST ? <Spin /> : 'Đăng nhập'}
                        </button>
                        <Button className="auth__box is-flex al-center ju-center" type="primary" onClick={showModal}>
                            Đăng ký
                        </Button>
                        {open && (
                            <Modal
                                title="Đăng ký"
                                visible={open}
                                footer={null}
                                // okText="Đăng ký"
                                // cancelText="Hủy"
                            >
                                <div className={cx('imformation')}>
                                    <AppForm onSubmit={onRegister} className={cx('form')}>
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
                                                    <Col xs={8}>Tên đăng nhập</Col>
                                                    <Col xs={16}>
                                                        <div className={cx('input')}>
                                                            <AppInput name="username" placeholder="Tên đăng nhập" />
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
                                                    <Col xs={8}>Mật khẩu</Col>
                                                    <Col xs={16}>
                                                        <div className={cx('input')}>
                                                            <AppInput
                                                                {...register('password', { required: true })}
                                                                type={eyeShow === true ? 'text' : 'password'}
                                                                placeholder="Mật khẩu"
                                                                autoComplete="false"
                                                                name="password"
                                                            />
                                                            <div
                                                                className={cx('eye-icon')}
                                                                onClick={() => setEyeShow(!eyeShow)}
                                                            >
                                                                {eyeShow ? <EyeClose /> : <EyeShow />}
                                                            </div>
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
                                                            <AppSelectInput
                                                                name="gender"
                                                                options={['Nam', 'Nữ', 'Khác']}
                                                            />
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </Col>
                                            <Col xs={24}>
                                                <Row className={cx('input-wrapper')}>
                                                    <Col xs={8}>Số điện thoại</Col>
                                                    <Col xs={16}>
                                                        <div className={cx('input')}>
                                                            <AppInput
                                                                name="phonenumber"
                                                                placeholder="Nhập Số điện thoại"
                                                            />
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </Col>
                                            <Col xs={24}>
                                                <AppButton
                                                    type="submit"
                                                    isLoading={registerState === REQUEST_STATE.REQUEST}
                                                >
                                                    XN
                                                </AppButton>
                                            </Col>
                                        </Row>
                                    </AppForm>
                                </div>
                            </Modal>
                        )}
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
