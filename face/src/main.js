import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import VueWechatTitle from 'vue-wechat-title'
Vue.use(VueWechatTitle)

import '@/assets/css/common.css'
import '@/assets/css/common-element-ui.less'

import * as api from '@/api/api'
Vue.prototype.$api = api

import 'element-ui/lib/theme-chalk/index.css';
import { Button, Form, FormItem, Input, Popover, Switch, Message, Loading } from 'element-ui';
Vue.use(Button).use(Form).use(FormItem).use(Popover).use(Switch).use(Input).use(Loading)
Vue.use(Loading.directive);

Vue.prototype.$loading = Loading.service;
Vue.prototype.$message = Message;

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
