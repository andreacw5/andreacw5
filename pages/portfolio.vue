<template>
  <v-container grid-list-md text-xs-center>
    <v-card class="card">
      <v-card-title class="card-header">
        <h2 class="mt-2 mb-2 ml-4" style="font-size: xxx-large; font-weight: bolder">
          {{ $t('sections.projects') }}
        </h2>
      </v-card-title>
      <v-bottom-navigation
        style="background: transparent; box-shadow: none;"
        class="mt-4 round-border"
        :value="value"
        horizontal
        @change="techFilterChanged"
      >
        <template v-for="item in technologies">
          <v-btn :key="item.name" :value="item.name" class="button-hover round-border">
            <span>{{ item.name }}</span>
            <v-icon class="hidden-sm-and-down">{{ item.icon }}</v-icon>
          </v-btn>
        </template>
      </v-bottom-navigation>
      <v-card-text>
        <!-- Loading -->
        <loading-component v-if="loading" />
        <!-- Page content -->
        <v-item-group v-else active-class="primary">
          <v-container class="text-center">
            <v-row
              class="fill-height"
              align="center"
              justify="center"
            >
              <template v-for="(item, i) in projects">
                <v-col
                  :key="i"
                  cols="12"
                  sm="12"
                  md="6"
                  lg="6"
                  xl="6"
                >
                  <project-card :item="item" />
                </v-col>
              </template>
            </v-row>
          </v-container>
        </v-item-group>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import LoadingComponent from '@/components/Loading.vue'
import { createSEOMeta } from '@/utils/seo'
import ProjectCard from '@/components/portfolio/ProjectCard.vue'
export default {
  name: 'WorkListIndex',
  components: {
    ProjectCard,
    LoadingComponent
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
