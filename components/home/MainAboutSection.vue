<template>
  <v-row wrap>
    <v-col cols="12" xs="12" sm="12" md="12" lg="5" order-lg="2">
      <div class="d-flex align-center ml-3">
        <image-item
          class="card-gradient round-border"
          alt-text="Intro image"
          image-url="https://harbor.andreacw.dev/api/v1/files/59eede5fb0b097a63e0eb276add71e83"
          :height="290"
        />
      </div>
    </v-col>
    <v-col cols="12" xs="12" sm="12" md="12" lg="7" order-lg="1">
      <h1 class="mb-2 mt-1 large-title">{{ $t('greetings') }}</h1>
      <i18n path="intro.welcome" tag="p">
        <template #medas>
          <a href="https://medas-solutions.it" target="_blank">Medas Solutions</a>
        </template>
        <template #element>
          <a href="https://element-gaming.eu" target="_blank">Element Gaming</a>
        </template>
        <template #portfolio>
          <nuxt-link to="/portfolio">
            {{ $t('intro.portfolio') }}
          </nuxt-link>
        </template>
      </i18n>
      <i18n path="intro.extension" tag="p">
        <template #prociv>
          <a href="https://comune.settimomilanese.mi.it/category/protezione-civile/" target="_blank">
            {{ $t('prociv') }}
          </a>
        </template>
      </i18n>
    </v-col>
  </v-row>
</template>

<script>
import ImageItem from '@/components/shared/ImageItem.vue'

export default {
  name: 'MainAboutSection',
  components: { ImageItem }
}
</script>

<style scoped>
.large-title {
  font-size: 3rem;
}
</style>
