import { createRouter, createWebHashHistory } from 'vue-router';

import LoginPage from '@/pages/LoginPage';
import SignUpPage from '@/pages/SignUpPage';
import HomePage from '@/pages/Home';

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
    }
];

const router = createRouter({
    routes,
    history: createWebHashHistory(),
})

export default router;