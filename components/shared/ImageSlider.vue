<script setup lang="ts">
import { onBeforeUnmount, watch } from 'vue';

const props = defineProps({
  images: {
    type: Array,
    required: true
  },
  intervalVal: {
    type: Number,
    default: 12000
  },
  height: {
    type: Number,
    default: 400
  }
});

const timer: Ref<number | null> = ref(null);
const currentIndex = ref(0);
const currentImg = computed(() => props.images[Math.abs(currentIndex.value) % props.images.length] as string);const imgSize = computed(() => ({ height: `${props.height}px` }));
const lazyLoadingImage = 'https://file-harbor.com/api/v1/files/a4dbd2135b6b264b8db13f0e57c50ee0';
const imageHaveNext = computed(() => currentIndex.value < props.images.length - 1);
const imageHavePrev = computed(() => currentIndex.value > 0);

const next = () => currentIndex.value++;
const prev = () => currentIndex.value--;

const startSlide = () => {
  stopSlide();
  timer.value = setInterval(next, props.intervalVal) as unknown as number;
};

const stopSlide = () => {
  if (timer.value) {
    clearInterval(timer.value);
  }
};

watch(() => props.intervalVal, startSlide, { immediate: true });

onBeforeUnmount(() => {
  stopSlide();
});
</script>

<template>
  <div class="box" :style="imgSize">
    <transition-group name="fade" tag="div">
      <div v-for="i in [currentIndex]" :key="i" :style="imgSize">
        <v-img
          class="project-image"
          :src="currentImg"
          alt="Image"
          :lazy-src="lazyLoadingImage"
          :height="height"
          :aspect-ratio="1"
          position="absolute"
          v-memo="[currentImg]"
        />
      </div>
    </transition-group>
    <a v-if="imageHavePrev" class="prev" @click="prev" aria-label="Previous Image">&#10094;</a>
    <a v-if="imageHaveNext" class="next" @click="next" aria-label="Next Image">&#10095;</a>
  </div>
</template>

<style scoped>
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
