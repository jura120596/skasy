require('./bootstrap');

import Vue from 'vue';
import App from '@/App.vue';
import router from '@/router';
import store from '@/store';
import vuetify from '@/plugins/vuetify';
import './registerServiceWorker'

Vue.config.productionTip = false;

// On refresh lets check on the state of auth, instead of sending it every route load.
store.dispatch('auth/attempt', {
    token: localStorage.getItem('token'),
    ttl: localStorage.getItem('ttl')
}).then(() => {

    new Vue({
        router,
        store,
        vuetify,
        render: h => h(App)
    }).$mount('#app');
});


// Vue.component('app-data-table', require('@/components/app-data-table.vue').default);

(function() {
    var days = ['Воскресенье','Понедельник','Вторник','Среда','Четверг','Пятница','Суббота'];
    Date.prototype.getDayName = function() {
        return days[ this.getDay() ];
    };
    var months = ['Января','Февраля','Марта','Апреля','Мая','Июня','Июля','Августа','Сентября','Октября','Ноября','Декабря'];

    Date.prototype.getMonthName = function() {
        return months[ this.getMonth() ];
    };
})();