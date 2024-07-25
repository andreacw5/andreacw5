<script setup lang="ts">
import { formatInTimeZone } from 'date-fns-tz'
import { it, enGB } from 'date-fns/locale'

defineProps({
  title: {
    type: String,
    required: true
  },
  company: {
    type: String,
    default: ''
  },
  image: {
    type: String,
    required: true
  },
  period: {
    type: Object,
    default: () => ({
      start: '',
      end: ''
    })
  },
  description: {
    type: String,
    default: ''
  },
  website: {
    type: String,
    default: ''
  }
})

function formatDate(time: string) {
  const timeZone = 'Europe/Rome';
  return formatInTimeZone(new Date(time), timeZone, 'MM/yyyy', {
    locale: it
  });
}
const show = ref(false);
</script>

<template>
  <v-card
    :title="title"
    class="mx-auto atom-card mx-auto card-gradient round-border"
    elevation="2"
    density="comfortable"
  >
    <template v-slot:subtitle>
      <p class="text-subtitle-1">{{ company }}</p>
    </template>
    <template v-slot:prepend>
      <v-avatar
        color="blue-darken-2 mr-1 common-card round-border"
        size="50"
        :image="image"
        tile
      />
    </template>
    <v-card-actions>
      <span class="ml-2 white-text">
        {{ formatDate(period.start) }}
        <span> - </span>
        <template v-if="period.end">
          {{ formatDate(period.end) }}
        </template>
        <template v-else>
          {{ $t('works.today') }}
        </template>
      </span>
      <v-spacer />
      <v-btn
        :icon="true"
        @click="show = !show"
      >
        <v-icon size="x-large">{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
      <v-btn :href="website" :icon="true">
        <v-icon size="x-large" class="white-text">mdi-earth</v-icon>
      </v-btn>
    </v-card-actions>
    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
          {{ description }}
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>

<style scoped>
.v-card {
  line-height: 1.4!important;
}
</style>
