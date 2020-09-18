<template>
  <v-chip-group column>
    <v-chip v-if="technologies.includes('ts')" color="ts" outlined small>
      <v-icon small left>mdi-language-typescript</v-icon>
      TS
    </v-chip>
    <v-chip
      v-if="technologies.includes('js')"
      color="yellow darken-2"
      outlined
      small
    >
      <v-icon small left>mdi-language-javascript</v-icon>
      JS
    </v-chip>
    <v-chip
      v-if="technologies.includes('python')"
      color="python"
      outlined
      small
    >
      <v-icon small left>mdi-language-python</v-icon>
      Python
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
      v-if="technologies.includes('angular')"
      color="angular"
      outlined
      small
    >
      <v-icon small left>mdi-angularjs</v-icon>
      Angular
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
    <v-chip
      v-if="technologies.includes('kubernetes')"
      color="kubernetes"
      outlined
      small
    >
      <v-icon small left>mdi-kubernetes</v-icon>
      Kubernetes
    </v-chip>
    <v-chip v-if="technologies.includes('sass')" color="sass" outlined small>
      <v-icon small left>mdi-sass</v-icon>
      Sass
    </v-chip>
    <v-chip v-if="technologies.includes('node')" color="node" outlined small>
      <v-icon small left>mdi-nodejs</v-icon>
      Node
    </v-chip>
    <v-chip v-if="technologies.includes('ionic')" color="ionic" outlined small>
      <v-icon small left>mdi-atom-variant</v-icon>
      Ionic
    </v-chip>
    <v-chip
      v-if="technologies.includes('django')"
      color="django"
      outlined
      small
    >
      <v-icon small left>mdi-alpha-d-box</v-icon>
      Django
    </v-chip>
    <v-chip
      v-if="technologies.includes('scikit')"
      color="scikit"
      outlined
      small
    >
      <v-icon small left>mdi-chart-bell-curve-cumulative</v-icon>
      Scikit Learn
    </v-chip>
    <v-chip
      v-if="technologies.includes('nltk')"
      color="blue-grey darken-4"
      outlined
      small
    >
      <v-icon small left>mdi-graph</v-icon>
      NLTK
    </v-chip>
    <v-chip v-if="technologies.includes('chart')" color="chart" outlined small>
      <v-icon small left>mdi-poll</v-icon>
      Chart JS
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
