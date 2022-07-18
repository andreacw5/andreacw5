<template>
  <!-- Loading -->
  <loading-component v-if="loading" />
  <!-- Page content -->
  <div v-else>
    <v-container grid-list-sm text-xs-center>
      <v-row wrap>
        <v-col cols="12">
          <div class="text-center">
            <h1 class="text-uppercase mt-5" style="font-size: xxx-large; font-weight: bolder">
              {{ $t('common.prefix.wrk') }} <span class="primary-text">{{ $t('travels.title') }}</span>
            </h1>
            <p>{{ $t('travels.description') }}</p>
          </div>
        </v-col>
      </v-row>
      <v-row wrap>
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
  </div>
</template>

<script>
import LoadingComponent from "~/components/Loading";
import ImageItem from "@/components/shared/ImageItem";
import TravelListCard from "@/components/travels/TravelListCard";
export default {
  name: "travelListIndex",
  components: {
    TravelListCard,
    ImageItem,
    LoadingComponent
  },
  data() {
    return {
      loading: false,
      travels: []
    };
  },
  created() {
    this.loading = true;
    this.getTravels();
  },
  methods: {
    getTravels () {
      this.$fire.firestore.collection('travels').get().then(resp => {
        const respData = resp.docs.map(doc => doc.data());
        this.travels = respData.sort((a, b) => {
          return b.startDate - a.startDate;
        });
        this.loading = false;
      })
    }
  }
}
</script>
