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
    <technology-chips
      :technologies="['js', 'nuxt', 'vue', 'vuetify', 'docker', 'sass', 'node']"
    />
  </div>
</template>

<script>
import technologyChips from '~/components/technology-chips/technology-chips.vue'
export default {
  components: {
    technologyChips,
  },
  methods: {
    redirect(url) {
      window.open(url, '_blank')
    },
  },
}
</script>

<style lang="scss"></style>
