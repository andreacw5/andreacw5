<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    default: ''
  },
  image: {
    type: String
  },
  website: {
    type: String,
    default: null
  },
  linkedin: {
    type: String,
    default: null
  },
  instagram: {
    type: String,
    default: null
  },
})
</script>

<template>
  <v-card class="mx-auto" rounded="lg" style="background-color: #282829">
    <v-card-item>
      <v-card-title class="d-flex align-center justify-space-between">
        <div class="text-h6">
          {{ title }}
        </div>
      </v-card-title>

      <v-sheet class="d-flex ga-1 align-center mt-1" style="background: transparent !important; border: none !important;">
        <v-btn v-if="linkedin" target="_blank" :href="linkedin" border icon="mdi-linkedin" size="x-small" variant="text" />
        <v-btn v-if="instagram" target="_blank" :href="instagram" border icon="mdi-instagram" size="x-small" variant="text" />
        <v-btn
          v-if="website"
          border
          class="text-none"
          prepend-icon="line-md:external-link"
          rounded
          size="small"
          text="Website"
          variant="text"
          target="_blank"
          :href="website"
        />
      </v-sheet>

      <template #prepend>
        <v-avatar
          :image="image"
          icon="$vuetify"
          rounded
          border
          size="64"
          start
        />
      </template>
    </v-card-item>
  </v-card>
</template>

<style scoped>

</style>
