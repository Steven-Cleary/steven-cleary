<template>
  <div>
    <div class="sc-container mx-auto px-4">
      <div class="text-h1 my-8">Hello,</div>
      <div class="text-h4 my-4">My name is Steven Cleary.</div>
      <div class="body-1 my-4">
        I am a
        <span class="text-h5 font-weight-bold">software engineer</span>
        and this site is a place to show off my personal projects.
      </div>
      <v-divider class="my-12" />
      <financially-financed />
      <v-divider class="my-12" />
      <portfolio-site />
      <v-divider class="my-12" />
      <div class="text-h3 pt-6">Other projects</div>
      <other-projects />
    </div>
  </div>
</template>

<script>
import financiallyFinanced from '~/components/financially-financed/financially-financed.vue'
import portfolioSite from '~/components/portfolio-site/portfolio-site.vue'
import otherProjects from '~/components/other-projects/other-projects.vue'
export default {
  components: {
    financiallyFinanced,
    portfolioSite,
    otherProjects,
  },
  head() {
    return {
      title: 'Steven Cleary',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'I am a software engineer and this site is a place to show off my personal projects.',
        },
      ],
    }
  },
}
</script>

<style lang="scss"></style>
