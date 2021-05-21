<template>
  <v-container grid-list-md text-xs-center>
    <v-row wrap>
      <v-col cols="12" class="hidden-sm-and-down">
        <h1 class="text-uppercase" style="font-size: xxx-large; font-weight: bolder">
          Andrea <span class="primary--text">Tombolato</span>
        </h1>
      </v-col>
      <v-col cols="12">
        <v-app-bar dense class="card">
          <v-app-bar-nav-icon class="hidden-md-and-up" @click="drawer = true"></v-app-bar-nav-icon>
          <nuxt-link to="/">
            <v-img max-height="40" max-width="40" :src="imageUrl" alt="AT Logo" />
          </nuxt-link>
          <nuxt-link to="/">
            <v-app-bar-title>
            <span class="text-uppercase hidden-md-and-up ml-4 white--text">
              Andrea <span class="primary--text hidden-sm-and-down">Tombolato</span>
            </span>
            </v-app-bar-title>
          </nuxt-link>
          <v-spacer />
          <template v-if="!links">
            <v-skeleton-loader
              ref="skeleton"
              type="button"
              class="mx-auto"
            />
            <v-skeleton-loader
              ref="skeleton"
              type="button"
              class="mx-auto"
            />
          </template>
          <v-btn v-for="(link,i) in links" v-else :key="i" text :href="link.url" nuxt class="hidden-sm-and-down up raise">
            {{ $t(link.name) }}
          </v-btn>
          <v-divider vertical inset class="mr-2 ml-2 hidden-sm-and-down" />
          <v-tooltip bottom>
            <template #activator="{ on, attrs }">
              <v-btn
                v-bind="attrs"
                icon
                :aria-label="isDarkMode() ? $t('actions.changeColor.light') : $t('actions.changeColor.dark')"
                v-on="on"
                @click="toggleDarkMode"
              >
                <v-icon v-if="isDarkMode()" size="27">
                  mdi-lightbulb-outline
                </v-icon>
                <v-icon v-else size="27">
                  mdi-lightbulb-on
                </v-icon>
              </v-btn>
            </template>
            <span>{{isDarkMode() ? $t('actions.changeColor.light') : $t('actions.changeColor.dark')}}</span>
          </v-tooltip>
        </v-app-bar>
        <v-navigation-drawer
          v-model="drawer"
          class="gray darken-4"
          absolute
          temporary
        >
          <template #prepend>
            <v-list-item two-line>
              <v-list-item-avatar tile>
                <img :src="imageUrl" alt="AT Logo">
              </v-list-item-avatar>

              <v-list-item-content>
                <v-list-item-title>Andrea <span class="primary--text">Tombolato</span></v-list-item-title>
                <v-list-item-subtitle>Web Developer</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </template>
          <v-divider />
          <v-list
            nav
            dense
          >
            <v-list-item-group
              v-model="group"
              active-class="primary--text text--accent-4"
            >
              <v-list-item v-for="(link,i) in links" :key="i" :href="link.url" nuxt>
                <v-list-item-icon>
                  <v-icon>{{ link.icon }}</v-icon>
                </v-list-item-icon>
                <v-list-item-title>{{ $t(link.name) }}</v-list-item-title>
              </v-list-item>
            </v-list-item-group>
          </v-list>
          <template #append>
            <div class="pa-2">
              <v-btn block @click="drawer = false">Logout</v-btn>
            </div>
          </template>
        </v-navigation-drawer>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import navigation from '@/static/data/navigation'
export default {
  data: () => ({
    links: navigation.links,
    drawer: false,
    group: null
  }),
  computed: {
    imageUrl () {
      return require('~/assets/img/logo.webp')
    }
  },
  methods: {
    toggleDarkMode () {
      this.$emit('toggleDarkMode')
    },
    isDarkMode () {
      return this.$colorMode.preference === 'dark' ||
        (this.$colorMode.preference === 'system' &&
          this.$colorMode.value === 'dark')
    }
  }
}
</script>
