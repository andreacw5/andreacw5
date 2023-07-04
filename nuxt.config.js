import it from './i18n/it'
import en from './i18n/en'

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - Andrea Tombolato',
    title: 'Home',
    htmlAttrs: {
      lang: 'it'
    },
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
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Rubik&display=swap' }
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
  plugins: [
    { src: '~/filters/formatDate.js' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    '@nuxtjs/firebase',
    'nuxt-i18n',
    '@nuxtjs/sitemap'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/color-mode'
  ],

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

  // Color mode configuration
  colorMode: {
    preference: 'dark',
    fallback: 'dark'
  },

  // I18N Configuration
  i18n: {
    locales: [
      { code: 'en', iso: 'en-US', file: 'en.js' },
      { code: 'it', iso: 'it-IT', file: 'it.js' }
    ],
    defaultLocale: 'it',
    vueI18n: {
      fallbackLocale: 'en',
      messages: { en, it }
    }
  },

  firebase: {
    config: {
      apiKey: 'AIzaSyDa5vP7y1XWwAbyoj8EJG_NA0zgTrSX-m0',
      authDomain: 'pw-9483234.firebaseapp.com',
      projectId: 'pw-9483234',
      storageBucket: 'pw-9483234.appspot.com',
      messagingSenderId: '152708470086',
      appId: '1:152708470086:web:8ba318bc59111f0f0b0147',
      measurementId: 'G-DWYWYGE1BG'
    },
    services: {
      firestore: true,
      storage: true
    },
    firestore: {
      memoryOnly: false, // default
      chunkName: process.env.NODE_ENV !== 'production' ? 'firebase-auth' : '[id]', // default
      enablePersistence: true,
      emulatorPort: 8080,
      emulatorHost: 'localhost'
    }
  },

  // Sitemap Configuration
  sitemap: {
    hostname: 'https://andreacw.dev',
    gzip: true,
    routes: [
      '/',
      '/projects',
      '/travels'
    ]
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    babel: {
      plugins: [['@babel/plugin-proposal-private-methods', { loose: true }]]
    }
  }
}
