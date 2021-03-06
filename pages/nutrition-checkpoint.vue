<template>
  <div>
    <div class="text-h2 text-sm-h1 mb-8 mt-6 mt-md-n4">
      Nutrition Checkpoint
    </div>
    <div class="subtitle-1 text--secondary my-4">
      May 2017 - Aug 2017
    </div>
    <div class="body-1 my-4">
      Have you ever heard the argument that it costs a lot to be healthy? I
      didn't know if it was true or not, but I wanted to find out.
    </div>
    <div class="body-1 my-4">
      So I decided to create an app that would shed some light on how much it
      costs to be healthy.
    </div>
    <div class="body-1 my-4">
      There is an api that allows you to query 700k+ food items for nutrition
      facts.
    </div>
    <div class="body-1 my-4">
      So the idea was that you could go to the grocery store, buy something,
      then in the app find that item and enter the price. And after doing that
      for a series of items you could construct diets with those items.
    </div>
    <div class="body-1 my-4">
      And you would be able to see the cost effectiveness of different diets
      that you create.
    </div>
    <div class="text-h5 my-4 mb-2 mt-12">Uses</div>
    <technology-chips :technologies="['js', 'angular']" />
    <v-img
      class="mt-8 rounded"
      height="auto"
      src="https://res.cloudinary.com/dxbppu0tw/image/upload/v1600462422/portfolio/nutrition-checkpoint_wsqz8k.svg"
    />
    <div class="text-caption mt-2">
      This shows the screens where you can search for foods to save with a price
      and where you can create a new diet.
    </div>
    <div class="text-h5 mt-12">Description</div>
    <div class="body-1 my-4">
      After logging into this app you are given a set of daily intakes which you
      have to reach. Daily intakes consist of things like micro and macro
      nutrients. You can edit these so that they better fit you.
    </div>
    <div class="body-1 my-4">
      The default daily intakes are based off of the FDA recommendations. You
      can search the USDA database which has roughly 7000 entries or you can
      search the NutritionIX api to search from 700,000+ entries. The USDA
      database was included because they have better entries for produce.
    </div>
    <div class="text-h5 mt-12">Gallery</div>
    <v-img
      v-for="img in images"
      :key="img"
      class="rounded my-12 elevation-6"
      height="auto"
      :src="`projects\\NutritionCheckpoint\\4-30-18\\${img}`"
    >
      <template v-slot:placeholder>
        <img-placeholder />
      </template>
    </v-img>
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
  data() {
    return {
      images: [
        'AccountDailys.PNG',
        'CreateDiet.PNG',
        'CreateDietSearch.PNG',
        'SearchFoods.PNG',
        'SearchFoodsChangeServings.PNG',
      ],
    }
  },
  head() {
    return {
      title: 'Steven Cleary - Nutrition Checkpoint',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Optimize your diet for both price and nutrition. Grab a recent grocery store receipt, search for what you bought and add the price for what you bought it at. Then use the info to create cost efficient diets.',
        },
      ],
    }
  },
  layout: 'project',
}
</script>
<style lang="scss"></style>
