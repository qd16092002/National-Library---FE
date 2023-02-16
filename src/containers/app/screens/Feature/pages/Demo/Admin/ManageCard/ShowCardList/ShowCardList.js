import React, { useState } from 'react';
import { Table, Popconfirm } from 'antd';

const initialData = [
    {
        key: '1',
        cardId: '123',
        registrationTime: '2022-02-14',
        expiryTime: '2023-02-14',
        warnings: 0,
    },
    {
        key: '2',
        cardId: '456',
        registrationTime: '2022-02-15',
        expiryTime: '2023-02-15',
        warnings: 2,
    },
];

const MyTable = () => {
    const [data, setData] = useState(initialData);

    const handleWarning = (key) => {
        const newData = data.map((item) => (item.key === key ? { ...item, warnings: item.warnings + 1 } : item));
        setData(newData);
    };

    const handleLock = (key) => {
        const newData = data.filter((item) => item.key !== key);
        setData(newData);
    };

    const columns = [
        {
            title: 'ID Thẻ',
            dataIndex: 'cardId',
            key: 'cardId',
        },
        {
            title: 'Ngày đăng ký',
            dataIndex: 'registrationTime',
            key: 'registrationTime',
        },
        {
            title: 'Ngày hết hạn',
            dataIndex: 'expiryTime',
            key: 'expiryTime',
        },
        {
            title: 'Số lần cảnh cáo',
            dataIndex: 'warnings',
            key: 'warnings',
        },
        {
            title: 'Hành động',
            key: 'action',
            render: (text, record) => (
                <span>
                    <Popconfirm title="Xác nhận cảnh cáo?" onConfirm={() => handleWarning(record)}>
                        <a href="#">Cảnh cáo</a>
                    </Popconfirm>
                    <span> | </span>
                    <Popconfirm title="Xác nhận khoá thẻ?" onConfirm={() => handleLock(record)}>
                        <a href="#">Khoá thẻ</a>
                    </Popconfirm>
                </span>
            ),
        },
    ];

    return <Table dataSource={data} columns={columns} />;
};

export default MyTable;
