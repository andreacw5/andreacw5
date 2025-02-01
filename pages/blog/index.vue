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
  { title: t('blogs.title'), to: '/blog', active: true },
];
</script>


<template>
  <v-container class="v-col-auto grid-list-md text-xs-center ms-auto mb-16">
    <v-container class="grid-list-sm text-xs-center">
      <div class="d-flex justify-space-between align-center flex-wrap ga-3">
        <h1
          style="font-weight: bolder"
          class="text-h4 text-md-h3 text-lg-h3 ps-1"
        >
          <v-icon
            class="mr-1 mb-2 hidden-sm-and-down"
            size="45"
          >
            line-md:cloud-alt-print-loop
          </v-icon>
          Blogs
        </h1>
        <div class="d-flex ga-2 align-center">
          <v-btn
            class="text-none"
            color="primary"
            rounded="lg"
            text="Publish"
            variant="flat"
          />
        </div>
      </div>
      <v-breadcrumbs class="px-0 pb-0 text-body-2" :items="breadcrumb" />
    </v-container>
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
          <v-col cols="12" xl="3" md="4" sm="6" class="d-flex ga-6 py-3 justify-center pa-2">
            <v-card class="card round-border" link :ripple="false">
              <v-img
                cover
                height="150"
                :src="travel.background"
              />

              <v-card-title>
                {{ travel.title.it }}
                <v-chip size="x-small">Travel</v-chip>
              </v-card-title>

              <v-card-text class="pb-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus!
              </v-card-text>
              <v-card-actions>

                <v-chip
                  class="mr-2"
                  color="primary"
                  label
                  small
                  v-text="travel.state.it"
                ></v-chip>
                <v-chip
                  class="mr-2"
                  color="primary"
                  label
                  small
                  v-text="travel.time.start"
                ></v-chip>
              </v-card-actions>
            </v-card>
          </v-col>
        </template>
      </v-row>
    </v-container>
  </v-container>
</template>
