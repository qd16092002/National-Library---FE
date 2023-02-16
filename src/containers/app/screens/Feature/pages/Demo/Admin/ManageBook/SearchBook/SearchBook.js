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
import styles from './SearchBook.module.sass';
import iconEdit from '~/assets/svgs/iconEdit.svg';
import iconLock from '~/assets/svgs/iconLock.svg';
import AppModal from '~/components/Modal/AppModal';

const cx = classNames.bind(styles);
function SearchBook(props) {
    const EditAccountBook = useRef(null);
    const [searchedText, setSearchedText] = useState('');

    return (
        <div>
            <div className={cx('header')}>Tìm kiếm sách</div>

            <div className={cx('imformation')}>
                <Input.Search
                    placeholder="Tìm kiếm sách "
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
                            title: 'Tên sách',
                            dataIndex: 'namebook',
                            key: 'namebook',
                            filteredValue: [searchedText],
                            onFilter: (value, record) => {
                                return (
                                    String(record.namebook).toLowerCase().includes(value.toLowerCase()) ||
                                    String(record.publisher).toLowerCase().includes(value.toLowerCase()) ||
                                    String(record.author).toLowerCase().includes(value.toLowerCase()) ||
                                    String(record.publishing_year).toLowerCase().includes(value.toLowerCase()) ||
                                    String(record.category).toLowerCase().includes(value.toLowerCase()) ||
                                    String(record.book_id).toLowerCase().includes(value.toLowerCase()) ||
                                    String(record.date_added).toLowerCase().includes(value.toLowerCase())
                                );
                            },
                        },
                        {
                            title: 'Nhà xuất bản',
                            dataIndex: 'publisher',
                            key: 'publisher',
                        },
                        {
                            title: 'Tác giả',
                            dataIndex: 'author',
                            key: 'author',
                        },
                        {
                            title: 'Năm xuất bản',
                            dataIndex: 'publishing_year',
                            key: 'publishing_year',
                        },
                        {
                            title: 'Thể loại',
                            dataIndex: 'category',
                            key: 'category',
                        },
                        {
                            title: 'Mã sách',
                            dataIndex: 'book_id',
                            key: 'book_id',
                        },
                        {
                            title: 'Ngày nhập',
                            dataIndex: 'date_added',
                            key: 'date_added',
                        },
                    ]}
                    dataSource={[
                        {
                            key: '1',
                            namebook: 'Nhập môn công nghệ phần mềm',
                            publisher: 'HUST',
                            author: 'Bùi Thị Mai Anh	',
                            publishing_year: '2000',
                            category: 'Sách Lập trình',
                            book_id: 'IT3180',
                            date_added: '1/1/2020',
                        },
                        {
                            key: '2',
                            namebook: 'Cơ sở dữ liệu	',
                            publisher: 'HUST',
                            author: 'Nguyễn Thị Kim Anh	',
                            publishing_year: '2000',
                            category: 'Sách Lập trình',
                            book_id: 'IT3090',
                            date_added: '1/1/2020',
                        },
                        {
                            key: '3',
                            namebook: 'Mạng máy tính	',
                            publisher: 'HUST',
                            author: 'Trương Thị Diệu Linh	',
                            publishing_year: '2000',
                            category: 'Sách Lập trình',
                            book_id: 'IT3080',
                            date_added: '1/1/2020',
                        },
                        {
                            key: '4',
                            namebook: 'Thuật toán ứng dụng	',
                            publisher: 'HUST',
                            author: 'Bùi Quốc Trung	',
                            publishing_year: '2000',
                            category: 'Sách Lập trình',
                            book_id: 'IT3170',
                            date_added: '1/1/2020',
                        },
                        {
                            key: '5',
                            namebook: 'Nhập môn Trí tuệ nhân tạo	',
                            publisher: 'HUST',
                            author: 'Lê Thanh Hương	',
                            publishing_year: '2000',
                            category: 'Sách Lập trình',
                            book_id: 'IT3160',
                            date_added: '1/1/2020',
                        },
                        {
                            key: '6',
                            namebook: 'Quản trị học đại cương	',
                            publisher: 'HUST',
                            author: 'Nguyễn Thanh Hương	',
                            publishing_year: '2000',
                            category: 'Sách đời sống',
                            book_id: 'EM1010',
                            date_added: '1/1/2020',
                        },
                    ]}
                ></Table>
            </div>
        </div>
    );
}

export default SearchBook;
