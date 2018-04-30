import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
const LOGOUT = 'LOGOUT'

const store = new Vuex.Store({
  state: {
    isLoggedIn: !!localStorage.getItem('token'),
    loggedInUser: []
  },
  mutations: {
    [LOGIN_SUCCESS] (state, user) {
      state.isLoggedIn = true
      state.loggedInUser = user
    }
  }
})

export default store
