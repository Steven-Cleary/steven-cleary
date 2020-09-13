<template>
  <v-chip-group column>
    <v-chip
      v-if="technologies.includes('js')"
      color="yellow darken-2"
      outlined
      small
    >
      <v-icon small left>mdi-language-javascript</v-icon>
      JS
    </v-chip>
    <v-chip v-if="technologies.includes('nuxt')" color="nuxt" outlined small>
      <v-icon small left>mdi-nuxt</v-icon>
      Nuxt
    </v-chip>
    <v-chip v-if="technologies.includes('vue')" color="vue" outlined small>
      <v-icon small left>mdi-vuejs</v-icon>
      Vue
    </v-chip>
    <v-chip
      v-if="technologies.includes('vuetify')"
      color="vuetify"
      outlined
      small
    >
      <v-icon small left>mdi-vuetify</v-icon>
      Vuetify
    </v-chip>
    <v-chip
      v-if="technologies.includes('docker')"
      color="docker"
      outlined
      small
    >
      <v-icon small left>mdi-docker</v-icon>
      Docker
    </v-chip>
    <v-chip v-if="technologies.includes('sass')" color="sass" outlined small>
      <v-icon small left>mdi-sass</v-icon>
      Sass
    </v-chip>
    <v-chip v-if="technologies.includes('node')" color="node" outlined small>
      <v-icon small left>mdi-nodejs</v-icon>
      Node
    </v-chip>
  </v-chip-group>
</template>

<script>
export default {
  props: {
    technologies: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style lang="scss"></style>
