<script setup lang="ts">
import WorkCard from "~/components/homepage/work/WorkCard.vue";
import { useAboutStore } from "~/stores/about"
const aboutStore = useAboutStore();
let works = aboutStore.getAllWorks;

const currentLocale = useI18n().locale;
const currentLocaleIsItalian = computed(() => currentLocale.value === 'it-IT');
</script>

<template>
  <v-card class="card mt-6 round-border">
    <v-card-title class="gradient-border-bottom round-border">
      <h2 class="ml-2" style="font-size: xx-large; font-weight: bolder">
        {{ $t('works.title.one') }}
      </h2>
    </v-card-title>
    <v-card-text class="mt-4">
      <v-row class="px-0 px-sm-0 pa-md-2">
        <v-col v-for="(work, i) in works" :key="i" cols="12" md="6">
          <work-card
            :title="currentLocaleIsItalian ? work.title.it : work.title.en"
            :image="work.logo"
            :company="work.company"
            :period="work.period"
            :website="work.website"
            :description="currentLocaleIsItalian ? work.description.it : work.description.en"
          />
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>
