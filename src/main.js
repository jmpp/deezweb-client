import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import toMinutes from './filters';

Vue.config.productionTip = false;
Vue.filter('toMinutes', toMinutes);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
