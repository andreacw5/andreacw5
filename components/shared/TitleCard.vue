<script setup lang="ts">
defineProps({
  title: {
    type: String,
    default: ''
  },
  breadcrumb: {
    type: Array,
    default: () => []
  },
  image: {
    type: String
  },
  icon: {
    type: String
  }
})
</script>

<template>
  <v-card
    class="mx-auto card-header round-border"
    elevation="2"
  >
    <template v-slot:title>
      <h2 style="font-weight: bolder" class="ml-3 text-h3">
        {{ title }}
      </h2>
    </template>
    <template v-slot:subtitle>
      <v-breadcrumbs density="compact" :items="breadcrumb" />
    </template>
    <template v-slot:append>
      <v-avatar
        v-if="image"
        class="mr-1 common-card round-border mb-3"
        size="80"
        :image="image"
        tile
      />
      <v-icon
        v-if="icon"
        class="mr-1 common-card mb-3"
        size="80"
      >
        {{ icon }}
      </v-icon>
    </template>
  </v-card>
</template>

<style scoped>

</style>
