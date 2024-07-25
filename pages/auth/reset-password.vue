<template>
  <v-container fluid class="fill-height">
    <v-row no-gutters align="center" justify="center" class="fill-height">
      <v-col cols="12" md="6" lg="5" sm="6">
        <v-row no-gutters align="center" justify="center">
          <v-col cols="12" md="6">
            <v-card class="card round-border">
              <v-card-text>
                <h1>Reset password</h1>
                <p class="text-medium-emphasis">Add your email to get instructions</p>

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
                    <label class="label text-grey-darken-2" for="email">Email</label>
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
                  <div class="mt-5">
                    <v-btn type="submit" block min-height="44" class="gradient primary">
                      Send instructions
                    </v-btn>
                  </div>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-btn variant="text" class="font-weight-bold" nuxt to="/auth/login">
                  Back to login
                </v-btn>
                <v-spacer />
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'blank'
})
const email = ref("");
const password = ref("");

const { ruleEmail, rulePassLen, ruleRequired } = useFormRules();

const submit = async () => {};

useHead({
  title: 'Forgot password',
})
</script>
