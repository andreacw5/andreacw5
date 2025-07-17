<script setup lang="ts">
const props = defineProps({
  item: {
    type: Object,
    required: true
  },
})

import { useBlogStore } from "@/stores/blog"
const blogStore = useBlogStore();
const category = blogStore.getCategoryByCode(props.item.category) || {
  name: props.item.category,
  color: 'grey'
};

const formattedDate = computed(() => {
  return new Date(props.item.created_at).toLocaleDateString();
})

</script>

<template>
  <v-card class="card round-border" link :to="'/blog/' + item.code">
    <v-img
      cover
      height="250"
      :src="item.cover"
      class="gradient-border-bottom"
      gradient="to bottom, rgba(var(--v-theme-surface), 0.1) 60%, rgba(0,0,0, 1)"
      content-class="d-flex align-end justify-end"
    >
    </v-img>
    <v-card-text class="pb-2">
      <p class="text-wrap text-h5 mb-2">{{ item.title }}</p>

      <div class="d-flex align-center ga-2 my-2">
        <v-chip class="text-caption text-medium-emphasis" size="small" :color="category.color" variant="outlined">
          <v-icon icon="mdi:tag-outline" class="mr-1" size="small" :color="category.color" />
          {{ category.name }}
        </v-chip>
        <v-chip class="text-caption text-medium-emphasis" size="small" variant="outlined">
          <v-icon icon="mdi:clock-time-eight-outline" class="mr-1" size="small" />
          {{ formattedDate }}
        </v-chip>
      </div>

      <p class="text-body-2 text-medium-emphasis mt-1 mb-1 text-truncate">
        {{ item.short }}
      </p>
    </v-card-text>
  </v-card>
</template>

<style scoped>

</style>
