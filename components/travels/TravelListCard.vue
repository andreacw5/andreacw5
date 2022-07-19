<template>
  <v-card style="border-radius: 10px;">
    <v-img :src="travel.background" max-height="300" alt="travel cover background" cover no-repeat>
      <v-card-actions class="hidden-md-and-down" style="background: rgba(21,20,20,0.4);">
        <h1 class="travel-title">{{ travel.title }}</h1> <v-spacer></v-spacer>
        <h2 class="travel-title">{{ travel.startDate.seconds | formatDate('yyyy') }}</h2>
      </v-card-actions>
    </v-img>
  </v-card>
</template>

<script>
export default {
  name: "TravelListCard",
  props: {
    travel: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.travel-title {
  text-shadow: 0 0 1.2em rgba(0,0,0,.3);
  font-weight: 400 !important;
  font-size: xxx-large;
}
</style>
