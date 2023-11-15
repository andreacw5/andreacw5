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
      <contact-section :socials="socials" />
    </v-container>
  </v-container>
</template>

<script>
import { createSEOMeta } from '~/utils/seo'
import TechSection from '@/components/home/TechSection.vue'
import MyWorksSection from '@/components/home/MyWorksSection.vue'
import MainAboutSection from '@/components/home/MainAboutSection.vue'
import ContactSection from '@/components/home/ContactSection.vue'
export default {
  components: { ContactSection, MainAboutSection, MyWorksSection, TechSection },
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
