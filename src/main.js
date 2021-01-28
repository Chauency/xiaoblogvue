import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import 'font-awesome/scss/font-awesome.scss' //引入第三方图标库(npm install first)
import './utils/filter_utils' //引入全局过滤器


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
