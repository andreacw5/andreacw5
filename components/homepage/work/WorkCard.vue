<script setup lang="ts">
import { formatInTimeZone } from 'date-fns-tz'
import { it, enGB } from 'date-fns/locale'
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

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

/**
 * Format the date in the correct format
 * @param time
 */
function formatDate(time: string) {
  const timeZone = 'Europe/Rome';
  return formatInTimeZone(new Date(time), timeZone, 'MM/yyyy', {
    locale: it
  });
}

/**
 * Calculate the total time spent in a company
 * @param start
 * @param end
 */
function totalTime(start: string, end: string) {
  const startDate = new Date(start);
  const endDate = end ? new Date(end) : new Date();
  const diff = Math.abs(endDate.getTime() - startDate.getTime());
  const days = Math.ceil(diff / (1000 * 60 * 60 * 24));
  return days > 365 ? `(${Math.floor(days / 365)} ${t('works.years')})` : `(${days} ${t('works.days')})`;
}

</script>

<template>
  <v-card
    :title="title"
    class="mx-auto green-border mx-auto card-gradient round-border"
    elevation="2"
    density="comfortable"
  >
    <template v-slot:subtitle>
      <p class="text-subtitle-1">{{ company }}</p>
    </template>
    <template v-slot:prepend>
      <v-avatar
        class="border card"
        style="border-radius: 7px !important;"
        color="mr-1 common-card round-border"
        size="50"
        :image="image"
        tile
      />
    </template>
    <v-card-actions>
      <span class="ml-2 white-text font-weight-medium">
        {{ formatDate(period.start) }}
        <span> - </span>
        <template v-if="period.end">
          {{ formatDate(period.end) }}
          <span class="text-medium-emphasis">{{ totalTime(period.start, period.end) }}</span>
        </template>
        <template v-else>
          {{ $t('works.today') }}
          <span class="text-medium-emphasis">{{ totalTime(period.start, new Date().toString()) }}</span>
        </template>
      </span>
      <v-spacer />
      <v-btn
        v-if="website"
        border
        class="text-none"
        prepend-icon="line-md:external-link"
        rounded
        size="small"
        text="Website"
        variant="text"
        target="_blank"
        :href="website"
      />
    </v-card-actions>
  </v-card>
</template>

<style scoped>
.v-card {
  line-height: 1.4!important;
}
</style>
