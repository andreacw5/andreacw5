<template>
  <div>
    <nuxt-pwa-assets />
    <nuxt-layout>
      <nuxt-loading-indicator
        color="#00A86B"
        errorColor="#FF5252"
      />
      <nuxt-page />
    </nuxt-layout>
  </div>
</template>

<style>
.layout-enter-active,
.layout-leave-active {
  transition: all 0.4s;
}
.layout-enter-from,
.layout-leave-to {
  filter: grayscale(1);
}
</style>
