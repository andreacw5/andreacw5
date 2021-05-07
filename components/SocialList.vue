<template>
  <div>
    <v-list-item
      v-for="social in socials"
      :key="social.title"
    >
      <v-list-item-avatar tile>
        <v-icon
          dark
          class="transition-h"
          :color="social.color || 'gray darken-2'"
          size="38px"
        >
          {{ social.icon }}
        </v-icon>
      </v-list-item-avatar>

      <v-list-item-content>
        <v-list-item-title class="text">{{social.title}}</v-list-item-title>
        <v-list-item-subtitle>
          <a :href="social.href" target="_blank" style="text-decoration: none">
            {{social.subtitle}}
          </a>
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
  </div>
</template>

<script>
export default {
  name: 'SocialList',
  props: {
    socials: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style scoped>
.text {
  color: var(--color) !important;
}
</style>
