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
          <div>
            <q-list>
              <q-list-header inset>Frontend</q-list-header>
              <q-item>
                <q-item-side avatar="statics/vue.png" />
                <q-item-main label="Vue JS" />
              </q-item>
              <q-item>
                <q-item-side avatar="statics/nuxt.png" />
                <q-item-main label="Nuxt" />
              </q-item>
              <q-item>
                <q-item-side avatar="statics/quasar.jpg" />
                <q-item-main label="Quasar Framework" />
              </q-item>
              <q-item-separator inset />
              <q-list-header inset>Backend</q-list-header>
              <q-item>
                <q-item-side avatar="statics/spring-boot.png" />
                <q-item-main label="Spring Boot" />
              </q-item>
              <q-item>
                <q-item-side avatar="statics/spring-security.png" />
                <q-item-main label="Spring Security" />
              </q-item>
              <q-item>
                <q-item-side avatar="statics/postgresql.png" />
                <q-item-main label="PostgreSQL" />
              </q-item>
              <q-item>
                <q-item-side avatar="statics/hibernate.jpg" />
                <q-item-main label="Hibernate" />
              </q-item>
            </q-list>
          </div>
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
