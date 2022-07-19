<template>
  <v-container grid-list-md text-xs-center>
    <v-row wrap>
      <v-col cols="12">
        <v-footer class="secondary-border mt-3 card text-center">
          <v-row wrap class="mt-1 mb-1">
            <v-col cols="12">
              <span class="text-uppercase">Designed & Developed with <v-icon size="25" class="mb-1" color="red">mdi-fire</v-icon> by</span>
              <strong class="subheading" style="margin-left: 1px">
                <a href="https://andreacw.dev" class="primary-text text-uppercase" style="text-decoration: none;">Andrea Tombolato</a>
              </strong>
            </v-col>
            <v-col cols="12">
              © {{ new Date().getFullYear() }} - All rights reserved
            </v-col>
          </v-row>
        </v-footer>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Footer'
}
</script>
