import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'

import Cookies from 'js-cookie';

import Layout from '@/layout/index.vue'
import Home from '@/views/Home/index.vue'
import Goods from '@/views/Goods/index.vue'
import Order from '@/views/Order/index.vue'


const routerMode = {
  hash: () => createWebHashHistory(),
  history: () => createWebHistory()
};

const routes = [
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    children: [
      {
        path: '/home',
        name: 'home',
        component: Home
      },
      {
        path: '/goods',
        name: 'goods',
        component: Goods
      },
      {
        path: '/order',
        name: 'order',
        component: Order
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login/index.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    component: () => import('@/views/Error/404.vue')
  }
]

const router = createRouter({
  history: routerMode.hash(),
  routes
})
// router.beforeEach(async (to, from, next) => {
//   const isToken = Cookies.get('v3-admin-token') ? true : false;
//   console.log(to, 'to', from,isToken);

//   if (isToken) {
//     return to.name === 'login' ? next('/') : next()
//   } else {
//     // return next()
//     return to.name === 'login' ? next() : next('/login')
//   }
// })

const whiteList = ['/login'] // 添加白名单

router.beforeEach((to, from, next) => {
  const isToken = Cookies.get('v3-admin-token')
  console.log(isToken, 'isToken', from, to);
  if (isToken) {
    // 已登录时访问登录页，重定向到首页
    to.name === 'login' ? next('/') : next()
  } else {
    // 未登录时允许访问白名单中的路由
    whiteList.includes(to.path) ? next() : next(`/login?redirect=${to.path}`)
    // next(`/login?redirect=${to.path}`)
  }
})

export default router
