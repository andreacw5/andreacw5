<template>
  <!-- Loading -->
  <loading-component v-if="loading" />
  <!-- Page content -->
  <div v-else>
    <v-container grid-list-sm text-xs-center class="mt-10">
      <v-row wrap>
        <v-col xs="12" sm="12" md="5" lg="5" order-lg="2">
          <div class="d-flex align-center ml-3">
            <image-item alt-text="Intro image" image-url="https://firebasestorage.googleapis.com/v0/b/pw-9483234.appspot.com/o/IMG_1104.jpg?alt=media&token=d226d956-bc7f-40b7-aed5-4c5356227449" :height="290" />
          </div>
        </v-col>
        <v-col xs="12" sm="12" md="7" lg="7" order-lg="1">
          <h1 class="mb-2 mt-1 large-title">Hi there!</h1>
          <i18n path="intro.welcome" tag="p">
            <template #name>
              <b>Andrea Tombolato</b>
            </template>
            <template #username>
              <b>andreacw</b>
            </template>
          </i18n>
          <i18n path="intro.extension" tag="p">
            <template #first>
              <b class="primary-text">Node.js</b>
            </template>
            <template #second>
              <b class="primary-text">Javascript</b>
            </template>
            <template #third>
              <b class="primary-text">Nuxt.js</b>
            </template>
          </i18n>
          <div class="mt-5">
            <v-btn large color="card-text" nuxt :href="localePath('/projects', currentLocale)">{{ $t('common.prefix.my') }} {{ $t('sections.projects') }}</v-btn>
            <v-btn large class="secondary-color secondary-border" text outlined href="#contacts">{{ $t('sections.contact.title') }}</v-btn>
          </div>
        </v-col>
      </v-row>
      <v-row wrap>
        <v-col cols="12">
          <h1 class="text-uppercase mt-5 large-title" style="font-size: x-large; font-weight: bolder">
            {{ $t('common.prefix.abt') }} <span class="primary-text">me</span>
          </h1>
          <i18n path="intro.resume" tag="p">
            <template #medas>
              <a href="https://medas-solutions.it" target="_blank">Medas Solutions</a>
            </template>
            <template #element>
              <a href="https://element-gaming.eu" target="_blank">Element Gaming</a>
            </template>
          </i18n>
          <i18n path="intro.hobbies" tag="p">
            <template #prociv>
              <a href="https://comune.settimomilanese.mi.it/category/protezione-civile/" target="_blank">
                {{ $t('prociv') }}
              </a>
            </template>
          </i18n>
        </v-col>
        <v-col cols="12">
          <v-row
            class="mt-2 mb-3"
            justify="center"
            no-gutters
          >
            <skill-icon
              v-for="(skill, i) in skills"
              :key="i"
              :skill="skill"
            />
          </v-row>
        </v-col>
      </v-row>
      <v-row wrap>
        <v-col cols="12">
          <h1 class="text-uppercase mt-5" style="font-size: x-large; font-weight: bolder">
            {{ $t('common.prefix.skl') }} <span class="primary-text">{{ $t('expiriences.title') }}</span>
          </h1>
        </v-col>
        <v-col
          v-for="(work, i) in works"
          :key="i"
          cols="12"
          lg="6"
        >
          <work-card
            :title="work.title"
            :company="work.company"
            :period="work.period"
            :description="work.description"
            :website="work.website"
          />
        </v-col>
      </v-row>
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
      <Footer />
    </v-container>
  </div>
</template>

<script>
import SkillIcon from '../components/SkillIcon'
import ImageItem from '../components/shared/ImageItem'
import WorkCard from '../components/about/WorkCard'
import Footer from '../components/layout/Footer'
import about from '@/static/data/about'
import socials from '@/static/data/socials'
import skill from '@/static/data/skills'
import LoadingComponent from '@/components/Loading'
import { createSEOMeta } from '~/utils/seo'
export default {
  components: { LoadingComponent, WorkCard, ImageItem, SkillIcon, Footer },
  data: () => ({
    skills: skill.skills,
    works: about.works,
    socials: socials.one,
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
    currentLocale () {
      return this.$i18n.locale
    }
  }
}
</script>

<style scoped>
.large-title {
  font-size: 3rem;
}
.services {
  margin-right: 10px;
  margin-left: 10px;
}
</style>
