<script setup lang="ts">
const icons = [
  {
    icon: 'mdi-linkedin',
    code: 'linkedin',
    link: 'https://www.linkedin.com/in/atombolato/',
    aria: 'LinkedIn profile'
  },
  {
    icon: 'mdi-github',
    code: 'github',
    link: 'https://github.com/andreacw5',
    aria: 'GitHub profile'
  },
  {
    icon: 'mdi-steam',
    code: 'steam',
    link: 'https://steamcommunity.com/id/andreacw96',
    aria: 'Steam profile'
  },
  {
    icon: 'mdi-instagram',
    code: 'instagram',
    link: 'https://www.instagram.com/andreacw96',
    aria: 'Instagram profile'
  }
];
</script>

<template>
  <v-footer class="card-gradient text-center d-flex flex-column">
    <div>
      <v-btn
        v-for="icon in icons"
        :key="icon.code"
        :icon="true"
        class="mx-2 common-card"
        variant="text"
        :href="icon.link"
        :class="icon.code"
        :aria-label="icon.aria"
      >
        <v-icon :class="icon.code" size="30">{{ icon.icon }}</v-icon>
      </v-btn>
    </div>

    <v-divider class="mt-2" />

    <div class="mb-3">
      © 2021-{{ new Date().getFullYear() }} - All rights reserved
    </div>
  </v-footer>
</template>

<style scoped>
.instagram:hover {
  color: #e1306c !important;
}
.linkedin:hover {
  color: #0077b5 !important;
}
.github:hover {
  color: #ffff !important;
}
.steam:hover {
  color: #9f9a9a !important;
}
</style>
