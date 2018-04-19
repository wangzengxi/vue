import Vue from 'vue'
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

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },{
      path: '/login',
      name: 'Login',
      component: Login
    },{
      path: '/register',
      name: 'Register',
      component: Register
    },{
      path: '/sort',
      name: 'Sort',
      component: Sort
    },{
      path: '/cart',
      name: 'Cart',
      component: Cart
    },{
      path: '/order',
      name: 'Order',
      component: Order,
    },{
      path: '/address',
      name: 'Address',
      component: Address
    },{
      path: '/favorite',
      name: 'Favorite',
      component: Favorite
    },{
      path: '/message',
      name: 'Message',
      component: Message
    }
  ]
})
