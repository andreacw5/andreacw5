<template>
  <v-container grid-list-md text-xs-center>
    <v-row wrap>
      <v-col cols="12">
        <Header @toggleDarkMode="toggleDarkMode" />
      </v-col>
      <v-col xs="12" sm="12" md="4" lg="4">
        <v-card
          class="d-flex align-center ml-3"
          dark
        >
          <v-img
            alt="Intro images"
            height="300"
            :src="imageUrl"
            class="grey darken-4"
          >
            <template #placeholder>
              <v-row
                class="fill-height ma-0"
                align="center"
                justify="center"
              >
                <v-progress-circular
                  indeterminate
                  color="grey lighten-5"
                ></v-progress-circular>
              </v-row>
            </template>
          </v-img>
        </v-card>
      </v-col>
      <v-col xs="12" sm="12" md="8" lg="8">
        <h2 class="mb-2 rubik-font">{{ $t('greetings') }}</h2>
        <div>
          <p v-html="$t('intro.firstSection')"></p>
          <p v-html="$t('intro.secondSection')"></p>
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
        <h1 class="rubik-font text-uppercase mt-5" style="font-size: x-large; font-weight: bolder">My <span class="green-text">Works</span></h1>
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
                          <div
                            v-if="hover"
                            class="d-flex transition-fast-in-fast-out green darken-3 v-card--reveal display-3 white--text"
                            style="height: 100%;"
                          >
                            {{ item.title }}
                          </div>
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
      <v-col cols="12">
        <h1 class="rubik-font text-uppercase mt-5" style="font-size: x-large; font-weight: bolder">My <span class="green-text">Contacts</span></h1>
      </v-col>
      <v-col xs="12" sm="12" md="4" lg="4">
        <social-list :socials="socials.one" />
      </v-col>
      <v-col xs="12" sm="12" md="4" lg="4">
        <social-list :socials="socials.two" />
      </v-col>
      <v-col xs="12" sm="12" md="4" lg="4">
        <social-list :socials="socials.three" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import project from '@/static/data/project'
import skill from '@/static/data/skills'
import socials from '@/static/data/socials'
import SocialList from '../components/SocialList'
import SkillsArea from '../components/SkillsArea'
import Header from '../components/Header'
export default {
  components: { Header, SkillsArea, SocialList },
  data: () => ({
    projects: project.projects,
    skills: skill.skills,
    socials
  }),
  computed: {
    imageUrl () {
      return require('~/assets/img/624656.jpg')
    },
    wipUrl () {
      return require('~/assets/img/wip.jpg')
    }
  },
  methods: {
    toggleDarkMode () {
      if (
        this.$colorMode.preference === 'dark' ||
        (this.$colorMode.preference === 'system' &&
          this.$colorMode.value === 'dark')
      ) {
        this.$colorMode.preference = 'light'
      } else {
        this.$colorMode.preference = 'dark'
      }
    }
  }
}
</script>

<style scoped>
.on-hover {
  opacity: 0.5;
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
