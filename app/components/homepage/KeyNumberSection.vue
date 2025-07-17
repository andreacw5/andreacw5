<script setup lang="ts">
import CardIcon from "~/components/shared/CardIcon.vue";

const stats = [
  {
    type: 'key-number',
    icon: 'line-md:gauge-full',
    title: '10+',
    subtitle: 'Anni di esperienza',
    hover: '10+ anni di esperienza nello sviluppo di applicazioni web.'
  },
  {
    type: 'key-number',
    icon: 'line-md:arrow-close-up',
    title: '200 +',
    subtitle: 'Pull request mergiate',
    hover: '200+ pull request mergiate su repository pubblici e privati.'
  },
  {
    type: 'key-number',
    icon: 'line-md:folder-check',
    title: '55',
    subtitle: 'Progetti completati',
    hover: 'Da piccoli tool a piattaforme aziendali.'
  },
  {
    type: 'key-number',
    icon: 'line-md:coffee-loop',
    title: '645',
    subtitle: 'Tazze di caffè',
    hover: '645 tazze di caffè consumate durante le ore di lavoro.'
  }
]
</script>

<template>
  <v-card class="card mt-6" style="background: transparent !important; border-color: transparent !important;">
    <v-row dense>
      <v-col
        v-for="stat in stats"
        :key="stat.title"
        cols="12"
        lg="3"
        md="6"
        sm="6"
      >
        <card-icon :item="stat" :key="stat.title" />
      </v-col>
    </v-row>
  </v-card>
</template>

<style scoped>

</style>
