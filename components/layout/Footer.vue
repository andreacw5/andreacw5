<template>
  <v-container grid-list-md text-xs-center>
    <v-row wrap>
      <v-col cols="12">
        <v-footer class="secondary-border mt-3 card text-center white-text">
          <v-row wrap class="mt-1 mb-1">
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
