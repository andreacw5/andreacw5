<template>
  <v-row wrap>
    <v-col cols="10">
      <h1 class="rubik-font text-uppercase" style="font-size: xx-large; font-weight: bolder">
        Andrea <span class="green-text">Tombolato</span>
      </h1>
    </v-col>
    <v-col cols="2" justify="end" no-gutters>
      <language-menu />
      <v-btn icon class="icon mt-2" @click="toggleDarkMode">
        <v-icon v-if="isDarkMode()" size="27">
          mdi-white-balance-sunny
        </v-icon>
        <v-icon v-else size="27">
          mdi-weather-night
        </v-icon>
      </v-btn>
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

<style scoped>
.icon {
  color: var(--color) !important;
}
</style>
