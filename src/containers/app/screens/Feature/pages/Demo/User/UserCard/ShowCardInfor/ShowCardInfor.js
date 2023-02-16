import { Table, Dropdown, Menu, Button, DatePicker } from 'antd';

const data = [
    {
        key: '1',
        cardId: '123',
        registrationTime: '2022-02-14',
        expiryTime: '2023-02-14',
        numWarnings: 2,
    },
    {
        key: '2',
        cardId: '456',
        registrationTime: '2022-02-15',
        expiryTime: '2023-02-15',
        numWarnings: 0,
    },
];

const columns = [
    {
        title: 'ID Thẻ',
        dataIndex: 'cardId',
        key: 'cardId',
    },
    {
        title: 'Thời gian đăng ký',
        dataIndex: 'registrationTime',
        key: 'registrationTime',
    },
    {
        title: 'Thời hạn',
        dataIndex: 'expiryTime',
        key: 'expiryTime',
    },
    {
        title: 'Số lần bị cảnh cáo',
        dataIndex: 'numWarnings',
        key: 'numWarnings',
    },
    {
        title: 'Hành động',
        key: 'action',
        render: (text, record) => (
            <Dropdown overlay={menu(record)} trigger={['click']}>
                <Button>Gia hạn</Button>
            </Dropdown>
        ),
    },
];

const menu = (record) => {
    return (
        <Menu
            onClick={() => {
                handleMenuClick(record);
            }}
        >
            <Menu.Item key="1">1 Tháng</Menu.Item>
            <Menu.Item key="2">6 Tháng</Menu.Item>
            <Menu.Item key="3">1 Năm</Menu.Item>
        </Menu>
    );
};

const MyTable = () => {
    return <Table dataSource={data} columns={columns} />;
};

export default MyTable;
