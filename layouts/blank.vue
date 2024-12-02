<script setup lang="ts">
import SnackBar from "~/components/shared/SnackBar.vue";
</script>

<template>
  <v-app class="background">
    <v-layout>
      <slot />
      <snack-bar />
    </v-layout>
    <div class="mb-3 text-center" style="font-weight: bold">
      <nuxt-link class="link mr-4" to="/legal/terms">
        {{ $t('auth.terms') }}
      </nuxt-link>
      <nuxt-link class="link" to="/legal/privacy-policy">
        {{ $t('auth.privacy') }}
      </nuxt-link>
      <a
        class="link ml-4 hidden-sm-and-down"
        target="_blank"
        href="https://status.andreatombolato.dev/en/"
      >
        {{ $t('auth.status') }}
      </a>
    </div>
  </v-app>
</template>

<style scoped>
.background {
  background: #121212FF; /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #121212FF, #00A86B); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #121212FF, #00A86B); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}

.link {
  color: #bdbdbd;
  font-size: 20px !important;
}

.link:hover {
  color: #fff !important;
  text-decoration: underline;
}
</style>
