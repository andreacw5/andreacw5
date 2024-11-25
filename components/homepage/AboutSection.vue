<script setup lang="ts">
import OptimizeImage from "~/components/shared/OptimizeImage.vue";

import { useSnackbarStore } from '~/stores/snackbar';

const snackbarStore = useSnackbarStore();

const downloadCV = () => {
  snackbarStore.setSnackbar(
    { snackbar: snackbarStore.snackbar },
    {
      show: true,
      icon: 'line-md:downloading-loop',
      color: 'success',
      title: 'Download Started',
      text: 'Your CV download has started successfully.'
    }
  );
};

</script>

<template>
  <v-row wrap>
    <v-col cols="12" xs="12" sm="12" md="12" lg="5" order-lg="2">
      <div class="d-flex align-center ml-3">
        <optimize-image
          class="card-gradient round-border"
          alt="Intro image"
          src="https://file-harbor.com/api/v1/files/59eede5fb0b097a63e0eb276add71e83"
          :height="325"
        />
      </div>
    </v-col>
    <v-col cols="12" xs="12" sm="12" md="12" lg="7" order-lg="1">
      <p class="font-weight-medium text-primary pb-1">{{ $t('greetings') }}</p>
      <h1 class="text-h3 font-weight-bold mb-4">
        {{ $t('presentation') }}
      </h1>
      <i18n-t keypath="intro.welcome" tag="p" class="text-subtitle-2 text-medium-emphasis mb-4">
        <template #medas>
          <a href="https://medas-solutions.it" target="_blank" class="link">
            Medas Solutions
          </a>
        </template>
        <template #element>
          <a href="https://element-gaming.eu" target="_blank" class="link">
            Element Gaming
          </a>
        </template>
        <template #portfolio>
          <nuxt-link to="/projects" class="link">
            {{ $t('intro.portfolio') }}
          </nuxt-link>
        </template>
      </i18n-t>
      <i18n-t keypath="intro.extension" tag="p" class="text-subtitle-2 text-medium-emphasis mb-6">
        <template #prociv>
          <a href="https://procivsettimomi.it" target="_blank" class="link">
            {{ $t('prociv') }}
          </a>
        </template>
      </i18n-t>
      <div class="text-center">
        <v-btn
          class="mr-4 text-none"
          color="primary"
          size="small"
          prepend-icon="line-md:file-download"
          text="Scarica il mio CV"
          variant="flat"
          @click="downloadCV"
        />

        <v-btn
          append-icon="line-md:arrow-right"
          class="text-none"
          size="small"
          border
          to="/projects"
          text="Vai al portfolio"
          variant="text"
        />
      </div>
    </v-col>
  </v-row>
</template>

<style scoped>
.link {
  position: relative;
  text-decoration: none;
  font-weight: 500;
}

.link::after {
  content: '';
  position: absolute;
  width: 0;
  height: 1px;
  bottom: 0;
  left: 0;
  background-color: currentColor;
  transition: width 0.3s ease-in-out;
}

.link:hover::after {
  width: 100%;
}
</style>
