<script setup lang="ts">
import type { PropType } from 'vue';

defineProps({
  items: {
    type: Array as PropType<Array<string | number>>,
    required: true
  },
  selectedItems: {
    type: Array as PropType<Array<string | number>>,
    required: true
  },
  label: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    required: true
  }
});

const emit = defineEmits(['update:selectedItems']);
</script>

<template>
  <v-btn
    append-icon="line-md:chevron-small-down"
    class="text-none"
    height="40"
    :prepend-icon="icon"
    rounded="lg"
    variant="outlined"
  >
    {{ label }}

    <v-badge
      v-if="selectedItems.length"
      color="primary"
      :content="selectedItems.length"
      floating
      offset-x="-20"
      offset-y="-10"
    />

    <v-menu activator="parent" :close-on-content-click="false" location="bottom end">
      <v-list
        :model-value="selectedItems"
        @update:model-value="(newValue: string | number[]) => emit('update:selectedItems', newValue)"
        select-strategy="leaf"
        style="background: #202022"
      >
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :title="item"
          :value="item"
        >
          <template #prepend="{ isSelected }">
            <v-list-item-action start>
              <v-checkbox-btn :model-value="isSelected" />
            </v-list-item-action>
          </template>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-btn>
</template>
