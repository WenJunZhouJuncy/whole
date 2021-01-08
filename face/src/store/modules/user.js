export default {
  namespaced: true,
  state: {
    token: localStorage.getItem('token') || '',
    user: {
      username: '',
    }
  },
  mutations: {
    setToken(state, user) {
      localStorage.setItem('token', user.token)
      state.token = user.token
      state.user.username = user.username
    }
  }
}