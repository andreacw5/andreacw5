<template>
  <v-container grid-list-md text-xs-center>
    <v-row wrap dense>
      <v-col cols="12">
        <h2 class="mt-3 ml-4" style="font-size: xxx-large; font-weight: bolder">
          Portfolio
        </h2>
      </v-col>
      <v-col cols="12">
        <v-bottom-navigation
          style="background: transparent; box-shadow: none;"
          :value="value"
          horizontal
          @change="techFilterChanged"
        >
          <template v-for="item in technologies">
            <v-btn :key="item.name" :value="item.name" class="button-hover">
            <span>{{ item.name }}</span>
            <v-icon class="hidden-sm-and-down">{{ item.icon }}</v-icon>
            </v-btn>
          </template>
        </v-bottom-navigation>
      </v-col>
      <v-col cols="12">
        <!-- Loading -->
        <loading-component v-if="loading" />
        <!-- Page content -->
        <v-item-group v-else active-class="primary">
          <v-container class="pa-4 text-center">
            <v-row
              class="fill-height"
              align="center"
              justify="center"
            >
              <template v-for="(item, i) in projects">
                <v-col
                  :key="i"
                  cols="6"
                >
                  <project-card :item="item" />
                </v-col>
              </template>
            </v-row>
          </v-container>
        </v-item-group>
      </v-col>
    </v-row>
    <Footer />
  </v-container>
</template>

<script>
import Footer from '@/components/layout/Footer.vue'
import LoadingComponent from '@/components/Loading.vue'
import { createSEOMeta } from '@/utils/seo'
export default {
  name: 'WorkListIndex',
  components: {
    LoadingComponent,
    Footer
  },
  data () {
    return {
      value: 0,
      loading: false,
      projects: [],
      technologies: []
    }
  },
  head () {
    return {
      title: 'Portfolio - Andrea Tombolato',
      meta: [
        ...createSEOMeta({
          title: 'Progetti',
          description: 'Elenco dei progetti a cui ho lavorato nel corso degli anni e le tecnologie utilizzate',
          url: this.$route.path,
          image: 'https://firebasestorage.googleapis.com/v0/b/pw-9483234.appspot.com/o/IMG_1104.jpg?alt=media&token=d226d956-bc7f-40b7-aed5-4c5356227449'
        })
      ]
    }
  },
  created () {
    this.getProjects()
    this.getTechs()
  },
  methods: {
    techFilterChanged (val) {
      console.log(val)
      this.loading = true
      const allProjects = this.$store.getters['portfolio/getAllProjects']
      if (val === 'All') {
        this.projects = allProjects
      } else {
        this.projects = allProjects.filter(item => item.technical.main.name.includes(val))
      }
      this.loading = false
    },
    getTechs () {
      this.technologies = this.$store.getters['portfolio/getTechs']
    },
    getProjects () {
      this.projects = this.$store.getters['portfolio/getAllProjects']
    }
  }
}
</script>

<style scoped>

</style>
