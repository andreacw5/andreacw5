<template>
  <common-card
    :title="isLocaleItalian ? travel.title.it : travel.title.en"
    :image="travel.background"
    :gradient="true"
    :title-centered="true"
    :aspect-ratio="805 / 140"
     url=""
    >
    <template #card-content>
      <v-row class="fill-height align-center">
        <v-col cols="4" class="date-col travels-col px-1">
          <div class="mb-1 text-h6">
            {{ $t('travels.start') }}
          </div>
          <div>{{ travel.time.start | formatDate('dd/MM/yyyy') }}</div>
        </v-col>
        <v-col cols="4" class="date-col travels-col px-1">
          <div class="mb-1 text-h6">
            {{ $t('travels.photos') }}
          </div>
          <div>{{ travel.photos || 0 }}</div>
        </v-col>
        <v-col cols="4" class="attendants-col travels-col px-1">
          <div class="mb-1 text-h6">
            {{ $t('travels.days') }}
          </div>
          <div>{{ countDays || 0 }}</div>
        </v-col>
      </v-row>
    </template>
  </common-card>
</template>

<script>
import { intervalToDuration } from 'date-fns'
import CommonCard from '@/components/CommonCard.vue'
export default {
  name: 'TravelListCard',
  components: {
    CommonCard
  },
  props: {
    travel: {
      type: Object,
      required: true
    }
  },
  computed: {
    isLocaleItalian () {
      return this.$i18n.locale === 'it'
    },
    countDays () {
      return intervalToDuration({
        start: new Date(this.travel.time.start),
        end: new Date(this.travel.time.end)
      }).days + 1
    }
  }
}
</script>

<style scoped lang="scss">
.travels-col + .travels-col {
  border-left: 1px solid transparentize(#fafafa, 0.7);
}
</style>
