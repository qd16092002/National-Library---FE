import { FormOutlined, LockOutlined, SearchOutlined, SettingOutlined, UnlockOutlined } from '@ant-design/icons';
import { Button, Col, Input, Row, Select, DatePicker, Space, Table } from 'antd';
import classNames from 'classnames/bind';
import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { CloseX } from '~/assets/svgs';
import AppButton from '~/components/AppButton';
import ModalConfirm from '~/components/Modal/ModalConfirm';
import styles from './PersonalImformation.module.sass';
import iconEdit from '~/assets/svgs/iconEdit.svg';
import iconLock from '~/assets/svgs/iconLock.svg';
import AppModal from '~/components/Modal/AppModal';
import EditAccount from '~/components/EditAccount';
import { REQUEST_STATE } from '~/app-configs';
const cx = classNames.bind(styles);
function PersonalImformation(props) {
    const EditAccountPersonal = useRef(null);
    const [searchedText, setSearchedText] = useState('');
    const [eyeShow, setEyeShow] = useState(false);
    let currentDeleteTitleId = useRef();
    function handleDeleteTitle(titleId) {
        dispatch(DELETE_TITLE({ titleId }));
    }
    const [modalText, setModalText] = useState('Content of the modal');
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [open, setOpen] = useState(false);

    const handleOk = () => {
        setModalText('The modal will be closed after two seconds');
        setConfirmLoading(true);
        setTimeout(() => {
            setOpen(false);
            setConfirmLoading(false);
        }, 2000);
    };
    return (
        <div>
            <div className={cx('header')}>Thông tin cá nhân</div>

            <div className={cx('imformation')}>
                <Input.Search
                    placeholder="Tìm kiếm"
                    style={{
                        marginBottom: 10,
                    }}
                    onSearch={(value) => {
                        setSearchedText(value);
                    }}
                    onChange={(e) => {
                        setSearchedText(e.target.value);
                    }}
                />
                <Table
                    className="table"
                    columns={[
                        {
                            title: 'Họ và tên',
                            dataIndex: 'name',
                            key: 'name',
                            filteredValue: [searchedText],
                            onFilter: (value, record) => {
                                return (
                                    String(record.name).toLowerCase().includes(value.toLowerCase()) ||
                                    String(record.cccd).toLowerCase().includes(value.toLowerCase()) ||
                                    String(record.email).toLowerCase().includes(value.toLowerCase()) ||
                                    String(record.birthday).toLowerCase().includes(value.toLowerCase()) ||
                                    String(record.gender).toLowerCase().includes(value.toLowerCase()) ||
                                    String(record.id).toLowerCase().includes(value.toLowerCase()) ||
                                    String(record.phone).toLowerCase().includes(value.toLowerCase())
                                );
                            },
                        },
                        {
                            title: 'CCCD',
                            dataIndex: 'cccd',
                            key: 'cccd',
                        },
                        {
                            title: 'Email',
                            dataIndex: 'email',
                            key: 'email',
                        },
                        {
                            title: 'Ngày sinh',
                            dataIndex: 'birthday',
                            key: 'birthday',
                        },
                        {
                            title: 'Giới tính',
                            dataIndex: 'gender',
                            key: 'gender',
                        },
                        {
                            title: 'Số điện thoại',
                            dataIndex: 'phone',
                            key: 'phone',
                        },
                        {
                            title: 'Mã độc giả',
                            dataIndex: 'id',
                            key: 'id',
                        },
                        {
                            title: 'Action',
                            key: 'action',

                            render: (_, record) => (
                                <Space size="middle">
                                    <ModalConfirm
                                        confirmText="Xác nhận"
                                        cancelText="Hủy Bỏ"
                                        onOk={handleOk}
                                        confirmLoading={confirmLoading}
                                        triggerBtn={
                                            <div onClick={() => setEyeShow(!eyeShow)}>
                                                {eyeShow ? (
                                                    <AppButton
                                                        style={{
                                                            display: 'flex',
                                                            justifyContent: 'space-evenly',
                                                            alignItems: 'center',
                                                            backgroundColor: '#F0F2FA',
                                                            color: '#FF4D4F',
                                                            borderRadius: '4px',
                                                            padding: '5px 2px',
                                                        }}
                                                        onClick={() => (currentDeleteTitleId.current = record?._id)}
                                                    >
                                                        <LockOutlined />
                                                        <div>Khóa</div>
                                                    </AppButton>
                                                ) : (
                                                    <AppButton
                                                        style={{
                                                            display: 'flex',
                                                            justifyContent: 'space-evenly',
                                                            alignItems: 'center',
                                                            backgroundColor: '#F0F2FA',
                                                            color: '#FF4D4F',
                                                            borderRadius: '4px',
                                                            padding: '5px 2px',
                                                        }}
                                                        onClick={() => (currentDeleteTitleId.current = record?._id)}
                                                    >
                                                        <UnlockOutlined />
                                                        <div>Mở Khóa</div>
                                                    </AppButton>
                                                )}
                                            </div>
                                        }
                                    ></ModalConfirm>
                                    <AppModal
                                        width={702}
                                        close={<CloseX />}
                                        closeRef={EditAccountPersonal}
                                        triggerBtn={
                                            <AppButton
                                                style={{
                                                    display: 'flex',
                                                    justifyContent: 'space-evenly',
                                                    alignItems: 'center',
                                                    borderRadius: '4px',
                                                    padding: '5px 2px',
                                                }}
                                            >
                                                <img src={iconEdit}></img>
                                                <div>Sửa</div>
                                            </AppButton>
                                        }
                                        contentStyle={{
                                            paddingBottom: '10px',
                                        }}
                                        hasCloseAfterConfirm={false}
                                    >
                                        <EditAccount
                                            title={record}
                                            onClose={() =>
                                                setTimeout(() => {
                                                    EditAccountPersonal.current.click();
                                                }, 100)
                                            }
                                        />
                                    </AppModal>
                                </Space>
                            ),
                        },
                    ]}
                    dataSource={[
                        {
                            key: '1',
                            name: 'Trần Quang Đạo',
                            cccd: '123456789',
                            email: 'tranquangdao16092002@gmail.com',
                            birthday: '16/09/2002',
                            gender: 'Nam',
                            phone: '0824216169',
                            id: '20200128',
                        },
                        {
                            key: '2',
                            name: 'Bùi Xuân Hải',
                            cccd: '123456789',
                            email: 'haibuixuan@gmail.com',
                            birthday: '1/10/2002',
                            gender: 'Nam',
                            phone: '0824216169',
                            id: '20194268',
                        },
                        {
                            key: '3',
                            name: 'Nguyễn Ngọc Quỳnh Anh',
                            cccd: '123456789',
                            email: 'nguyenngocquynhanh@gmail.com',
                            birthday: '16/09/2002',
                            gender: 'Nữ',
                            phone: '0824216169',
                            id: '20204613',
                        },
                        {
                            key: '4',
                            name: 'Trần Quang Đạo',
                            cccd: '123456789',
                            email: 'tranquangdao16092002@gmail.com',
                            birthday: '16/09/2002',
                            gender: 'Nam',
                            phone: '0824216169',
                            id: '20200128',
                        },
                        {
                            key: '5',
                            name: 'Bùi Xuân Hải',
                            cccd: '123456789',
                            email: 'haibuixuan@gmail.com',
                            birthday: '16/09/2002',
                            gender: 'Nam',
                            phone: '0824216169',
                            id: '20194268',
                        },
                        {
                            key: '6',
                            name: 'Nguyễn Ngọc Quỳnh Anh',
                            cccd: '123456789',
                            email: 'nguyenngocquynhanh@gmail.com',
                            birthday: '16/09/2002',
                            gender: 'Nữ',
                            phone: '0824216169',
                            id: '20204613',
                        },
                        {
                            key: '7',
                            name: 'Trần Quang Đạo',
                            cccd: '123456789',
                            email: 'tranquangdao16092002@gmail.com',
                            birthday: '16/09/2002',
                            gender: 'Nam',
                            phone: '0824216169',
                            id: '20200128',
                        },
                        {
                            key: '8',
                            name: 'Bùi Xuân Hải',
                            cccd: '123456789',
                            email: 'haibuixuan@gmail.com',
                            birthday: '16/09/2002',
                            gender: 'Nam',
                            phone: '0824216169',
                            id: '20194268',
                        },
                        {
                            key: '9',
                            name: 'Nguyễn Ngọc Quỳnh Anh',
                            cccd: '123456789',
                            email: 'nguyenngocquynhanh@gmail.com',
                            birthday: '16/09/2002',
                            gender: 'Nữ',
                            phone: '0824216169',
                            id: '20204613',
                        },
                        {
                            key: '10',
                            name: 'Trần Quang Đạo',
                            cccd: '123456789',
                            email: 'tranquangdao16092002@gmail.com',
                            birthday: '16/09/2002',
                            gender: 'Nam',
                            phone: '0824216169',
                            id: '20200128',
                        },
                        {
                            key: '11',
                            name: 'Bùi Xuân Hải',
                            cccd: '123456789',
                            email: 'haibuixuan@gmail.com',
                            birthday: '16/09/2002',
                            gender: 'Nam',
                            phone: '0824216169',
                            id: '20194268',
                        },
                        {
                            key: '12',
                            name: 'Nguyễn Ngọc Quỳnh Anh',
                            cccd: '123456789',
                            email: 'nguyenngocquynhanh@gmail.com',
                            birthday: '16/09/2002',
                            gender: 'Nữ',
                            phone: '0824216169',
                            id: '20204613',
                        },
                    ]}
                ></Table>
            </div>
        </div>
    );
}

export default PersonalImformation;
