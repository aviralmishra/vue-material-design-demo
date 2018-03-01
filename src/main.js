import Vue from 'vue';

import Vuetify from 'vuetify';
Vue.use(Vuetify);

import VueRouter from 'vue-router';
Vue.use(VueRouter);

import 'babel-polyfill';
import 'vuetify/dist/vuetify.min.css';

import App from './App.vue';
import Home from './components/Home.vue';
import DocumentInfo from './components/documents/DocumentInfo.vue';

const routes = [
  {
    path: '/',
    name: 'root',
    component: Home
  }, {
    path: '/document/:id',
    name: 'document',
    props: true,
    component: DocumentInfo
  }
];

const router = new VueRouter({mode: 'history', base: __dirname, routes});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
