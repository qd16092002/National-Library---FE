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
            <div className={cx('header')}>Thông tin sách</div>

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
                            title: 'Số lượng',
                            dataIndex: 'number',
                            key: 'number',
                        },
                        {
                            title: 'Hành động',
                            key: 'action',

                            render: (_, record) => (
                                <Space size="middle">
                                    <ModalConfirm
                                        // onConfirm={(e) => handleDeleteTitle(record?._id)}
                                        triggerBtn={
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
                                                // className={cx('delete-btn')}
                                            >
                                                <div>Xóa</div>
                                                <img src={iconLock} alt={'iconLock'}></img>
                                            </AppButton>
                                        }
                                    ></ModalConfirm>

                                    {/*<Link to="/manage_books/update_book">*/}
                                    {/*    <AppModal*/}
                                    {/*        width={702}*/}
                                    {/*        triggerBtn={*/}
                                    {/*            <AppButton*/}
                                    {/*                style={{*/}
                                    {/*                    display: 'flex',*/}
                                    {/*                    justifyContent: 'space-evenly',*/}
                                    {/*                    alignItems: 'center',*/}
                                    {/*                    borderRadius: '4px',*/}
                                    {/*                    padding: '5px 2px',*/}
                                    {/*                }}*/}
                                    {/*                // className={cx('edit-btn')}*/}
                                    {/*            >*/}
                                    {/*                <div>Sửa</div>*/}
                                    {/*                <img src={iconEdit} alt={'iconEdit'}></img>*/}
                                    {/*            </AppButton>*/}
                                    {/*        }*/}
                                    {/*        contentStyle={{*/}
                                    {/*            paddingBottom: '10px',*/}
                                    {/*        }}*/}
                                    {/*        hasCloseAfterConfirm={false}*/}
                                    {/*    ></AppModal>*/}
                                    {/*</Link>*/}
                                    <AppModal
                                        width={702}
                                        close={<CloseX />}
                                        closeRef={editBook}
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
                                        <EditBook
                                            title={record}
                                            onClose={() =>
                                                setTimeout(() => {
                                                    editBook.current.click();
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
                            nameBook: 'Tôi là Malala',
                            nameAuthor: 'Malala Yousafzai',
                            publish: 'Nhà xuất bản Trẻ',
                            year: '2014',
                            category: 'Tự truyện',
                            type: 'Sách thường',
                            number: '2',
                        },
                        {
                            key: '2',
                            nameBook: 'Mắt biếc',
                            nameAuthor: 'Nguyễn Nhật Ánh',
                            publish: 'Nhà xuất bản Trẻ',
                            year: '2000',
                            category: 'Truyện ngắn',
                            type: 'Sách thường',
                            number: '5',
                        },
                        {
                            key: '3',
                            nameBook: 'Bí mật của may mắn',
                            nameAuthor: 'Rhonda Byrne',
                            publish: 'Nhà xuất bản Kim Đồng',
                            year: '2012',
                            category: 'Đời sống',
                            type: 'Sách thường',
                            number: '1',
                        },
                        {
                            key: '4',
                            nameBook: 'Đắc nhân tâm',
                            nameAuthor: 'Dale Carnegie',
                            publish: 'Nhà xuất bản Thế giới',
                            year: '1936',
                            category: 'Đời sống',
                            type: 'Sách thường',
                            number: '8',
                        },
                        {
                            key: '5',
                            nameBook: 'Nhà giả kim',
                            nameAuthor: 'Paulo Coelho',
                            publish: 'Nhà xuất bản Văn Học',
                            year: '1988',
                            category: 'Tiểu thuyết',
                            type: 'Sách thường',
                            number: '3',
                        },
                        {
                            key: '6',
                            nameBook: 'Hai số phận',
                            nameAuthor: 'Charles Dickens',
                            publish: 'Nhà xuất bản Hội Nhà văn',
                            year: '1861',
                            category: 'Tiểu thuyết',
                            type: 'Sách quý giá',
                            number: '1',
                        },
                        {
                            key: '7',
                            nameBook: 'Tôi đã mất gì và tôi đã tìm thấy gì',
                            nameAuthor: 'Elsa Triolet',
                            publish: 'Nhà xuất bản Hội Nhà văn',
                            year: '1979',
                            category: 'Tự truyện',
                            type: 'Sách thường',
                            number: '2',
                        },
                        {
                            key: '8',
                            nameBook: 'Con chim xanh biếc bay về',
                            nameAuthor: 'Nam Cao',
                            publish: 'Nhà xuất bản Kim Đồng',
                            year: '1946',
                            category: 'Truyện ngắn',
                            type: 'Sách quý giá',
                            number: '1',
                        },
                        {
                            key: '9',
                            nameBook: 'Phật giáo đời sống',
                            nameAuthor: 'Thích Nhất Hạnh',
                            publish: 'Nhà xuất bản Phật Học',
                            year: '1995',
                            category: 'Đời sống',
                            type: 'Sách quý giá',
                            number: '0',
                        },
                        {
                            key: '10',
                            nameBook: 'Những kẻ mộng du',
                            nameAuthor: 'Haruki Murakami',
                            publish: 'Nhà xuất bản Văn Học',
                            year: '1994',
                            category: 'Tiểu thuyết',
                            type: 'Sách thường',
                            number: '3',
                        },
                        {
                            key: '11',
                            nameBook: 'Sự im lặng của bầy cừu',
                            nameAuthor: 'Thomas Harris',
                            publish: 'Nhà xuất bản Văn Học',
                            year: '1988',
                            category: 'Tiểu thuyết',
                            type: 'Sách thường',
                            number: '2',
                        },
                        {
                            key: '12',
                            nameBook: 'Superintelligence: Paths, Dangers, Strategies',
                            nameAuthor: 'Nick Bostrom',
                            publish: 'Nhà xuất bản Oxford University Press',
                            year: '2014',
                            category: 'Khoa học',
                            type: 'Sách thường',
                            number: '1',
                        },
                        {
                            key: '13',
                            nameBook: 'Human Compatible: Artificial Intelligence and the Problem of Control',
                            nameAuthor: 'Stuart Russell',
                            publish: 'Nhà xuất bản Viking',
                            year: '2019',
                            category: 'Khoa học',
                            type: 'Sách quý giá',
                            number: '2',
                        },
                        {
                            key: '14',
                            nameBook: 'Deep Learning',
                            nameAuthor: 'Ian Goodfellow, Yoshua Bengio và Aaron Courville',
                            publish: 'Nhà xuất bản MIT Press',
                            year: '2016',
                            category: 'Khoa học',
                            type: 'Sách thường',
                            number: '3',
                        },
                    ]}
                ></Table>
            </div>
        </div>
    );
}

export default BookImformation;
