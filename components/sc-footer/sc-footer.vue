<template>
  <div class="blue-grey lighten-5 pt-6 pb-12">
    <div class="sc-container mx-auto px-4">
      <div class="text-h3 pt-8 pb-6">Have a question?</div>
      <div class="body-1 pb-4">
        Have a question or want to see code in a private repo? Feel free to
        email me at the address below.
      </div>
      <div
        class="mt-8 mb-12 py-1 py-sm-3 px-6 d-inline-flex rounded blue-grey darken-4 white--text align-center"
      >
        <div class="body-1 text-sm-h5 font-weight-light" @click="selectText">
          my.email@gmail.com
        </div>
        <div class="d-flex flex-column flex-sm-row align-center ml-8 ml-sm-0">
          <v-tooltip bottom>
            <template v-slot:activator="{ on }">
              <v-btn
                class="ml-sm-8"
                text
                dark
                v-bind="iconSize"
                href="mailto:my.email@gmail.com"
                v-on="on"
              >
                <v-icon v-bind="iconSize">mdi-email</v-icon>
              </v-btn>
            </template>
            <span>Send email</span>
          </v-tooltip>
          <v-tooltip bottom>
            <template v-slot:activator="{ on }">
              <v-btn
                dense
                text
                dark
                v-bind="iconSize"
                v-on="on"
                @click="() => copyToClipboard('my.email@gmail.com')"
              >
                <v-icon v-bind="iconSize">mdi-content-copy</v-icon>
              </v-btn>
            </template>
            <span>Copy</span>
          </v-tooltip>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    iconSize() {
      if (this.$vuetify.breakpoint.name === 'xs') {
        return { small: true }
      }
      return {}
    },
  },
  methods: {
    selectText(event) {
      const range = document.createRange()
      range.selectNode(event.target)
      window.getSelection().removeAllRanges()
      window.getSelection().addRange(range)
    },
    copyToClipboard(str) {
      const el = document.createElement('textarea')
      el.value = str
      el.setAttribute('readonly', '')
      el.style.position = 'absolute'
      el.style.left = '-9999px'
      document.body.appendChild(el)
      el.select()
      document.execCommand('copy')
      document.body.removeChild(el)
    },
  },
}
</script>

<style lang="scss"></style>
