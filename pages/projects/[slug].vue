<script setup lang="ts">
import { useProjectStore } from "~/stores/portfolio"
import TitleCard from "~/components/shared/TitleCard.vue";
import { useI18n } from '#imports'
import ProjectCard from "~/components/projects/ProjectCard.vue";
import GalleryElement from "~/components/projects/GalleryElement.vue";
import OptimizeImage from "~/components/shared/OptimizeImage.vue";
import CompanyCard from "~/components/projects/CompanyCard.vue";
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

const features = [
  'Padded Laptop Compartment',
  'Water Bottle Holder',
  'Anti-Theft Pockets',
  'Ventilated Back Panel',
]

//@ts-ignore
const projectHaveImages = computed(() => project?.images?.length > 0 || false);

const projectPreview = project?.preview ? project.preview : '@/assets/images/loading.webp';

const breadcrumb = [
  { title: 'Home', to: '/' },
  { title: t('projects.title'), to: '/projects' },
  { title: projectTitle, to: '', active: true },
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
            <v-col
              cols="12"
              md="7"
              order="2"
              order-md="1"
            >
              <optimize-image
                class="round-border card"
                :src="projectPreview"
                position="center"
                cover
              />
            </v-col>
            <v-col
              class="px-md-4"
              cols="12"
              md="5"
              order="1"
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

              <v-row v-if="project?.website || project?.github">
                <v-col v-if="project?.website" cols="6" lg="6" md="12">
                  <v-btn
                    :href="project?.website"
                    block
                    class="text-none"
                    color="primary"
                    flat
                    target="_blank"
                    rounded="lg"
                    size="large"
                    text="Visualizza"
                    prepend-icon="line-md:external-link"
                    variant="tonal"
                  />
                </v-col>

                <v-col v-if="project?.github" cols="6" lg="6" md="12">
                  <v-btn
                    block
                    class="text-none"
                    color="primary"
                    flat
                    rounded="lg"
                    size="large"
                    prepend-icon="line-md:github"
                    text="GitHub"
                    variant="tonal"
                  />
                </v-col>
              </v-row>

              <v-divider class="my-4" />

              <p class="text-body-1 font-weight-bold mt-4 mb-2">{{ $t('projects.company') }}</p>

              <company-card
                :title="project?.client?.name"
                :image="project?.client?.logo"
                :website="project?.client?.website"
                :instagram="project?.client?.instagram"
                :linkedin="project?.client?.linkedin"
              />

              <v-divider class="my-4" />

              <p class="text-body-1 font-weight-bold mt-4 mb-2">{{ $t('projects.technologies') }}</p>

              <v-tooltip v-for="(lang,i) in project?.technical?.technologies" :key="i" location="top">
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
                <span>{{ lang.name }}</span>
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
        </v-card-text>
      </v-card>
      <!-- SIMILAR PROJECTS -->
      <v-container class="pa-md-6" fluid>
        <h3 class="text-h5 font-weight-bold mb-4">{{ $t('projects.similar') }}</h3>

        <v-row>
          <v-col v-for="(project, i) in similarProjects" :key="i" cols="12" sm="6" md="4" lg="4">
            <project-card :item="project" :image-height="150" />
          </v-col>
        </v-row>
      </v-container>
    </v-container>
  </v-container>
</template>

<style scoped>

</style>
