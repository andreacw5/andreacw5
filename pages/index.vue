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
      <v-col xs="12" sm="12" md="12" lg="12">
        <v-row
          class="mt-4"
          justify="center"
          no-gutters
        >
          <skills-area
            v-for="(skill, i) in skills"
            :key="i"
            :skill="skill"
          />
        </v-row>
      </v-col>
      <v-col cols="12">
        <h1 class="text-uppercase mt-5" style="font-size: x-large; font-weight: bolder">
          <i18n path="sections.start" tag="span">
            <template #section>
              <span class="primary--text">{{ $t('sections.works') }}</span>
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
                  <v-hover v-slot="{ hover }">
                    <v-card
                      :elevation="hover ? 22 : 2"
                      :class="{ 'on-hover': !hover }"
                    >
                      <v-img
                        :src="wipUrl"
                        height="225px"
                      >
                        <v-expand-transition>
                          <v-card v-if="hover" style="height: 100%;" class="transition-fast-in-fast-out primary darken-2 v-card--reveal white--text">
                            <v-card-title>
                              {{ item.title }}
                            </v-card-title>
                          </v-card>
                        </v-expand-transition>
                      </v-img>
                    </v-card>
                  </v-hover>
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
import project from '@/static/data/project'
import skill from '@/static/data/skills'
import socials from '@/static/data/socials'
import SkillsArea from '../components/SkillsArea'
import ImageItem from '../components/shared/ImageItem'
export default {
  components: { ImageItem, SkillsArea },
  data: () => ({
    projects: project.projects,
    skills: skill.skills,
    socials
  }),
  computed: {
    imageUrl () {
      return require('~/assets/img/profile.webp')
    },
    wipUrl () {
      return require('~/assets/img/wip.webp')
    }
  }
}
</script>

<style scoped>
.on-hover {
  opacity: 0.7;
}

.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: .9;
  position: absolute;
  width: 100%;
}
</style>
