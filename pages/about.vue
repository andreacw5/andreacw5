<template>
  <v-container grid-list-md text-xs-center>
    <v-row wrap>
      <v-col cols="12">
        <h1 class="text-uppercase mt-5" style="font-size: x-large; font-weight: bolder">
          <i18n path="sections.contact.end" tag="span">
            <template #contact>
              <span class="primary--text">{{ $t('sections.about.title') }}</span>
            </template>
          </i18n>
        </h1>
      </v-col>
      <v-col xs="12" sm="12" md="4" lg="4">
        <v-card
          class="d-flex align-center ml-3"
          dark
        >
          <image-item alt-text="Intro image" :image-url="imageUrl" :height="230" />
        </v-card>
      </v-col>
      <v-col xs="12" sm="12" md="8" lg="8">
        <div>
          <i18n path="intro.welcome" tag="p">
            <template #name>
              <b>Andrea Tombolato</b>
            </template>
            <template #username>
              <b>andreacw</b>
            </template>
          </i18n>
          <i18n path="intro.resume" tag="p">
            <template #medas>
              <a href="https://medas-solutions.it" target="_blank">Medas Solutions</a>
            </template>
            <template #element>
              <a href="https://element-gaming.eu" target="_blank">Element Gaming</a>
            </template>
          </i18n>
          <i18n path="intro.hobbies" tag="p">
            <template #prociv>
              <a href="https://comune.settimomilanese.mi.it/category/protezione-civile/" target="_blank">
                {{ $t('prociv') }}
              </a>
            </template>
          </i18n>
        </div>
      </v-col>
      <v-col class="mt-4" xs="12" sm="12" md="8" lg="8">
        <div>
          <i18n path="intro.welcome" tag="p">
            <template #name>
              <b>Andrea Tombolato</b>
            </template>
            <template #username>
              <b>andreacw</b>
            </template>
          </i18n>
          <i18n path="intro.resume" tag="p">
            <template #medas>
              <a href="https://medas-solutions.it" target="_blank">Medas Solutions</a>
            </template>
            <template #element>
              <a href="https://element-gaming.eu" target="_blank">Element Gaming</a>
            </template>
          </i18n>
          <i18n path="intro.hobbies" tag="p">
            <template #prociv>
              <a href="https://comune.settimomilanese.mi.it/category/protezione-civile/" target="_blank">
                {{ $t('prociv') }}
              </a>
            </template>
          </i18n>
        </div>
      </v-col>
      <v-col xs="12" sm="12" md="4" lg="4">
        <v-card
          class="d-flex align-center ml-3"
          dark
        >
          <image-item alt-text="Intro image" :image-url="imageUrl" :height="230" />
        </v-card>
      </v-col>
    </v-row>
    <v-row wrap>
      <v-col cols="12">
        <h1 class="text-uppercase mt-5" style="font-size: x-large; font-weight: bolder">
          <i18n path="sections.start" tag="span">
            <template #section>
              <span class="primary--text">{{ $t('sections.about.skills') }}</span>
            </template>
          </i18n>
        </h1>
      </v-col>
      <v-col cols="12">
        <h1 class="text-uppercase mt-5" style="font-size: x-large; font-weight: bolder">
          <i18n path="sections.start" tag="span">
            <template #section>
              <span class="primary--text">{{ $t('sections.about.experience') }}</span>
            </template>
          </i18n>
        </h1>
      </v-col>
      <v-col
        v-for="(work, i) in works"
        :key="i"
        cols="12"
        lg="6"
      >
        <work-card
          :title="work.title"
          :company="work.company"
          :period="work.period"
          :description="work.description"
          :website="work.website"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import about from '@/static/data/about'
import ImageItem from '../components/shared/ImageItem'
import WorkCard from '../components/about/WorkCard'
export default {
  name: 'About',
  components: { WorkCard, ImageItem },
  data: () => ({
    reveal: false,
    works: about.works
  }),
  computed: {
    isDarkMode () {
      return this.$colorMode.preference === 'dark'
    },
    imageUrl () {
      return require('~/assets/img/profile.webp')
    },
    wipUrl () {
      return require('~/assets/img/wip.webp')
    }
  }
}
</script>
