<script setup lang="ts">
import { useProjectStore } from "~/stores/portfolio"
import TitleCard from "~/components/shared/TitleCard.vue";
import { useI18n } from '#imports'
import ProjectCard from "~/components/projects/ProjectCard.vue";
import GalleryElement from "~/components/projects/GalleryElement.vue";
import OptimizeImage from "~/components/shared/OptimizeImage.vue";
import CompanyCard from "~/components/projects/CompanyCard.vue";
import ProjectFeatures from "~/components/projects/ProjectFeatures.vue";
import PageTitle from "~/components/shared/PageTitle.vue";
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

//@ts-ignore
const projectHaveImages = computed(() => project?.images?.length > 0 || false);

const projectPreview = project?.preview ? project.preview : '@/assets/images/loading.webp';

const breadcrumbs = [
  { title: 'Home', to: '/' },
  { title: t('projects.title'), to: '/projects' },
  { title: projectTitle, to: '', active: true },
];
</script>

<template>
  <v-container class="v-col-auto grid-list-md text-xs-center ms-auto mb-16">
    <v-container class="grid-list-sm text-xs-center">
      <page-title icon="line-md:text-box-multiple" :title="t('projects.title')" :breadcrumbs="breadcrumbs">
        <slot>
          <v-btn
            v-if="project?.website"
            class="text-none"
            color="primary"
            flat
            target="_blank"
            rounded="lg"
            text="Visualizza"
            prepend-icon="line-md:external-link"
            variant="tonal"
            v-tooltip="{ text: 'Visualizza', location: 'top' }"
          />
          <v-btn
            v-if="project?.github"
            class="text-none"
            color="primary"
            prepend-icon="line-md:github"
            rounded="lg"
            text="GitHub"
            variant="tonal"
            v-tooltip="{ text: 'GitHub', location: 'top' }"
          />
        </slot>
      </page-title>
      <v-container class="pa-md-2 mb-4" fluid>
        <v-row>
          <v-col
            cols="12"
            md="7"
            order="1"
            order-md="1"
          >
            <optimize-image
              class="round-border card"
              :src="projectPreview"
              position="center"
              cover
            />

            <template v-if="project?.features">

              <v-divider class="my-4" />

              <p class="text-body-1 font-weight-bold mt-4 mb-2">{{ t('projects.features') }}</p>

              <project-features :features="project?.features" />

            </template>

          </v-col>
          <v-col
            class="px-md-4"
            cols="12"
            md="5"
            order="2"
            order-md="2"
          >
            <!--              <p
                            v-if="project?.version && project?.updated"
                            class="text-caption font-weight-bold mb-4 text-medium-emphasis"
                          >
                            Version {{ project?.version }} (Updated {{ project?.updated }})
                          </p>-->

            <div class="text-body-1 mb-4 text-medium-emphasis">
              {{ currentLocaleIsItalian ? project?.description?.it : project?.description?.en }}
            </div>

            <v-divider class="my-4" />

            <p class="text-body-1 font-weight-bold mt-4 mb-2">{{ t('projects.company') }}</p>

            <company-card
              :title="project?.client?.name"
              :image="project?.client?.logo"
              :website="project?.client?.website"
              :instagram="project?.client?.instagram"
              :linkedin="project?.client?.linkedin"
            />

            <v-divider class="my-4" />

            <p class="text-body-1 font-weight-bold mt-4 mb-2">{{ t('projects.technologies') }}</p>

            <v-tooltip :text="lang.title" v-for="(lang,i) in project?.technical?.technologies" :key="i" location="top">
              <template v-slot:activator="{ props }">
                <v-btn
                  :icon="true"
                  class="round-border ma-2 card icon"
                  size="large"
                  v-bind="props"
                  rounded="lg"
                  tile
                >
                  <v-icon class="white-text" size="30">{{ lang.icon }}</v-icon>
                </v-btn>
              </template>
            </v-tooltip>
          </v-col>
          <v-col
            v-if="projectHaveImages"
            class="px-md-4"
            cols="12"
            order="3"
            order-md="3"
          >
            <v-expansion-panels elevation="2">
              <v-expansion-panel
                :title="$t('projects.moreImages')"
                class="round-border text-body-1 font-weight-bold"
                rounded="l"
                style="background-color: #282829"
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
      </v-container>
      <!-- SIMILAR PROJECTS -->
      <v-container class="pa-md-2" fluid>
        <h3 class="text-h4 font-weight-bold mb-8">{{ t('projects.similar') }}</h3>
        <v-row>
          <v-col
            v-for="(project, i) in similarProjects"
            :key="i"
            cols="12"
            md="6"
            lg="6"
            class="px-0 px-sm-0 pa-md-2"
          >
            <project-card :item="project" />
          </v-col>
        </v-row>
      </v-container>
    </v-container>
  </v-container>
</template>

<style scoped>

</style>
