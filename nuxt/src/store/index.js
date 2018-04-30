import Vue from 'vue'
import Vuex from 'vuex'
import { Notify } from 'quasar'
import AXIOS from 'axios'

Vue.use(Vuex)

const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
const LOGOUT = 'LOGOUT'
const TOGGLE_LEFT_DRAWER = 'TOGGLE_LEFT_DRAWER'

const store = new Vuex.Store({
  state: {
    isLoggedIn: !!localStorage.getItem('Bearer '),
    loggedInUser: [],
    leftDrawerOpen: true
  },
  mutations: {
    [LOGIN_SUCCESS] (state, user) {
      state.isLoggedIn = true
      state.loggedInUser = user
    },
    [LOGOUT] (state) {
      state.isLoggedIn = false
      state.loggedInUser = []
    },
    [TOGGLE_LEFT_DRAWER] (state) {
      state.leftDrawerOpen = !state.leftDrawerOpen
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
    },
    logout ({ commit }) {
      localStorage.removeItem('Bearer ')
      commit(LOGOUT)
      Notify.create({
        type: 'info',
        color: 'info',
        position: 'bottom',
        timeout: 3000,
        message: 'Sikeresen kijelentkeztél. Remélem azért még látjuk egymást!'
      })
      this.$router.push('/bejelentkezés')
    },
    registration ({ dispatch }, credentials) {
      return new Promise((resolve, reject) => {
        AXIOS.post('/api/registration', credentials)
          .then(response => {
            dispatch('login', credentials)
            resolve()
          })
          .catch(error => {
            reject(error)
            Notify.create({
              type: 'info',
              color: 'info',
              position: 'bottom',
              timeout: 3000,
              message: 'A regisztriáció nem sikerült, kérlek ellenőrizd le újra az adataidat.'
            })
          })
      })
    }
  }
})

export default store
