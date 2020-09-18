<template>
  <div>
    <div class="text-h2 text-sm-h1 mb-8 mt-6 mt-md-n4">
      Hangman
    </div>
    <div class="subtitle-1 text--secondary my-4">
      Jan 2019 - Present
    </div>
    <div class="text-h5 my-4 mb-2 mt-12">Technologies</div>
    <technology-chips
      :technologies="[
        'js',
        'nuxt',
        'vue',
        'vuetify',
        'docker',
        'sass',
        'node',
        'kubernetes',
      ]"
    />
    <div class="body-1 my-4">
      During a web programming class we were given an assignment to make a
      simple game. So a friend and I decided to create an app that would let you
      play hangman. And the words that you had to guess are sent to you by your
      friends.
    </div>
    <div class="body-1 my-4">
      This wasn't a particularly large project, but I decided to include it on
      this site because of how much fun I had playing it.
    </div>
    <div class="body-1 my-4">
      We would pull the game a large screen and people would send in words from
      their phones for others to guess.
    </div>
    <v-img
      class="my-8 rounded"
      height="auto"
      src="projects\Hangman\hangman.svg"
    />
    <div class="text-h5 mt-12">Description</div>
    <div class="body-1 my-4">
      This app allows you to play hangman with your friends. You can send words
      to them and they can send words to you. You can guess the wrong letter 6
      times before you lose.
    </div>
    <div class="text-h5 mt-12">Gallery</div>
    <v-img
      v-for="img in images"
      :key="img"
      class="rounded my-12 elevation-6"
      height="auto"
      :src="`projects\\Hangman\\4-30-18\\${img}`"
    >
      <template v-slot:placeholder>
        <img-placeholder />
      </template>
    </v-img>
  </div>
</template>
<script>
import technologyChips from '~/components/technology-chips/technology-chips.vue'

export default {
  components: {
    technologyChips,
  },
  layout: 'project',
  data() {
    return {
      images: [
        'Example.PNG',
        'ExampleExplicit.PNG',
        'GameInProgress.PNG',
        'GameLoss.PNG',
        'GameWin.PNG',
      ],
    }
  },
}
</script>
<style lang="scss"></style>
