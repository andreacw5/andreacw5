<template>
  <v-app>
    <v-main>
      <v-container>
        <v-layout column justify-center align-center>
          <nuxt />
        </v-layout>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  head: {
    titleTemplate: '%s'
  }
}
</script>
