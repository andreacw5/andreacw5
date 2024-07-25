import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";

// PWA Config
const title = "Andrea Tombolato";
const shortTitle = "Andrea Tombolato";
const description = "Andrea Tombolato, Web Developer con base a Milano e questo è il mio sito personale!";
const image = "https://file-harbor.com/api/v1/files/59eede5fb0b097a63e0eb276add71e83";
const url = "https://andreatombolato.dev/";
const themeColor = "#00A86B";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  // Nuxt compatibility date
  compatibilityDate: '2024-07-15',
  // import styles
  css: ["@/assets/main.scss"],
  devtools: { enabled: true },
  // enable takeover mode
  typescript: { shim: false },
  build: { transpile: ["vuetify"] },
  // Based on docs found here - https://vuetifyjs.com/en/getting-started/installation/#using-nuxt-3
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
  modules: [
    "@vite-pwa/nuxt",
    "@pinia/nuxt",
    "@nuxtjs/i18n",
    async (options, nuxt) => {
      nuxt.hooks.hook("vite:extendConfig", (config) => {
        config.plugins ||= [];
        config.plugins.push(vuetify());
      });
    },
  ],
  app: {
    head: {
      titleTemplate: '%s - Andrea Tombolato',
      title: 'Home',
      htmlAttrs: {
        lang: 'it'
      },
      link: [
        { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" },
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" },
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

  // I18N Configuration
  i18n: {
    /* module options */
    lazy: true,
    langDir: "locales",
    strategy: 'no_prefix',
    locales: [
      {
        code: "en-US",
        iso: "en-US",
        icon: 'flagpack:gb-ukm',
        name: "English",
        file: "en-US.json",
      },{
        code: "it-IT",
        iso: "it-IT",
        icon: 'flagpack:it',
        name: "Italiano",
        file: "it-IT.json",
      },
    ],
    detectBrowserLanguage: {
      useCookie: false
    },
    defaultLocale: "it-IT",
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
});
