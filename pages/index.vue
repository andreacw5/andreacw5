<template>
  <v-container class="v-col-auto grid-list-sm text-xs-center ms-auto fill-height" fluid>
    <v-container class="grid-list-sm text-xs-center mb-10 mt-sm-0">
      <!-- Main about section -->
      <about-section />
      <!-- My tech stack section -->
      <tech-section />
      <!-- Key number section -->
      <key-number-section />
      <!-- My working path section -->
      <work-section />
      <!-- Contact me section -->
      <contact-me />
    </v-container>
  </v-container>
</template>

<script setup>
import AboutSection from "~/components/homepage/AboutSection.vue";
import TechSection from "~/components/homepage/TechSection.vue";
import WorkSection from "~/components/homepage/WorkSection.vue";
import KeyNumberSection from "~/components/homepage/KeyNumberSection.vue";
import ContactMe from "~/components/homepage/ContactMe.vue";

useHead({
  title: 'Andrea Tombolato',
  titleTemplate: null
})
const TITLE = 'Andrea Tombolato - Web Developer'
const DESCRIPTION = 'Andrea Tombolato, Web Developer con base a Milano e questo è il mio sito personale!'
useServerSeoMeta({
  ogTitle: () => TITLE,
  title: () => TITLE,
  description: () => DESCRIPTION,
  ogDescription: () => DESCRIPTION,
  ogImage: () => 'https://file-harbor.com/api/v1/files/59eede5fb0b097a63e0eb276add71e83',
  ogImageUrl: () => 'https://file-harbor.com/api/v1/files/59eede5fb0b097a63e0eb276add71e83',
  twitterCard: () => 'summary_large_image',
  twitterTitle: () => TITLE,
  twitterDescription: () => DESCRIPTION,
  twitterImage: () => 'https://file-harbor.com/api/v1/files/59eede5fb0b097a63e0eb276add71e83',
  ogUrl: () => 'https://andreacw.dev'
})
</script>
