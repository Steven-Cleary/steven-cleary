<template>
  <div>
    <div class="text-h3 my-4">Other projects</div>
    <v-timeline class="my-12" dense reverse>
      <v-timeline-item color="blue" class="mb-12" small right>
        <v-card class="mx-auto" elevation="10">
          <v-img height="auto" src="projects\Curiocity\survey-says.svg" />
          <v-card-title
            class="text-h4 font-weight-light blue--text pa-0 ma-4 mt-6"
            >Survey Says</v-card-title
          >
          <v-card-subtitle class="ma-4 pa-0 mb-2"
            >Sept 2017 - April 2018</v-card-subtitle
          >
          <v-card-text class="text--primary">
            <div>
              This app lets users create surveys and answer surveys that other
              users have created. The surveys are ranked by a model that was
              trained on tweets.
            </div>
          </v-card-text>
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
      </v-timeline-item>

      <v-timeline-item color="red" class="mb-12" small right>
        <v-card class="mx-auto" elevation="10">
          <v-img height="auto" src="projects\Hangman\hangman.svg" />
          <v-card-title
            class="text-h4 font-weight-light red--text pa-0 ma-4 mt-6"
            >Hangman</v-card-title
          >
          <v-card-subtitle class="ma-4 pa-0 mb-2"
            >Sept 2017 - Oct 2017</v-card-subtitle
          >
          <v-card-text class="text--primary">
            <div>
              This is a project where users can play hangman with their friends.
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
      </v-timeline-item>

      <v-timeline-item color="green" small right>
        <v-card class="mx-auto" elevation="10">
          <v-img
            height="auto"
            src="projects\NutritionCheckpoint\nutrition-checkpoint.svg"
          />
          <v-card-title
            class="text-h4 font-weight-light green--text pa-0 ma-4 mt-6"
            >Nutrition Checkpoint</v-card-title
          >
          <v-card-subtitle class="ma-4 pa-0 mb-2"
            >May 2017 - Aug 2017</v-card-subtitle
          >
          <v-card-text class="text--primary">
            <div>
              This is an app that tried to help you optimize your diet, both in
              terms of nutrition and price. You find a food product, add the
              price you bought it for and see which products are giving you the
              best value.
            </div>
          </v-card-text>
          <v-card-actions class="pa-4 pb-6">
            <v-tooltip bottom>
              <template v-slot:activator="{ on }">
                <div v-on="on">
                  <v-btn outlined color="green" to="nutrition-checkpoint">
                    <v-icon left>mdi-information-outline</v-icon>Learn more
                  </v-btn>
                </div>
              </template>
              <span>Images and extra info</span>
            </v-tooltip>
          </v-card-actions>
        </v-card>
      </v-timeline-item>
    </v-timeline>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss"></style>
