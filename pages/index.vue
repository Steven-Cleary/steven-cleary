<template>
  <div class="sc-container mx-auto px-4">
    <div class="text-h1 my-8">Hello,</div>
    <div class="text-h4 my-4">My name is Steven Cleary.</div>
    <div class="body-1 my-4">
      I am a
      <span class="text-h5 font-weight-bold">software engineer</span>
      and this site is a place to show off my personal projects.
    </div>
    <v-divider class="my-12" />
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
    <div class="d-flex">
      <v-tooltip bottom>
        <template v-slot:activator="{ on }">
          <div v-on="on">
            <v-btn icon to="https://financiallyfinanced.com/" target="_blank">
              <v-icon>mdi-launch</v-icon>
            </v-btn>
          </div>
        </template>
        <span>View live site</span>
      </v-tooltip>

      <v-tooltip bottom>
        <template v-slot:activator="{ on }">
          <div class="ml-4" v-on="on">
            <v-btn disabled icon>
              <v-icon>mdi-github</v-icon>
            </v-btn>
          </div>
        </template>
        <span>Code in private repo</span>
      </v-tooltip>
    </div>
    <v-divider class="my-12" />
    <div class="text-h3 my-4">Other projects</div>
    <v-timeline class="my-12" dense>
      <v-timeline-item color="blue" class="mb-12 pb-12" small right>
        <v-card class="mx-auto" elevation="10">
          <div class="d-flex justify-center blue">
            <v-img
              class="my-2"
              max-width="150"
              height="auto"
              src="projects/Curiocity/4-30-18/Example.PNG"
            />
          </div>
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

      <v-timeline-item color="red" class="mb-12 pb-12" small right>
        <v-card class="mx-auto" elevation="10">
          <v-img height="auto" src="projects/Hangman/4-30-18/Example.PNG" />
          <v-card-title class="headline font-weight-light mb-4 red--text"
            >Hangman</v-card-title
          >
          <v-card-subtitle class="pb-1">Sept 2017 - Oct 2017</v-card-subtitle>
          <v-card-text class="text--primary">
            <div>
              This was an app built as a final project for a web programming
              class at the University of Arizona. It was built in a group of
              two. It lets users play hangman with their friends. I decided to
              post this project due to the fact that it ended up being a very
              fun game to play with friends. It was a 2 week project so it is
              significantly smaller than the other ones.
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
          <v-img
            height="auto"
            src="projects/NutritionCheckpoint/4-30-18/SearchFoods.PNG"
          />
          <v-card-title class="headline font-weight-light mb-4 green--text"
            >Nutrition Checkpoint</v-card-title
          >
          <v-card-subtitle class="pb-1">May 2017 - Aug 2017</v-card-subtitle>
          <v-card-text class="text--primary">
            <div>
              As soon as you log into this app you are given a set of daily
              values that are your goal to hit. You can edit these so that they
              better fit you. The daily intakes are based off of the FDA
              recommendations. You can also search for foods. You can search the
              USDA database which has roughly 7000 entries or you can search the
              NutritionIX api to search from 700,000+ entries. You can click on
              foods to see how much of the different nutrients they contain.
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

<style lang="scss">
.sc-container {
  max-width: 675px;
  width: 100%;
}
</style>
