<template>
  <v-app dark>
    <NavMenu />
    <v-content>
      <nuxt />
    </v-content>
  </v-app>
</template>

<script>
import NavMenu from "~/layouts/shared/navbar.vue";
export default {
  components: {
    NavMenu
  },
  head: {
    titleTemplate: "%s - Andrea Zago",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial scale=1" },
      { hid: "description", name: "description", content: "Meta description" }
    ]
  }
};
</script>

<style>
main {
  background: #c0c0c0;
}
</style>
