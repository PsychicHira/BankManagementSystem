import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import { Message } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios'
import Vuex from 'vuex'
import store from './store'
import fileDownload from 'js-file-download';

Vue.prototype.$message = Message

Vue.use(Vuex)

//挂载到全局变量
Vue.prototype.$fileDownload = fileDownload

Vue.config.productionTip = false

Vue.use(ElementUI);
// Vue.use(axios);
//挂载到全局变量
Vue.prototype.$axios = axios
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.baseURL = process.env.API_HOST;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
