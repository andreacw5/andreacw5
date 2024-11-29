<template>
  <v-app>
    <v-layout>
      <slot />
      <snack-bar />
    </v-layout>
  </v-app>
</template>
<script setup lang="ts">
import SnackBar from "~/components/shared/SnackBar.vue";
</script>
