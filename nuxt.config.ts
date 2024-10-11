export default defineNuxtConfig({
  // https://github.com/nuxt-themes/alpine
  extends: '@nuxt-themes/alpine',

  modules: [// https://github.com/nuxt-modules/plausible
  '@nuxtjs/plausible', // https://github.com/nuxt/devtools
  '@nuxt/devtools', 'nuxt-gtag'],

  compatibilityDate: '2024-09-28',

  gtag: {
    id: 'G-GM2J20XEEL'
  }
})