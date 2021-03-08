import Vue from 'vue'
import App from './App.vue'
import router from '../router'
import store from '../store'
import ViewUI from 'view-design'
import 'view-design/dist/styles/iview.css'

Vue.config.productionTip = false
Vue.use(ViewUI)

router.beforeEach((to, from, next) => {
  //  重定向至首页
  if (to.redirectedFrom === '/admin.html') {
    next('/login')
    return
  }
  //  权限判断
  if (to.meta.auth && !store.getters.user.name) {
    next('/login')
    return
  }
  // 如果未匹配到路由
  if (to.matched.length === 0) {
    // 如果上级也未匹配到路由则跳转登录页面，如果上级能匹配到则转上级路由
    from.name ? next({ name: from.name }) : next('/login')
  } else {
    // 如果匹配到正确跳转
    next()
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
