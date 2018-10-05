import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import fastclick from 'fastclick'
import 'element-ui/lib/theme-chalk/index.css'
import 'common/scss/base.scss'
import draggable from 'vuedraggable'
import ElementUI from 'element-ui'
// import sortable from 'sortable'

Vue.config.productionTip = false
Vue.use(draggable)
Vue.use(ElementUI)
// Vue.use(sortable)
fastclick.attach(document.body)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})