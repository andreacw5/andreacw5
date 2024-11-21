import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import 'vuetify/styles'

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    components,
    directives,
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

  nuxtApp.vueApp.use(vuetify)
})
