import Axios from 'axios';
import Store from '@/store';
import router from '@/router';

Axios.defaults.baseURL = `/api`;

Axios.interceptors.request.use(config => {

    const token = Store.getters['auth/token'];
    config.headers.Authorization = token ? `Bearer ${token}` : '';
    config.headers.Accept = 'application/json';

    return config;
});

Axios.interceptors.response.use(response => {

    const ttl = Store.getters['auth/ttl'];
    const isRefreshing = Store.getters['auth/isRefreshing'];

    if (!isRefreshing && (!router.app || !router.app.$route.meta.for_guest) &&
        (response.config.url !== '/auth/login'
            && response.config.url !== '/auth/reset') && ttl < Date.now()) {
        Store.dispatch('auth/refresh');
    }
    if (router.app && response.config.method !== 'get' && response.data.message) {
        router.app.$root.$children[0].snackbarText = response.data.message;
        router.app.$root.$children[0].snackbar = true;
    }
    return response;
}, error => {
    if (error.response.status === 401 || error.response.status === 403) {
        if (error.response.config.url === '/auth/logout') {
            Store.dispatch('auth/logout');
            return Promise.reject(error);
        }
        if ('/403' !== router.currentRoute.path) router.push('/403');
    } else if (error.response.status === 404) {
        if (error.response.data.data !== null)
            if ('/404' !== router.currentRoute.path) router.push('/404');
    } else if (router.app
        && error.response.status >= 400
        && (error.response.status !== 422 || !error.response.data.errors)
    ) {
        router.app.$root.$children[0].snackbarText = error.response.data.message
            ? error.response.data.message
            : 'При запросе к серверу произошла ошибка.';
        router.app.$root.$children[0].snackbar = true;
    }

    return Promise.reject(error);
});

export default Axios;








