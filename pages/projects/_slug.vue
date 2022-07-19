<template>
  <!-- Loading -->
  <loading-component v-if="loading" />
  <!-- Page content -->
  <div v-else>
    <v-container grid-list-md text-xs-center>
      <v-row wrap>
        <v-col cols="12">
          <div>
            <h1 class="text-uppercase text-center mt-5" style="font-size: xxx-large; font-weight: bolder">
              <span class="primary-text">{{ project.title }}</span>
            </h1>
          </div>
        </v-col>
        <v-col cols="12">
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import LoadingComponent from "~/components/Loading";
export default {
  name: "singleWorkPage",
  components: {
    LoadingComponent
  },
  data() {
    return {
      loading: false,
      project: {}
    };
  },
  created() {
    this.loading = true;
    this.getProject();
  },
  methods: {
    getProject () {
      this.$fire.firestore.collection('projects').where('slug', '==', this.$route.params.slug).get().then(resp => {
        this.project = resp.docs.map(doc => doc.data())[0];
        this.loading = false;
      })
    }
  }
}
</script>

<style scoped>

</style>
