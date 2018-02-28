import Vue from 'vue';

import Vuetify from 'vuetify';
Vue.use(Vuetify);

import VueRouter from 'vue-router';
Vue.use(VueRouter);

import 'babel-polyfill';
import App from './App.vue';
import 'vuetify/dist/vuetify.min.css';

new Vue({
  el: '#app',
  render: h => h(App)
});
