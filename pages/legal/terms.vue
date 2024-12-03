<script setup lang="ts">
useHead({
  title: 'Termini e condizioni',
})
</script>

<template>
  <v-container class="h-100 pa-0" fluid>
    <v-responsive
      class="text-center mx-auto mb-6 mb-md-12"
      max-width="800"
      role="banner"
    >
      <p class="font-weight-medium text-primary" aria-live="polite">{{ $t('terms.lastUpdated') }}</p>

      <h1 class="text-h4 font-weight-bold mb-4" role="heading" aria-level="1">
        {{ $t('terms.title') }}
      </h1>
    </v-responsive>

    <v-responsive class="mx-auto mb-8" max-width="700" role="main">
      <p class="text-subtitle-1 text-medium-emphasis">
        {{ $t('terms.introduction.content') }}
      </p>

      <v-spacer class="mt-4 mb-4" />

      <h2 class="text-h5 font-weight-bold" role="heading" aria-level="2">{{ $t('terms.access.heading') }}</h2>
      <p class="text-subtitle-1 text-medium-emphasis">
        {{ $t('terms.access.content1') }}
      </p>
      <p class="text-subtitle-1 text-medium-emphasis">
        {{ $t('terms.access.content2') }}
      </p>

      <v-spacer class="mt-4 mb-4" />

      <h2 class="text-h5 font-weight-bold" role="heading" aria-level="2">{{ $t('terms.contactForm.heading') }}</h2>
      <p class="text-subtitle-1 text-medium-emphasis">
        {{ $t('terms.contactForm.content') }}
      </p>
      <ul class="text-subtitle-1 text-medium-emphasis" role="list">
        <li role="listitem">{{ $t('terms.contactForm.fields[0]') }}</li>
        <li role="listitem">{{ $t('terms.contactForm.fields[1]') }}</li>
        <li role="listitem">{{ $t('terms.contactForm.fields[2]') }}</li>
        <li role="listitem">{{ $t('terms.contactForm.fields[3]') }}</li>
        <li role="listitem">{{ $t('terms.contactForm.fields[4]') }}</li>
      </ul>
      <p class="text-subtitle-1 text-medium-emphasis">
        {{ $t('terms.contactForm.privacy') }}
      </p>

      <v-spacer class="mt-4 mb-4" />

      <h2 class="text-h5 font-weight-bold" role="heading" aria-level="2">{{ $t('terms.minors.heading') }}</h2>
      <p class="text-subtitle-1 text-medium-emphasis">
        {{ $t('terms.minors.content') }}
      </p>

      <v-spacer class="mt-4 mb-4" />

      <h2 class="text-h5 font-weight-bold" role="heading" aria-level="2">{{ $t('terms.privacy.heading') }}</h2>
      <p class="text-subtitle-1 text-medium-emphasis">
        {{ $t('terms.privacy.content1') }}
      </p>
      <p class="text-subtitle-1 text-medium-emphasis">
        {{ $t('terms.privacy.content2') }}
      </p>

      <v-spacer class="mt-4 mb-4" />

      <h2 class="text-h5 font-weight-bold" role="heading" aria-level="2">{{ $t('terms.liability.heading') }}</h2>
      <p class="text-subtitle-1 text-medium-emphasis">
        {{ $t('terms.liability.content') }}
      </p>

      <v-spacer class="mt-4 mb-4" />

      <h2 class="text-h5 font-weight-bold" role="heading" aria-level="2">{{ $t('terms.changes.heading') }}</h2>
      <p class="text-subtitle-1 text-medium-emphasis">
        {{ $t('terms.changes.content') }}
      </p>

      <v-spacer class="mt-4 mb-4" />

      <h2 class="text-h5 font-weight-bold" role="heading" aria-level="2">{{ $t('terms.contacts.heading') }}</h2>
      <p class="text-subtitle-1 text-medium-emphasis">
        {{ $t('terms.contacts.content') }}
      </p>
    </v-responsive>
  </v-container>
</template>

<style scoped>
.text-primary {
  color: #00A86B;
}
</style>
