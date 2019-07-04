<template>
  <div>
    <v-toolbar clipped-left dark color="#363636">
      <v-toolbar-side-icon
        class="hidden-md-and-up"
        @click.stop="drawer = !drawer"
      ></v-toolbar-side-icon>
      <v-toolbar-title>
        <nuxt-link
          class="navbar-item"
          to="/"
          title="Vai alla pagina principale"
        >
          <span class="white--text">
            Andrea Zago
          </span>
        </nuxt-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <template v-for="(nav, i) in navigation">
        <v-toolbar-items :key="i" class="hidden-sm-and-down" :title="nav.desc">
          <v-btn flat nuxt :to="nav.link">
            {{ nav.title }}
          </v-btn>
        </v-toolbar-items>
      </template>
    </v-toolbar>

    <v-navigation-drawer
      id="drawer"
      v-model="drawer"
      temporary
      absolute
      width="200"
    >
      <v-list>
        <v-list-tile
          v-for="(nav, i) in navigation"
          :key="i"
          nuxt
          :to="nav.link"
        >
          <v-list-tile-content>
            <v-list-tile-title>{{ nav.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "Hi",
      drawer: null,
      navigation: [
        {
          title: "Home",
          link: "/",
          desc: ""
        }
      ]
    };
  }
};
</script>

<style type="text/scss" scoped>
a.navbar-item {
  text-decoration: none;
  &:hover {
    text-decoration: none;
  }
}
</style>
