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
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        name: 'msapplication-TileColor',
        content: '#212123'
      },
      {
        name: 'theme-color',
        content: '#212123'
      }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon/favicon-16x16.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon/favicon-32x32.png'
      },
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/favicon/apple-touch-icon.png'
      },
      {
        rel: 'mask-icon',
        href: '/favicon/safari-pinned-tab.svg',
        color: '#212123'
      },
      {
        rel: 'manifest',
        href: '/favicon/site.webmanifest'
      },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com', crossorigin: true },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Rubik&display=swap' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap' },
      { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css' }
    ]
  },

  loadingIndicator: {
    name: 'wandering-cubes',
    color: '#00A86B',
    background: '#121212FF'
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    { src: '~assets/css/global.css', lang: 'css' }
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/filters/formatDate.js' },
    { src: '~/plugins/flags.js' }
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
    skipSettingLocaleOnNavigate: true,
    locales: [
      { code: 'en', iso: 'en-US', file: 'en.js', name: 'English', icon: 'it' },
      { code: 'it', iso: 'it-IT', file: 'it.js', name: 'Italian', icon: 'gb' }
    ],
    defaultLocale: 'it',
    strategy: 'no_prefix',
    detectBrowserLanguage: {
      useCookie: false
    },
    vueI18n: {
      fallbackLocale: 'it',
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
