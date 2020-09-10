<template>
  <div>
    <div class="overline">This Website</div>
    <div class="text-h3 mb-4">Portfolio Site</div>
    <div class="subtitle-1 text--secondary my-4 mb-2">
      Aug 2019 - Present
    </div>
    <div class="body-1 mb-4">
      This site is a place for you to see my personal projects. If you would
      like to see the code for this website click the button below.
    </div>

    <div class="d-flex mt-12">
      <v-tooltip bottom>
        <template v-slot:activator="{ on }">
          <div v-on="on">
            <v-btn outlined color="primary" disabled>
              <v-icon left>mdi-launch</v-icon>View
            </v-btn>
          </div>
        </template>
        <span>Already on the site</span>
      </v-tooltip>

      <v-tooltip bottom>
        <template v-slot:activator="{ on }">
          <div class="ml-4" v-on="on">
            <v-btn
              outlined
              color="primary"
              @click="
                () => redirect('https://github.com/Steven-Cleary/steven-cleary')
              "
            >
              <v-icon left>mdi-github</v-icon>Code
            </v-btn>
          </div>
        </template>
        <span>Source Code</span>
      </v-tooltip>

      <v-tooltip bottom>
        <template v-slot:activator="{ on }">
          <div class="ml-4" v-on="on">
            <v-btn outlined color="primary" to="portfolio-site">
              <v-icon left>mdi-information-outline</v-icon>Learn more
            </v-btn>
          </div>
        </template>
        <span>Images and extra info</span>
      </v-tooltip>
    </div>
    <div class="text-h6 my-4 mb-2 mt-12">Technologies</div>
    <v-chip color="yellow darken-2" outlined small>
      <v-icon small left>mdi-language-javascript</v-icon>
      JS
    </v-chip>
    <v-chip class="ml-2" color="nuxt" outlined small>
      <v-icon small left>mdi-nuxt</v-icon>
      Nuxt
    </v-chip>
    <v-chip class="ml-2" color="vue" outlined small>
      <v-icon small left>mdi-vuejs</v-icon>
      Vue
    </v-chip>
    <v-chip class="ml-2" color="vuetify" outlined small>
      <v-icon small left>mdi-vuetify</v-icon>
      Vuetify
    </v-chip>
    <v-chip class="ml-2" color="docker" outlined small>
      <v-icon small left>mdi-docker</v-icon>
      Docker
    </v-chip>
    <v-chip class="ml-2" color="sass" outlined small>
      <v-icon small left>mdi-sass</v-icon>
      Sass
    </v-chip>
    <v-chip class="ml-2" color="node" outlined small>
      <v-icon small left>mdi-nodejs</v-icon>
      Node
    </v-chip>
  </div>
</template>

<script>
export default {
  methods: {
    redirect(url) {
      window.open(url, '_blank')
    },
  },
}
</script>

<style lang="scss"></style>
