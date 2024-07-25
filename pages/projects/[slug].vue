<script setup lang="ts">
import { useProjectStore } from "~/stores/portfolio"
import TitleCard from "~/components/shared/TitleCard.vue";
import { useI18n } from '#imports'
import ProjectCard from "~/components/projects/ProjectCard.vue";
import GalleryElement from "~/components/projects/GalleryElement.vue";
import OptimizeImage from "~/components/shared/OptimizeImage.vue";
const projectStore = useProjectStore();
const { t } = useI18n();
const route = useRoute();
let project = projectStore.getProjectBySlug(route.params.slug);
const similarProjects = projectStore.getSimilarProjects(route.params.slug);

const loading = ref(false);
const currentLocale = useI18n().locale;
const currentLocaleIsItalian = computed(() => currentLocale.value === 'it-IT');

if (!project) {
  loading.value = true;
  project = projectStore.getProjectBySlug(route.params.slug);
  loading.value = false;
}
const projectTitle = currentLocaleIsItalian ? project?.title?.it : project?.title?.en;

useHead({
  title: projectTitle,
})

const projectHaveImages = computed(() => project?.images?.length > 0 || false);

const breadcrumb = [
  { title: 'Home', to: '/' },
  { title: t('projects.title'), to: '/projects' },
  { title: projectTitle, active: true },
];
</script>

<template>
  <v-container class="v-col-auto grid-list-md text-xs-center ms-auto">
    <v-container class="grid-list-sm text-xs-center">
      <v-card class="card round-border mb-8">
        <title-card
          :title="projectTitle"
          :breadcrumb="breadcrumb"
          icon="line-md:text-box-multiple"
        />
        <v-card-text class="mt-4">
          <v-row>
            <v-col cols="12" lg="6" xl="6">
              <optimize-image
                class="round-border card"
                :src="project.preview"
                position="top"
                cover
              />
            </v-col>
            <v-col cols="12" lg="6" xl="6">
              <div class="mb-2">
                <div class="text-body-1 font-weight-bold white-text">{{ $t('projects.description') }}</div>
                {{ currentLocaleIsItalian ? project?.description?.it : project?.description?.en }}
              </div>
              <div class="mb-2">
                <div class="text-body-1 font-weight-bold white-text mb-1">{{ $t('projects.company') }}</div>
                <v-list class="round-border" rounded style="background-color: #282829">
                  <v-list-item
                    :title="project?.client?.name"
                    :subtitle="project?.client?.bio"
                  >
                    <template v-slot:prepend>
                      <v-avatar color="grey-lighten-1" tile class="round-border card" size="large">
                        <optimize-image
                          :src="project?.client?.logo"
                          alt-text="Client logo"
                          :height="50"
                        />
                      </v-avatar>
                    </template>

                    <template v-if="project?.client?.website" v-slot:append>
                      <v-btn
                        color="grey-lighten-1"
                        icon="line-md:external-link"
                        variant="text"
                        size="large"
                        :href="project?.client?.website"
                        target="_blank"
                      ></v-btn>
                    </template>
                  </v-list-item>
                </v-list>
              </div>
              <div class="mb-1">
                <div class="text-body-1 font-weight-bold white-text">{{ $t('projects.technologies') }}</div>
                <v-tooltip v-for="(lang,i) in project?.technical?.technologies" :key="i" location="top">
                  <template v-slot:activator="{ props }">
                    <v-btn
                      :icon="true"
                      class="ma-2 icon"
                      size="large"
                      style="background-color: transparent !important;"
                      v-bind="props"
                    >
                      <v-icon class="white-text" size="30">{{ lang.icon }}</v-icon>
                    </v-btn>
                  </template>
                  <span>{{ lang.name }}</span>
                </v-tooltip>
              </div>
            </v-col>
            <v-col v-if="projectHaveImages" cols="12">
              <v-expansion-panels elevation="2">
                <v-expansion-panel
                  :title="$t('projects.moreImages')"
                  class="round-border" rounded style="background-color: #282829"
                >
                  <template v-slot:text>
                    <v-row>
                      <v-col v-for="(item, i) in project?.images" :key="i" cols="12" sm="6" md="4" lg="4">
                        <gallery-element :image="item.image" :title="item.title" />
                      </v-col>
                    </v-row>
                  </template>
                </v-expansion-panel>
              </v-expansion-panels>
            </v-col>
          </v-row>
        </v-card-text>
        <v-card-actions v-if="project?.website || project?.github">
          <v-spacer />
          <v-btn
            v-if="project?.website"
            :href="project?.website"
            target="_blank"
            variant="outlined"
            class="round-border button-hover"
          >
            <v-icon>line-md:external-link</v-icon>
            <span class="hidden-xs-and-down ml-1">
                Visualizza
              </span>
          </v-btn>
          <v-btn
            v-if="project?.github"
            variant="outlined"
            :href="project?.github"
            target="_blank"
            class="ml-2 round-border button-hover"
          >
            <v-icon>line-md:github</v-icon>
            <span class="hidden-xs-and-down ml-1">
                GitHub
              </span>
          </v-btn>
        </v-card-actions>
      </v-card>
      <!-- SIMILAR PROJECTS -->
      <v-container class="mb-8">
        <v-row>
          <v-col cols="12">
            <v-divider class="white--text mt-4 mb-4" />
          </v-col>
          <v-col cols="12">
            <div class="text-h4 white--text">{{ $t('projects.similar') }}</div>
          </v-col>
          <v-col cols="12">
            <v-row>
              <v-col v-for="(project, i) in similarProjects" :key="i" cols="12" sm="6" md="4" lg="4">
                <project-card :item="project" :image-height="150" />
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-container>
  </v-container>
</template>

<style scoped>

</style>
