import { FormOutlined, LockOutlined, SearchOutlined, SettingOutlined, UnlockOutlined } from '@ant-design/icons';
import { Button, Col, Input, Row, Select, DatePicker, Space, Table } from 'antd';
import classNames from 'classnames/bind';
import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { CloseX } from '~/assets/svgs';
import AppButton from '~/components/AppButton';
import AppDateInput from '~/components/AppDateInput';
import AppForm from '~/components/AppForm';
import AppInput from '~/components/AppInput';
import AppSelectInput from '~/components/AppSelectInput';
import ModalConfirm from '~/components/Modal/ModalConfirm';
import styles from './Search.module.sass';
import iconEdit from '~/assets/svgs/iconEdit.svg';
import iconLock from '~/assets/svgs/iconLock.svg';
import AppModal from '~/components/Modal/AppModal';

const cx = classNames.bind(styles);
function Search(props) {
    const EditAccountBook = useRef(null);
    const [searchedText, setSearchedText] = useState('');

    return (
        <div>
            <div className={cx('header')}>Tìm kiếm độc giả</div>

            <div className={cx('imformation')}>
                <Input.Search
                    placeholder="Tìm kiếm độc giả "
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

export default Search;
