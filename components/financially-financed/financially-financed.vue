<template>
  <div>
    <div class="overline">Current Project</div>
    <div class="text-h3 mb-4">Financially Financed</div>
    <div class="subtitle-1 text--secondary my-4">
      Jan 2019 - Present
    </div>
    <div class="body-1 my-4">
      This site is a hub for personal finance content and calculators. After
      getting my first job, I started to have a bunch of questions related to
      personal finance. I began to create calculators and data visualizations to
      answer these questions I would have. I thought they were useful so I
      decided to clean them up and create a site so others could use them.
    </div>
    <v-img
      height="auto"
      src="projects\financially-financed\financially-financed.png"
    />
    <div class="d-flex mt-8">
      <v-tooltip bottom>
        <template v-slot:activator="{ on }">
          <div v-on="on">
            <v-btn
              outlined
              color="primary"
              @click="() => redirect('https://financiallyfinanced.com/')"
            >
              <v-icon left>mdi-launch</v-icon>View
            </v-btn>
          </div>
        </template>
        <span>View live site</span>
      </v-tooltip>

      <v-tooltip bottom>
        <template v-slot:activator="{ on }">
          <div class="ml-4" v-on="on">
            <v-btn outlined disabled color="primary">
              <v-icon left>mdi-github</v-icon>Code
            </v-btn>
          </div>
        </template>
        <span>Code in private repo</span>
      </v-tooltip>

      <v-tooltip bottom>
        <template v-slot:activator="{ on }">
          <div class="ml-4" v-on="on">
            <v-btn outlined color="primary">
              <v-icon left>mdi-information-outline</v-icon>Learn more
            </v-btn>
          </div>
        </template>
        <span>Images and extra info</span>
      </v-tooltip>
    </div>
    <v-chip class="my-8" color="yellow darken-2" outlined small>
      <v-icon small left>mdi-language-javascript</v-icon>
      JS
    </v-chip>
    <v-chip class="my-8 ml-2" color="nuxt" outlined small>
      <v-icon small left>mdi-nuxt</v-icon>
      Nuxt
    </v-chip>
    <v-chip class="my-8 ml-2" color="vue" outlined small>
      <v-icon small left>mdi-vuejs</v-icon>
      Vue
    </v-chip>
    <v-chip class="my-8 ml-2" color="vuetify" outlined small>
      <v-icon small left>mdi-vuetify</v-icon>
      Vuetify
    </v-chip>
    <v-chip class="my-8 ml-2" color="sass" outlined small>
      <v-icon small left>mdi-sass</v-icon>
      Sass
    </v-chip>
    <v-chip class="my-8 ml-2" color="node" outlined small>
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
