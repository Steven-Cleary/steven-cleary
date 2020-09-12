<template>
  <div>
    <div class="text-h1 mt-12 mb-4">Survey Says</div>
    <div class="subtitle-1 text--secondary my-4">
      Sept 2017 - April 2018
    </div>
    <div class="body-1 my-4">
      This app lets users create surveys and answer surveys that other users
      have created. The surveys are ranked by a model that was trained on tweets
      that were scraped from twitter.
    </div>
    <v-img
      class="mt-8 rounded"
      height="auto"
      src="projects\Curiocity\survey-says.svg"
    />
    <div class="text-caption mt-2">
      This shows a users flow of seeing a question, clicking on the questions to
      see the possible answers, and after answering the question, seeing the
      results.
    </div>
    <div class="body-1 my-4">
      This app was created during a school project.
    </div>

    <div class="text-h5 mt-12">Backend</div>
    <div class="text-subtitle-2 mt-8">Tests</div>
    <div class="body-1 my-2">
      The backend contains tests for the various parts of the api. The backend
      also contains commands to run all of the tests or just specific test
      files. Each part of the api has its own test file.
    </div>
    <div class="text-subtitle-2 mt-8">Security</div>
    <div class="body-1 my-2">
      This app lets users create surveys and answer surveys that other users
      have created. The surveys are ranked by a model that was trained on
      tweets.
    </div>
    <div class="text-subtitle-2 mt-8">Data Collection</div>
    <div class="body-1 my-2">
      The main inspiration behind this app is that it can be used to collect
      really useful data sets. Every time the user answers a question their
      response is saved to the database. This means you could go through every
      user and retrieve all of their answers.
    </div>
    <div class="text-h5 mt-12">Gallery</div>
    <div class="d-flex flex-wrap justify-start">
      <v-img
        v-for="img in images"
        :key="img"
        class="mt-12 mr-12 elevation-6 pointer rounded"
        height="auto"
        min-height="414.505"
        width="251"
        :src="`projects\\Curiocity\\4-30-18\\${img}`"
      >
        <template v-slot:placeholder>
          <img-placeholder />
        </template>
      </v-img>
    </div>
  </div>
</template>
<script>
import imgPlaceholder from '~/components/img-placeholder.vue'
export default {
  components: {
    imgPlaceholder,
  },
  data() {
    return {
      images: [
        'AccountOptions.PNG',
        'CreateNewQuestion.PNG',
        'Example.PNG',
        'History.PNG',
        'Home.PNG',
        'HomeQuestionOptions.PNG',
        'HomeQuestionResults.PNG',
        'HomeScrollDown.PNG',
        'HomeScrollDownThenUp.PNG',
        'NewQuestion1.PNG',
        'NewQuestion2.PNG',
        'NewQuestionInFeed.PNG',
        'SearchQuestion1.PNG',
        'SearchQuestion2.PNG',
        'Signin.PNG',
        'Signup.PNG',
        'Start.PNG',
        'Vis2.PNG',
      ],
    }
  },
  layout: 'project',
}
</script>
<style lang="scss"></style>
