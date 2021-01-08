import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    // name: 'home',
    // meta: {
    //   title: '首页',
    //   auth: true
    // },
    redirect: '/home',
    // childrens: [
    //   {
    //     path: '/home',
    //     name: 'home',
    //     meta: {
    //       title: '首页',
    //       auth: true
    //     },
    //     component: () => import(/* webpackChunkName: "about" */ '@/views/index')
    //   },
    // ],
    // component: () => import(/* webpackChunkName: "about" */ '@/views/home/index')
  },
  {
    path: '/home',
    name: 'home',
    meta: {
      title: '首页',
      auth: true
    },
    component: () => import(/* webpackChunkName: "about" */ '@/views/index')
  },
  {
    path: '/signIn',
    name: 'signIn',
    meta: {
      title: '登录'
    },
    component: () => import(/* webpackChunkName: "about" */ '@/views/signInAsignUp/signIn')
  },
  {
    path: '/signUp',
    name: 'signUp',
    meta: {
      title: '注册'
    },
    component: () => import(/* webpackChunkName: "about" */ '@/views/signInAsignUp/signUp')
  },
  {
    path: '*',
    name: 'Not Found',
    meta: {
      title: 'Not Found'
    },
    component: () => import(/* webpackChunkName: "about" */ '@/views/notFound/index')
  }
  // {
    // path: '/about',
    // name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  routes
})

import Store from '../store/index'

router.beforeEach((to, from, next) => {
  if (to.meta.auth) {
    if (Store.state.user.token) {
      next()
    } else {
      next('/signIn')
    }
  } else {
    next()
  }
})

export default router
