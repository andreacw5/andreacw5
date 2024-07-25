<script setup lang="ts">
import { Icon } from "@iconify/vue";

const props = defineProps({
  skill: {
    type: Object,
    required: true
  }
})
const styleObject = computed(() => {
  return {
    '--color-hover': props.skill.color
  }
})
</script>

<template>
  <a :href="skill.url" target="_blank">
    <v-tooltip location="top">
      <template v-slot:activator="{ props }">
        <Icon
          :icon="skill.icon"
          height="45"
          class="transition-big ma-2 icon"
          :style="styleObject"
          v-bind="props"
        />
      </template>
      <span>{{ skill.title }}</span>
    </v-tooltip>
  </a>
</template>

<style scoped lang="scss">
.transition-big:hover {
  transform: scale(1.6);
}
.icon {
  color: var(--color);
}

.icon:hover {
  color: var(--color-hover);
}
</style>
