<template>
  <v-hover v-slot="{ hover }">
    <v-card
      :elevation="hover ? 40 : 2"
      :class="{ 'on-hover': !hover }"
    >
      <v-img
        :src="selectedUrl"
        :lazy-src="defaultWorkUrl"
        height="225px"
      >
        <template #placeholder>
          <v-row
            class="fill-height ma-0"
            align="center"
            justify="center"
          >
            <v-progress-circular
              indeterminate
              color="grey lighten-5"
            ></v-progress-circular>
          </v-row>
        </template>
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
      </v-img>
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
</style>
