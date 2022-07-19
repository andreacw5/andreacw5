<template>
  <v-card
    elevation="2"
    dense
    class="secondary-border card"
    outlined
  >
    <v-card-title style="font-size: x-large; font-weight: bolder" class="primary-text">{{ title }}</v-card-title>
    <v-card-subtitle class="secondary-color">
      {{ company }}
    </v-card-subtitle>
    <v-card-actions>
      <span class="ml-2 white-text">{{ period }}</span>
      <v-spacer />
      <v-btn
        v-if="description !== ''"
        text
        class="hidden-sm-and-down white-text"
        @click="reveal = true"
      >
        MORE
      </v-btn>
      <v-tooltip top>
        <template #activator="{ on }">
          <v-btn
            icon
            :href="website"
            target="_blank"
            v-on="on"
          >
            <v-icon class="white-text">mdi-earth</v-icon>
          </v-btn>
        </template>
        <span>{{ $t('actions.website') }}</span>
      </v-tooltip>
    </v-card-actions>
    <v-expand-transition>
      <v-card
        v-if="reveal"
        class="transition-fast-in-fast-out v-card--reveal"
      >
        <v-card-text>
          <p>{{ description }}</p>
        </v-card-text>
        <v-card-actions class="pt-0">
          <v-spacer />
          <v-btn
            text
            @click="reveal = false"
          >
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-expand-transition>
  </v-card>
</template>

<script>
export default {
  name: 'WorkCard',
  props: {
    title: {
      type: String,
      required: true
    },
    company: {
      type: String,
      required: true
    },
    period: {
      type: String,
      required: true
    },
    description: {
      type: String,
      default: ''
    },
    website: {
      type: String,
      default: ''
    }
  },
  data: () => ({ reveal: false })
}
</script>

<style scoped>
.v-card--reveal {
  bottom: 0;
  opacity: 1 !important;
  position: absolute;
  width: 100%;
}
</style>
