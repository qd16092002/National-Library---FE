import { lazy } from 'react';
import AppLayout from '~/components/Layout/AppLayout';
import { initModules } from '~/router/index';

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
    // {
    //     path: '/manage_book/add_book',
    //     exact: true,
    //     isPrivate: true,
    //     layout: AppLayout,
    //     component: lazy(async () => {
    //         await initModules([featureModule], 'app');
    //         return import('./pages/Demo/Admin/ManageBook/AddBook');
    //     }),
    // },
    // {
    //     path: '/manage_book/search_book',
    //     exact: true,
    //     isPrivate: true,
    //     layout: AppLayout,
    //     component: lazy(async () => {
    //         await initModules([featureModule], 'app');
    //         return import('./pages/Demo/Admin/ManageBook/SearchBook');
    //     }),
    // },
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
