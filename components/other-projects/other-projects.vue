<template>
  <div>
    <div class="text-h3 my-4">Other projects</div>
    <v-timeline class="my-12" dense>
      <v-timeline-item color="blue" class="mb-12" small right>
        <v-card class="mx-auto" elevation="10">
          <div class="blue" style="height: 225px;"></div>
          <v-card-title class="headline font-weight-light mb-4 blue--text"
            >Survey Says</v-card-title
          >
          <v-card-subtitle class="pb-1">Sept 2017 - April 2018</v-card-subtitle>
          <v-card-text class="text--primary">
            <div>
              This app lets users create surveys and answer surveys that other
              users have created. The surveys are ranked by a model that was
              trained on tweets.
            </div>
          </v-card-text>
          <v-card-actions>
            <v-btn color="blue" text>
              Read More
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-timeline-item>

      <v-timeline-item color="red" class="mb-12" small right>
        <v-card class="mx-auto" elevation="10">
          <!-- <v-img height="auto" src="projects/Hangman/4-30-18/Example.PNG" /> -->
          <div class="red" style="height: 225px;"></div>
          <v-card-title class="headline font-weight-light mb-4 red--text"
            >Hangman</v-card-title
          >
          <v-card-subtitle class="pb-1">Sept 2017 - Oct 2017</v-card-subtitle>
          <v-card-text class="text--primary">
            <div>
              This is a project where users can play hangman with their friends.
            </div>
          </v-card-text>
          <v-card-actions>
            <v-btn color="red" text>
              Read More
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-timeline-item>

      <v-timeline-item color="green" small right>
        <v-card class="mx-auto" elevation="10">
          <!-- <v-img
            height="auto"
            src="projects/NutritionCheckpoint/4-30-18/SearchFoods.PNG"
          /> -->
          <div class="green" style="height: 225px;"></div>
          <v-card-title class="headline font-weight-light mb-4 green--text"
            >Nutrition Checkpoint</v-card-title
          >
          <v-card-subtitle class="pb-1">May 2017 - Aug 2017</v-card-subtitle>
          <v-card-text class="text--primary">
            <div>
              This is an app that tried to help you optimize your diet, both in
              terms of nutrition and price. You find a food product, add the
              price you bought it for and see which products are giving you the
              best value
            </div>
          </v-card-text>
          <v-card-actions>
            <v-btn color="green" text>
              Read More
            </v-btn>
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
