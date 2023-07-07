<template>
  <v-card class="atom-card card-gradient common-card">
    <v-img
      :src="image"
      class="image"
      :aspect-ratio="aspectRatio"
      :gradient="baseGradient"
    >
      <nuxt-link
        v-if="!isExternal"
        :class="{
          'card-content-wrapper': true,
          'fill-height': true,
          'title-centered': titleCentered,
        }"
        :to="{ path: localePath(url) }"
      >
        <div
          :class="{
            'card-title': true,
            'text-no-wrap': titleEllipsis,
            'text-truncate': titleEllipsis,
          }"
        >
          {{ title }}
        </div>
        <div class="card-content">
          <slot name="card-content"></slot>
        </div>
      </nuxt-link>
    </v-img>
  </v-card>
</template>

<script>
export default {
  name: 'CommonCard',
  props: {
    url: {
      type: String,
      required: true
    },
    isExternal: {
      type: Boolean,
      default: false
    },
    image: {
      type: String,
      default: ''
    },
    gradient: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      required: true
    },
    titleCentered: {
      type: Boolean,
      default: false
    },
    titleEllipsis: {
      type: Boolean,
      default: false
    },
    aspectRatio: {
      type: Number,
      default: 5 / 3
    }
  },
  computed: {
    baseGradient () {
      return this.gradient
        ? 'to top, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)'
        : undefined
    }
  }
}
</script>

<style lang="scss" scoped>
.common-card {
  background: #333333;
  border-radius: 14px !important;
  border: 1px solid #414141;
}
.image {
  min-height: 125px;
  border-radius: 14px !important;
}
.card-title {
  background-color: transparentize($color: #1d1d1d, $amount: 0.25);
  padding: 12px;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  transition: 0.3s ease all;
  color: #f2f2f2;
  font-weight: 600;
  font-size: 1.06rem;
}
.card-content {
  background-color: transparentize($color: #000, $amount: 0.2);
  padding: 12px;
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 14px !important;
  width: 100%;
  height: 100%;
  transition: 0.3s ease all;
  opacity: 0;
}
.card-content-wrapper {
  position: relative;
  display: block;

  &.title-centered {
    display: flex;
    align-items: center;
    justify-content: center;

    .card-title {
      position: static;
      width: auto;
      border-radius: 14px !important;
      padding: 10px;
      font-size: 2rem;
    }
  }
  &:hover {
    .card-title {
      opacity: 0;
    }
    .card-content {
      opacity: 1;
    }
  }
}
</style>
