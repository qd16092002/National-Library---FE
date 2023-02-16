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
import styles from './BookImformation.module.sass';
import iconEdit from '~/assets/svgs/iconEdit.svg';
import iconLock from '~/assets/svgs/iconLock.svg';
import AppModal from '~/components/Modal/AppModal';
import EditBook from '~/components/EditBook';
import EditAccount from '~/components/EditAccount';

const cx = classNames.bind(styles);
function BookImformation(props) {
    const editBook = useRef(null);
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
            <div className={cx('header')}>Danh sách sách của bạn</div>

            <div className={cx('information')}>
                <Input.Search
                    placeholder="Nhập thông tin sách cần tìm"
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
                    className={cx('table')}
                    columns={[
                        {
                            title: 'Tên sách',
                            dataIndex: 'nameBook',
                            key: 'nameBook',
                            filteredValue: [searchedText],
                            onFilter: (value, record) => {
                                return (
                                    String(record.nameBook).toLowerCase().includes(value.toLowerCase()) ||
                                    String(record.nameAuthor).toLowerCase().includes(value.toLowerCase()) ||
                                    String(record.publish).toLowerCase().includes(value.toLowerCase()) ||
                                    String(record.year).toLowerCase().includes(value.toLowerCase()) ||
                                    String(record.category).toLowerCase().includes(value.toLowerCase()) ||
                                    String(record.type).toLowerCase().includes(value.toLowerCase()) ||
                                    String(record.number).toLowerCase().includes(value.toLowerCase())
                                );
                            },
                        },
                        {
                            title: 'Tên tác giả',
                            dataIndex: 'nameAuthor',
                            key: 'nameAuthor',
                        },
                        {
                            title: 'Nhà xuất bản',
                            dataIndex: 'publish',
                            key: 'publish',
                        },
                        {
                            title: 'Năm xuất bản',
                            dataIndex: 'year',
                            key: 'year',
                        },
                        {
                            title: 'Thể loại',
                            dataIndex: 'category',
                            key: 'category',
                        },
                        {
                            title: 'Loại sách',
                            dataIndex: 'type',
                            key: 'type',
                        },
                        {
                            title: 'Ngày mượn',
                            dataIndex: 'dateBorrow',
                            key: 'dateBorrow',
                        },
                        {
                            title: 'Ngày trả',
                            dataIndex: 'dateReturn',
                            key: 'dateReturn',
                        },
                        {
                            title: 'Tình trạng',
                            dataIndex: 'status',
                            key: 'status',
                        },
                    ]}
                    dataSource={[
                        {
                            key: '1',
                            nameBook: 'Mắt biếc',
                            nameAuthor: 'Nguyễn Nhật Ánh',
                            publish: 'Nhà xuất bản Trẻ',
                            year: '2000',
                            category: 'Truyện ngắn',
                            type: 'Sách thường',
                            dateBorrow: '01/01/2023',
                            dateReturn: '01/03/2023',
                            status: 'Chưa trả',
                        },
                        {
                            key: '2',
                            nameBook: 'Bí mật của may mắn',
                            nameAuthor: 'Rhonda Byrne',
                            publish: 'Nhà xuất bản Kim Đồng',
                            year: '2012',
                            category: 'Đời sống',
                            type: 'Sách thường',
                            dateBorrow: '09/08/2022',
                            dateReturn: '08/03/2023',
                            status: 'Chưa trả',
                        },
                        {
                            key: '3',
                            nameBook: 'Đắc nhân tâm',
                            nameAuthor: 'Dale Carnegie',
                            publish: 'Nhà xuất bản Thế giới',
                            year: '1936',
                            category: 'Đời sống',
                            type: 'Sách thường',
                            dateBorrow: '22/01/2023',
                            dateReturn: '22/04/2023',
                            status: 'Chưa trả',
                        },
                        {
                            key: '4',
                            nameBook: 'Hai số phận',
                            nameAuthor: 'Charles Dickens',
                            publish: 'Nhà xuất bản Hội Nhà văn',
                            year: '1861',
                            category: 'Tiểu thuyết',
                            type: 'Sách quý giá',
                            dateBorrow: '01/01/2023',
                            dateReturn: '01/03/2023',
                            status: 'Đã trả',
                        },
                        {
                            key: '5',
                            nameBook: 'Tôi đã mất gì và tôi đã tìm thấy gì',
                            nameAuthor: 'Elsa Triolet',
                            publish: 'Nhà xuất bản Hội Nhà văn',
                            year: '1979',
                            category: 'Tự truyện',
                            type: 'Sách thường',
                            dateBorrow: '10/10/2022',
                            dateReturn: '01/02/2023',
                            status: 'Quá hạn',
                        },
                        {
                            key: '6',
                            nameBook: 'Phật giáo đời sống',
                            nameAuthor: 'Thích Nhất Hạnh',
                            publish: 'Nhà xuất bản Phật Học',
                            year: '1995',
                            category: 'Đời sống',
                            type: 'Sách quý giá',
                            dateBorrow: '08/09/2022',
                            dateReturn: '01/03/2023',
                            status: 'Chưa trả',
                        },
                        {
                            key: '7',
                            nameBook: 'Sự im lặng của bầy cừu',
                            nameAuthor: 'Thomas Harris',
                            publish: 'Nhà xuất bản Văn Học',
                            year: '1988',
                            category: 'Tiểu thuyết',
                            type: 'Sách thường',
                            dateBorrow: '10/02/2023',
                            dateReturn: '09/03/2023',
                            status: 'Đã trả',
                        },
                        {
                            key: '8',
                            nameBook: 'Deep Learning',
                            nameAuthor: 'Ian Goodfellow, Yoshua Bengio và Aaron Courville',
                            publish: 'Nhà xuất bản MIT Press',
                            year: '2016',
                            category: 'Khoa học',
                            type: 'Sách thường',
                            dateBorrow: '13/12/2023',
                            dateReturn: '13/01/2023',
                            status: 'Quá hạn',
                        },
                    ]}
                ></Table>
            </div>
        </div>
    );
}

export default BookImformation;
