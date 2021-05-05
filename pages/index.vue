<template>
  <v-container grid-list-md text-xs-center>
    <v-row wrap>
      <v-col cols="12">
        <h1 class="rubik-font text-uppercase">Andrea <span class="green-text">Tombolato</span></h1>
      </v-col>
    </v-row>
    <v-row wrap>
      <v-col xs="12" sm="4" md="4" lg="4">
        <v-img
          class="intro-img"
          lazy-src="https://picsum.photos/id/11/10/6"
          max-height="150"
          max-width="250"
          alt="Intro images"
          src="https://picsum.photos/id/11/500/300"
        ></v-img>
      </v-col>
      <v-col xs="12" sm="8" md="4" lg="4">
        <h2>Hello,</h2>
        <p>I'm Andrea, full-stack developer</p>
      </v-col>
    </v-row>
  </v-container>
</template>

<style>
.intro-img {
  border-radius: 5%;
}
.green-text {
  color: #00A86B
}
</style>
