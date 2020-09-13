<template>
  <v-card class="mx-auto" elevation="10">
    <v-img
      height="auto"
      src="projects\NutritionCheckpoint\nutrition-checkpoint.svg"
    />
    <v-card-title
      class="text-h5 text-md-h4 font-weight-light green--text pa-0 ma-4 mt-6"
      >Nutrition Checkpoint</v-card-title
    >
    <v-card-subtitle class="ma-4 pa-0 mb-2"
      >May 2017 - Aug 2017</v-card-subtitle
    >
    <v-card-text class="text--primary">
      <div>
        Optimize your diet for both price and nutrition. Grab a recent grocery
        store reciept, search for what you bought and add the price for what you
        bought it at. Then use the info to create cost efficient diets.
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
</template>

<script>
export default {}
</script>

<style lang="scss"></style>
