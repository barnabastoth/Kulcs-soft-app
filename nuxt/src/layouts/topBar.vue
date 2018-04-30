<template>
  <q-layout-header>
    <q-toolbar
      color="primary"
      :glossy="$q.theme === 'mat'"
      :inverted="$q.theme === 'ios'"
    >
      <q-btn
        flat
        dense
        round
        @click="leftDrawerOpen = !leftDrawerOpen"
        aria-label="Menu"
      >
        <q-icon name="menu" />
      </q-btn>

      <q-toolbar-title>
        Quasar App
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
    </q-toolbar>
  </q-layout-header>
</template>

<script>
export default {
  name: 'topBar'
}
</script>

<style scoped>

</style>
