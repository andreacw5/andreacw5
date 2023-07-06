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
      <main-header />
      <nuxt />
      <main-footer />
    </v-main>
  </v-app>
</template>

<script>
import MainHeader from '../components/layout/Header.vue'
import MainFooter from '@/components/layout/Footer.vue'
export default {
  name: 'DefaultLayout',
  components: { MainHeader, MainFooter },
  head: {
    titleTemplate: '%s' || 'Andrea Tombolato'
  }
}
</script>
