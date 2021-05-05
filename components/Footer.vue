<template>
  <v-footer dark padless height="auto">
    <v-card class="flex" flat tile>
      <!--<v-card-title>
        <v-spacer class="hidden-sm-and-down" />
        <v-btn
          v-for="(link, i) in links"
          :key="i"
          target="_blank"
          :href="link.href"
          class="mx-md-4"
          :color="link.color || 'white darken-2'"
          dark
          text
        >
          <v-icon size="24px">
            {{ link.icon }}
          </v-icon>
          <span class="hidden-sm-and-down" style="padding-left: 8px">
            {{ link.label }}
          </span>
        </v-btn>
        <v-spacer class="hidden-sm-and-down" />
      </v-card-title>-->
      <v-card-text class="py-2 white--text text-center">
        © {{ new Date().getFullYear() }}
        <strong class="subheading" style="margin-left: 5px">
          <a href="https://andreacw.dev" class="green-text">Andrea Tombolato</a>
        </strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
import footer from '@/static/data/footer'
export default {
  name: 'Footer',
  data: () => ({
    links: footer.links
  })
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
a {
  text-decoration: none;
  color: red;
}
</style>
