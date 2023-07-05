<template>
  <v-card class="mx-auto card-gradient">
    <image-item :image-url="item.preview" :alt-text="item.title + ' cover image'" :height="300" class="project-image" />
    <v-list
      subheader
      two-line
      style="background: transparent !important;"
    >
      <v-list-item>
        <v-list-item-content class="text-left">
          <v-list-item-title>
            <h2>{{ item.title }}</h2>
          </v-list-item-title>
          <v-list-item-subtitle>
            {{ item.company }}
          </v-list-item-subtitle>
        </v-list-item-content>
        <v-list-item-action>
          <v-tooltip v-if="item.technical.main" top>
            <template #activator="{ on }">
              <v-btn
                :color="item.technical.main.color"
                class="transition pb-1"
                icon
                to=""
                v-on="on"
              >
                <v-icon large>{{ item.technical.main.icon }}</v-icon>
              </v-btn>
            </template>
            <span>{{ item.technical.main.name }}</span>
          </v-tooltip>
        </v-list-item-action>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script>
import ImageItem from '@/components/shared/ImageItem'
export default {
  name: 'ProjectCard',
  components: { ImageItem },

  props: {
    item: {
      type: Object,
      required: true
    }
  },
  computed: {
    currentLocale () {
      return this.$i18n.locale
    },
    defaultWorkUrl () {
      return require('~/assets/img/works/default.webp')
    },
    selectedUrl () {
      return require(`~/assets/img/works/${this.item.src}`)
    },
    bannerBackground () {
      return `background-image:url(${this.selectedUrl})`
    }
  }
}
</script>

<style scoped>
 .transition:hover {
   transform: scale(1.3);
 }
</style>
