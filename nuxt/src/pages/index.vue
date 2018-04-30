<template>
  <q-page class="flex flex-center">
    <q-card inline class="q-ma-sm">
      <q-card-title class="text-center">
        Kulcs-soft demo application
      </q-card-title>
      <q-card-media>
        <img src="../statics/programming.png" class="responsive">
      </q-card-media>
      <q-card-title>
        Pár szó a projektről
      </q-card-title>
      <q-list separator>
        <q-collapsible icon="explore" label="Az applikáció során felhasznált főbb technológiák">
          Lorem ipsum dolor sit amet...
        </q-collapsible>

        <q-collapsible icon="perm_identity" label="Second">
          <div>
            Lorem ipsum dolor sit amet...
          </div>
        </q-collapsible>

        <q-collapsible icon="shopping_cart" label="Third">
          <div>
            Lorem ipsum dolor sit amet...
          </div>
        </q-collapsible>
      </q-list>
    </q-card>
  </q-page>
</template>

<style>
</style>

<script>
export default {
  name: 'PageIndex'
}
</script>
