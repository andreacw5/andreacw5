import it from './i18n/it'
import en from './i18n/en'

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s',
    title: 'Andrea Tombolato',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Sito e portfolio di Andrea Tombolato' },
      { name: 'msapplication-TileColor', content: '#202124' },
      { name: 'msapplication-TileImage', content: 'icons/ms-icon-144x144.png' },
      { name: 'theme-color', content: '#00A86B' }
    ],
    link: [
      { rel: 'manifest', href: 'icons/manifest.json' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'icon', type: 'image/png', sizes: '192x192', href: 'icons/android-icon-192x192.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: 'icons/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '96x96', href: 'icons/favicon-96x96.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: 'icons/favicon-16x16.png' },
      { rel: 'apple-touch-icon', sizes: '57x57', href: 'icons/apple-icon-57x57.png' },
      { rel: 'apple-touch-icon', sizes: '60x60', href: 'icons/apple-icon-60x60.png' },
      { rel: 'apple-touch-icon', sizes: '72x72', href: 'icons/apple-icon-72x72.png' },
      { rel: 'apple-touch-icon', sizes: '76x76', href: 'icons/apple-icon-76x76.png' },
      { rel: 'apple-touch-icon', sizes: '114x114', href: 'icons/apple-icon-114x114.png' },
      { rel: 'apple-touch-icon', sizes: '120x120', href: 'icons/apple-icon-120x120.png' },
      { rel: 'apple-touch-icon', sizes: '144x144', href: 'icons/apple-icon-144x144.png' },
      { rel: 'apple-touch-icon', sizes: '152x152', href: 'icons/apple-icon-152x152.png' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: 'icons/apple-icon-180x180.png' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Montserrat&display=swap' }
    ]
  },

  loadingIndicator: {
    name: 'wandering-cubes',
    color: '#00A86B',
    background: '#202124'
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    { src: '~assets/css/global.css', lang: 'css' }
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    '@nuxtjs/color-mode',
    'nuxt-i18n'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    treeShake: true,
    optionsPath: './plugins/vuetify.options.js'
  },

  // Router Configuration: https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-router
  router: {
    extendRoutes (routes, resolve) {
      routes.push({
        name: 'custom',
        path: '*',
        component: resolve(__dirname, 'pages/error/not-found.vue')
      })
    },
    linkActiveClass: 'active-link'
  },

  // I18N Configuration
  i18n: {
    locales: [
      { code: 'en', iso: 'en-US', file: 'en.js' },
      { code: 'it', iso: 'it-IT', file: 'it.js' }
    ],
    defaultLocale: 'en',
    vueI18n: {
      fallbackLocale: 'en',
      messages: { en, it }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    babel: {
      plugins: [['@babel/plugin-proposal-private-methods', { loose: true }]]
    }
  }
}
