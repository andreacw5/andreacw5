<template>
  <v-tooltip top>
    <template #activator="{ on, attrs }">
      <v-icon
        dark
        class="transition-big ma-2 icon"
        size="40px"
        :style="styleObject"
        style="border-radius: 10px;"
        v-bind="attrs"
        v-on="on"
      >
        {{ skill.icon }}
      </v-icon>
    </template>
    <span>{{ skill.title }}</span>
  </v-tooltip>
</template>

<script>
export default {
  name: 'SkillIcon',
  props: {
    skill: {
      type: Object,
      required: true
    }
  },
  computed: {
    styleObject () {
      return {
        '--color-hover': this.skill.color
      }
    }
  }
}
</script>

<style scoped>
.transition-big:hover {
  transform: scale(1.6);
}
.icon {
  color: var(--color);
}

.icon:hover {
  color: var(--color-hover);
}
</style>
