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
    isPrivate: true,
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
        isPrivate: true,
        layout: AppLayout,
        component: lazy(async () => {
            await initModules([featureModule], 'app');
            return import('./pages/Demo/Admin/ManageReaders/PersonalImformation');
        }),
    },
    {
        path: '/manage_readers/search_personal',
        exact: true,
        isPrivate: true,
        layout: AppLayout,
        component: lazy(async () => {
            await initModules([featureModule], 'app');
            return import('./pages/Demo/Admin/ManageReaders/Search');
        }),
    },
    {
        path: '/manage_books/update_book',
        exact: true,
        isPrivate: true,
        layout: AppLayout,
        component: lazy(async () => {
            await initModules([featureModule], 'app');
            return import('./pages/Demo/Admin/ManageBooks/Book/SettingBook');
        }),
    },
    {
        path: '/manage_books/modify_book',
        exact: true,
        isPrivate: true,
        layout: AppLayout,
        component: lazy(async () => {
            await initModules([featureModule], 'app');
            return import('./pages/Demo/Admin/ManageBooks/Modify_Book/BookImformation');
        }),
    },
    {
        path: '/setting',
        exact: true,
        isPrivate: true,
        layout: AppLayout,
        component: lazy(async () => {
            await initModules([featureModule], 'app');
            return import('./pages/Demo/User/UserReaders/SettingAccount');
        }),
    },
    {
        path: '/user_readers/concerns',
        exact: true,
        isPrivate: true,
        layout: AppLayout,
        component: lazy(async () => {
            await initModules([featureModule], 'app');
            return import('./pages/Demo/User/UserReaders/Concerns');
        }),
    },
    {
        path: '/user_card/review_card',
        exact: true,
        isPrivate: true,
        layout: AppLayout,
        component: lazy(async () => {
            await initModules([featureModule], 'app');
            return import('./pages/Demo/User/UserCard/ShowCardInfor');
        }),
    },
    {
        path: '/manage_card/show_card_list',
        exact: true,
        isPrivate: true,
        layout: AppLayout,
        component: lazy(async () => {
            await initModules([featureModule], 'app');
            return import('./pages/Demo/Admin/ManageCard/ShowCardList');
        }),
    },
    {
        path: '/user_card/regist_card',
        exact: true,
        isPrivate: true,
        layout: AppLayout,
        component: lazy(async () => {
            await initModules([featureModule], 'app');
            return import('./pages/Demo/User/UserCard/RegistCard');
        }),
    },
];
