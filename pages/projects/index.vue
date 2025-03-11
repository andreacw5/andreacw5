<script setup lang="ts">
import ProjectCard from "~/components/projects/ProjectCard.vue";
import { useI18n } from '#imports'
import type { BreadcrumbItem, Project } from '~/utils/types';
import { useProjectStore } from "~/stores/portfolio"
import PageTitle from "~/components/shared/PageTitle.vue";

const { t } = useI18n();
useHead({
  title: t('projects.title'),
  meta: [
    {
      name: 'description',
      content: 'Andrea Tombolato projects'
    }
  ]
})

const projectStore = useProjectStore();

const contracts = projectStore.getAllCompanies;
const technologies = projectStore.getAllTechs;

const contract = shallowRef<string[]>([]);
const technology = shallowRef<string[]>([]);
const title = ref('')

const active = computed(() => {
  //@ts-ignore
  return [].concat(contract.value).concat(technology.value)
})

function onClickClose(title: string) {
  if (contract.value.includes(title)) {
    contract.value = contract.value.filter(item => item !== title);
  } else if (technology.value.includes(title)) {
    technology.value = technology.value.filter(item => item !== title);
  }
}

function onClickClear () {
  contract.value = []
  technology.value = []
}

let loading = ref(false);

const projects = ref<Project[]>([]);

//@ts-ignore
projects.value = projectStore.getAllProjects;

watch([contract, technology, title], ([newContract, newTechnology, newTitle]) => {
  loading.value = true;
  //@ts-ignore
  projects.value = projectStore.getProjectsByFilters({
    techs: newTechnology,
    clients: newContract,
    title: newTitle
  });
  loading.value = false;
});

const breadcrumbs: BreadcrumbItem[] = [
  { title: 'Home', to: '/' },
  { title: t('projects.title'), active: true }
];
</script>


<template>
  <v-container class="v-col-auto grid-list-md text-xs-center ms-auto mb-16">
    <v-container class="grid-list-sm text-xs-center">
      <page-title :title="t('projects.title')" icon="line-md:folder" :breadcrumbs="breadcrumbs">
        <slot>
          <div class="text-center">
            <div class="text-h6 font-weight-bold">
              {{ technologies.length }}
            </div>
            <div class="text-caption text-medium-emphasis">
              {{ t('projects.filters.technologies') }}
            </div>
          </div>

          <v-divider vertical />

          <div class="text-center">
            <div class="text-h6 font-weight-bold">
              {{ contracts.length }}
            </div>
            <div class="text-caption text-medium-emphasis">
              {{ t('projects.filters.companies') }}
            </div>
          </div>
        </slot>
      </page-title>
      <div class="d-flex flex-wrap ga-3 align-md-center flex-column flex-sm-row">
        <v-text-field
          bg-color="#202022"
          density="compact"
          hide-details
          rounded="lg"
          :placeholder="$t('projects.filters.search')"
          prepend-inner-icon="mdi-magnify"
          variant="outlined"
          v-model="title"
        />

        <v-btn
          append-icon="line-md:chevron-small-down"
          class="text-none"
          height="40"
          prepend-icon="line-md:text-box"
          rounded="lg"
          variant="outlined"
        >
          {{ t('projects.filters.technologies') }}

          <v-badge
            v-if="technology.length"
            color="primary"
            :content="technology.length"
            floating
            offset-x="-20"
            offset-y="-10"
          />

          <v-menu activator="parent" :close-on-content-click="false" location="bottom end">
            <v-list v-model:selected="technology" select-strategy="leaf" style="background: #202022">
              <v-list-item
                v-for="(tech, i) in technologies"
                :key="i"
                :title="tech"
                :value="tech"
              >
                <template #prepend="{ isSelected }">
                  <v-list-item-action start>
                    <v-checkbox-btn :model-value="isSelected" />
                  </v-list-item-action>
                </template>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-btn>

        <v-btn
          append-icon="line-md:chevron-small-down"
          class="text-none"
          height="40"
          prepend-icon="line-md:briefcase"
          rounded="lg"
          variant="outlined"
        >
          {{ t('projects.filters.companies') }}

          <v-badge
            v-if="contract.length"
            color="primary"
            :content="contract.length"
            floating
            offset-x="-20"
            offset-y="-10"
          />

          <v-menu activator="parent" :close-on-content-click="false" location="bottom end">
            <v-list v-model:selected="contract" select-strategy="leaf" style="background: #202022">
              <v-list-item
                v-for="(title, i) in contracts"
                :key="i"
                :title="title"
                :value="title"
              >
                <template #prepend="{ isSelected }">
                  <v-list-item-action start>
                    <v-checkbox-btn :model-value="isSelected" />
                  </v-list-item-action>
                </template>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-btn>
      </div>

      <div v-if="active.length" class="d-flex flex-wrap ga-2 mt-4">
        <v-chip
          v-for="title in active"
          :key="title"
          closable
          size="small"
          :text="title"
          variant="outlined"
          @click:close="onClickClose(title)"
        />

        <v-chip
          v-if="active.length"
          border="error thin opacity-100"
          class="text-none"
          closable
          color="error"
          rounded="lg"
          size="small"
          :text="t('projects.filters.reset')"
          @click:close="onClickClear"
        >
          <template #close>
            <v-icon color="mdi:bin-outline" />
          </template>
        </v-chip>
      </div>
    </v-container>
    <v-container grid-list-md text-xs-center>
      <v-row v-if="loading">
        <v-col
          v-for="(i) in 6"
          :key="i"
          cols="12"
          sm="12"
          md="6"
          lg="6"
          xl="4"
        >
          <v-skeleton-loader
            :id="i"
            type="image"
            class="round-border card"
            rounded="lg"
          />
        </v-col>
      </v-row>
      <v-row
        class="fill-height"
        align="center"
        justify="center"
        v-else
      >
        <template v-for="(project, i) in projects" :key="i">
          <v-col
            class="px-0 px-sm-0 pa-md-2"
            cols="12"
            sm="12"
            md="6"
            lg="6"
            xl="4"
          >
            <project-card :item="project" />
          </v-col>
        </template>
        <template v-if="projects.length === 0">
          <v-container class="pa-6 pa-md-12 my-16 d-flex align-center">
            <v-responsive class="mx-auto text-center" max-width="600" width="100%">

              <v-icon size="100px" class="font-weight-medium text-primary">line-md:question-circle</v-icon>

              <p class="font-weight-bold text-sm-h3 text-h4 mt-2'">
                {{ t('projects.emptyState.title') }}
              </p>

              <p class="mt-4 mb-8 text-body-1 text-medium-emphasis">
                {{ t('projects.emptyState.subtitle') }}
              </p>
            </v-responsive>
          </v-container>
        </template>
      </v-row>
    </v-container>
  </v-container>
</template>
