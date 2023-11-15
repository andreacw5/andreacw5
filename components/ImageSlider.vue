<template>
  <div class="box" :style="imgSize">
    <transition-group name='fade' tag='div'>
      <div v-for="i in [currentIndex]" :key='i' :style="imgSize">
        <v-img
          class="project-image"
          :src="currentImg"
          alt="Image"
          :lazy-src="lazyLoadingImage"
          :height="height"
          :aspect-ratio="1"
          position="absolute"
        />
      </div>
    </transition-group>
    <a v-if="imageHavePrev" class="prev" @click="prev">&#10094;</a>
    <a v-if="imageHaveNext" class="next" @click="next">&#10095;</a>
  </div>
</template>

<script>
export default {
  name: 'ImageSlider',
  props: {
    images: {
      type: Array,
      required: true
    },
    intervalVal: {
      type: Number,
      default: 3000
    },
    height: {
      type: Number,
      default: 400
    }
  },
  data () {
    return {
      timer: null,
      currentIndex: 0
    }
  },

  computed: {
    currentImg () {
      return this.images[Math.abs(this.currentIndex) % this.images.length]
    },
    imgSize () {
      return {
        height: `${this.height}px`
      }
    },
    lazyLoadingImage () {
      return require('~/assets/img/loading.webp')
    },
    imageHaveNext () {
      return this.currentIndex < this.images.length - 1
    },
    imageHavePrev () {
      return this.currentIndex > 0
    }
  },

  mounted () {
    if (this.images.length > 1) {
      this.startSlide()
    }
  },

  destroyed () {
    this.stopSlide()
  },

  methods: {
    startSlide () {
      this.timer = setInterval(this.next, this.intervalVal)
    },
    stopSlide () {
      clearInterval(this.timer)
    },
    next () {
      this.currentIndex += 1
    },
    prev () {
      this.currentIndex -= 1
    }
  }
}
</script>

<style>
.box {
  position: relative;
}
.fade-enter-active, .fade-leave-active {
  transition: all 0.9s ease;
  overflow: hidden;
  visibility: visible;
  position: absolute;
  width:100%;
  opacity: 1;
}
.fade-enter, .fade-leave-to {
  visibility: hidden;
  width:100%;
  opacity: 0;
}
img {
  width:100%;
  height:100%
}
.prev, .next {
  cursor: pointer;
  position: absolute;
  top: 40%;
  width: auto;
  padding: 16px;
  color: #676363;
  font-weight: bold;
  font-size: 30px;
  transition: 0.7s ease;
  border-radius: 0 14px 14px 0;
  text-decoration: none;
  user-select: none;
  background-color: rgba(30, 30, 31, 0.1);
}

.next {
  border-radius: 14px 0 0 14px !important;
}

.next {
  right: 0;
}
.prev {
  left: 0;
}
.prev:hover, .next:hover {
  background-color: rgba(30, 30, 31, 0.7);
}
.project-image {
  border-top-right-radius: 14px !important;
  border-top-left-radius: 14px !important;
}
</style>
