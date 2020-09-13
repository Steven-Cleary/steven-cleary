<template>
  <div>
    <!-- <div class="text-h1 my-8">Financially Financed</div> -->
    <div class="subtitle-1 text--secondary my-4">
      Jan 2019 - Present
    </div>

    <div class="body-1 my-4">
      I enjoy personal finance. Specifically I like to create different
      scenarios and see how things play out. For example how much money would I
      have if I invested $500 a month for 30 years.
    </div>
    <div class="body-1 my-4">
      And I would often use JavaScript to play out these different scenarios.
      Overtime I started building out interfaces and data visualizations as
      well.
    </div>
    <div class="body-1 my-4">
      Now at this time I was working two other projects. But I decided that
      these projects were overly ambitious. And I was looking to create a new
      project that wasn't overly ambitious. Something that I could get done, and
      that people would use.
    </div>
    <div class="body-1 my-4">
      So I decided that I want to create a site where I can post calculators and
      content related to personal finance. But if you are reading this you are
      probably more concerned with the tech that this site was built with.
    </div>
    <div class="text-h3 my-4 mt-12">Features</div>
    <div class="blue-grey lighten-5 pa-4 rounded">
      <div class="text-h5 font-weight-light my-4">
        k = thousand, m = million, b = billion
      </div>
      <div class="body-1 my-4">
        If you want to enter 10 million, just type in <b>10m</b>. No need to
        type out 10000000.
      </div>
      <v-divider class="my-10" />
      <div class="text-h5 font-weight-light my-4">Editable Age</div>
      <div class="body-1 my-4">
        Add and modify your age to better see how results apply to your personal
        situation.
      </div>
      <v-divider class="my-10" />
      <div class="text-h5 font-weight-light my-4">Editable AGR</div>
      <div class="body-1 my-4">
        If you think your investments will do better then 10% a year or 7%
        inflation adjusted, you can modify the growth rate.
      </div>
      <v-divider class="my-10" />
      <div class="text-h5 font-weight-light my-4">Yearly Toggle</div>
      <div class="body-1 my-4">
        Yearly toggle if you want to see results and inputs in yearly values
        instead of monthly values.
      </div>
      <v-divider class="my-10" />
      <div class="text-h5 font-weight-light my-4">Large Numbers</div>
      <div class="body-1 my-4">
        Have you have ever seen one of those day trading gurus that make
        ridiculous claims, like getting a 1% return daily? Try out those claims
        on some of our calculators to see how ridiculous they are. We use Big
        Int so that we can show very large results.
      </div>
    </div>

    <div class="text-h3 my-4 mt-12">Development Features</div>
    <div class="blue-grey lighten-5 pa-4 rounded">
      <div class="text-h5 font-weight-light my-4">Custom Component Library</div>
      <div class="body-1 my-4">
        We built ourselves a set of custom components to help with making our
        calculators and content.
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
      <div class="body-1 my-4">
        Everything is server side rendered by default unless we put it in a
        <b>&lt;client-only&gt;</b> element.
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
      If you have read this far you may want to see the code. If you do, then
      send me an email. In the footer below I have attached an email where you
      can reach me.
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
