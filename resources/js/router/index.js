import Vue from 'vue';
import VueRouter from 'vue-router';
import Store from '@/store';

Vue.use(VueRouter);

const routes = [
    {
        path: '/login',
        name: 'login-page',
        component:  () => import('@/App'),
    },
    // {
    //     path: '/reset-password',
    //     name: 'reset-password-page',
    //     component:  () => import('@/views/auth/reset'),
    // },
    // {
    //     path: '/',
    //     name: 'site-dashboard',
    //     component: () => import('@/views/dashboard'),
    // },

    // {
    //     path: '/403',
    //     name: 'no-permission',
    //     component: () => import('@/views/403'),
    // },
    // {
    //     path: '*',
    //     name: 'not-found',
    //     component: () => import('@/views/404'),
    // },

];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

router.beforeEach( (to, from, next) => {

    // Check Auth before each route
    switch (to.name) {
        case 'login-page':
        case 'reset-password-page':
            if (Store.getters['auth/authenticated']) {
                next({name: 'site-dashboard'});
                break;
            } else {
                next();
                break;
            }
        default:
            if (!Store.getters['auth/authenticated']) {
                next({name: 'login-page'});
                break;
            }
            next();
    }

});

export default router;
