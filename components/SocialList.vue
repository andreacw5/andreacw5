<template>
  <div>
    <v-list-item
      v-for="social in socials"
      :key="social.title"
    >
      <v-list-item-avatar>
        <v-btn tile icon :href="social.href" target="_blank" class="transition-h">
          <v-icon
            dark
            :color="social.color || 'white darken-2'"
            size="38px"
          >
            {{ social.icon }}
          </v-icon>
        </v-btn>
      </v-list-item-avatar>

      <v-list-item-content>
        <v-list-item-title v-text="social.title"></v-list-item-title>
        <v-list-item-subtitle v-text="social.subtitle"></v-list-item-subtitle>
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
