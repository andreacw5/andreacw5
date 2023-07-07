<template>
  <v-card class="card">
      <image-item
        :image-url="item.preview"
        :alt-text="item.title + ' cover image'"
        :height="400"
        class="project-image"
        position="absolute"
      />
      <v-list
        style="background: transparent !important;"
        class="card-header mb-4"
      >
        <v-list-item>
          <v-list-item-content class="text-left">
            <v-list-item-title>
              <h2>{{ isLocaleItalian ? item.title.it : item.title.en }}</h2>
            </v-list-item-title>
            <v-list-item-subtitle>
              <span v-if="item.company">{{ item.company }}</span>
              <span v-if="item.startDate"> | {{ item.startDate }}</span>
            </v-list-item-subtitle>
          </v-list-item-content>
          <v-list-item-action>
            <v-btn
              class="round-border button-hover"
              icon
              tile
              outlined
              @click="close"
            >
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-list-item-action>
        </v-list-item>
      </v-list>
      <v-card-text>
        <div class="mb-1">
          <div class="text-body-1 font-weight-bold white-text">{{ $t('projects.description') }}</div>
          {{ isLocaleItalian ? item.description.it : item.description.en }}
        </div>
        <div class="mb-1">
          <div class="text-body-1 font-weight-bold white-text">{{ $t('projects.technologies') }}</div>
          <v-tooltip v-for="(lang,i) in item.technical.technologies" :key="i" top>
            <template #activator="{ on }">
              <v-btn
                to=""
                icon
                class="ma-1 transition icon"
                v-on="on"
              >
                <v-icon class="white-text">{{lang.icon}}</v-icon>
              </v-btn>
            </template>
            <span>{{lang.name}}</span>
          </v-tooltip>
        </div>
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-tooltip v-if="item.website" top>
          <template #activator="{ on }">
            <v-btn
              outlined
              :href="item.website"
              target="_blank"
              class="round-border button-hover"
              v-on="on"
            >
              <v-icon>mdi-earth</v-icon>
              <span class="hidden-xs-and-down ml-1">
                Visualizza
              </span>
            </v-btn>
          </template>
          <span>{{ $t('actions.visit.website') }}</span>
        </v-tooltip>
        <v-tooltip v-if="item.github" top>
          <template #activator="{ on }">
            <v-btn
              outlined
              :href="item.github"
              target="_blank"
              class="ml-2 round-border button-hover"
              v-on="on"
            >
              <v-icon>mdi-github</v-icon>
              <span class="hidden-xs-and-down ml-1">
                GitHub
              </span>
            </v-btn>
          </template>
          <span>{{ $t('actions.visit.github') }}</span>
        </v-tooltip>
        <v-spacer />
      </v-card-actions>
    </v-card>
</template>

<script>
import ImageItem from '@/components/shared/ImageItem.vue'
export default {
  name: 'ProjectDetailModal',
  components: { ImageItem },
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  computed: {
    isLocaleItalian () {
      return this.$i18n.locale === 'it'
    },
    defaultWorkUrl () {
      return require('assets/img/works/default.webp')
    },
    selectedUrl () {
      return require(`~/assets/img/works/${this.item.src}`)
    },
    bannerBackground () {
      return `background-image:url(${this.selectedUrl})`
    }
  },
  methods: {
    close () {
      this.$emit('close')
    }
  }
}
</script>
