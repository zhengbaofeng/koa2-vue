import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/admin',
    name: 'Admin',
    component: () => import('../views/main/Index.vue'),
    redirect: 'admin/home',
    children: [
      {
        path: 'home',
        name: 'Home',
        meta: {
          auth: true
        },
        component: () => import('../views/main/Home.vue')
      }
    ]
  }, {
    path: '/login',
    name: 'Login',
    component: Login
  }, {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  }, {
    path: '/goodsDetails',
    name: 'GoodsDetails',
    component: () => import('../views/GoodsDetails.vue')
  }, {
    path: '/404',
    name: '404',
    component: () => import('../views/404.vue')
  }, {
    path: '*',
    redirect: '/404'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
