<template>
  <div>
    <v-timeline class="my-12 ml-sm-n8 d-none d-sm-block" dense>
      <v-timeline-item color="blue" class="mb-12" small right>
        <survey-says />
      </v-timeline-item>
      <v-timeline-item color="red" class="mb-12" small right>
        <hangman />
      </v-timeline-item>
      <v-timeline-item color="green" small right>
        <nutrition-checkpoint />
      </v-timeline-item>
    </v-timeline>
    <div class="d-sm-none">
      <survey-says class="my-12" />
      <hangman class="my-12" />
      <nutrition-checkpoint class="my-12" />
    </div>
  </div>
</template>

<script>
import surveySays from '~/components/other-projects/projects/survey-says.vue'
import hangman from '~/components/other-projects/projects/hangman.vue'
import nutritionCheckpoint from '~/components/other-projects/projects/nutrition-checkpoint.vue'
export default {
  components: {
    surveySays,
    hangman,
    nutritionCheckpoint,
  },
}
</script>

<style lang="scss"></style>
