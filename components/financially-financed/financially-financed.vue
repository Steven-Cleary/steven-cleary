<template>
  <div>
    <div class="overline">Current Project</div>
    <div class="text-h3 mb-4">Financially Financed</div>
    <div class="subtitle-1 text--secondary my-4 mb-2">
      Jan 2019 - Present
    </div>
    <div class="body-1 mb-4">
      Financially Financed is my main project, and will be my main project for a
      while. This site is a collection of
      <span class="text-h6 font-weight-bold" style="line-height: 1.5rem;">
        personal finance content and calculators</span
      >.
    </div>
    <div class="body-1 mb-4">
      Click the view button below if you would like to see the live site. On the
      home page I have included a carousel with all of the calculators which you
      can explore. You can also click the learn more button below to get an
      overview of the project.
    </div>
    <v-img
      class="my-8 rounded"
      height="auto"
      src="https://res.cloudinary.com/dxbppu0tw/image/upload/v1600462472/portfolio/financially-financed_iluxq5.png"
    >
      <template v-slot:placeholder>
        <img-placeholder />
      </template>
    </v-img>

    <div class="d-flex mt-12 flex-column flex-sm-row">
      <v-tooltip bottom>
        <template v-slot:activator="{ on }">
          <v-btn
            outlined
            color="blue-grey darken-4"
            href="https://financiallyfinanced.com/"
            target="_blank"
            v-on="on"
          >
            <v-icon left>mdi-launch</v-icon>View
          </v-btn>
        </template>
        <span>View live site</span>
      </v-tooltip>

      <v-tooltip bottom>
        <template v-slot:activator="{ on }">
          <v-btn
            class="ml-sm-4 my-4 my-sm-0"
            outlined
            color="blue-grey darken-4"
            to="financially-financed#code"
            v-on="on"
          >
            <v-icon left>mdi-github</v-icon>Code
          </v-btn>
        </template>
        <span>Access the code</span>
      </v-tooltip>

      <v-tooltip bottom>
        <template v-slot:activator="{ on }">
          <v-btn
            class="ml-sm-4"
            outlined
            color="blue-grey darken-4"
            to="financially-financed"
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
import imgPlaceholder from '~/components/img-placeholder.vue'
export default {
  components: {
    technologyChips,
    imgPlaceholder,
  },
}
</script>

<style lang="scss"></style>
