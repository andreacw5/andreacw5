<script setup lang="ts">
const drawer = ref(false)
const localePath = useLocalePath()

const links = [
  {
    "name": "sections.home",
    "icon": "mdi-home",
    "url": "/"
  },
  {
    "name": "sections.projects",
    "icon": "mdi-briefcase",
    "url": "/projects"
  },
  {
    "name": "sections.travels",
    "icon": "mdi-beach",
    "url": "/travels"
  }
]
const closeOrOpenDrawer = () => {
  drawer.value = !drawer.value
}
</script>

<template>
  <div class="header">
    <v-app-bar class="card-gradient pl-0">
      <v-container class="d-flex align-center py-0">
        <v-app-bar-nav-icon class="hidden-md-and-up" @click="closeOrOpenDrawer" />
        <v-divider vertical inset class="mr-4 ml-2 hidden-md-and-up white-text" />

        <nuxt-link :to="localePath('/')" class="mt-2">
          <img :height="40" :width="100" src="~/assets/branding/atom-web.webp" alt="AT Logo" />
        </nuxt-link>

        <v-spacer />
        <v-btn variant="text" :to="localePath('/')" nuxt class="hidden-sm-and-down white-text mr-1">
          {{ $t('sections.home') }}
        </v-btn>
        <v-btn variant="text" :to="localePath('/projects')" nuxt class="hidden-sm-and-down white-text mr-1">
          {{ $t('sections.projects') }}
        </v-btn>
        <v-btn variant="text" :to="localePath('/travels')" nuxt class="hidden-sm-and-down white-text mr-1">
          {{ $t('sections.travels') }}
        </v-btn>
        <v-divider vertical inset class="mr-2 ml-2 hidden-sm-and-down white-text" />
        <v-btn variant="text" class="white-text mr-1" href="https://github.com/andreacw5" target="_blank">
          <v-icon size="25">line-md:github</v-icon>
        </v-btn>
        <!--          <v-divider vertical inset class="mr-2 ml-2 hidden-sm-and-down white-text" />
              <NuxtLink v-for="locale in availableLocales" :key="locale.code" :to="switchLocalePath(locale.code)">
                <Icon :icon="locale.icon" height="25"/>
              </NuxtLink>-->
      </v-container>
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      class="card-gradient"
      absolute
      temporary
    >
      <v-list>
        <v-list-item
          prepend-avatar="https://file-harbor.com/api/v1/files/59eede5fb0b097a63e0eb276add71e83"
          subtitle="Web Developer"
          title="Andrea Tombolato"
        />
      </v-list>
      <v-divider />
      <v-list density="compact" nav>
        <v-list-item
          v-for="link in links"
          :key="link.name"
          :to="localePath(link.url)"
          nuxt
          :prepend-icon="link.icon"
          :title="$t(link.name)"
          :value="link.url"
        />
      </v-list>
    </v-navigation-drawer>
  </div>
</template>
