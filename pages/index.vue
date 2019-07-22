<template>
  <v-container grid-list-md>
    <v-layout row wrap>
      <v-flex xs12 md12 lg12>
        <v-card>
          <v-card-title
            class="darken-1"
            style="background-color: rgba(179,179,179,0.09);"
          >
            <v-layout align-center row spacer>
              <v-flex xs4 sm2 md1>
                <v-avatar size="50px">
                  <v-img
                    src="https://avatars0.githubusercontent.com/u/21191878?s=460&v=4"
                    aspect-ratio="1"
                    class="grey lighten-2"
                  />
                </v-avatar>
              </v-flex>
              <v-flex sm5 md3 hidden-xs-only>
                <div class="headline white--text">
                  Andrea Zago <small>(Andreacw)</small>
                </div>
              </v-flex>
            </v-layout>
          </v-card-title>
        </v-card>
      </v-flex>
      <v-flex xs12 md12 lg12>
        <div class="container page">
          <a
            href="#bio"
            class="mr-2 d-inline-flex color--default"
            style="text-decoration: none"
            ><div class="layout align-center">
              <div>
                <h1 id="bio" class="headline">
                  Chi sono? <span class="color--permalink">#</span>
                </h1>
              </div>
              <!---->
            </div></a
          >
        </div>
        <v-card>
          <v-card-title primary-title>
            <div>
              <span
                >Giovane sviluppatore web fin dall'età di 16 anni mi diletto sul
                web, nella grafica e nella creazione di siti/app per
                divertimento, mi piace gestire comunità (di cui ho grande
                esperienza sia tramite una comunità online alir.eu, sia nella
                collaborazione con element-gaming.eu), sono un soccorritore
                volontario dall'età di 18 anni in Protezione Civile.</span
              >
            </div>
          </v-card-title>
        </v-card>
      </v-flex>
      <v-flex xs12 md12 lg12>
        <div class="container page">
          <a
            href="#history"
            class="mr-2 d-inline-flex color--default"
            style="text-decoration: none"
            ><div class="layout align-center">
              <div>
                <h1 id="history" class="headline">
                  La mia storia <span class="color--permalink">#</span>
                </h1>
              </div>
            </div></a
          >
        </div>
      </v-flex>
      <v-flex xs12 md8 lg4>
        <v-card>
          <v-card-title primary-title>
            <div>
              <div class="headline">Le mie esperienze</div>
            </div>
          </v-card-title>
          <v-list style="margin-color: white">
            <v-list-tile>
              <v-list-tile-content>sdfdsfsdf</v-list-tile-content>
              <v-list-tile-action>
                suca
              </v-list-tile-action>
            </v-list-tile>
          </v-list>
        </v-card>
      </v-flex>
      <v-flex xs12 md8 lg4>
        <v-card>
          <v-card-title primary-title>
            <div>
              <div class="headline">Formazione</div>
            </div>
          </v-card-title>
        </v-card>
      </v-flex>
      <v-flex xs12 md8 lg4>
        <v-card>
          <v-card-title primary-title>
            <div>
              <div class="headline">Le mie passioni</div>
            </div>
          </v-card-title>
        </v-card>
      </v-flex>
      <v-flex xs12 md12 lg12>
        <div class="container page">
          <a
            href="#tech"
            class="mr-2 d-inline-flex color--default"
            style="text-decoration: none"
            ><div class="layout align-center">
              <div>
                <h1 id="tech" class="headline">
                  Conoscenze <span class="color--permalink">#</span>
                </h1>
              </div>
            </div></a
          >
        </div>
      </v-flex>
      <v-flex xs12 md8 lg4>
        <v-card>
          <v-card-title primary-title>
            <div>
              <div class="headline">Progetti</div>
            </div>
          </v-card-title>
        </v-card>
      </v-flex>
      <v-flex xs12 md8 lg4>
        <v-card>
          <v-card-title primary-title>
            <div>
              <div class="headline">Sviluppo</div>
            </div>
          </v-card-title>
        </v-card>
      </v-flex>
      <v-flex xs12 md8 lg4>
        <v-card>
          <v-card-title primary-title>
            <div>
              <div class="headline">Sistemi</div>
            </div>
          </v-card-title>
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
        content: "https://andreacw.it"
      },
      {
        name: "og:image",
        content: "https://avatars0.githubusercontent.com/u/21191878?s=460&v=4"
      }
    ]
  }
};
</script>

<style>
.color--default {
  color: #424242;
}
.color--permalink {
  color: #2196f3;
}
</style>
