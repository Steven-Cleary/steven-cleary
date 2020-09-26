<template>
  <div>
    <div class="overline">This Website</div>
    <div class="text-h3 mb-4">Portfolio Site</div>
    <div class="subtitle-1 text--secondary my-4 mb-2">
      Aug 2019 - Present
    </div>
    <div class="body-1 mb-4">
      This is the site you are currently on. The source code for my main
      project, Financially Financed, is not open source. So I included this
      website so that you can get a sense of my coding style, without having to
      send me an email.
    </div>

    <div class="d-flex mt-12 flex-column flex-sm-row">
      <v-tooltip bottom>
        <template v-slot:activator="{ on }">
          <div v-on="on">
            <v-btn
              class="width-100"
              outlined
              color="blue-grey darken-4"
              disabled
            >
              <v-icon left>mdi-launch</v-icon>View
            </v-btn>
          </div>
        </template>
        <span>Already on the site</span>
      </v-tooltip>

      <v-tooltip bottom>
        <template v-slot:activator="{ on }">
          <v-btn
            class="ml-sm-4 my-4 my-sm-0"
            outlined
            color="blue-grey darken-4"
            href="https://github.com/Steven-Cleary/steven-cleary"
            target="_blank"
            v-on="on"
          >
            <v-icon left>mdi-github</v-icon>Code
          </v-btn>
        </template>
        <span>Source Code</span>
      </v-tooltip>

      <v-tooltip bottom>
        <template v-slot:activator="{ on }">
          <v-btn
            class="ml-sm-4"
            outlined
            color="blue-grey darken-4"
            to="portfolio-site"
            v-on="on"
          >
            <v-icon left>mdi-information-outline</v-icon>Learn more
          </v-btn>
        </template>
        <span>Overview of project</span>
      </v-tooltip>
    </div>
    <div class="text-h5 my-4 mb-2 mt-12">Technologies</div>
    <technology-chips
      :technologies="[
        'js',
        'nuxt',
        'vue',
        'vuetify',
        'docker',
        'sass',
        'node',
        'kubernetes',
      ]"
    />
  </div>
</template>

<script>
import technologyChips from '~/components/technology-chips/technology-chips.vue'
export default {
  components: {
    technologyChips,
  },
}
</script>

<style lang="scss"></style>
