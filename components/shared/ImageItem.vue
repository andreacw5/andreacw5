<template>
  <v-img
    :alt="altText"
    :height="height"
    :src="imageUrl"
    class="grey darken-3"
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
      default: 'Immage'
    },
    height: {
      type: Number,
      default: 300
    }
  }
}
</script>
