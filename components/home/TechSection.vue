<template>
  <v-card class="card mt-4">
    <v-card-title class="card-header">
      <h2 class="ml-2" style="font-size: xx-large; font-weight: bolder">
        <template v-if="isLocaleItalian">
          <span class="primary-text">{{ $t('tech.title.one') }}</span> {{ $t('tech.title.two') }}
        </template>
        <template v-else>
          {{ $t('tech.title.one') }} <span class="primary-text">{{ $t('tech.title.two') }}</span>
        </template>
      </h2>
    </v-card-title>
    <v-card-text class="mt-4">
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
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'TechSection',
  props: {
    skills: {
      type: Array,
      required: true
    }
  },
  computed: {
    isLocaleItalian () {
      return this.$i18n.locale === 'it'
    }
  }
}
</script>
