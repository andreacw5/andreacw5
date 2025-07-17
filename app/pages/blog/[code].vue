<script setup lang="ts">
import { useBlogStore } from "@/stores/blog"
import { useI18n } from "#imports";
const { t } = useI18n();
const blogStore = useBlogStore();
const route = useRoute();

interface Article {
  title: string;
  cover: string;
  content: string;
  short?: string;
  gallery?: { image: string; alt: string }[];
}

let article: Article = {
  title: t("blog.title"),
  cover: "https://cdn.vuetifyjs.com/images/cards/desert.jpg",
  content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit!"
};

const fetchedArticle = blogStore.getBlogByCode(route.params.code as string);
if (fetchedArticle) {
  article = fetchedArticle as Article;
}

useHead({
  title: article.title,
})
</script>

<template>
  <v-container class="v-col-auto grid-list-md text-xs-center ms-auto mb-16">

    <v-responsive
      class="text-center mx-auto mb-12 mb-md-0"
      max-width="700"
    >
      <p class="font-weight-medium text-primary">
        {{ article.short }}
      </p>

      <p class="mt-2 text-h5 font-weight-bold text-sm-h4">
        {{ article.title }}
      </p>

      <p class="mt-4 text-body-1 text-medium-emphasis">
        {{ article.content }}
      </p>
    </v-responsive>

    <v-container v-if="article.gallery" class="grid-list-sm text-xs-center">
      <v-row>
        <v-col
          v-for="(item, i) in article.gallery"
          :key="i"
          cols="12"
          md="6"
        >
          <v-card border flat rounded="lg" class="mx-auto card" height="400">
            <v-img :src="item.image" cover :alt="item.alt" />
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<style scoped>

</style>
