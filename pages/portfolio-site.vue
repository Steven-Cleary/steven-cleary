<template>
  <div>
    <div class="text-h1 my-8">Portfolio Site</div>
    <div class="subtitle-1 text--secondary my-4">
      Aug 2019 - Present
    </div>

    <div class="body-1 my-4">
      Since you don't have access to my main project, financially financed, I
      made this project open source so you can see my code.
    </div>

    <div class="text-h3 my-4">Features</div>
    <div class="blue-grey lighten-5 pa-4 rounded">
      <div class="text-h5 font-weight-light my-4">Custom Component Library</div>
      <div class="body-1 my-4">
        We built ourselves a rich set of custom components. This makes writing
        our calculators easy.
      </div>
      <v-divider class="my-10" />
      <div class="text-h5 font-weight-light my-4">Easy Deployments</div>
      <div class="body-1 my-4">
        If I want to deploy, I just run a couple of commands and my code is
        deployed.
      </div>
      <v-divider class="my-10" />
      <div class="text-h5 font-weight-light my-4">SEO</div>
      <div class="body-1 my-4">
        We built our site with NuxtJS, which gives us the ability to SSR(Server
        Side Render) or CSR(Client Side Render) content. This allows us to
        create content that search engines can read but also client side render
        more complex content to improve page load speed and user experience.
      </div>
      <v-divider class="my-10" />
      <div class="text-h5 font-weight-light my-4">Material UI</div>
      <div class="body-1 my-4">
        We use VuetifyJS.
        <span class="font-italic"
          >"Vuetify is a Vue UI Library with beautifully handcrafted Material
          Components"</span
        >
        - Vuetify Landing Page. This allows us to create great user experiences
        without having to recreate many of the basic web components used across
        the web.
      </div>
    </div>
    <div class="body-1 my-4 mt-8">
      If you have read this far you may want to see the code. So send me an
      email. In the footer below I have attached an email where you can reach
      me.
    </div>
  </div>
</template>
<script>
export default {
  layout: 'project',
}
</script>
<style lang="scss">
.sc-back {
  position: fixed;
  top: 0;
  left: 0;
}
</style>
