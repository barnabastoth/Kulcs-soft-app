<template>
  <q-layout view="lHh Lpr lFf">
    <topBar></topBar>
    <leftBar></leftBar>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import leftBar from './leftBar'
import topBar from './topBar'

export default {
  name: 'LayoutDefault',
  data () {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop
    }
  },
  components: {
    leftBar,
    topBar
  }
}
</script>

<style>
</style>
