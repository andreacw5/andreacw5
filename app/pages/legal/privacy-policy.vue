<script setup lang="ts">
useHead({
  title: 'Informativa sulla Privacy',
})
</script>

<template>
  <v-container class="h-100 pa-0" fluid>
    <v-responsive
      class="text-center mx-auto mb-6 mb-md-12"
      max-width="800"
      role="banner"
    >
      <p class="font-weight-medium text-primary" aria-live="polite">{{ $t('privacy.lastUpdated') }}</p>

      <h1 class="text-h4 font-weight-bold mb-4" role="heading" aria-level="1">
        {{ $t('privacy.title') }}
      </h1>
    </v-responsive>

    <v-responsive class="mx-auto mb-8" max-width="800" role="main">
      <h2 class="text-h5 font-weight-bold" role="heading" aria-level="2">{{ $t('privacy.introduction.heading') }}</h2>
      <p class="text-subtitle-1 text-medium-emphasis">
        {{ $t('privacy.introduction.content') }}
      </p>

      <v-spacer class="mt-4 mb-4" />

      <h2 class="text-h5 font-weight-bold" role="heading" aria-level="2">{{ $t('privacy.dataCollected.heading') }}</h2>
      <p class="text-subtitle-1 text-medium-emphasis">
        {{ $t('privacy.dataCollected.content') }}
      </p>
      <ul class="text-subtitle-1 text-medium-emphasis" role="list">
        <li role="listitem">{{ $t('privacy.dataCollected.fields[0]') }}</li>
        <li role="listitem">{{ $t('privacy.dataCollected.fields[1]') }}</li>
        <li role="listitem">{{ $t('privacy.dataCollected.fields[2]') }}</li>
        <li role="listitem">{{ $t('privacy.dataCollected.fields[3]') }}</li>
        <li role="listitem">{{ $t('privacy.dataCollected.fields[4]') }}</li>
      </ul>
      <p class="text-subtitle-1 text-medium-emphasis">
        {{ $t('privacy.dataCollected.note') }}
      </p>

      <v-spacer class="mt-4 mb-4" />

      <h2 class="text-h5 font-weight-bold" role="heading" aria-level="2">{{ $t('privacy.purpose.heading') }}</h2>
      <p class="text-subtitle-1 text-medium-emphasis">
        {{ $t('privacy.purpose.content') }}
      </p>
      <ul class="text-subtitle-1 text-medium-emphasis" role="list">
        <li role="listitem">{{ $t('privacy.purpose.items[0]') }}</li>
        <li role="listitem">{{ $t('privacy.purpose.items[1]') }}</li>
        <li role="listitem">{{ $t('privacy.purpose.items[2]') }}</li>
      </ul>

      <v-spacer class="mt-4 mb-4" />

      <h2 class="text-h5 font-weight-bold" role="heading" aria-level="2">{{ $t('privacy.legalBasis.heading') }}</h2>
      <p class="text-subtitle-1 text-medium-emphasis">
        {{ $t('privacy.legalBasis.content') }}
      </p>

      <v-spacer class="mt-4 mb-4" />

      <h2 class="text-h5 font-weight-bold" role="heading" aria-level="2">{{ $t('privacy.dataRetention.heading') }}</h2>
      <p class="text-subtitle-1 text-medium-emphasis">
        {{ $t('privacy.dataRetention.content') }}
      </p>

      <v-spacer class="mt-4 mb-4" />

      <h2 class="text-h5 font-weight-bold" role="heading" aria-level="2">{{ $t('privacy.dataSharing.heading') }}</h2>
      <p class="text-subtitle-1 text-medium-emphasis">
        {{ $t('privacy.dataSharing.content') }}
      </p>

      <v-spacer class="mt-4 mb-4" />

      <h2 class="text-h5 font-weight-bold" role="heading" aria-level="2">{{ $t('privacy.userRights.heading') }}</h2>
      <p class="text-subtitle-1 text-medium-emphasis">
        {{ $t('privacy.userRights.content') }}
      </p>
      <ul class="text-subtitle-1 text-medium-emphasis" role="list">
        <li role="listitem">{{ $t('privacy.userRights.items[0]') }}</li>
        <li role="listitem">{{ $t('privacy.userRights.items[1]') }}</li>
        <li role="listitem">{{ $t('privacy.userRights.items[2]') }}</li>
        <li role="listitem">{{ $t('privacy.userRights.items[3]') }}</li>
        <li role="listitem">{{ $t('privacy.userRights.items[4]') }}</li>
        <li role="listitem">{{ $t('privacy.userRights.items[5]') }}</li>
      </ul>
      <p class="text-subtitle-1 text-medium-emphasis">
        {{ $t('privacy.userRights.note') }}
      </p>

      <v-spacer class="mt-4 mb-4" />

      <h2 class="text-h5 font-weight-bold" role="heading" aria-level="2">{{ $t('privacy.dataSecurity.heading') }}</h2>
      <p class="text-subtitle-1 text-medium-emphasis">
        {{ $t('privacy.dataSecurity.content') }}
      </p>

      <v-spacer class="mt-4 mb-4" />

      <h2 class="text-h5 font-weight-bold" role="heading" aria-level="2">{{ $t('privacy.cookies.heading') }}</h2>
      <p class="text-subtitle-1 text-medium-emphasis">
        {{ $t('privacy.cookies.content') }}
      </p>

      <v-spacer class="mt-4 mb-4" />

      <h2 class="text-h5 font-weight-bold" role="heading" aria-level="2">{{ $t('privacy.changes.heading') }}</h2>
      <p class="text-subtitle-1 text-medium-emphasis">
        {{ $t('privacy.changes.content') }}
      </p>

      <v-spacer class="mt-4 mb-4" />

      <h2 class="text-h5 font-weight-bold" role="heading" aria-level="2">{{ $t('privacy.contacts.heading') }}</h2>
      <p class="text-subtitle-1 text-medium-emphasis">
        {{ $t('privacy.contacts.content') }}
      </p>
    </v-responsive>
  </v-container>
</template>

<style scoped>
.text-primary {
  color: #00A86B;
}
</style>
