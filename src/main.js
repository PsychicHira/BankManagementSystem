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

//配置全局url
// Vue.prototype.$baseUrl = function(){
//   return 'http://localhost:3000/'
// }

Vue.config.productionTip = false

Vue.use(ElementUI);
// Vue.use(axios);
//挂载到全局变量
Vue.prototype.$axios = axios
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.baseURL = process.env.API_HOST;


let baseDownloadUrl='http://localhost:3000/'
Vue.directive('down', {
  inserted: (el, binding) => {
    el.style.cssText = 'cursor: pointer;color:write;'
    el.addEventListener('click', () => {
      console.log(binding.value)
      let link = document.createElement('a')
      let url = baseDownloadUrl + binding.value
      // 这里是将url转成blob地址，
      fetch(url).then(res => res.blob()).then(blob => { // 将链接地址字符内容转变成blob地址
        link.href = URL.createObjectURL(blob)
        console.log(link.href)
        link.download = ''
        document.body.appendChild(link)
        link.click()
      })
    })
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
