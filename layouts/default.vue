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
      <v-main class="mt-sm-0">
        <slot />
        <v-fab
          class="ms-4 mb-4 round-border"
          location="bottom end"
          size="64"
          color="#00A86B"
          app
          appear
          @click="scrollToTop"
        >
          <v-icon size="40" color="white">line-md:arrow-small-up</v-icon>
        </v-fab>
        <snack-bar />
      </v-main>
      <main-footer />
    </v-main>
  </v-app>
</template>
<script setup lang="ts">
import MainHeader from "~/components/layout/MainHeader.vue";
import MainFooter from "~/components/layout/MainFooter.vue";
import SnackBar from "~/components/shared/SnackBar.vue";

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
</script>
