import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App.vue'
import './registerServiceWorker'
import store from './store'

import List from './components/ClientList.vue';
import Filter from './components/FilterContracts.vue';
//C:\minicore-DianaCuenca\project\frontend\src\components

Vue.use(VueRouter);

Vue.config.productionTip = false;

const routes = [
  {
    name: 'List',
    path: '/list',
    component: List
  },
  {
    name: 'Filter',
    path: '/filter',
    component: Filter
  }
];
  
const router = new VueRouter({ mode: 'history', routes: routes })

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
