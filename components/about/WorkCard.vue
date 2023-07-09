<template>
  <v-card
    elevation="2"
    dense
    class="atom-card common-card mx-auto card-gradient"
    outlined
  >
    <v-list two-line style="background: transparent">
      <v-list-item style="background: transparent">
        <v-list-item-avatar tile>
          <v-img
            :src="logo"
            :alt="title"
          />
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title>{{ title }}</v-list-item-title>
          <v-list-item-subtitle>{{ company }}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>
    <v-card-actions>
      <span class="ml-2 white-text">{{ period }}</span>
      <v-spacer />
      <v-btn
        v-if="description !== ''"
        text
        class="hidden-sm-and-down white-text"
        @click="reveal = true"
      >
        Altro
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
    },
    logo: {
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
