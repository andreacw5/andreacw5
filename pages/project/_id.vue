<template>
  <v-container grid-list-md text-xs-center>
    <v-row wrap>
      <v-col cols="12">
        <h1 class="text-uppercase mt-3" style="font-size: xx-large; font-weight: bolder">
          {{ project.title }}
        </h1>
      </v-col>
      <v-col v-if="project.slides" cols="12">
        <v-carousel
          cycle
          continuous
          hide-delimiter-background
          show-arrows-on-hover
        >
          <v-carousel-item
            v-for="(slide, i) in project.slides"
            :key="i"
            :src="slide.src"
          />
        </v-carousel>
      </v-col>
      <v-col v-if="project.about" cols="12">
        <h1 class="text-uppercase mt-3" style="font-size: x-large; font-weight: bolder">
          About this <span class="primary--text">project</span>
        </h1>
      </v-col>
      <v-col v-if="project.about" cols="12">
        <p v-for="(info,i) in project.about" :key="i"> {{ info }}</p>
       </v-col>
      <v-col v-if="project.technical" cols="12">
        <h1 class="text-uppercase mt-3" style="font-size: x-large; font-weight: bolder">
          Technical <span class="primary--text">Sheet</span>
        </h1>
      </v-col>
      <v-col v-if="project.technical" cols="12">
        <p>Code technologies I got involved with while working on this project.</p>
        <ul>
          <li v-for="(info,i) in project.technical.stack" :key="i"> {{ info }}</li>
        </ul>
      </v-col>
      <v-col v-if="project.other" cols="12">
        <h1 class="text-uppercase mt-3" style="font-size: x-large; font-weight: bolder">
          Resources
        </h1>
      </v-col>
      <v-col v-if="project.other" cols="12" class="mb-5">
        <ul>
          <li v-if="project.other.online">The project is online at </li>
          <li v-if="project.other.github">Access the project's source on github</li>
        </ul>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'ProjectView',
  data () {
    return {
      loading: true,
      id: this.$route.params.id
    }
  },
  computed: {
    project () {
      return this.$store.getters['projects/getProject'](this.id)
    }
  },
  mounted () {
    this.loading = false
  }
}
</script>
