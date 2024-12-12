<script setup lang="ts">
interface FeatureItem {
  title: string;
  subtitle: string;
  icon: string;
}

defineProps<{
  features: FeatureItem[];
}>();
</script>

<template>
  <v-row dense>
    <v-col
      v-for="(item, i) in features"
      :key="i"
      cols="12"
    >
      <v-list-item
        class="px-1"
        lines="two"
        rounded="lg"
        density="compact"
        :subtitle="item.subtitle"
      >
        <template #prepend>
          <v-avatar
            class="card icon"
            style="border-radius: 7px !important;"
            :icon="item.icon"
            size="40"
          >
            <v-icon
              color="medium-emphasis"
              class="icon"
              size="25"
            />
          </v-avatar>
        </template>

        <template #title>
          <span class="text-body-4 font-weight-bold">{{ item.title }}</span>
        </template>
      </v-list-item>
    </v-col>
  </v-row>
</template>

<style scoped>

</style>
