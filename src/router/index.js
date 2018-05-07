import Vue from 'vue'
import store from '@/store'
import Router from 'vue-router'
import Home from '@/page/home'
import Login from '@/page/login'
import Register from '@/page/register'
import Sort from '@/page/sort'
import Cart from '@/page/cart'
import Order from '@/page/order'
import Address from '@/page/address'
import Favorite from '@/page/favorite'
import Message from '@/page/message'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      meta: {
        index: 0
      },
      component: Home
    },{
      path: '/login',
      name: 'Login',
      meta: {
        index: 1
      },
      component: Login
    },{
      path: '/register',
      name: 'Register',
      meta: {
        index: 1
      },
      component: Register
    },{
      path: '/sort',
      name: 'Sort',
      meta: {
        index: 1
      },
      component: Sort
    },{
      path: '/cart',
      name: 'Cart',
      meta: {
        index: 1
      },
      component: Cart
    },{
      path: '/order',
      name: 'Order',
      meta: {
        requireAuth: true,
        index: 1
      },
      component: Order,
    },{
      path: '/address',
      name: 'Address',
      meta: {
        requireAuth: true,
        index: 1
      },
      component: Address
    },{
      path: '/favorite',
      name: 'Favorite',
      meta: {
        requireAuth: true,
        index: 1
      },
      component: Favorite
    },{
      path: '/message',
      name: 'Message',
      meta: {
        requireAuth: true,
        index: 1
      },
      component: Message
    }
  ]
})


router.beforeEach((to, from, next) => {
  if (to.matched.some(res => res.meta.requireAuth)) {
    if (store.state.token) { //判断是否已登录
      next()
    }else{
      next({
        path: '/login',
        query: {
          redirect: to.fullPath
        }
      })
    }
  }else{
    next()
  }
})

export default router;