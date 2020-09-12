<template>
  <div>
    <div class="text-h1 my-8">Hangman</div>
    <div class="subtitle-1 text--secondary my-4">
      Jan 2019 - Present
    </div>
    <div class="body-1 my-4">
      This is a project where users can play hangman with their friends.
    </div>
    <v-img
      class="my-8 rounded"
      height="auto"
      src="projects\Hangman\hangman.svg"
    />
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
export default {
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
