<template>
  <v-row wrap>
    <v-col cols="12">
      <h1 class="rubik-font text-uppercase" style="font-size: xxx-large; font-weight: bolder">
        Andrea <span class="green-text">Tombolato</span>
      </h1>
    </v-col>
    <v-col cols="12">
      <v-app-bar dense class="card">
        <v-toolbar-title style="color:#ebf4f1;">aka <span class="green-text">andreacw</span></v-toolbar-title>
        <v-spacer />
        <language-menu />
        <v-tooltip bottom>
          <template #activator="{ on, attrs }">
            <v-btn icon v-bind="attrs" @click="toggleDarkMode" v-on="on">
              <v-icon v-if="isDarkMode()" size="27">
                mdi-white-balance-sunny
              </v-icon>
              <v-icon v-else size="27">
                mdi-weather-night
              </v-icon>
            </v-btn>
          </template>
          <span>{{ isDarkMode ? $t('actions.changeColor.light') : $t('actions.changeColor.dark')}}</span>
        </v-tooltip>
      </v-app-bar>
    </v-col>
  </v-row>
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
