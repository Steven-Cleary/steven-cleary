<template>
  <v-app class="sc">
    <nuxt />
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
