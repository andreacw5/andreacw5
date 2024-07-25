import { createVuetify } from "vuetify";

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    ssr: true,
    defaults,
    locale: {
      locale: "it",
      fallback: "en",
    },
    // add theme
    theme: {
      defaultTheme: DARK_THEME,
      themes: {
        light,
        dark,
      },
    },
    // Add the custom iconset
    icons: {
      defaultSet: "custom",
      aliases,
      sets: {
        custom,
      },
    },
  });

  app.vueApp.use(vuetify);
});
