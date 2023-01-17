import { createRouter, createWebHashHistory } from 'vue-router';

import LoginPage from '@/pages/LoginPage';
import SignUpPage from '@/pages/SignUpPage';
import HomePage from '@/pages/HomePage';
import ProfilePage from '@/pages/ProfilePage';
import OddCreatePage from '@/pages/OddCreatePage';
import BetHistoryPage from '@/pages/BetHistoryPage';
import TransactionsPage from '@/pages/TransactionsPage';
import DepositPage from '@/pages/DepositPage';
import WithdrawalPage from '@/pages/WithdrawalPage';
import AdminHomePage from '@/pages/AdminHomePage';
import SpeHomePage from '@/pages/SpeHomePage';
import FollowEventsPage from '@/pages/FollowEventsPage';

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
    {
        path: '/deposit',
        component: DepositPage,
        name: 'deposit',
        meta: {auth:true}
    },
    {
        path: '/withdraw',
        component: WithdrawalPage,
        name: 'withdraw',
        meta: {auth:true}
    },
    {
        path: '/admin-home',
        component: AdminHomePage,
        name: 'adminHomePage',
        meta: {auth:true}
    },
    {
        path: '/spe-home',
        component: SpeHomePage,
        name: 'speHomePage',
        meta: {auth:true}
    },
    {
        path: '/follow-events',
        component: FollowEventsPage,
        name: 'followEventsPage',
        meta: {auth:true}
    },
];

const router = createRouter({
    routes,
    history: createWebHashHistory(),
})

export default router;