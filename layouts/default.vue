<template>
  <v-app>
    <v-main>
      <v-container>
        <v-layout column justify-center align-center>
          <nuxt />
        </v-layout>
      </v-container>
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Footer from '../components/Footer'
export default {
  name: 'DefaultLayout',
  components: { Footer },
  head: {
    titleTemplate: '%s'
  }
}
</script>
