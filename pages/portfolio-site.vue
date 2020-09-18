<template>
  <div>
    <div class="text-h2 text-sm-h1 mb-8 mt-6 mt-md-n4">
      Portfolio Site
    </div>
    <div class="subtitle-1 text--secondary my-4">
      Aug 2019 - Present
    </div>

    <div class="body-1 my-4">
      Since you don't have access to my main project, financially financed, I
      made this project open source so you can see my code.
    </div>
    <div class="body-1 my-4">
      Click
      <a href="https://github.com/Steven-Cleary/steven-cleary" target="_blank">
        here</a
      >
      to open the project in github on a new tab.
    </div>
    <div class="text-h5 my-4 mb-2 mt-12">Technologies</div>
    <technology-chips
      :technologies="['js', 'nuxt', 'vue', 'vuetify', 'docker', 'sass', 'node']"
    />
  </div>
</template>
<script>
import technologyChips from '~/components/technology-chips/technology-chips.vue'

export default {
  components: {
    technologyChips,
  },
  layout: 'project',
}
</script>
<style lang="scss"></style>
