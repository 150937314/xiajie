import Vue from 'vue'
import './cube-ui'
import './cube-ui'
import App from './App.vue'
import router from './router'
import store from './store'
import 'amfe-flexible'
import setaxios from "./setaxios"
setaxios()

import axios from 'axios'
Vue.prototype.$axios = axios
axios.defaults.baseURL = '/api'  //关键代码
Vue.config.productionTip = false
axios.defaults.headers.post['Content-Type'] = 'application/json';

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
