<template>
  <transition
    appear
    enter-active-class="animated zoomIn"
    leave-active-class="animated zoomOut"
  >
    <q-layout>
      <q-page-container>
        <q-page padding style="width: 700px; max-width: 90vw;">
          <q-tabs color="secondary" glossy align="justify">
            <q-tab default name="Belépés" slot="title" icon="fa-user" label="Belépés" />
            <q-tab name="Regisztráció" slot="title" icon="fa-lock-open" label="Regisztriáció" />

            <q-tab-pane name="Belépés">
              <q-item>
                <q-item-side icon="fa-info" inverted color="green" />
                <q-item-main>
                  <q-item-tile label>Üdvözöllek újra köztünk, itt tudsz belépni.</q-item-tile>
                </q-item-main>
              </q-item>
              <br>
              <q-input float-label="Felhasználónév" v-model="login.userName" inverted color="primary" type="text" :before="[{icon: 'fa-address-card', handler () {}}]"/>
              <br>
              <q-input float-label="Jelszó" v-model="login.password" inverted color="primary" type="password" :before="[{icon: 'fa-key', handler () {}}]" />
              <br>
              <q-btn color="primary" icon-right="fa-sign-in-alt" @click="performLogin()" label="Bejelentkezés" />
            </q-tab-pane>

            <q-tab-pane name="Regisztráció">
              <q-item>
                <q-item-side icon="fa-info" inverted color="green" />
                <q-item-main>
                  <q-item-tile label>Kérlek valós adatokat adj meg a regisztráció során</q-item-tile>
                </q-item-main>
              </q-item>
              <br>
              <q-input float-label="Felhasználónév" v-model="registration.userName" inverted color="primary" type="text" :before="[{icon: 'fa-address-card', handler () {}}]"/>
              <br>
              <q-input float-label="Email cím" v-model="registration.userEmail" inverted color="primary" type="email" :before="[{icon: 'fa-envelope', handler () {}}]" />
              <br>
              <q-input float-label="Jelszó" v-model="registration.password" inverted color="primary" type="password" :before="[{icon: 'fa-key', handler () {}}]" />
              <br>
              <q-btn color="primary" icon-right="fa-sign-in-alt" @click="performRegistration()" label="Regisztráció" />
            </q-tab-pane>
          </q-tabs>
        </q-page>
      </q-page-container>
    </q-layout>
  </transition>
</template>

<script>
export default {
  name: 'authentication',
  data: function () {
    return {
      login: {
        userName: '',
        password: ''
      },
      registration: {
        userName: '',
        userEmail: '',
        password: ''
      }
    }
  },
  methods: {
    performLogin () {
      let self = this
      this.$store.dispatch('login', {'userName': this.$data.login.userName, 'password': this.$data.login.password})
        .then(() => {
          self.$router.push('/')
        })
        .catch(() => {
          self.$router.push('/bejelentkezes')
        })
    },
    performRegistration () {
      let self = this
      this.$store.dispatch('registration', {'userName': this.$data.registration.userName, 'userEmail': this.$data.registration.userEmail, 'password': this.$data.registration.password})
        .then(() => {
          self.$router.push('/')
        })
        .catch(() => {
          self.$router.push('/bejelentkezes')
        })
    }
  }
}
</script>

<style scoped>

</style>
