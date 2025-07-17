import vuetify from 'vite-plugin-vuetify';

// PWA Config
const title = "Andrea Tombolato";
const shortTitle = "Andrea Tombolato";
const description = "Andrea Tombolato, Web Developer con base a Milano e questo è il mio sito personale!";
const image = "https://file-harbor.com/api/v1/files/59eede5fb0b097a63e0eb276add71e83";
const url = "https://andreatombolato.dev/";
const themeColor = "#212122";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  alias: {
    assets: '/<rootDir>/assets',
    composables: '/<rootDir>/composables'
  },

  app: {
    head: {
      titleTemplate: '%s - Andrea Tombolato',
      title: 'Home',
      htmlAttrs: {
        lang: 'it'
      },
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        { rel: "canonical", href: url },
      ],
      meta: [
        { key: "description", name: "description", content: description, },
        { property: "og:site_name", content: title },
        { key: "og:type", property: "og:type", content: "website" },
        { key: "og:url", property: "og:url", content: url },
        { key: "og:image:secure_url", property: "og:image:secure_url", content: image },
        { key: "og:title", property: "og:title", content: title },
        { key: "og:description", property: "og:description", content: description },
        { key: "og:image", property: "og:image", content: image },
        //Twitter
        { name: "twitter:card", content: "summary_large_image" },
        { key: "twitter:url", name: "twitter:url", content: url },
        { key: "twitter:title", name: "twitter:title", content: title },
        { key: "twitter:description", name: "twitter:description", content: description },
        { key: "twitter:image", name: "twitter:image", content: image },
      ],
    },
  },

  css: ['vuetify/styles', "@/assets/main.scss"],

  devtools: { enabled: true },

  typescript: {
    typeCheck: true
  },

  plugins: ['~/plugins/vuetify.ts'],

  modules: [
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
    "@vite-pwa/nuxt",
    "@sidebase/nuxt-auth",
    "@pinia/nuxt",
    "@nuxtjs/i18n",
    '@nuxt/image',
    '@nuxtjs/google-fonts',
    /* Treeshaking: https://vuetifyjs.com/en/features/treeshaking/#automatic-treeshaking */
    async (options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        config?.plugins?.push(vuetify());
      });
    }
  ],

  // Sitemap Configuration
  sitemap: {
    urls: [
      { loc: '/', lastmod: '2025-07-17', priority: 1.0 },
      { loc: '/projects', lastmod: '2025-07-17', priority: 0.8 },
      { loc: '/projects/element', lastmod: '2025-07-17', priority: 0.8 },
      { loc: '/projects/emt-links', lastmod: '2025-07-17', priority: 0.3 },
      { loc: '/projects/prociv', lastmod: '2025-07-17', priority: 0.8 },
      { loc: '/projects/kaish-dbd', lastmod: '2025-07-17', priority: 0.8 },
      { loc: '/projects/fileharbor', lastmod: '2025-07-17', priority: 0.3 },
      { loc: '/projects/stream-scanner', lastmod: '2025-07-17', priority: 0.3 },
      { loc: '/projects/respondo', lastmod: '2025-07-17', priority: 0.3 },
      { loc: '/projects/ziplink', lastmod: '2025-07-17', priority: 0.3 },
      { loc: '/projects/puma-arts', lastmod: '2025-07-17', priority: 0.3 },
      { loc: '/projects/alertconnector', lastmod: '2025-07-17', priority: 0.3 },
      { loc: '/projects/alirdb', lastmod: '2025-07-17', priority: 0.3 },
      { loc: '/projects/alircommunity', lastmod: '2025-07-17', priority: 0.3 },
      { loc: '/projects/nuxt3-vuetify', lastmod: '2025-07-17', priority: 0.3 },
      { loc: '/projects/gymtrack', lastmod: '2025-07-17', priority: 0.3 },
      { loc: '/blog', lastmod: '2025-07-17', priority: 0.8 },
      { loc: '/auth/login', lastmod: '2025-07-17', priority: 0.3 },
      { loc: '/auth/password/forgot', lastmod: '2025-07-01', priority: 0.3 },
      { loc: '/auth/password/reset', lastmod: '2025-07-17', priority: 0.3 },
      { loc: '/legal/terms', lastmod: '2025-07-17', priority: 0.3 },
      { loc: '/legal/privacy-policy', lastmod: '2025-07-17', priority: 0.3 },
    ]
  },

  // I18N Configuration
  i18n: {
    lazy: true,
    langDir: 'locales',
    strategy: 'no_prefix',
    locales: [
      { code: 'en', language: 'en-US', file: 'en.json' },
      { code: 'it', language: 'it-IT', file: 'it.json' }
    ],
    detectBrowserLanguage: {
      useCookie: false
    },
    defaultLocale: "it",
  },

  // Google Fonts Configuration
  googleFonts: {
    families: {
      Inter: [400, 500, 700],
      Poppins: [400, 500, 700],
    },
    display: 'swap',
    prefetch: true,
    preconnect: true,
    preload: true,
  },

  pwa: {
    includeAssets: ["favicon.ico", "robots.txt"],
    manifest: {
      name: shortTitle,
      short_name: shortTitle,
      description: description,
      theme_color: themeColor,
      lang: "en",
      background_color: "#ffffff",
      icons: [
        {
          src: "/icons/pwa-192x192.png",
          sizes: "192x192",
          type: "image/png",
          purpose: "any",
        },
        {
          src: "/icons/pwa-512x512.png",
          sizes: "512x512",
          type: "image/png",
          purpose: "any",
        },
      ],
    },
  },

  auth: {
    // https://github.com/geraldmuvengei06/nuxt-3-auth-credentials/blob/main/nuxt.config.ts
    isEnabled: true,
    baseURL: 'https://andreatombolato.dev/api/v1',
    provider: {
      type: 'local',
      pages: {
        login: '/auth/login'
      },
      endpoints: {
        signIn: { path: '/users/login', method: 'post' },
        signOut: { path: '/users/logout', method: 'post' },
        getSession: { path: '/users/me', method: 'get' }
      },
    }
  },

  build: {
    transpile: ["vuetify"],
  },

  // Nuxt compatibility date
  compatibilityDate: '2025-07-17',
});
