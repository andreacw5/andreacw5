<template>
  <v-container grid-list-md text-xs-center>
    <v-row wrap>
      <v-col cols="12">
        <v-app-bar class="secondary-border mt-3 card">
          <v-app-bar-nav-icon class="hidden-md-and-up" @click="drawer = true"></v-app-bar-nav-icon>
          <nuxt-link to="/">
            <v-img max-height="40" max-width="40" :src="imageUrl" alt="AT Logo" />
          </nuxt-link>
          <v-spacer />
          <v-btn text to="/" nuxt class="hidden-sm-and-down up raise white-text mr-1">
            Home
          </v-btn>
          <v-btn text to="/projects" nuxt class="hidden-sm-and-down up raise white-text mr-1">
            Progetti
          </v-btn>
          <v-divider vertical inset class="mr-2 ml-2 hidden-sm-and-down white-text" />
          <v-tooltip bottom>
            <template #activator="{ on, attrs }">
              <v-btn
                v-bind="attrs"
                icon
                href="https://github.com/andreacw5"
                target="_blank"
                alt-text="Github profile"
                v-on="on"
              >
                <v-icon size="27" class="white-text">
                  mdi-github
                </v-icon>
              </v-btn>
            </template>
            <span>{{ $t('socials.prefix', { name: 'Github' }) }}</span>
          </v-tooltip>
          <v-tooltip bottom>
            <template #activator="{ on, attrs }">
              <v-btn
                v-bind="attrs"
                icon
                href="https://www.linkedin.com/in/atombolato"
                target="_blank"
                alt-text="Linkedin profile"
                v-on="on"
              >
                <v-icon size="27" class="white-text">
                  mdi-linkedin
                </v-icon>
              </v-btn>
            </template>
            <span>{{ $t('socials.prefix', { name: 'Linkedin' }) }}</span>
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
                <v-list-item-title>Andrea <span class="primary-text">Tombolato</span></v-list-item-title>
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
              active-class="primary-text text--accent-4"
            >
              <v-list-item v-for="(link,i) in links" :key="i" :href="localePath(link.url, currentLocale)" nuxt>
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
export default {
  data: () => ({
    drawer: false,
    group: null
  }),
  computed: {
    currentLocale () {
      return this.$i18n.locale
    },
    imageUrl () {
      return require('~/assets/img/logo.webp')
    }
  }
}
</script>
