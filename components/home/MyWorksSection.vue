<template>
  <v-card class="card mt-4">
    <v-card-title>
      <h1 class="text-uppercase large-title" style="font-size: x-large; font-weight: bolder">
        <template v-if="isLocaleItalian">
          <span class="primary-text">{{ $t('works.title.one') }}</span> {{ $t('works.title.two') }}
        </template>
        <template v-else>
          {{ $t('works.title.one') }} <span class="primary-text">{{ $t('works.title.two') }}</span>
        </template>
      </h1>
    </v-card-title>
    <v-card-text>
      <v-row wrap>
        <v-col
          v-for="(work, i) in works"
          :key="i"
          cols="12"
          lg="6"
        >
          <work-card
            :title="isLocaleItalian ? work.title.it : work.title.en"
            :company="work.company"
            :period="work.period"
            :description="isLocaleItalian ? work.description.it : work.description.en"
            :website="work.website"
            :logo="work.logo"
          />
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
import WorkCard from '@/components/about/WorkCard.vue'

export default {
  name: 'MyWorksSection',
  components: { WorkCard },
  props: {
    works: {
      type: Array,
      required: true
    }
  },
  computed: {
    isLocaleItalian () {
      return this.$i18n.locale === 'it'
    }
  }
}
</script>
