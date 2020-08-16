<template>
  <v-app class="sc">
    <v-btn class="ma-4 sc-back" fab text to="/">
      <v-icon dark large>mdi-arrow-left</v-icon>
    </v-btn>
    <nuxt class="sc-container mx-auto px-4" />
    <sc-footer class="mt-8" />
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
