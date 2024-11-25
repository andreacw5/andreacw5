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
            {{ $t('auth.login.title') }}
          </h1>

          <div class="d-flex align-center justify-space-between text-body-1 text-sm-h6 font-weight-regular mb-4">
            {{ $t('auth.login.subtitle') }}
<!--            <v-btn-->
<!--              class="text-none px-0 opacity-100"-->
<!--              color="primary"-->
<!--              :ripple="false"-->
<!--              text="Sign Up"-->
<!--              variant="plain"-->
<!--            />-->
          </div>

          <v-alert
            v-if="error"
            class="mb-4"
            :title="$t('auth.login.errors.invalid')"
            :text="$t('auth.login.retry')"
            type="error"
            variant="tonal"
            border="start"
            border-color="error"
          ></v-alert>

          <div class="mb-1">
            <v-label class="font-weight-bold">
              {{ $t('auth.login.email') }}
            </v-label>

            <v-text-field
              :rules="[ruleRequired, ruleEmail]"
              v-model="email"
              color="primary"
              density="comfortable"
              :placeholder="$t('auth.login.emailPlaceholder')"
              variant="outlined"
            />
          </div>

          <div class="mb-1">
            <v-label class="font-weight-bold">
              {{ $t('auth.login.password') }}
            </v-label>

            <v-text-field
              :rules="[ruleRequired]"
              v-model="password"
              color="primary"
              density="comfortable"
              persistent-counter
              :placeholder="$t('auth.login.passwordPlaceholder')"
              type="password"
              variant="outlined"
            >
<!--              <template #counter>
                <v-btn
                  to="/auth/reset-password"
                  class="text-body-2 px-0 me-n8"
                  color="primary"
                  :ripple="false"
                  size="small"
                  text="Forgot Password?"
                  variant="plain"
                />
              </template>-->
            </v-text-field>
          </div>

          <v-btn
            @click="submit"
            block
            color="#282829"
            class="mt-2 atom-card"
            height="50"
            rounded="lg"
            :text="$t('auth.login.submit')"
          />


<!--          <v-divider class="my-8">
            <div class="text-no-wrap text-grey">Or continue with</div>
          </v-divider>

          <div class="d-flex ga-2 ga-md-4">
            <v-btn
              class="text-body-1 flex-grow-1"
              color="#5865F2"
              flat
              height="50"
              prepend-icon="mdi-discord"
              rounded="lg"
              text="Discord"
              width="50"
              variant="outlined"
            />

            <v-btn
              class="text-body-1 flex-grow-1"
              color="#9146FF"
              flat
              height="50"
              prepend-icon="mdi-twitch"
              rounded="lg"
              text="Twitch"
              width="50"
              variant="outlined"
            />
          </div>-->

          <v-card-actions>
            <nuxt-link
              class="mt-4"
              to="/"
            >
              <v-icon left class="mr-1 mb-1" size="small">
                mdi-arrow-left
              </v-icon>
              <span>
                {{ $t('auth.login.back') }}
              </span>
            </nuxt-link>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
definePageMeta({
  layout: 'blank'
})

const localePath = useLocalePath()

const currentLocale = useI18n().locale;

const email = ref("");
const password = ref("");
const error = ref(false);

const { ruleEmail, rulePassLen, ruleRequired } = useFormRules();

const submit = async () => {
  error.value = true;
};

useHead({
  title: 'Login',
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
