<template>
  <v-row wrap>
    <v-col cols="12">
      <h1 class="text-uppercase mt-5" style="font-size: x-large; font-weight: bolder">
        {{ $t('works.title.one') }} <span class="primary-text">{{ $t('works.title.two') }}</span>
      </h1>
    </v-col>
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
      />
    </v-col>
  </v-row>
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
