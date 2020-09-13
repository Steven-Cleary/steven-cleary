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
      <span class="text-h6 font-weight-bold" style="line-height: 1.5rem;"
        >personal finance content and calculators</span
      >. After getting my first job, I started to have a bunch of questions
      related to personal finance. I began to create calculators and data
      visualizations to answer these questions I would have. I thought they were
      useful so I decided to clean them up and create a site so others could use
      them.
    </div>
    <v-img
      class="my-8 rounded"
      height="auto"
      src="projects\financially-financed\financially-financed.png"
    />

    <div class="d-flex mt-12">
      <v-tooltip bottom>
        <template v-slot:activator="{ on }">
          <v-btn
            outlined
            color="primary"
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
          <v-btn class="ml-4" outlined disabled color="primary" v-on="on">
            <v-icon left>mdi-github</v-icon>Code
          </v-btn>
        </template>
        <span>Code in private repo</span>
      </v-tooltip>

      <v-tooltip bottom>
        <template v-slot:activator="{ on }">
          <v-btn
            class="ml-4"
            outlined
            color="primary"
            to="financially-financed"
            v-on="on"
          >
            <v-icon left>mdi-information-outline</v-icon>Learn more
          </v-btn>
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
}
</script>

<style lang="scss"></style>
