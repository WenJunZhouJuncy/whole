export default {
  namespaced: true,
  state: {
    test: '您好',
    token: localStorage.getItem('token') || '',
    user: JSON.parse(localStorage.getItem('user')) || {},
  },
  mutations: {
    setToken(state, user) {
      localStorage.setItem('token', user.token)
      localStorage.setItem('user', JSON.stringify(user))
      state.token = user.token
      state.user = user
    }
  }
}