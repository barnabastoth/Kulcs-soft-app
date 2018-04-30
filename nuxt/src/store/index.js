import Vue from 'vue'
import Vuex from 'vuex'
import { Notify } from 'quasar'
import AXIOS from 'axios'

Vue.use(Vuex)

const LOGIN_SUCCESS = 'LOGIN_SUCCESS'

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
  },
  actions: {
    login ({ commit }, credentials) {
      return new Promise((resolve, reject) => {
        AXIOS.post('/api/login', credentials)
          .then(response => {
            localStorage.setItem('Bearer ', response.data[0].token)
            commit(LOGIN_SUCCESS, response.data[1])
            Notify.create({
              type: 'positive',
              color: 'positive',
              position: 'bottom',
              timeout: 3000,
              message: 'Sikeresen bejelentkeztél, üdv újra köztünk!'
            })
            resolve()
          })
          .catch(error => {
            console.log(error)
            Notify.create({
              type: 'info',
              color: 'info',
              position: 'bottom',
              timeout: 3000,
              message: 'Sajnos a bejelentkezés sikertelen volt, kérlek ellenőrizd le újra az adataidat.'
            })
            reject(error)
          })
      })
    }
  }
})

export default store
