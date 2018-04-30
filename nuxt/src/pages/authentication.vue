<template>
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
            <q-input float-label="Email cím" v-model="login.userEmail" inverted color="primary" type="email" :before="[{icon: 'fa-envelope', handler () {}}]" />
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
            <q-btn color="primary" icon-right="fa-sign-in-alt" @click="performRegistration()" label="Regisztráció" />
          </q-tab-pane>
        </q-tabs>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'authentication',
  data: function () {
    return {
      login: {
        userName: '',
        userEmail: ''
      },
      registration: {
        userName: '',
        userEmail: ''
      }
    }
  },
  methods: {
    performLogin () {
      let self = this
      this.$store.dispatch('login', {'userName': this.$data.login.userName, 'userEmail': this.$data.login.userEmail})
        .then(() => {
          self.$router.push('/')
        })
        .catch(() => {
          self.$router.push('/bejelentkezés')
        })
    }
  }
}
</script>

<style scoped>

</style>
