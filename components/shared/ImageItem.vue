<template>
  <v-img
    :alt="altText"
    :height="height"
    :src="imageUrl"
    :lazy-src="defaultWorkUrl"
    :aspect-ratio="1"
    :position="position"
    class="grey darken-3 image-transition"
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
  </v-img>
</template>

<script>
export default {
  name: 'ImageItem',
  props: {
    imageUrl: {
      type: String,
      required: true
    },
    altText: {
      type: String,
      default: 'Image'
    },
    height: {
      type: Number,
      default: 300
    },
    position: {
      type: String,
      default: 'center center'
    }
  },
  computed: {
    defaultWorkUrl () {
      return require('~/assets/img/works/default.webp')
    }
  }
}
</script>
