<script setup lang="ts">
const props = defineProps({
  src: {
    type: String,
    required: true
  },
  altText: {
    type: String,
    default: 'Image'
  },
  height: {
    type: Number,
    default: 350
  },
})
const img = useImage()
const _srcset = computed(() => {
  return img.getSizes(props.src, {
    sizes: '100vw sm:50vw md:400px',
    modifiers: {
      format: 'webp',
      quality: 70,
      height: props.height
    }
  })
})
</script>

<template>
  <v-img
    :src="img(src, { height, quality: 70 })"
    :srcset="_srcset.srcset"
    :height="height"
    :sizes="_srcset.sizes"
    :alt="altText"
    :aspect-ratio="1"
    class="grey darken-3 image-transition"
    cover
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
