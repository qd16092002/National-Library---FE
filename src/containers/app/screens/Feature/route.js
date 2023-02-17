import { lazy } from 'react';
import AppLayout from '~/components/Layout/AppLayout';
import { initModules } from '~/router/index';
import SettingBook from '~/containers/app/screens/Feature/pages/Demo/Admin/ManageBooks/Book';

export const featureModule = {
    key: 'feature',
    path: 'Feature',
};

export default {
    path: '/',
    exact: true,
    isPrivate: false,
    layout: AppLayout,
    component: lazy(async () => {
        await initModules([featureModule], 'app');
        return import('./pages/Demo');
    }),
};

export const childRoutes = [
    {
        path: '/manage_readers/view_personal',
        exact: true,
        isPrivate: false,
        layout: AppLayout,
        component: lazy(async () => {
            await initModules([featureModule], 'app');
            return import('./pages/Demo/Admin/ManageReaders/PersonalImformation');
        }),
    },
    {
        path: '/manage_readers/search_personal',
        exact: true,
        isPrivate: false,
        layout: AppLayout,
        component: lazy(async () => {
            await initModules([featureModule], 'app');
            return import('./pages/Demo/Admin/ManageReaders/Search');
        }),
    },
    {
        path: '/manage_books/update_book',
        exact: true,
        isPrivate: false,
        layout: AppLayout,
        component: lazy(async () => {
            await initModules([featureModule], 'app');
            return import('./pages/Demo/Admin/ManageBooks/Book/SettingBook');
        }),
    },
    {
        path: '/user_books/search_book',
        exact: true,
        isPrivate: false,
        layout: AppLayout,
        component: lazy(async () => {
            await initModules([featureModule], 'app');
            return import('./pages/Demo/User/UserBook/SearchBook');
        }),
    },
    {
        path: '/manage_books/modify_book',
        exact: true,
        isPrivate: false,
        layout: AppLayout,
        component: lazy(async () => {
            await initModules([featureModule], 'app');
            return import('./pages/Demo/Admin/ManageBooks/Modify_Book/BookImformation');
        }),
    },
    {
        path: '/user_books/borrowing_book',
        exact: true,
        isPrivate: false,
        layout: AppLayout,
        component: lazy(async () => {
            await initModules([featureModule], 'app');
            return import('./pages/Demo/User/UserBook/CheckBook');
        }),
    },
    {
        path: '/setting',
        exact: true,
        isPrivate: false,
        layout: AppLayout,
        component: lazy(async () => {
            await initModules([featureModule], 'app');
            return import('./pages/Demo/User/UserReaders/SettingAccount');
        }),
    },
    {
        path: '/user_readers/concerns',
        exact: true,
        isPrivate: false,
        layout: AppLayout,
        component: lazy(async () => {
            await initModules([featureModule], 'app');
            return import('./pages/Demo/User/UserReaders/Concerns');
        }),
    },
    {
        path: '/user_card/review_card',
        exact: true,
        isPrivate: false,
        layout: AppLayout,
        component: lazy(async () => {
            await initModules([featureModule], 'app');
            return import('./pages/Demo/User/UserCard/ShowCardInfor');
        }),
    },
    {
        path: '/manage_card/show_card_list',
        exact: true,
        isPrivate: false,
        layout: AppLayout,
        component: lazy(async () => {
            await initModules([featureModule], 'app');
            return import('./pages/Demo/Admin/ManageCard/ShowCardList');
        }),
    },
    {
        path: '/user_card/regist_card',
        exact: true,
        isPrivate: false,
        layout: AppLayout,
        component: lazy(async () => {
            await initModules([featureModule], 'app');
            return import('./pages/Demo/User/UserCard/RegistCard');
        }),
    },
];
