<template>
  <transition
    appear
    enter-active-class="animated zoomIn"
    leave-active-class="animated zoomOut"
  >
    <q-page class="flex flex-center">
      <q-card inline class="q-ma-sm shadow-24" color="blue-grey-4">
        <q-card-title class="text-center">
          <h7>Kulcs-Soft Demo App</h7>
        </q-card-title>
        <q-card-media>
          <img src="../statics/programming.png" class="responsive">
        </q-card-media>
        <q-list separator>
          <q-collapsible icon="fa-code" label="Az applikáció során felhasznált főbb technológiák">
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

          <q-collapsible icon="fa-copyright" label="A Projekt">
            <div>
              Az alkalmazás célja:
              <br>
              egy demo applikáció a Kulcs-soft-hoz való jelentkezéshez.
              <br>
              <br>
              Értelme:
              <br>
              Általam legutóbb használt technológiák bemutatása, kódolási stílusom megismertetése.
            </div>
          </q-collapsible>

          <q-collapsible icon="fa-user-secret" label="Rólam">
            <div>
              <img src="../statics/barnabas-toth.png" alt="Barnabás Tóth" class="responsive">
            </div>
          </q-collapsible>
        </q-list>
      </q-card>
    </q-page>
  </transition>
</template>

<style>
</style>

<script>
export default {
  name: 'PageIndex'
}
</script>
