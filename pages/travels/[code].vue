<script setup lang="ts">
import { useTravelStore } from "~/stores/travels"
const travelStore = useTravelStore();
const route = useRoute();
let travel = travelStore.getTravelByCode(route.params.code);

useHead({
  title: travel.title.it,
})
</script>

<template>
  <v-container class="v-col-auto grid-list-md text-xs-center ms-auto">
    <v-container class="grid-list-sm text-xs-center">
      <v-card class="card round-border mb-8">
        <v-card-title class="card-header round-border">
          <h2 class="ml-4" style="font-size: xxx-large; font-weight: bolder">
            {{ travel.title.it }}
          </h2>
        </v-card-title>
        <v-card-text class="mt-4">
          {{ travel }}
          <v-row dense>
            <v-col
              v-for="n in 20"
              :key="n"
              class="d-flex child-flex"
              cols="12"
              sm="6"
              md="4"
              lg="4"
            >
              <v-img
                lazy-src="~/assets/branding/loading.webp"
                :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"
                aspect-ratio="1"
                class="bg-grey-lighten-2"
                cover
              >
                <template v-slot:placeholder>
                  <v-row
                    align="center"
                    class="fill-height ma-0"
                    justify="center"
                  >
                    <v-progress-circular
                      color="grey-lighten-5"
                      indeterminate
                    ></v-progress-circular>
                  </v-row>
                </template>
              </v-img>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-container>
  </v-container>
</template>

<style scoped>

</style>
