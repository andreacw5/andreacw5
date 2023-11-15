<template>
  <a @click.stop="dialog = true">
    <v-card class="atom-card common-card mx-auto card-gradient">
      <image-item
        :image-url="item.preview"
        :alt-text="item.title + ' cover image'"
        :height="300"
        class="project-image"
        position="absolute"
      />
      <v-list
        subheader
        two-line
        style="background: transparent !important;"
      >
        <v-list-item>
          <v-list-item-content class="text-left">
            <v-list-item-title>
              <h2>{{ isLocaleItalian ? item.title.it : item.title.en }}</h2>
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
      <v-dialog
        v-model="dialog"
        max-width="650"
        transition="scale-transition"
        :open-delay="500"
        :close-delay="500"
      >
        <project-detail-modal :item="item" @close="dialog = false" />
      </v-dialog>
    </v-card>
  </a>
</template>

<script>
import ImageItem from '@/components/shared/ImageItem.vue'
import ProjectDetailModal from '@/components/portfolio/ProjectDetailModal.vue'
export default {
  name: 'ProjectCard',
  components: { ProjectDetailModal, ImageItem },
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      dialog: false
    }
  },
  computed: {
    isLocaleItalian () {
      return this.$i18n.locale === 'it'
    },
    defaultWorkUrl () {
      return require('assets/img/loading.webp')
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
