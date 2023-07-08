<template>
  <v-container grid-list-md text-xs-center>
    <v-container grid-list-sm text-xs-center class="mt-10">
      <!-- Main about section -->
      <main-about-section />
      <!-- My tech stack section -->
      <tech-section :skills="skills" />
      <!-- My working path section -->
      <my-works-section :works="works" />
      <!-- Contacts section -->
      <v-row id="contacts" class="mb-4" wrap>
        <v-col cols="12">
          <h1 class="text-uppercase mt-5" style="font-size: x-large; font-weight: bolder">
            {{ $t('common.prefix.wrk') }} <span class="primary-text">{{ $t('contacts.title') }}</span>
          </h1>
        </v-col>
        <v-col cols="12">
          <p>
            {{ $t('contacts.description') }} <a href="mailto:andreacw96@gmail.com">andreacw96@gmail.com</a> {{ $t('contacts.ending') }}
          </p>
        </v-col>
        <v-col cols="12">
          <socials-buttons :socials="socials" />
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
import { createSEOMeta } from '~/utils/seo'
import TechSection from '@/components/home/TechSection.vue'
import MyWorksSection from '@/components/home/MyWorksSection.vue'
import MainAboutSection from '@/components/home/MainAboutSection.vue'
export default {
  components: { MainAboutSection, MyWorksSection, TechSection },
  data: () => ({
    skills: [],
    works: [],
    socials: [],
    loading: false
  }),
  head () {
    return {
      title: 'Andrea Tombolato',
      meta: [
        ...createSEOMeta({
          title: 'Home',
          description: 'Andrea Tombolato, Web Developer con base a Milano e questo è il mio sito personale!',
          url: this.$route.path,
          image: 'https://firebasestorage.googleapis.com/v0/b/pw-9483234.appspot.com/o/IMG_1104.jpg?alt=media&token=d226d956-bc7f-40b7-aed5-4c5356227449'
        })
      ]
    }
  },
  computed: {
    isLocaleItalian () {
      return this.$i18n.locale === 'it'
    }
  },
  created () {
    this.getSkills()
    this.getWorks()
    this.getSocials()
  },
  methods: {
    getSkills () {
      this.skills = this.$store.getters['about/getAllSkills']
    },
    getWorks () {
      this.works = this.$store.getters['about/getAllWorks']
    },
    getSocials () {
      this.socials = this.$store.getters['about/getAllSocials']
    }
  }
}
</script>
