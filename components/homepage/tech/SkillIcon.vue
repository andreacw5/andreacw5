<script setup lang="ts">
import { ref, computed } from 'vue';
import { Icon } from "@iconify/vue";

interface IconWithUrl {
  url?: string;
  icon: string;
  title: string;
}

defineProps<{
  skill: IconWithUrl;
}>();

const isHovered = ref(false);

const handleMouseOver = () => {
  isHovered.value = true;
};

const handleMouseLeave = () => {
  isHovered.value = false;
};
</script>

<template>
  <v-tooltip :text="skill.title" location="top">
    <template v-slot:activator="{ props }">
      <a :href="skill.url" target="_blank" v-bind="props" class="mr-2 mb-2 mb-lg-0 mb-md-2">
        <v-card
          class="mx-auto d-flex flex-column card green-border"
          rounded="lg"
          @mouseover="handleMouseOver"
          @mouseleave="handleMouseLeave"
        >
          <v-avatar size="75" tile>
            <Icon
              :class="{ 'icon-hover': isHovered }"
              :icon="skill.icon"
              height="45"
              class="icon"
            />
          </v-avatar>
        </v-card>
      </a>
    </template>
  </v-tooltip>
</template>

<style scoped lang="scss">
.icon {
  transition: transform 0.3s ease-in-out, color 0.3s ease-in-out;
}

.icon-hover {
  transform: scale(1.3);
  color: var(--color-primary) !important;
}
</style>
