<script setup lang="ts">
// Add props to the component

const props = defineProps({
  imageUrl: {
    type: String,
    required: true
  },
  altText: {
    type: String,
    default: 'Image'
  },
  height: {
    type: Number,
    default: 300
  },
})
</script>

<template>
  <v-img
    :alt="altText"
    :height="height"
    :src="imageUrl"
    lazy-src="~/assets/branding/loading.webp"
    :aspect-ratio="1"
    :cover="true"
    class="grey darken-3 image-transition"
  >
    <template #placeholder>
      <v-row
        class="fill-height ma-0"
        align="center"
        justify="center"
      >
        <v-progress-circular
          indeterminate
          color="grey lighten-5"
        ></v-progress-circular>
      </v-row>
    </template>
  </v-img>
</template>

<style scoped>

</style>
