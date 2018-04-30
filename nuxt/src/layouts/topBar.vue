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
