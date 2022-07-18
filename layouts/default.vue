<template>
  <v-app class="area">
    <!--[if lte IE 9]>
      <p class="browserupgrade">
      You are using an <strong>outdated</strong> browser. Please
      <a href="https://browsehappy.com/">upgrade your browser</a> to improve
      your experience and security.
      </p>
    <![endif]-->

    <v-main class="gradient">
      <Header @toggleDarkMode="toggleDarkMode" />
      <nuxt />
    </v-main>
  </v-app>
</template>

<script>
import Header from '../components/layout/Header'
export default {
  name: 'DefaultLayout',
  components: { Header },
  head: {
    titleTemplate: '%s'
  },
  methods: {
    toggleDarkMode () {
      if (
        this.$colorMode.preference === 'dark' ||
        (this.$colorMode.preference === 'system' &&
          this.$colorMode.value === 'dark')
      ) {
        this.$colorMode.preference = 'light'
      } else {
        this.$colorMode.preference = 'dark'
      }
    }
  }
}
</script>

<style>
.back {
  background: url("https://helm.sh/img/topography.png") repeat scroll left top;
}
</style>
