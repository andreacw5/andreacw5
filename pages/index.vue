<template>
  <v-container class="v-col-auto grid-list-sm text-xs-center ms-auto">
    <v-container class="grid-list-sm text-xs-center mb-10">
      <!-- Main about section -->
      <about-section />
      <!-- My tech stack section -->
      <tech-section />
      <!-- My working path section -->
      <work-section />
    </v-container>
  </v-container>
</template>

<script setup>
import AboutSection from "~/components/homepage/AboutSection.vue";
import TechSection from "~/components/homepage/TechSection.vue";
import WorkSection from "~/components/homepage/WorkSection.vue";
useHead({
  title: 'Andrea Tombolato',
  titleTemplate: null,
  meta: [
    {
      name: 'description',
      content: 'Andrea Tombolato, Web Developer con base a Milano e questo è il mio sito personale!'
    },
    {
      property: 'og:image',
      content: 'https://file-harbor.com/api/v1/files/59eede5fb0b097a63e0eb276add71e83'
    },
    {
      property: 'url',
      content: 'https://andreacw.dev'
    }
  ]
})
</script>
