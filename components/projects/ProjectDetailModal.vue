<script setup lang="ts">
import ImageSlider from "~/components/shared/ImageSlider.vue";
const props = defineProps({
  item: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <v-card class="card round-border">
    <image-slider class="project-image" :images="item.images" :height="400" :interval-val="5000" />
    <v-list
      style="background: transparent !important;"
      class="card-header mb-4"
    >
      <v-list-item>
        <v-list-item-content class="text-left">
          <v-list-item-title>
            <h2>{{ item.title.it }}</h2>
          </v-list-item-title>
          <v-list-item-subtitle>
            <span v-if="item.company">{{ item.company }}</span>
            <span v-if="item.startDate"> | {{ item.startDate }}</span>
          </v-list-item-subtitle>
        </v-list-item-content>
        <v-list-item-action>
          <v-btn
            class="round-border button-hover"
            icon
            tile
            outlined
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-list-item-action>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<style scoped>
.project-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border: solid 1px var(--border-color);
}
</style>
