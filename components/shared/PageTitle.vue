<script setup lang="ts">
interface BreadcrumbItem {
  title: string;
  to: string;
  active?: boolean;
}

defineProps({
  title: {
    type: String,
    default: ''
  },
  icon: {
    type: String
  },
  breadcrumbs: {
    type: Array as PropType<BreadcrumbItem[]>,
    default: () => []
  }
})
</script>

<template>
  <v-breadcrumbs
    v-if="breadcrumbs.length"
    class="px-0 pb-2 text-body-2"
    :items="breadcrumbs"
  />
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
    <div class="d-flex ga-2 align-center pt-3 pt-sm-0 pt-lg-0">
      <slot />
    </div>
  </div>
</template>

<style scoped>

</style>
