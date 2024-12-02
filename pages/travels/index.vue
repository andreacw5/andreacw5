<script setup>
import TitleCard from "~/components/shared/TitleCard.vue";
import { useI18n } from '#imports'
const { t } = useI18n();

useHead({
  title: t('travels.title'),
})

import TravelListCard from "~/components/travels/TravelListCard.vue";
const loading = ref(false)
import { useTravelStore } from "~/stores/travels"
const travelStore = useTravelStore();
let travels = travelStore.getAllTravels;

const breadcrumb = [
  { title: 'Home', to: '/' },
  { title: t('travels.title'), to: '/travels', active: true },
];
</script>


<template>
  <v-container class="v-col-auto grid-list-md text-xs-center ms-auto">
    <v-container class="grid-list-sm text-xs-center">
      <v-card class="card round-border mb-8">
        <title-card
          :title="$t('travels.title')"
          :breadcrumb="breadcrumb"
          icon="line-md:compass-loop"
        />
        <v-card-text class="mt-4">
          <v-container grid-list-md text-xs-center>
            <v-row v-if="loading">
              <v-col v-for="(i) in 6" :key="i" cols="12">
                <v-skeleton-loader
                  :id="i"
                  type="image"
                  class="round-border card"
                ></v-skeleton-loader>
              </v-col>
            </v-row>
            <v-row v-else>
              <template v-for="(travel, i) in travels" :key="i">
                <v-col cols="12" class="px-0 px-sm-0 pa-md-2">
                  <travel-list-card :travel="travel" />
                </v-col>
              </template>
            </v-row>
          </v-container>
        </v-card-text>
      </v-card>
    </v-container>
  </v-container>
</template>
