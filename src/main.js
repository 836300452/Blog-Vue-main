import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import axios from 'axios'
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
import dayjs from 'dayjs'

Vue.use(mavonEditor)

Vue.prototype.dayjs = dayjs
Vue.config.productionTip = false

Vue.prototype.$http = axios.create({
  baseURL: 'http://8.138.57.0:3001/api'
  // baseURL: 'http://127.0.0.1:3001/api'
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
