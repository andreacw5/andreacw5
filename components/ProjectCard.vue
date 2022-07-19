<template>
  <v-card class="secondary-border card">
    <v-container grid-list-md text-xs-center style="padding-bottom: 0">
      <v-row wrap>
        <v-col cols="12" md="6">
          <div class="pa-2">
            <image-item :imageUrl="item.src" alt-text="Project image" :height="300" class="project-image" />
          </div>
        </v-col>
        <v-col cols="12" md="6">
          <div class="text-left">
            <h1 class="text-uppercase mt-2 text-left" style="font-size: xx-large; font-weight: bolder">
              {{ item.title }}
              <span>
                <v-tooltip v-if="item.technical.main" top>
                  <template v-slot:activator="{ on }">
                    <v-btn
                      v-on="on"
                      :color="item.technical.main.color"
                      class="transition pb-1"
                      icon
                    >
                      <v-icon large>{{ item.technical.main.icon }}</v-icon>
                    </v-btn>
                  </template>
                  <span>{{ $t('projects.main_tech') }}</span>
                </v-tooltip>
              </span>
            </h1>
            <h4 class="mt-2 text-left">
              <template v-if="item.startDate">
                <v-icon class="mb-1" size="20">mdi-calendar</v-icon>
                {{ item.startDate.seconds | formatDate('yyyy') }}<span v-if="item.endDate">/{{ item.endDate.seconds | formatDate('yyyy') }}</span><span v-else-if="item.current">/{{ $t('common.today') }}</span>
              </template>
              <template v-if="item.company">
                - <v-icon class="mb-1" size="20">mdi-office-building-outline</v-icon> {{ item.company }}
              </template>
            </h4>
            <v-divider class="my-2"></v-divider>
            <div class="mb-2">
              <div class="mb-1">{{ item.description }}</div>
            </div>
            <div class="mb-2">
              <div class="text-body-1 font-weight-bold">{{ $t('projects.technologies') }}</div>
              <v-tooltip top v-for="(lang,i) in item.technical.technologies" :key="i">
                <template #activator="{ on }">
                  <v-btn
                    icon
                    href="website"
                    target="_blank"
                    v-on="on"
                    class="ma-1 transition icon"
                  >
                    <v-icon>{{lang.icon}}</v-icon>
                  </v-btn>
                </template>
                <span>{{lang.name}}</span>
              </v-tooltip>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
    <v-card-actions>
      <v-spacer />
      <v-tooltip v-if="item.website" top>
        <template #activator="{ on }">
          <v-btn
            outlined
            :href="item.website"
            target="_blank"
            v-on="on"
          >
            <v-icon>mdi-earth</v-icon>
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
            v-on="on"
            class="ml-2"
          >
            <v-icon>mdi-github</v-icon>
          </v-btn>
        </template>
        <span>{{ $t('actions.visit.github') }}</span>
      </v-tooltip>
      <v-tooltip v-if="false" top>
        <template #activator="{ on }">
          <v-btn
            outlined
            nuxt
            :to="{ path: '/projects/' + item.slug }"
            v-on="on"
            class="ml-2"
          >
            {{ $t('projects.study_case') }}
          </v-btn>
        </template>
        <span>{{ $t('actions.visit.study_case') }}</span>
      </v-tooltip>
    </v-card-actions>
  </v-card>
</template>

<script>
import ImageItem from "@/components/shared/ImageItem";
export default {
  name: 'ProjectCard',
  components: {ImageItem},

  props: {
    item: {
      type: Object,
      required: true
    }
  },
  computed: {
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
.project-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border: solid 1px #e0e0e0;
  border-radius: 15px;
}
 .transition:hover {
   transform: scale(1.3);
 }
.icon {
  color: var(--color);
}

.icon:hover {
  color: var(--color-hover);
}
</style>
