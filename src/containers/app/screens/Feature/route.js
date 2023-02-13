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
];
