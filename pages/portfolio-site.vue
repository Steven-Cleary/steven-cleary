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
    <div class="text-h5 mt-12">Architecture</div>
    <div class="body-1 my-4">
      I host this app using kubernetes. And this app is hosted on the same
      cluster that Financially Financed is hosted on. If you want to learn more,
      click
      <nuxt-link to="/financially-financed#architecture">here</nuxt-link>
      to see the architecture section of the Financially Financed overview page.
    </div>
    <div class="text-h5 my-4 mb-2 mt-12">Uses</div>
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
  </div>
</template>
<script>
import technologyChips from '~/components/technology-chips/technology-chips.vue'

export default {
  components: {
    technologyChips,
  },
  head() {
    return {
      title: 'Steven Cleary - Portfolio Site',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'This is a site to show off my personal projects. The source code for my main project, Financially Financed, is not open source. So I included this website so that you can get a sense of my coding style, without having to send me an email.',
        },
      ],
    }
  },
  layout: 'project',
}
</script>
<style lang="scss"></style>
