<template>
  <v-container grid-list-md text-xs-center>
    <v-card class="card">
      <v-card-title class="card-header">
        <h2 class="mt-2 mb-2 ml-4" style="font-size: xxx-large; font-weight: bolder">
          {{ $t('travels.title') }}
        </h2>
      </v-card-title>
      <v-card-text class="mt-4">
        <v-container>
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
