<template>
  <div>
    <div class="text-h2 text-sm-h1 mb-8 mt-6 mt-md-n4">
      Survey Says
    </div>
    <div class="subtitle-1 text--secondary my-4">
      Sept 2017 - April 2018
    </div>
    <div class="text-h5 my-4 mb-2 mt-12">Technologies</div>
    <technology-chips
      :technologies="['js', 'python', 'ionic', 'django', 'angular', 'chart']"
    />
    <div class="body-1 my-4">
      Have you ever answered a poll on twitter? Where you saw a question,
      answered the question and then got to see the results?
    </div>
    <div class="body-1 my-4">
      That is what this app does. You see questions, answer them, and then get
      to see the results. You can also ask your own questions that others can
      answer.
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
    <div class="text-h5 mt-12">Data</div>
    <div class="body-1 my-4">
      Since we were collecting a bunch of information about our users you could
      imagine that we could do some pretty cool things with that data.
      Specifically finding interesting correlations.
    </div>
    <div class="body-1 my-4">
      For example, maybe you had one question that asked how often you
      exercised, and another question that asked how often you eat fast food.
      For all users that answered both you could maybe find something like the
      users who ate the most fast food exercised the least.
    </div>
    <div class="body-1 my-4">
      But the idea of having such a great set of data to look at is what kept us
      working so hard on this.
    </div>

    <div class="text-h5 mt-12">Description</div>
    <div class="body-1 my-4">
      This app lets users create surveys and answer surveys that other users
      have created. The surveys are ranked by a model that was trained on tweets
      that were scraped from twitter.
    </div>

    <div class="text-h3 my-4 mt-12">Features</div>
    <div class="blue-grey lighten-5 pa-4 rounded mt-4">
      <div class="text-h5 font-weight-light my-4">Social Login</div>
      <div class="body-1 my-4">
        The ability to log in with your facebook account.
      </div>
      <v-divider class="my-10" />
      <div class="text-h5 font-weight-light my-4">NLP for question ranking</div>
      <div class="body-1 my-4">
        All of the questions that show up on your feed are ranked using nlp. You
        can read how we created the model
        <a
          href="#question-ranking"
          @click="
            $vuetify.goTo('#question-ranking', {
              duration: 300,
              easing: 'easeInOutCubic',
              offset: -50,
            })
          "
          >below</a
        >.
      </div>
      <v-divider class="my-10" />
      <div class="text-h5 font-weight-light my-4">Randomly generated data</div>
      <div class="body-1 my-4">
        The app is filled up with mock data that is generated through nlp.You
        can read how we created the model
        <a
          href="#random-questions"
          @click="
            $vuetify.goTo('#random-questions', {
              duration: 300,
              easing: 'easeInOutCubic',
              offset: -50,
            })
          "
          >below</a
        >.
      </div>
      <v-divider class="my-10" />
      <div class="text-h5 font-weight-light my-4">Code Smells</div>
      <div class="body-1 my-4">
        Once the project was finished we went through our code and tried to
        identify any code smells in order to refactor them.
      </div>
    </div>
    <div class="text-h5 mt-12">Scraping Twitter</div>
    <div class="body-1 my-4">
      In order to create a question ranking model and generate random data we
      needed some data. So we got our data from twitter using their api's. We
      looked for tweets that were asking questions. And we collected:
    </div>
    <ul>
      <li>favorites</li>
      <li>retweets</li>
      <li>users follower count</li>
      <li>users friend count</li>
      <li>users favorites count</li>
      <li>users statuses count</li>
      <li>time the tweet was created</li>
      <li>time of the query</li>
      <li>and whether the tweet contains any media</li>
    </ul>
    <div id="question-ranking" class="text-h5 mt-12">Question Ranking</div>
    <div class="body-1 my-4">
      To create the model we take the 1000 most common words and creates an
      occurrence matrix for each tweet. Then we concat the other data we
      collected to the matrix. Number of retweets is used as the label. Then a
      linear regression is done to map all the data about a tweet to the number
      of retweets. Lastly the the coefficients corresponding to the unigrams are
      saved. Then we use this model to rank incoming questions.
    </div>
    <div id="random-questions" class="text-h5 mt-12">
      Generating Random Questions
    </div>
    <div class="body-1 my-4">
      We wanted to fill up the app with mock data, so we generated some random
      sentences. To do this we save all of the bigrams found in the collection
      of tweets. Then the random sentences are generated by choosing a random
      first word and then making random choices in the possible words that could
      follow ( based off the bigram list ).
    </div>

    <div class="text-h5 mt-12">Other Contributors</div>
    <div class="body-1 my-4">
      Anastasia Huff
    </div>

    <div class="text-h5 mt-12">Gallery</div>
    <div class="d-flex flex-wrap justify-start">
      <v-img
        v-for="img in images"
        :key="img"
        class="mt-12 mr-12 elevation-6 rounded"
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
import technologyChips from '~/components/technology-chips/technology-chips.vue'
export default {
  components: {
    imgPlaceholder,
    technologyChips,
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
