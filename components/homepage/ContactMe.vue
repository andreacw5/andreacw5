<script setup lang="ts">
const form = ref(false)
const errorMessages = ref('')
const firstName = ref(null)
const lastName = ref(null)
const company = ref(null)
const email = ref(null)
const message = ref(null)

const contactInfo = [
  {
    title: 'Milano, Italy',
    link: 'https://www.google.it/maps/@45.4641861,9.1902176,2a,75y,100.87h,117.08t/data=!3m7!1e1!3m5!1sjx5KhL45sdebLvTaiVvqzQ!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D-27.082840572510577%26panoid%3Djx5KhL45sdebLvTaiVvqzQ%26yaw%3D100.86768289617902!7i13312!8i6656?entry=ttu&g_ep=EgoyMDI0MTEyNC4xIKXMDSoJLDEwMjExMjM0SAFQAw%3D%3D',
    icon: 'mdi-domain',
  },
  {
    title: 'atomweb96@gmail.com',
    link: 'mailto:atomweb96@gmail.com',
    icon: 'mdi-email',
  },
  {
    title: 'atombolato',
    link: 'https://www.linkedin.com/in/atombolato',
    icon: 'mdi-linkedin',
  },
  {
    title: 'andreacw5',
    link: 'https://github.com/andreacw5',
    icon: 'mdi-github',
  },
]
</script>

<template>
  <v-card class="card mt-6 round-border">
    <v-row no-gutters>
      <v-col
        cols="12"
        md="6"
      >
        <v-sheet height="100%" color="#222224">
          <v-responsive class="mx-auto py-8 py-md-6 px-4 px-md-10" max-width="600" style="background: transparent !important;">
            <p class="mt-sm-1 mt-md-16 mt-lg-16 font-weight-bold text-h4 text-white">
              {{ $t('contacts.title') }}
            </p>

            <p class="mt-4 text-subtitle-3 text-medium-emphasis mb-4">
              {{ $t('contacts.description') }}
            </p>

            <v-list-item
              v-for="(item, i) in contactInfo"
              :key="i"
              class="px-0 mt-2"
              density="comfortable"
            >
              <template #subtitle>
                <v-icon
                  class="mr-2 mt-n1"
                  :icon="item.icon"
                  size="small"
                />
                <a :href="item.link" target="_blank" class="link">{{ item.title }}</a>
              </template>
            </v-list-item>
          </v-responsive>
        </v-sheet>
      </v-col>

      <v-col cols="12" md="6">
        <v-responsive
          v-model="form"
          class="mx-auto pa-4 pa-md-12 mt-8 mt-md-2"
          max-width="600"
        >
          <v-row>
            <v-col
              cols="12"
              sm="6"
            >
              <v-text-field
                v-model="firstName"
                color="primary"
                density="compact"
                :error-messages="errorMessages"
                :label="$t('contacts.form.name')"
                placeholder="Andrea"
                disabled
                required
                :rules="[() => !!firstName || 'This field is required']"
                variant="outlined"
              />
            </v-col>
            <v-col
              cols="12"
              sm="6"
            >
              <v-text-field
                v-model="lastName"
                color="primary"
                density="compact"
                :error-messages="errorMessages"
                :label="$t('contacts.form.surname')"
                disabled
                placeholder="Tombolato"
                required
                :rules="[() => !!lastName || 'This field is required']"
                variant="outlined"
              />
            </v-col>
          </v-row>

          <v-text-field
            v-model="company"
            color="primary"
            density="compact"
            disabled
            :error-messages="errorMessages"
            :label="$t('contacts.form.company')"
            placeholder="AtomWeb"
            variant="outlined"
          />

          <v-text-field
            v-model="email"
            color="primary"
            density="compact"
            :label="$t('contacts.form.email')"
            disabled
            placeholder="atomweb96@gmail.com"
            :rules="[() => !!email || 'This field is required']"
            variant="outlined"
          />

          <v-textarea
            v-model="message"
            color="primary"
            density="compact"
            :label="$t('contacts.form.content')"
            disabled
            variant="outlined"
          />


          <v-btn
            block
            color="#282829"
            class="mt-2 atom-card"
            height="50"
            rounded="lg"
          >
            {{$t('contacts.form.submit') }}
          </v-btn>
        </v-responsive>
      </v-col>
    </v-row>
  </v-card>
</template>

<style scoped>
.v-sheet {
  border: none !important;
}

.v-sheet {
  position: relative;
}

@media (min-width: 960px) {
  .v-sheet::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 2px;
    height: 100%;
    background: linear-gradient(to bottom, transparent, var(--color-primary), transparent);
  }
}

@media (max-width: 960px) {
  .v-sheet::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(to right, transparent, var(--color-primary), transparent);
  }
}
</style>
