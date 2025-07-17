<script setup lang="ts">
import SkillIcon from "~/components/homepage/tech/SkillIcon.vue";

const skills = [
  {
    type: 'skill',
    icon: 'simple-icons:nuxtdotjs',
    title: 'Nuxt.js',
    color: '#58b2bb',
    url: 'https://nuxtjs.org'
  },
  {
    type: 'skill',
    icon: 'simple-icons:vuedotjs',
    title: 'Vue.js',
    color: '#41b883',
    url: 'https://vuejs.org'
  },
  {
    type: 'skill',
    icon: 'simple-icons:nodedotjs',
    title: 'Node.js',
    color: '#68a063',
    url: 'https://nodejs.org/en/'
  },
  {
    type: 'skill',
    icon: 'simple-icons:nestjs',
    title: 'Nest.js',
    color: '#e0234e',
    url: 'https://nestjs.com/'
  },
  {
    type: 'skill',
    icon: 'simple-icons:javascript',
    title: 'Javascript',
    color: '#f0db4f',
    url: 'https://javascript.com'
  },
  {
    type: 'skill',
    icon: 'simple-icons:typescript',
    title: 'Typescript',
    color: '#175db8',
    url: 'https://typescriptlang.org'
  },
  {
    type: 'skill',
    icon: 'devicon-plain:java',
    title: 'Java',
    color: '#5382a1',
    url: 'https://java.com'
  },
  {
    type: 'skill',
    icon: 'devicon-plain:grails',
    title: 'Grails',
    color: '#ec7b3f',
    url: 'https://grails.org'
  },
  {
    type: 'skill',
    icon: 'devicon-plain:docker',
    title: 'Docker',
    color: '#0db7ed',
    url: 'https://docker.com'
  },
  {
    type: 'skill',
    icon: 'devicon-plain:firebase',
    title: 'Google firebase',
    color: '#FFA611',
    url: 'https://firebase.google.com'
  },
  {
    type: 'skill',
    icon: 'devicon-plain:git',
    title: 'Git',
    color: '#f34f29',
    url: 'https://git-scm.com'
  },
  {
    type: 'skill',
    icon: 'simple-icons:nginx',
    title: 'NGINX',
    color: '#00B140',
    url: 'https://nginx.org/en/'
  }
]
</script>

<template>
  <v-card class="card mt-6 round-border">
    <v-card-title class="gradient-border-bottom round-border">
      <h4 class="font-weight-bold text-h4 mb-2">
        {{ $t('tech.title') }}
      </h4>
    </v-card-title>
    <v-container class="pr-6 pl-6" fluid>
      <v-responsive class="mb-6">
        <i18n-t keypath="tech.description" tag="p" class="text-subtitle-3 text-medium-emphasis">
          <template #js>
            <b class="font-weight-medium text-primary">Javascript</b>
          </template>
          <template #java>
            <b class="font-weight-medium text-primary">Java</b>
          </template>
          <template #node>
            <a href="https://nodejs.org" target="_blank" class="link">
              Node.js
            </a>
          </template>
          <template #grails>
            <a href="https://grails.org" target="_blank" class="link">
              Grails
            </a>
          </template>
          <template #nest>
            <a href="https://nestjs.com" target="_blank" class="link">
              Nest.js
            </a>
          </template>
          <template #vue>
            <a href="https://vuejs.org" target="_blank" class="link">
              Vue.js
            </a>
          </template>
          <template #nuxt>
            <a href="https://nuxt.com" target="_blank" class="link">
              Nuxt.js
            </a>
          </template>
        </i18n-t>
      </v-responsive>
      <v-row
        class="mt-4"
        justify="center"
        no-gutters
      >
        <skill-icon
          v-for="(skill, i) in skills"
          :key="i"
          :skill="skill"
        />
      </v-row>
    </v-container>
  </v-card>
</template>

<style scoped>

</style>
