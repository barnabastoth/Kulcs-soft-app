<template>
  <q-layout>
    <q-page-container>
      <q-page>
        <div style="width: 700px; max-width: 90vw;" class="absolute-center">
          <div
            class="main-color shadow-1 row inline flex-center text-white"
            :class="`bg-black`"
          >
          </div>
          <q-input float-label="Felhasználónév" v-model="login.userName" inverted color="primary" type="text" :before="[{icon: 'fa-address-card', handler () {}}]"/>
          <br>
          <q-input float-label="Email cím" v-model="login.userEmail" inverted color="primary" type="email" :before="[{icon: 'fa-envelope', handler () {}}]" />
          <br>
          <q-btn color="primary" icon-right="fa-sign-in-alt" label="Bejelentkezés" />
        </div>
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
      }
    }
  }
}
</script>

<style scoped>

</style>
