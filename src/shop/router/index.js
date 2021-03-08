import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  }, {
    path: '/index',
    name: 'Home',
    component: () => import('../views/Home.vue')
  }, {
    path: '/search',
    name: 'Search',
    component: () => import('../views/Search.vue')
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
    path: '/brandDetails',
    name: 'BrandDetails',
    component: () => import('../views/BrandDetails.vue')
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
