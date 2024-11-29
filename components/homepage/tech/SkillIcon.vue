<script setup lang="ts">
import { ref, computed } from 'vue';
import { Icon } from "@iconify/vue";

const props = defineProps({
  skill: {
    type: Object,
    required: true
  }
});

const isHovered = ref(false);

const handleMouseOver = () => {
  isHovered.value = true;
};

const handleMouseLeave = () => {
  isHovered.value = false;
};

const avatarColor = computed(() => {
  return isHovered.value ? props.skill.color : '#41b883';
});
</script>

<template>
  <a :href="skill.url" target="_blank">
    <v-tooltip :text="skill.title" location="top">
      <template v-slot:activator="{ props }">
        <v-avatar
          size="75"
          class="border card ma-2"
          style="border-radius: 7px !important;"
          color="transparent"
          tile
          @mouseover="handleMouseOver"
          @mouseleave="handleMouseLeave"
        >
          <Icon
            :icon="skill.icon"
            height="45"
            class="transition-big ma-2 icon"
            v-bind="props"
          />
        </v-avatar>
      </template>
      <span>{{ skill.title }}</span>
    </v-tooltip>
  </a>
</template>

<style scoped lang="scss">
.transition-big:hover {
  transform: scale(1.3);
}

.icon {
  color: rgba(var(--v-theme-on-background), var(--v-medium-emphasis-opacity));
  transition: transform 0.3s ease-in-out, color 0.3s ease-in-out;
}

.icon:hover {
  transform: scale(1.3);
  color: var(--color-primary) !important;
}
</style>
