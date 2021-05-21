<template>
  <v-hover v-slot="{ hover }">
    <v-card
      :elevation="hover ? 40 : 2"
      :class="{ 'on-hover': !hover }"
    >
      <v-list-item>
        <div class="special-channel-bg" :style="bannerBackground" />
        <v-list-item-content>
          <v-list-item-title class="streamer-name text-center pt-7 pb-7" style="min-height: 150px">
          </v-list-item-title>
          <v-list-item-subtitle class="d-flex align-center mt-2">
            <v-spacer />
            <v-chip v-if="item.technical">
              <span class="group">
                <v-icon
                  v-for="(icon,i) in item.technical.icons"
                  :key="i"
                  class="ma-1"
                >
                  {{icon}}
                </v-icon>
              </span>
            </v-chip>
            <v-spacer />
            </v-list-item-subtitle>
          </v-list-item-content>
      </v-list-item>
      <v-expand-transition>
        <v-card v-if="hover" style="height: 100%;" class="transition-fast-in-fast-out gray darken-2 v-card--reveal white--text">
          <v-card-title>
            {{ item.title }}
            <v-spacer />
            <v-btn v-if="item.explore" outlined small color="primary" nuxt :to="'/project/' + item.id">Explore</v-btn>
          </v-card-title>
          <v-card-text>
            <span class="white--text">{{item.description}}</span>
          </v-card-text>
        </v-card>
      </v-expand-transition>
    </v-card>
  </v-hover>
</template>

<script>
export default {
  name: 'ProjectCard',
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  computed: {
    defaultWorkUrl () {
      return require('~/assets/img/works/default.webp')
    },
    selectedUrl () {
      return require(`~/assets/img/works/${this.item.src}`)
    },
    bannerBackground () {
      return `background-image:url(${this.selectedUrl})`
    }
  }
}
</script>

<style scoped>
.on-hover {
  opacity: .8;
}

.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: .9;
  position: absolute;
  width: 100%;
}
.special-channel-bg {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}
.v-list-item__content {
  position: relative;
}
.streamer-name {
  color: #f1f1f1;
  font-weight: bolder;
  font-size: 2em;
}
</style>
