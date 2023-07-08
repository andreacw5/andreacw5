<template>
  <v-row wrap>
    <v-col cols="12">
      <h1 class="text-uppercase mt-5 large-title" style="font-size: x-large; font-weight: bolder">
        {{ $t('tech.title.one') }} <span class="primary-text">{{ $t('tech.title.two') }}</span>
      </h1>
      <i18n path="tech.description" tag="p">
        <template #js>
          <b class="primary-text">Javascript</b>
        </template>
        <template #java>
          <b class="primary-text">Java</b>
        </template>
        <template #node>
          <a href="https://nodejs.org" target="_blank">
            Node.js
          </a>
        </template>
        <template #grails>
          <a href="https://grails.org" target="_blank">
            Grails
          </a>
        </template>
        <template #nest>
          <a href="https://nestjs.com" target="_blank">
            Nest.js
          </a>
        </template>
        <template #vue>
          <a href="https://vuejs.org" target="_blank">
            Vue.js
          </a>
        </template>
        <template #nuxt>
          <a href="https://nuxt.com" target="_blank">
            Nuxt.js
          </a>
        </template>
      </i18n>
    </v-col>
    <v-col cols="12">
      <v-row
        class="mt-1 mb-3"
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
</template>

<script>
export default {
  name: 'TechSection',
  props: {
    skills: {
      type: Array,
      required: true
    }
  }
}
</script>
