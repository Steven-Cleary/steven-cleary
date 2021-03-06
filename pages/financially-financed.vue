<template>
  <div>
    <div class="text-h2 text-sm-h1 mb-8 mt-6 mt-md-n4">
      Financially Financed
    </div>
    <div class="d-flex mt-4 mb-6 align-center">
      <div class="subtitle-1 text--secondary mr-8">
        Jan 2019 - Present
      </div>
      <v-tooltip bottom>
        <template v-slot:activator="{ on }">
          <v-btn
            outlined
            color="blue-grey darken-4"
            href="https://financiallyfinanced.com/"
            target="_blank"
            v-on="on"
          >
            <v-icon left>mdi-launch</v-icon>View
          </v-btn>
        </template>
        <span>View live site</span>
      </v-tooltip>
    </div>
    <div class="body-1 my-4">
      This has been my main project for a while, and one that I have put the
      most effort into. It is a collection of personal finance calculators and
      content.
    </div>
    <div class="body-1 my-4">
      And to help you understand what type of content and calculators they are,
      let me walk you through an example.
    </div>
    <div class="body-1 my-4">
      Lets say over the next 15 years you want to save roughly $100k.
    </div>
    <div class="body-1 my-4">
      How much would you have to save every month?
    </div>
    <div class="body-1 my-4">
      Click the link below and it will open a new tab with a calculator that can
      answer that question. Type in
      <span class="text-decoration-underline">100k</span> as the target value
      and <span class="text-decoration-underline">15</span> for the years of
      investment.
    </div>
    <div class="body-1 my-4">
      <a href="https://financiallyfinanced.com/posts/ci-goal" target="_blank">
        Compound interest goal calculator
      </a>
    </div>
    <div class="body-1 my-4">
      You'll see that you should save roughly $320 a month if you want to reach
      $100k in 15 years.
    </div>
    <div class="text-h5 mt-12">Overview</div>
    <div class="body-1 my-4 mb-2">
      Down below this I have included:
    </div>
    <ul>
      <li>
        The
        <a
          href="#architecture"
          @click="
            $vuetify.goTo('#architecture', {
              duration: 300,
              easing: 'easeInOutCubic',
              offset: -50,
            })
          "
        >
          architecture
        </a>
      </li>
      <li>
        <a
          href="#features"
          @click="
            $vuetify.goTo('#features', {
              duration: 300,
              easing: 'easeInOutCubic',
              offset: -50,
            })
          "
        >
          5 useful features
        </a>
        that you can find in some/all of the calculators
      </li>
      <li>
        <a
          href="#development-benefits"
          @click="
            $vuetify.goTo('#development-benefits', {
              duration: 300,
              easing: 'easeInOutCubic',
              offset: -50,
            })
          "
        >
          4 reasons
        </a>
        why I still love working on this side project after over a year
      </li>

      <li>
        How you can view the
        <a
          href="#code"
          @click="
            $vuetify.goTo('#code', {
              duration: 300,
              easing: 'easeInOutCubic',
              offset: -50,
            })
          "
        >
          code
        </a>
      </li>
    </ul>
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
        'chart',
      ]"
    />

    <div class="text-h5 mt-12">Other Contributors</div>
    <div class="body-1 my-4">
      Anastasia Huff
    </div>
    <div id="architecture" class="text-h5 mt-12">Architecture</div>
    <div class="body-1 my-4">
      We have a very simple architecture. We have a single nuxt app that we host
      on a basic kubernetes setup.
    </div>
    <v-img
      class="mx-auto my-12"
      height="auto"
      max-width="300px"
      src="https://res.cloudinary.com/dxbppu0tw/image/upload/v1601229835/FFArchitecture_iq06yo.svg"
    />
    <div class="body-1 my-4">
      However to save money we host our other applications, for example this
      site, on the same cluster and nodes. That is why you see the ... . That
      represents pods that host our other apps.
    </div>
    <div id="features" class="text-h4 my-4 mt-12">Features</div>
    <div class="blue-grey lighten-5 pa-4 rounded">
      <div class="text-h5 font-weight-light my-4">
        k = thousand, m = million, b = billion
      </div>
      <div class="body-1 my-4">
        If you want to enter 10 million, just type in
        <span class="text-decoration-underline">10m</span>. No need to type out
        10000000.
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
    <div id="development-benefits" class="text-h4 my-4 mt-12">
      Development Benefits
    </div>
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
    <div id="code" class="text-h5 mt-12">Where is the code?</div>
    <div class="body-1 my-4">
      If you have read this far you may want to see the code. If you do, then
      send me an email. In the footer below I have attached an email where you
      can reach me.
    </div>
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
      title: 'Steven Cleary - Financially Financed',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'This site is a collection of personal finance content and calculators.',
        },
      ],
    }
  },
  layout: 'project',
}
</script>
<style lang="scss"></style>
