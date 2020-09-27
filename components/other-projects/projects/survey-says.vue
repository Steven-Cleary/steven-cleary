<template>
  <v-card class="mx-auto" elevation="10">
    <v-img
      height="auto"
      src="https://res.cloudinary.com/dxbppu0tw/image/upload/v1600463005/portfolio/survey-says_o8rvtb.svg"
    />
    <v-card-title
      class="text-h5 text-md-h4 font-weight-light blue--text pa-0 ma-4 mt-6"
      >Survey Says</v-card-title
    >
    <v-card-subtitle class="ma-4 pa-0 mb-2"
      >Sept 2017 - April 2018</v-card-subtitle
    >
    <v-card-text class="text--primary">
      <div>
        Create polls, answer polls, and see how others responded.
      </div>
    </v-card-text>
    <technology-chips
      class="pl-4"
      :technologies="['ts', 'django', 'angular']"
    />
    <v-card-actions class="pa-4 pb-6">
      <v-tooltip bottom>
        <template v-slot:activator="{ on }">
          <div v-on="on">
            <v-btn outlined color="blue" to="survey-says">
              <v-icon left>mdi-information-outline</v-icon>Learn more
            </v-btn>
          </div>
        </template>
        <span>Images and extra info</span>
      </v-tooltip>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {}
</script>

<style lang="scss"></style>
