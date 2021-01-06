import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    meta: {
      title: '首页'
    },
    component: () => import(/* webpackChunkName: "about" */ '@/views/home/index')
  },
  {
    path: '/signIn',
    name: '登录',
    meta: {
      title: '登录'
    },
    component: () => import(/* webpackChunkName: "about" */ '@/views/signInAsignUp/signIn')
  },
  {
    path: '/signUp',
    name: '注册',
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

export default router
