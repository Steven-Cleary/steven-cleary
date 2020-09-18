<template>
  <v-app class="sc">
    <v-app-bar
      class="d-md-none"
      color="blue-grey darken-4"
      dark
      app
      collapse
      fixed
      hide-on-scroll
    >
      <v-btn class="mx-auto" large text @click="$router.back()">
        <v-icon dark>mdi-arrow-left</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-btn
        color="blue-grey darken-4"
        class="ma-4 sc-back d-none d-md-inline-flex"
        fab
        text
        @click="$router.back()"
      >
        <v-icon dark large>mdi-arrow-left</v-icon>
      </v-btn>
      <nuxt class="sc-container mx-auto px-4" />
      <sc-footer class="mt-12" />
    </v-main>
  </v-app>
</template>

<script>
import scFooter from '~/components/sc-footer/sc-footer.vue'
export default {
  components: {
    scFooter,
  },
}
</script>
