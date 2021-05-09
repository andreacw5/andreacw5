<template>
  <v-footer dark padless height="auto">
    <v-card class="flex" flat tile>
      <v-card-text class="py-2 white--text text-center mt-2">
        <span>Designed & Developed with <v-icon size="20" color="#6f5c37">mdi-coffee</v-icon> by</span>
        <strong class="subheading" style="margin-left: 1px">
          <a href="https://andreacw.dev" class="green-text" style="text-decoration: none;">Andrea Tombolato</a>
        </strong>
      </v-card-text>
      <v-card-text class="py-2 white--text text-center">
        © {{ new Date().getFullYear() }} - All rights reserved
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style lang="scss" scoped>
.theme--dark.v-card {
  margin-bottom: 0;
  z-index: 750;
  border-bottom: 1px solid #111;
  background: #1a1a1a;
  -webkit-box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1);
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1);
}
.flex {
  .v-card__title {
    justify-content: space-between;
  }
}
@media (max-width: 371px) {
  .flex {
    overflow-x: auto;
    .v-card__title {
      flex-wrap: nowrap;
      justify-content: space-between;
    }
    a {
      flex-basis: 9%;
    }
  }
}
</style>
