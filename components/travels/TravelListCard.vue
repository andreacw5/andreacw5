<script setup lang="ts">
import { formatInTimeZone } from "date-fns-tz";
import { it } from "date-fns/locale";

defineProps({
  travel: {
    type: Object,
    required: true
  }
})
function formatDate(time: string) {
  const timeZone = 'Europe/Rome';
  return formatInTimeZone(new Date(time), timeZone, 'MM/yyyy', {
    locale: it
  });
}

const currentLocale = useI18n().locale;
const currentLocaleIsItalian = computed(() => currentLocale.value === 'it-IT');

const img = useImage()
const optimizedImage = (src: string) => img(src, { quality: 70, format: 'webp', fit: 'crop' })
</script>

<template>
<!--  <nuxt-link :to="'travels/' + travel.code">-->
    <v-card
      class="mx-auto atom-card card-gradient common-card round-border text-center"
      :image="optimizedImage(travel.background)"
      min-height="190"
    >
      <template v-slot:image>
        <v-img gradient="to top, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)" />
      </template>
      <v-card-actions class="text-white">
        <v-chip prepend-icon="line-md:map-marker" tile variant="elevated" rounded="lg" class="round-border chip-transparent">
          {{ currentLocaleIsItalian ? travel.state.it : travel.state.en }}
        </v-chip>
        <v-spacer />
        <v-tooltip text="Data di inizio del viaggio" location="top">
          <template v-slot:activator="{ props }">
            <v-chip prepend-icon="line-md:calendar" tile variant="elevated" class="round-border mr-2 chip-transparent" rounded="lg" v-bind="props">
              {{ formatDate(travel.time.start) }}
            </v-chip>
          </template>
        </v-tooltip>
        <v-tooltip text="Foto scattate" location="top">
          <template v-slot:activator="{ props }">
            <v-chip prepend-icon="line-md:image" tile variant="elevated" class="round-border chip-transparent" rounded="lg" v-bind="props">
              {{ travel.photos || 0 }}
            </v-chip>
          </template>
        </v-tooltip>
      </v-card-actions>
      <v-card-text>
        <div class="card-content-wrapper fill-height title-centered">
          <div class="card-title">
            {{ currentLocaleIsItalian ? travel.title.it : travel.title.en }}
          </div>
        </div>
      </v-card-text>
    </v-card>
<!--  </nuxt-link>-->
</template>

<style scoped lang="scss">
.card-title {
  background-color: transparentize($color: #1d1d1d, $amount: 0.25);
  padding: 12px;
  transition: 0.3s ease all;
  border-radius: 14px;
  font-size: 1.06rem;
  font-weight: 600;
}
.chip-transparent {
  background-color: rgba(45, 45, 46, 0.85);
  color: white;
}
.card-content-wrapper {
  position: relative;
  display: block;

  &.title-centered {
    display: flex;
    align-items: center;
    justify-content: center;

    .card-title {
      position: static;
      width: auto;
      border-radius: 14px !important;
      padding: 10px;
      font-size: 2rem;
    }
  }
}
</style>
