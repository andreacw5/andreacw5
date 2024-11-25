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
</script>

<template>
  <v-tooltip :text="item.hover" location="top">
    <template v-slot:activator="{ props }">
      <v-card class="mx-auto d-flex flex-column card green-border" outlined rounded="lg" v-bind="props">
        <v-card-item :subtitle="item.subtitle" :title="item.title">
          <template #prepend>
            <v-avatar class="border" color="surface-light" :icon="item.icon" size="45">
              <v-icon color="medium-emphasis" class="icon" />
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

.icon:hover {
  transform: scale(1.3);
  color: var(--color-primary) !important;
}
</style>
