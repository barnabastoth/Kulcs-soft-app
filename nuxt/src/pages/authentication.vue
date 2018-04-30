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
          <q-input float-label="Felhasználónév" inverted color="primary" type="email" :before="[{icon: 'fa-address-card', handler () {}}]"/>
          <br>
          <q-input float-label="Jelszó" inverted color="primary" type="password" :before="[{icon: 'fa-key'}]" :after="[{icon: 'done', condition: login.password.length >= 5, handler () {}}]" />
          <br>
          <q-btn color="primary" icon-right="fa-sign-in-alt" label="Bejelentkezés" />
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'authentication'
}
</script>

<style scoped>

</style>
