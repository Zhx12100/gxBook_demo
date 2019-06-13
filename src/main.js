import Vue from 'vue'
import App from './App'
// import addBtn from './components/addBtn'
// import headTop from './components/headTop'
Vue.config.productionTip = false
App.mpType = 'app'
// Vue.use('addBtn',addBtn)
// Vue.component('headTop':headTop,)
const app = new Vue(App)
app.$mount()
