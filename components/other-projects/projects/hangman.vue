<template>
  <v-card class="mx-auto" elevation="10">
    <v-img
      height="auto"
      src="https://res.cloudinary.com/dxbppu0tw/image/upload/v1600462452/portfolio/hangman_yoyer2.svg"
    />
    <v-card-title
      class="text-h5 text-md-h4 font-weight-light red--text pa-0 ma-4 mt-6"
      >Hangman</v-card-title
    >
    <v-card-subtitle class="ma-4 pa-0 mb-2"
      >Nov 2017 - Feb 2018</v-card-subtitle
    >
    <v-card-text class="text--primary">
      <!-- Get everyone gathered around a tv, pull
        out their phones and send in words to guess. -->
      <div>
        Gather your friends around a tv, log into your account, then take turns
        playing hangman on the tv while players send in words from their phones.
      </div>
    </v-card-text>
    <technology-chips class="pl-4" :technologies="['angular']" />
    <v-card-actions class="pa-4 pb-6">
      <v-tooltip bottom>
        <template v-slot:activator="{ on }">
          <div v-on="on">
            <v-btn outlined color="red" to="hangman">
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
