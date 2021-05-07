<template>
  <v-app>
    <v-main>
      <v-container>
        <v-layout column justify-center align-center>
          <nuxt />
        </v-layout>
      </v-container>
    </v-main>
    <fab-to-top />
    <Footer />
  </v-app>
</template>

<script>
import Footer from '../components/Footer'
import FabToTop from '../components/FabToTop'
export default {
  name: 'DefaultLayout',
  components: { FabToTop, Footer },
  head: {
    titleTemplate: '%s'
  }
}
</script>
