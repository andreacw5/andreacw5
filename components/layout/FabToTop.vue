<template>
  <v-fab-transition>
    <v-btn
      v-show="fab"
      v-scroll="onScroll"
      top
      class="transition-swing"
      color="primary"
      fab
      fixed
      icon
      large
      right
      style="z-index: 6"
      @click="toTop"
    >
      <v-icon size="40">
        mdi-arrow-up-circle-outline
      </v-icon>
    </v-btn>
  </v-fab-transition>
</template>

<script>
const IN_BROWSER = typeof window !== 'undefined'
export default {
  name: 'FabToTop',
  data: () => ({ fab: false }),
  methods: {
    onScroll () {
      if (!IN_BROWSER) { return }
      const top = (
        window.pageYOffset ||
        document.documentElement.offsetTop ||
        0
      )
      this.fab = top > 150
    },
    toTop () {
      if (this.$route.hash) {
        this.$router.push({ hash: '' })
      }
      this.$vuetify.goTo(0)
    }
  }
}
</script>
