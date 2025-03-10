<script setup lang="ts">
defineProps({
  title: {
    type: String,
    default: ''
  },
  icon: {
    type: String
  }
})
</script>

<template>
  <div class="d-flex align-center flex-column flex-sm-row justify-space-between align-md-center mb-6">
    <h1
      style="font-weight: bolder"
      class="text-h4 text-md-h3 text-lg-h3 ps-1"
    >
      <v-icon
        class="mr-1 mb-2 hidden-sm-and-down"
        size="45"
      >
        {{ icon }}
      </v-icon>
      {{ title }}
    </h1>
    <div class="d-flex ga-4 mt-4 mt-md-0">
      <slot />
    </div>
  </div>
</template>

<style scoped>

</style>
