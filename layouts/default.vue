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
      <Header />
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
  }
}
</script>
