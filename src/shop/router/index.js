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
    path: '/couponDetails',
    name: 'CouponDetails',
    component: () => import('../views/CouponDetails.vue')
  }, {
    path: '/brandList',
    name: 'BrandList',
    component: () => import('../views/BrandList.vue')
  }, {
    path: '/brandDetails',
    name: 'BrandDetails',
    component: () => import('../views/BrandDetails.vue')
  }, {
    path: '/order',
    name: 'Order',
    component: () => import('../views/Order.vue')
  }, {
    path: '/orderConfirm',
    name: 'OrderConfirm',
    component: () => import('../views/OrderConfirm.vue')
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
