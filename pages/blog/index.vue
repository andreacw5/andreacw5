<script setup lang="ts">
import { useI18n } from '#imports'
import type { BreadcrumbItem } from '~/utils/types';
import { useBlogStore } from "~/stores/blog"
import PageTitle from "~/components/shared/PageTitle.vue";
import BlogCard from "~/components/blog/BlogCard.vue";

const { t } = useI18n();

useHead({
  title: t('blog.title'),
})
const loading = ref(false)
const blogStore = useBlogStore();

let blogs = blogStore.getAllBlogs;
const categories = blogStore.getAllCategories;

const categoriesActive = shallowRef<string[]>([]);
const title = ref('')

const active = computed(() => {
  //@ts-ignore
  return [].concat(categoriesActive.value)
})

function onClickClose (title: string) {
  if (categoriesActive.value.includes(title)) {
    categoriesActive.value = categoriesActive.value.filter(item => item !== title)
  }
}

function onClickClear () {
  categoriesActive.value = []
}

const breadcrumbs: BreadcrumbItem[] = [
  { title: 'Home', to: '/' },
  { title: t('blog.title'), active: true },
];
</script>


<template>
  <v-container class="v-col-auto grid-list-md text-xs-center ms-auto mb-16">
    <v-container class="grid-list-sm text-xs-center">
      <page-title icon="line-md:cloud-alt-print-loop" :title="t('blog.title')" :breadcrumbs="breadcrumbs">
        <slot>
          <div class="text-center">
            <div class="text-h6 font-weight-bold">
              {{ blogs.length }}
            </div>
            <div class="text-caption text-medium-emphasis">
              {{ t('blog.filters.blogs') }}
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
          :placeholder="t('blog.filters.search')"
          prepend-inner-icon="mdi-magnify"
          variant="outlined"
          v-model="title"
        />

        <v-btn
          append-icon="line-md:chevron-small-down"
          class="text-none"
          height="40"
          prepend-icon="mdi:tag-outline"
          rounded="lg"
          variant="outlined"
        >
          {{ t('blog.filters.categories') }}

          <v-badge
            v-if="categoriesActive.length"
            color="primary"
            :content="categoriesActive.length"
            floating
            offset-x="-20"
            offset-y="-10"
          />

          <v-menu activator="parent" :close-on-content-click="false" location="bottom end">
            <v-list v-model:selected="categoriesActive" select-strategy="leaf" style="background: #202022">
              <v-list-item
                v-for="(category, i) in categories"
                :key="i"
                :title="category.name"
                :value="category.code"
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
        <v-col v-for="(i) in 6" :key="i" cols="12">
          <v-skeleton-loader
            :id="i"
            type="image"
            class="round-border card"
          ></v-skeleton-loader>
        </v-col>
      </v-row>
      <v-row v-else>
        <template v-for="blog in blogs" :key="i">
          <v-col cols="12" xl="3" md="4" sm="6" class="px-0 px-sm-0 pa-md-2">
            <blog-card :item="blog" />
          </v-col>
        </template>
      </v-row>
    </v-container>
  </v-container>
</template>
