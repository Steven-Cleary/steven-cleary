import colors from 'vuetify/es5/util/colors'

export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: 'universal',
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'server',
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: 'Steven Cleary',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content:
          'https://res.cloudinary.com/dxbppu0tw/image/upload/v1603060608/portfolio/portfolio_h054ig.png',
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'Steven Cleary',
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: 'Portfolio Site',
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://stevencleary.com',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  /*
   ** Global CSS
   */
  css: ['@/assets/theme.scss'],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    '@nuxtjs/vuetify',
    [
      '@nuxtjs/google-analytics',
      {
        id: 'UA-178387883-1',
      },
    ],
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [],
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      themes: {
        light: {
          primary: '#1F6795',
          secondary: '#E99225',
          nuxt: '#00C58E',
          vuetify: '#1866C1',
          vue: '#4FC08D',
          sass: '#BF4080',
          express: '#757575',
          node: '#026E00',
          chart: '#FF6384',
          ionic: '#3880FF',
          django: '#44B78B',
          angular: '#DD0031',
          bootstrap: '#614092',
          graphjs: '#5D3CF6',
          docker: '#0997E5',
          kubernetes: '#316CE6',
          python: '#1E415E',
          scikit: '#F89939',
          ts: '#235A97',
        },
      },
    },
  },
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {},
}
