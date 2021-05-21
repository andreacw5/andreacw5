<template>
  <v-container grid-list-md text-xs-center>
    <v-row wrap>
      <v-col xs="12" sm="12" md="5" lg="5">
        <v-card
          class="d-flex align-center ml-3"
          dark
        >
          <image-item alt-text="Intro image" :image-url="imageUrl" :height="290" />
        </v-card>
      </v-col>
      <v-col xs="12" sm="12" md="7" lg="7">
        <h2 class="mb-2 mt-2">{{ $t('greetings') }}</h2>
        <div>
          <i18n path="intro.welcome" tag="p">
            <template #name>
              <b>Andrea Tombolato</b>
            </template>
            <template #username>
              <b>andreacw</b>
            </template>
          </i18n>
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
        </div>
      </v-col>
    </v-row>
    <v-row wrap>
      <v-col cols="12">
        <h1 class="text-uppercase mt-5" style="font-size: x-large; font-weight: bolder">
          <i18n path="sections.start" tag="span">
            <template #section>
              <span class="primary--text">{{ $t('sections.about.skills') }}</span>
            </template>
          </i18n>
        </h1>
      </v-col>
      <v-col cols="12">
        <p>Since starting my journey as a developer nearly 5 years ago, I have partnered with talented people and worked on numerous projects to create web products for both corporate and consumer use. I create successful responsive websites that are fast, easy to use, and built with best practices.</p>
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
          <i18n path="sections.start" tag="span">
            <template #section>
              <span class="primary--text">{{ $t('sections.about.experience') }}</span>
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
    <v-row wrap>
      <v-col cols="12">
        <h1 class="text-uppercase mt-5" style="font-size: x-large; font-weight: bolder">
          <i18n path="sections.start" tag="span">
            <template #section>
              <span id="works" class="primary--text">{{ $t('sections.works') }}</span>
            </template>
          </i18n>
        </h1>
      </v-col>
      <v-col xs="12" sm="12" md="12" lg="12">
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
                  md="4"
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
</template>

<script>
import skill from '@/static/data/skills'
import socials from '@/static/data/socials'
import about from '@/static/data/about'
import SkillIcon from '../components/SkillIcon'
import ImageItem from '../components/shared/ImageItem'
import ProjectCard from '../components/ProjectCard'
import WorkCard from '../components/about/WorkCard'
export default {
  components: { WorkCard, ProjectCard, ImageItem, SkillIcon },
  data: () => ({
    skills: skill.skills,
    works: about.works,
    socials
  }),
  computed: {
    imageUrl () {
      return require('~/assets/img/profile.webp')
    },
    projects () {
      return this.$store.state.projects.projects
    }
  }
}
</script>

<style scoped>

.group {
  display: flex;
  flex: 1;
  justify-content: space-around;
}

</style>
