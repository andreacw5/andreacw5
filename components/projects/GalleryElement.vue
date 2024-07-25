<script setup lang="ts">
defineProps({
  image: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  }
})
const dialog = ref(false)
</script>

<template>
  <a @click="dialog = true" style="cursor: pointer">
    <v-card class="atom-card common-card mx-auto card-gradient round-border">
      <v-img
        :src="image"
        position="top"
        cover
      />
      <v-card-text class="mt-0 mb-0">
        <p class="text-center text-subtitle-2">{{ title }}</p>
      </v-card-text>
    </v-card>
  </a>
  <v-dialog v-model="dialog" max-width="1200">
    <template v-slot:default="{ isActive }">
      <v-card class="round-border" rounded style="background-color: #282829;">
        <v-card-title class="d-flex justify-space-between align-center">
          <div class="text-h5 ps-2">
            {{ title }}
          </div>
          <v-btn
            icon="mdi-close"
            variant="text"
            size="large"
            @click="isActive.value = false"
          ></v-btn>
        </v-card-title>
        <v-divider />
        <v-img
          :src="image"
          :alt="title"
        ></v-img>
      </v-card>
    </template>
  </v-dialog>
</template>

<style scoped>
</style>
