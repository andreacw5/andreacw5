<template>
  <!-- Loading -->
  <loading-component v-if="loading" />
  <!-- Page content -->
  <div v-else>
    <v-container grid-list-md text-xs-center>
      <v-row wrap>
        <v-col cols="12">
          <div class="text-center">
            <h1 class="text-uppercase mt-5" style="font-size: xxx-large; font-weight: bolder">
              {{ $t('common.prefix.prj') }} <span class="primary-text">{{ $t('projects.title') }}</span>
            </h1>
          </div>
        </v-col>
        <v-col cols="12">
          <v-item-group active-class="primary">
            <v-container class="pa-4 text-center">
              <v-row
                class="fill-height"
                align="center"
                justify="center"
              >
                <template v-for="(item, i) in projects">
                  <v-col
                    :key="i"
                    cols="12"
                  >
                    <project-card :item="item" />
                  </v-col>
                </template>
              </v-row>
            </v-container>
          </v-item-group>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import LoadingComponent from '~/components/Loading'
import { createSEOMeta } from '@/utils/seo'
export default {
  name: 'WorkListIndex',
  components: {
    LoadingComponent
  },
  data () {
    return {
      loading: false,
      projects: []
    }
  },
  head () {
    return {
      title: 'Progetti - Andrea Tombolato',
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
    this.loading = true
    this.getProjects()
  },
  methods: {
    getProjects () {
      this.$fire.firestore.collection('projects').get().then((resp) => {
        const respData = resp.docs.map(doc => doc.data())
        this.projects = respData.sort((a, b) => {
          return b.startDate - a.startDate
        })
        this.loading = false
      })
    }
  }
}
</script>

<style scoped>

</style>
