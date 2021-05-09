<template>
  <v-menu
    transition="slide-y-transition"
    bottom
    :offset-y="true"
  >
    <template #activator="{ on: menu, attrs }">
      <v-tooltip bottom>
        <template #activator="{ on: tooltip }">
          <v-btn
            icon
            v-bind="attrs"
            v-on="{ ...tooltip, ...menu }"
          >
            <v-icon size="27" class="icon">
              mdi-translate
            </v-icon>
          </v-btn>
        </template>
        <span>{{ $t('actions.changeLang.translation') }}</span>
      </v-tooltip>
    </template>
    <v-list dense shaped>
      <v-subheader>{{ $t('actions.changeLang.translation') }}</v-subheader>
      <v-list-item
        v-for="(item, i) in languages"
        :key="i"
        nuxt
        :to="switchLocalePath(item.lang)"
        class="v-list-item--default"
      >
        <v-list-item-icon>
          <img v-if="item.lang === 'it'" src='@/assets/img/flags/it.svg' alt="Italian flag" />
          <img v-else src='@/assets/img/flags/en.svg' alt="England flag" />
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title v-text="$t(`actions.changeLang.${item.lang}`)"></v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
export default {
  name: 'LanguageMenu',
  data: () => ({
    languages: [
      { lang: 'en' },
      { lang: 'it' }
    ]
  })
}
</script>
