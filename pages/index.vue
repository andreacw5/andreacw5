<template>
  <v-container grid-list-md text-xs-center>
    <v-row wrap>
      <v-col cols="12">
        <h1 class="rubik-font text-uppercase" style="font-size: xxx-large; font-weight: bolder">Andrea <span class="green-text">Tombolato</span></h1>
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
        <h2 class="mb-2 rubik-font">Hello,</h2>
        <div>
          <p>My name is Andrea Tombolato and Welcome to my personal website. I'm a Web Developer from Milano and work as Web Developer at <a href="https://medas-solutions.it" target="_blank">Medas Solutions</a>. I'm also working as Board member for <a href="https://element-gaming.eu" target="_blank">Element Gaming</a>, a company operating in the e-sports sector. Besides coding, I spend my time a volunteer for my local <a href="https://comune.settimomilanese.mi.it/category/protezione-civile/" target="_blank">civil defence office</a>.</p>
          <p>In my free time I dedicate myself to TV series, those who don't, video games and PC assembly. </p>
        </div>
      </v-col>
      <v-col xs="12" sm="12" md="12" lg="12">
        <v-row
          class="mt-4"
          justify="center"
          no-gutters
        >
          <v-col md="auto">
            <v-tooltip
              v-for="(skill, i) in skills"
              :key="i"
              top
            >
              <template #activator="{ on, attrs }">
                <v-icon
                  dark
                  class="transition-h ma-2"
                  size="40px"
                  v-bind="attrs"
                  v-on="on"
                >
                  {{ skill.icon }}
                </v-icon>
              </template>
              <span>{{ skill.title }}</span>
            </v-tooltip>
          </v-col>
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
export default {
  components: { SocialList },
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
  }
}
</script>

<style scoped>
.v-card {
  transition: opacity .4s ease-in-out;
}

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
