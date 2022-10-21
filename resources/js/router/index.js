import Vue from 'vue';
import VueRouter from 'vue-router';
import Store from '@/store';

Vue.use(VueRouter);

const routes = [
    {
        path: '/login',
        name: 'login-page',
        component:  () => import('@/pages/Login'),
    },
    {
        path: '/profile',
        name: 'profile-page',
        component:  () => import('@/pages/Profile'),
    },
    {
        path: '/map',
        name: 'map-page',
        component:  () => import('@/pages/Map'),
        meta: {
            for_guest: true,
        }
    },
    {
        path: '/registration',
        name : 'sign-up',
        component: () => import('@/pages/Registration'),
        meta: {
            for_guest: true,
        }
    },
    {
        path: '/posts',
        name : 'posts',
        component: () => import('@/pages/Posts'),
        meta: {
            for_guest: true,
        }
    },
    {
        path: '/post/:id',
        name : 'post',
        component: () => import('@/pages/PostEdit')
    },
    {
        path: '/user/posts',
        name : 'uposts',
        component: () => import('@/pages/UserPosts'),
        meta: {
            for_guest: true,
        }
    },
    {
        path: '/user/post/:id',
        name : 'upost',
        component: () => import('@/pages/UserPostEdit')
    },
    {
        path: '/points-history',
        name : 'upost',
        component: () => import('@/pages/UserPointsHistory')
    },
    {
        path: '/events',
        name : 'events',
        component: () => import('@/pages/Events'),
        meta: {
            for_guest: true,
        }
    },
    {
        path: '/event/:id',
        name : 'event',
        component: () => import('@/pages/EventEdit')
    },
    {
        path: '/schedule',
        name : 'bus-events',
        component: () => import('@/pages/BusEvents'),
        meta: {
            for_guest: true,
        }
    },
    {
        path: '/bus/event/:id',
        name : 'bus-event',
        component: () => import('@/pages/BusEventEdit')
    },
    {
        path: '/types',
        name : 'types',
        component: () => import('@/pages/Types'),
    },
    {
        path: '/type/:id',
        name : 'type',
        component: () => import('@/pages/TypeEdit')
    },
    {
        path: '/requests',
        name : 'requests',
        component: () => import('@/pages/Requests'),
    },
    {
        path: '/users',
        name : 'users',
        component: () => import('@/pages/Users'),
    },
    {
        path: '/user/:id',
        name : 'user',
        component: () => import('@/pages/UserEdit'),
    },
    {
        path: '/requests-lib',
        name : 'requests-lib',
        component: () => import('@/pages/Requests'),
    },
    {
        path: '/request/:id',
        name : 'request',
        component: () => import('@/pages/RequestEdit')
    },
    {
        path: '/files',
        name : 'files',
        component: () => import('@/pages/Files'),
    },
    {
        path: '/files/:user_id',
        name : 'file',
        component: () => import('@/pages/Files'),
    },
    {
        path: '/regions',
        name : 'regions',
        component: () => import('@/pages/Regions'),
    },
    {
        path: '/regions/:region/show/:id',
        name : 'districts',
        component: () => import('@/pages/Districts'),
    },
    {
        path: '/regions/:region/edit',
        name : 'districts-edit',
        component: () => import('@/pages/DistrictEdit'),
    },
    // {
    //     path: '/file/:id',
    //     name : 'requests',
    //     component: () => import('@/pages/RequestEdit')
    // },
    // {
    //     path: '/reset-password',
    //     name: 'reset-password-page',
    //     component:  () => import('@/views/auth/reset'),
    // },
    {
        path: '/',
        name: 'site-dashboard',
        redirect:'/map'
    },

    {
        path: '/403',
        name: 'no-permission',
        component: () => import('@/pages/403'),
    },
    {
        path: '*',
        name: 'not-found',
        component: () => import('@/pages/404'),
    },

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
                next({name: 'profile-page'});
                break;
            } else {
                next();
                break;
            }
        default:
            if (!Store.getters['auth/authenticated'] && !to.meta.for_guest) {
                next({name: 'login-page'});
                break;
            }
            next();
    }

});

export default router;
