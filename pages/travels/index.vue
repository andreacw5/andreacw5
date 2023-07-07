<template>
  <v-container grid-list-md text-xs-center>
    <v-card class="card">
      <v-card-title class="card-header">
        <h2 class="mt-2 mb-2 ml-4" style="font-size: xxx-large; font-weight: bolder">
          {{ $t('travels.title') }}
        </h2>
      </v-card-title>
      <v-card-text class="mt-4">
        <v-container grid-list-md text-xs-center>
          <v-row v-if="loading">
            <v-col v-for="(item, i) in 6" :key="i" cols="12">
              <v-skeleton-loader
                type="image"
                class="round-border card"
              ></v-skeleton-loader>
            </v-col>
          </v-row>
          <v-row v-else>
            <template v-for="(travel, i) in travels">
              <v-col
                :key="i"
                cols="12"
              >
                <travel-list-card :travel="travel" />
              </v-col>
            </template>
          </v-row>
        </v-container>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import TravelListCard from '~/components/travels/TravelListCard.vue'
import { createSEOMeta } from '@/utils/seo'
export default {
  name: 'TravelListIndex',
  components: {
    TravelListCard
  },
  data () {
    return {
      loading: false,
      travels: []
    }
  },
  head () {
    return {
      title: this.$t('travels.title') + ' - Andrea Tombolato',
      meta: [
        ...createSEOMeta({
          title: this.$t('travels.title'),
          description: this.$t('travels.description'),
          url: this.$route.path,
          image: 'https://firebasestorage.googleapis.com/v0/b/pw-9483234.appspot.com/o/IMG_1104.jpg?alt=media&token=d226d956-bc7f-40b7-aed5-4c5356227449'
        })
      ]
    }
  },
  created () {
    this.loading = true
    this.getTravels()
  },
  methods: {
    getTravels () {
      this.travels = this.$store.getters['travels/getAllTravels']
      this.loading = false
    }
  }
}
</script>
