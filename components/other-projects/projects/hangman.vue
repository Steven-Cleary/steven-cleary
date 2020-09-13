<template>
  <v-card class="mx-auto" elevation="10">
    <v-img height="auto" src="projects\Hangman\hangman.svg" />
    <v-card-title
      class="text-h5 text-md-h4 font-weight-light red--text pa-0 ma-4 mt-6"
      >Hangman</v-card-title
    >
    <v-card-subtitle class="ma-4 pa-0 mb-2"
      >Sept 2017 - Oct 2017</v-card-subtitle
    >
    <v-card-text class="text--primary">
      <div>
        Play hangman with your friends. Get everyone gathered around a tv, pull
        out their phones and send in words to guess.
      </div>
    </v-card-text>
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
