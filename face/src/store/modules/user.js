import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: localStorage.getItem('token') || '',
    user: {
      username: '',
    }
  },
  mutations: {
    SETTOKEN(state,a,b,c) {
      console.log(state,a,b,c);
      state.token = a
    }
  }
})