<script setup lang="ts">
import { useTravelStore } from "~/stores/travels"
import TitleCard from "~/components/shared/TitleCard.vue";
import { useI18n } from "#imports";
import OptimizeImage from "~/components/shared/OptimizeImage.vue";
const { t } = useI18n();
const travelStore = useTravelStore();
const route = useRoute();
let travel = travelStore.getTravelByCode(route.params.code);

const currentLocale = useI18n().locale;
const currentLocaleIsItalian = computed(() => currentLocale.value === 'it-IT');
const travelTitle = currentLocaleIsItalian ? travel?.title?.it : travel?.title?.en;

useHead({
  title: travelTitle,
})
const breadcrumb = [
  { title: 'Home', to: '/' },
  { title: t('travels.title'), to: '/travels' },
  { title: travelTitle, to: '/travels/' + travel.code, active: true },
];
</script>

<template>
  <v-container class="v-col-auto grid-list-md text-xs-center ms-auto">
    <v-container class="grid-list-sm text-xs-center">
      <v-card class="card round-border mb-8">
        <title-card
          :title="travelTitle"
          :breadcrumb="breadcrumb"
          icon="line-md:compass-loop"
        />
        <v-card-text class="mt-4">
          <v-row class="ma-3" dense>
            <template v-for="(item) in travel.gallery" :key="imgIdx">
              <v-col cols="12" :lg="item.cols" :xl="item.cols">
                <optimize-image :src="item.image" :height="600" class="round-border" />
              </v-col>
            </template>
          </v-row>
        </v-card-text>
      </v-card>
    </v-container>
  </v-container>
</template>

<style scoped>

</style>
