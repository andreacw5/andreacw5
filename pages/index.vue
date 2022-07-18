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
            <v-btn large color="primary card-text" nuxt to="/projects">I miei progetti</v-btn>
            <v-btn large class="secondary-color secondary-border" text outlined href="#contacts">Contattami</v-btn>
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
            What <span class="primary-text">I do</span>
          </h1>
        </v-col>
        <v-col cols="12" md="4">
          <div class="services">
            <v-icon x-large class="mb-2 white-text">mdi-code-json</v-icon>
            <h3 class="text-uppercase mb-2  white-text">Web Development</h3>
            <p class="secondary-color">If you already have an existing design, I can help transform it into a fast, responsive & SEO-friendly website.</p>
          </div>
        </v-col>
        <v-col cols="12" md="4">
          <div class="services">
            <v-icon x-large class="mb-2 white-text">mdi-palette-swatch-variant</v-icon>
            <h3 class="text-uppercase mb-2  white-text">UI/UX Design</h3>
            <p class="secondary-color">I can design your next beautiful website based on existing content, or even redesign your current to improve conversions.</p>
          </div>
        </v-col>
        <v-col cols="12" md="4">
          <div class="services">
            <v-icon x-large class="mb-2 white-text">mdi-clipboard-check-multiple</v-icon>
            <h3 class="text-uppercase mb-2 white-text">Project</h3>
            <p class="secondary-color">Setup project  </p>
          </div>
        </v-col>
      </v-row>
      <v-row wrap>
        <v-col cols="12">
          <h1 class="text-uppercase mt-5" style="font-size: x-large; font-weight: bolder">
            <i18n path="sections.start" tag="span">
              <template #section>
                <span class="primary-text">{{ $t('sections.about.experience') }}</span>
              </template>
            </i18n>
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
      <v-row class="mb-4" wrap id="contacts">
        <v-col cols="12">
          <h1 class="text-uppercase mt-5" style="font-size: x-large; font-weight: bolder">
            Want to  <span class="primary-text">work together?</span>
          </h1>
        </v-col>
        <v-col cols="12">
          <p>
            If you wanna get in touch, talk to me about a project collaboration or just say hi, send an email to
            <a href="mailto:andreacw96@gmail.com">andreacw96@gmail.com</a> or find me on socials.
          </p>
        </v-col>
        <v-col cols="12">
          <socials-buttons :socials="socials" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import skill from '@/static/data/skills'
import socials from '@/static/data/socials'
import about from '@/static/data/about'
import SkillIcon from '../components/SkillIcon'
import ImageItem from '../components/shared/ImageItem'
import ProjectCard from '../components/ProjectCard'
import WorkCard from '../components/about/WorkCard'
import LoadingComponent from "@/components/Loading";
export default {
  components: {LoadingComponent, WorkCard, ProjectCard, ImageItem, SkillIcon },
  data: () => ({
    skills: skill.skills,
    works: about.works,
    socials: socials.one,
    loading: false
  }),
  computed: {
    projects () {
      return this.$store.state.projects.projects
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
