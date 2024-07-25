<script setup lang="ts">
import OptimizeImage from "~/components/shared/OptimizeImage.vue";
</script>

<template>
  <v-row wrap>
    <v-col cols="12" xs="12" sm="12" md="12" lg="5" order-lg="2">
      <div class="d-flex align-center ml-3">
        <optimize-image
          class="card-gradient round-border"
          alt="Intro image"
          src="https://file-harbor.com/api/v1/files/59eede5fb0b097a63e0eb276add71e83"
          :height="290"
        />
      </div>
    </v-col>
    <v-col cols="12" xs="12" sm="12" md="12" lg="7" order-lg="1">
      <h1 class="mb-2 mt-1 text-h3" style="font-weight: bolder">{{ $t('greetings') }}</h1>
      <i18n-t keypath="intro.welcome" tag="p">
        <template #medas>
          <a href="https://medas-solutions.it" class="effect" target="_blank">Medas Solutions</a>
        </template>
        <template #element>
          <a href="https://element-gaming.eu" target="_blank">Element Gaming</a>
        </template>
        <template #portfolio>
          <nuxt-link to="/projects">
            {{ $t('intro.portfolio') }}
          </nuxt-link>
        </template>
      </i18n-t>
      <span class="ma-1" />
      <i18n-t keypath="intro.extension" tag="p">
        <template #prociv>
          <a href="https://comune.settimomilanese.mi.it/category/protezione-civile/" target="_blank">
            {{ $t('prociv') }}
          </a>
        </template>
      </i18n-t>
    </v-col>
  </v-row>
</template>
