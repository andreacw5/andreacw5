<template>
  <v-container grid-list-md>
    <v-layout row wrap>
      <v-flex xs12 md12 lg12>
        <v-card>
          <v-img
            src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"
            aspect-ratio="2.75"
          ></v-img>

          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">Kangaroo Valley Safari</h3>
              <div>kjl</div>
            </div>
          </v-card-title>
        </v-card>
      </v-flex>
      <v-flex xs12 md12 lg12>
        <v-card>
          <v-card-title class="darken-1">
            <div>
              <div class="headline white--text">Andrea Zago</div>
              <span class="grey--text">Aka andreacw</span>
            </div>
          </v-card-title>

          <v-list>
            <v-list-tile>
              <v-list-tile-action>
                <v-icon>mail</v-icon>
              </v-list-tile-action>

              <v-list-tile-content>
                <v-list-tile-title></v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>

            <v-divider inset></v-divider>

            <v-list-tile>
              <v-list-tile-action>
                <v-icon>location_on</v-icon>
              </v-list-tile-action>

              <v-list-tile-content>
                <v-list-tile-title></v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  head: {
    title: "Home",
    meta: [
      // Open Graph
      { name: "og:title", content: "this.head.title " },
      { name: "og:description", content: "" },
      { name: "og:type", content: "website" },
      {
        name: "og:url",
        content: "https://protezionecivile-settimomilanese.it"
      },
      { name: "og:image", content: "https://nuxtjs.org/meta_640.png" }
    ]
  }
};
</script>
