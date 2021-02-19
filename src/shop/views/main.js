import Vue from 'vue'
import App from './App.vue'
import router from '../router'
import store from '../store'
import './rem'
import Vant from 'vant'
import 'vant/lib/index.css'

Vue.config.productionTip = false

Vue.use(Vant)

console.log('进入商城')

router.beforeEach((to, from, next) => {
  console.log(to, from)
  //  重定向至首页
  if (to.redirectedFrom) {
    next('/')
    return
  }
  // 如果未匹配到路由
  if (to.matched.length === 0) {
    // 如果上级也未匹配到路由则跳转登录页面，如果上级能匹配到则转上级路由
    from.name ? next({ name: from.name }) : next('/')
  } else {
    next() // 如果匹配到正确跳转
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')