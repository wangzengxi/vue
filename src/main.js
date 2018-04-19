// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import axios from 'axios'
import '../static/js/rem.js'
import '../static/js/base.js'
import '../static/css/base.css'
import store from './store/index.js'

Vue.prototype.$http = axios
// Vue.use(Vuex)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  Vuex,
  components: { App },
  template: '<App/>'
})
