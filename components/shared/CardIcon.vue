<script setup lang="ts">
const props = defineProps({
  item: {
    type: Object,
    default: () => ({
      title: '',
      subtitle: '',
      icon: '',
      hover: ''
    })
  }
})

const isHovered = ref(false);

const handleMouseOver = () => {
  isHovered.value = true;
};

const handleMouseLeave = () => {
  isHovered.value = false;
};
</script>

<template>
  <v-tooltip :text="item.hover" location="top">
    <template v-slot:activator="{ props }">
      <v-card
        class="mx-auto d-flex flex-column card green-border"
        style="border-radius: 14px !important;"
        rounded="lg"
        v-bind="props"
        @mouseover="handleMouseOver"
        @mouseleave="handleMouseLeave"
      >
        <v-card-item :subtitle="item.subtitle" :title="item.title">
          <template #prepend>
            <v-avatar
              class="card icon"
              style="border-radius: 7px !important;"
              :icon="item.icon"
              size="50"
            >
              <v-icon
                :class="{ 'icon-hover': isHovered }"
                color="medium-emphasis"
                class="icon"
                size="30"
              />
            </v-avatar>
          </template>
        </v-card-item>
      </v-card>
    </template>
  </v-tooltip>
</template>

<style scoped>
.icon {
  transition: transform 0.3s ease-in-out, color 0.3s ease-in-out;
}

.icon-hover {
  transform: scale(1.3);
  color: var(--color-primary) !important;
}
</style>
