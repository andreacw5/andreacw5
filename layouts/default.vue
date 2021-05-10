<template>
  <v-app class="area">
    <!--[if lte IE 9]>
      <p class="browserupgrade">
      You are using an <strong>outdated</strong> browser. Please
      <a href="https://browsehappy.com/">upgrade your browser</a> to improve
      your experience and security.
      </p>
    <![endif]-->

    <v-main>
      <ul class="circles">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <v-container>
        <v-layout column justify-center align-center>
          <Header @toggleDarkMode="toggleDarkMode" />
          <nuxt />
        </v-layout>
      </v-container>
    </v-main>
    <fab-to-top />
    <Footer />
  </v-app>
</template>

<script>
import Footer from '../components/layout/Footer'
import Header from '../components/layout/Header'
import FabToTop from '../components/layout/FabToTop'
export default {
  name: 'DefaultLayout',
  components: { FabToTop, Footer, Header },
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
