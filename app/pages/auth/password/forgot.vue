<template>
  <v-container class="h-100 pa-0 background" fluid>
    <v-row align="center" class="h-100" justify="center">
      <v-col class="d-flex justify-center" cols="12" lg="6">
        <v-card
          class="flex-1-1 pa-3 px-md-10 py-md-10 card round-border"
          elevation="2"
          max-width="500"
        >
          <h1 class="text-h4 font-weight-black mb-2">
            {{ $t('auth.forgot.title') }}
          </h1>

          <div class="d-flex align-center justify-space-between text-body-1 text-sm-h6 font-weight-regular mb-4">
            {{ $t('auth.forgot.subtitle') }}
          </div>

          <v-alert
            v-if="error"
            class="mb-4"
            :title="$t('auth.forgot.errors.invalid')"
            :text="$t('auth.forgot.retry')"
            type="error"
            variant="tonal"
            border="start"
            border-color="error"
          ></v-alert>

          <div class="mb-1">
            <v-label class="font-weight-bold">
              {{ $t('auth.forgot.email') }}
            </v-label>

            <v-text-field
              :rules="[ruleRequired, ruleEmail]"
              v-model="email"
              color="primary"
              density="comfortable"
              :placeholder="t('auth.login.emailPlaceholder')"
              variant="outlined"
            />
          </div>

          <v-btn
            @click="submit"
            block
            color="#282829"
            class="mt-2 atom-card"
            height="50"
            rounded="lg"
            :text="$t('auth.forgot.submit')"
          />

          <v-card-actions class="mt-3">
            <v-btn
              variant="text"
              prepend-icon="line-md:arrow-small-left"
              to="/"
            >
              {{ $t('auth.forgot.back') }}
            </v-btn>

            <v-spacer />

            <v-btn
              variant="text"
              append-icon="line-md:arrow-small-right"
              to="/auth/login"
            >
              {{ $t('auth.forgot.login') }}
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'blank'
})

import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const email = ref("");
import { useSnackbarStore } from '@/stores/snackbar';
const snackbarStore = useSnackbarStore();
const { ruleEmail, ruleRequired } = useFormRules();
const error = ref(false);

const submit = async () => {
  if (email.value === "") {
    error.value = true;
    return;
  }

  // Call the API to send the reset password email

  // Show a success snackbar
  snackbarStore.setSnackbar(
    { snackbar: snackbarStore.snackbar },
    {
      show: true,
      icon: 'line-md:email-arrow-right',
      color: 'success',
      title: t('auth.forgot.notifications.success.title'),
      text: t('auth.forgot.notifications.success.content', { email: email.value }),
    }
  );

  // Send the user to the login page

};

useHead({
  title: t('auth.forgot.title'),
})
</script>

<style scoped>
.background {
  background: #121212FF; /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #121212FF, #00A86B); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #121212FF, #00A86B); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
.atom-card:hover {
  border-bottom: solid 2px var(--color-primary) !important;
  border-right: solid 2px var(--color-primary) !important;
}
</style>
