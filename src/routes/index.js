import { createRouter, createWebHashHistory } from 'vue-router';

import LoginPage from '@/pages/LoginPage';
import SignUpPage from '@/pages/SignUpPage';
import HomePage from '@/pages/HomePage';
import ProfilePage from '@/pages/ProfilePage';
import OddCreatePage from '@/pages/OddCreatePage';
import BetHistoryPage from '@/pages/BetHistoryPage';
import TransactionsPage from '@/pages/TransactionsPage';

const routes = [
    {
        path: '/login',
        component: LoginPage,
        name: 'login',
        meta: {auth:false}
    },
    {
        path: '/signup',
        component: SignUpPage,
        name: 'signup',
        meta: {auth:true}
    },
    {
        path: '/',
        component: HomePage,
        name: 'home',
        meta: {auth:false}
    },
    {
        path: '/profile',
        component: ProfilePage,
        name: 'profile',
        meta: {auth:true}
    },
    {
        path: '/odd-create',
        component: OddCreatePage,
        name: 'oddCreate',
        meta: {auth:true}
    },
    {
        path: '/transactions',
        component: TransactionsPage,
        name: 'transactions',
        meta: {auth:true}
    },
    {
        path: '/bet-history',
        component: BetHistoryPage,
        name: 'betHistory',
        meta: {auth:true}
    },
];

const router = createRouter({
    routes,
    history: createWebHashHistory(),
})

export default router;