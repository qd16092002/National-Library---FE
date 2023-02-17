import { Avatar, Dropdown, Menu } from 'antd';
import { Header } from 'antd/lib/layout/layout';
import React from 'react';
import { getNavItem } from '~/components/Layout/AppLayout/AppLayout';
import { LogoutOutlined } from '@ant-design/icons';
import hustLogo from '~/assets/images/header/hust-logo.jpeg';
import { TOKEN_KEY } from '~/app-configs';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

const userDropdownItems = [getNavItem('Đăng xuất', '/auth/logout', <LogoutOutlined />, null)];

const onClickUserAvatar = (item) => {
    if (item?.key == '/auth/logout') {
        handleLogout();
    }
};

function handleLogout() {
    localStorage.removeItem(TOKEN_KEY);
}

export default function (props) {
    const userDetail = useSelector((state) => state?.user?.profile);
    const history = useHistory();
    return (
        <Header
            style={{
                padding: '0px 20px',
                backgroundColor: 'white',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
            }}
        >
            <div className="flex-center">
                <div
                    style={{
                        position: 'relative',
                        width: '48px',
                        height: '64px',
                    }}
                >
                    <span className="NaL__text">
                        <div>NaL</div>
                        <div>NaL</div>
                    </span>
                </div>
                <span
                    style={{
                        fontWeight: 'bold',
                        fontSize: '22px',
                        marginLeft: '4px',
                        marginTop: '4px',
                        userSelect: 'none',
                    }}
                >
                    {/* {user === 'user' ? 'usser' : 'manager'} */}
                    Manager
                </span>
            </div>

            <div
                style={{
                    marginRight: '20px',
                    display: 'flex',
                    alignItems: 'center',
                }}
            >
                <div
                    style={{
                        marginRight: '10px',
                        fontWeight: '550',
                        userSelect: 'none',
                    }}
                >
                    {userDetail?.name}
                </div>
                <Dropdown
                    overlay={
                        <Menu
                            items={userDropdownItems}
                            onClick={(e) => {
                                onClickUserAvatar(e);
                                history.push('/auth/login');
                            }}
                        />
                    }
                    placement="bottomRight"
                    trigger={['click']}
                    arrow={{ pointAtCenter: true }}
                >
                    <Avatar size={42} src={hustLogo} className="hover-pointer" />
                </Dropdown>
            </div>
        </Header>
    );
}
