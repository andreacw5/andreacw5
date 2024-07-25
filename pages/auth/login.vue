<template>
  <v-container fluid class="fill-height">
    <v-row no-gutters align="center" justify="center" class="fill-height">
      <v-col cols="12">
        <v-row no-gutters align="center" justify="center">
          <v-col cols="12" md="4">
            <v-card class="card round-border">
              <v-card-text>
                <h1>Sign In</h1>
                <p class="text-medium-emphasis">Enter your details to get started</p>

                <v-alert
                  border="top"
                  type="warning"
                  variant="outlined"
                  class="mt-6"
                  prominent
                >
                  Autentication not available yet, this page is a work in progress... But why you are here?
                </v-alert>

                <v-form @submit.prevent="submit" class="mt-7">
                  <div class="mt-1">
                    <label class="label text-medium-emphasis" for="email">Email</label>
                    <v-text-field
                      :rules="[ruleRequired, ruleEmail]"
                      v-model="email"
                      disabled
                      prepend-inner-icon="fluent:mail-24-regular"
                      id="email"
                      name="email"
                      type="email"
                    />
                  </div>
                  <div class="mt-1">
                    <label class="label text-medium-emphasis" for="password">Password</label>
                    <v-text-field
                      :rules="[ruleRequired, rulePassLen]"
                      v-model="password"
                      prepend-inner-icon="fluent:password-20-regular"
                      id="password"
                      disabled
                      name="password"
                      type="password"
                    />
                  </div>
                  <div class="mt-5">
                    <v-btn type="submit" block min-height="44" class="gradient primary">Sign In</v-btn>
                  </div>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-btn variant="text" class="font-weight-bold" nuxt to="/">
                  Back to home
                </v-btn>
                <v-spacer />
                <v-btn variant="text" class="font-weight-bold" nuxt to="/auth/reset-password">
                  Forgot password?
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
definePageMeta({
  layout: 'blank'
})
const email = ref("");
const password = ref("");

const { ruleEmail, rulePassLen, ruleRequired } = useFormRules();

const submit = async () => {};

useHead({
  title: 'Sign In',
})
</script>
