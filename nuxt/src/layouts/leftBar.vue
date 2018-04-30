<template>
  <q-layout-drawer
    v-model="$store.state.leftDrawerOpen"
    :content-class="$q.theme === 'mat' ? 'bg-grey-2' : null"
  >
    <q-list
      no-border
      link
      inset-delimiter
    >
      <q-list-header class="text-center">Menü</q-list-header>
      <q-item @click.native="$router.push('/')">
        <q-item-side icon="fa-home" />
        <q-item-main label="Főoldal" sublabel="/" />
      </q-item>
      <q-item @click.native="$router.push('/user-list')">
        <q-item-side icon="fa-user" />
        <q-item-main label="Felhasználók" sublabel="/user-list" />
      </q-item>
    </q-list>
  </q-layout-drawer>
</template>

<script>
export default {
  name: 'leftBar'
}
</script>

<style scoped>

</style>
