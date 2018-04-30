<template>
  <q-layout-header>
    <q-toolbar
      color="dark"
      :glossy="$q.theme === 'mat'"
      :inverted="$q.theme === 'ios'"
    >
      <q-btn
        flat
        dense
        round
        @click="$store.dispatch('toggleLeftDrawer')"
        aria-label="Menu"
      >
        <q-icon name="menu" />
      </q-btn>

      <q-toolbar-title>
        Kulcs-soft demo application
        <div slot="subtitle">Running on Quasar v{{ $q.version }}</div>
      </q-toolbar-title>
      <div class="cursor-pointer" @click="$router.push('/bejelentkezés')" v-if="$store.state.isLoggedIn === false">
        <q-item>
          <q-item-side icon="lock open" inverted color="green" />
          <q-item-main>
            <q-item-tile label>Belépés</q-item-tile>
            <q-item-tile sublabel>Regisztráció</q-item-tile>
          </q-item-main>
        </q-item>
      </div>
      <div v-if="$store.state.isLoggedIn === true">
        <q-item class="main-color cursor-pointer">
          <q-item-side avatar="statics/guy-avatar.png" />
          <q-item-main>{{$store.state.loggedInUser.username}}</q-item-main>
          <q-item-side right>
            <q-btn
              aria-label="Kijelentkezés"
              @click='performLogOut()'
            >
              <q-icon title="Kijelentkezés" name="fa-sign-out-alt" inverted color="white">
                <q-tooltip>Kijelentkezés</q-tooltip>
              </q-icon>
            </q-btn>
          </q-item-side>
        </q-item>
      </div>
    </q-toolbar>
  </q-layout-header>
</template>

<script>
export default {
  name: 'topBar',
  methods: {
    performLogOut () {
      this.$store.dispatch('logout')
    }
  }
}
</script>

<style scoped>

</style>
