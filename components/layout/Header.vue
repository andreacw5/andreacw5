<template>
  <v-container grid-list-md text-xs-center>
    <v-row wrap>
      <v-col cols="12">
        <h1 class="text-uppercase" style="font-size: xxx-large; font-weight: bolder">
          Andrea <span class="green-text">Tombolato</span>
        </h1>
      </v-col>
      <v-col cols="12">
        <v-app-bar dense class="card">
          <v-spacer />
          <v-btn text href="/" nuxt>
            {{ $t('sections.home') }}
          </v-btn>
          <v-btn text href="/contacts" nuxt>
            {{ $t('sections.contact.title') }}
          </v-btn>
          <v-divider vertical inset class="mr-2 ml-2" />
          <language-menu />
          <v-tooltip bottom>
            <template #activator="{ on, attrs }">
              <v-btn
                v-bind="attrs"
                icon
                v-on="on"
                @click="toggleDarkMode"
              >
                <v-icon v-if="isDarkMode()" size="27">
                  mdi-lightbulb-outline
                </v-icon>
                <v-icon v-else size="27">
                  mdi-lightbulb-on
                </v-icon>
              </v-btn>
            </template>
            <span>{{isDarkMode() ? $t('actions.changeColor.light') : $t('actions.changeColor.dark')}}</span>
          </v-tooltip>
        </v-app-bar>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import LanguageMenu from './LanguageMenu'
export default {
  components: { LanguageMenu },
  methods: {
    toggleDarkMode () {
      this.$emit('toggleDarkMode')
    },
    isDarkMode () {
      return this.$colorMode.preference === 'dark' ||
        (this.$colorMode.preference === 'system' &&
          this.$colorMode.value === 'dark')
    }
  }
}
</script>
