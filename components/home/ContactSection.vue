<template>
  <v-card class="card mt-4">
    <v-card-title>
      <h1 class="text-uppercase large-title" style="font-size: x-large; font-weight: bolder">
        <template v-if="isLocaleItalian">
          <span class="primary-text">{{ $t('contacts.title.one') }}</span>
        </template>
        <template v-else>
          <span class="primary-text">{{ $t('contacts.title.one') }}</span> {{ $t('contacts.title.two') }}
        </template>
      </h1>
    </v-card-title>
    <v-card-text>
        <v-row wrap>
          <v-col cols="12">
            <p>
              {{ $t('contacts.description') }}
            </p>
          </v-col>
          <v-col cols="12" lg="7">
            <v-card class="card round-border">
              <v-card-text>
                <v-form
                  ref="form"
                  v-model="valid"
                >
                  <v-text-field
                    v-model="name"
                    :rules="nameRules"
                    outlined
                    dense
                    :label="$t('sections.contact.form.name')"
                  >
                  </v-text-field>
                  <v-text-field
                    v-model="email"
                    dense
                    :rules="emailRules"
                    outlined
                    :label="$t('sections.contact.form.email')"
                    type="email"
                  ></v-text-field>
                  <v-textarea
                    v-model="message"
                    auto-grow
                    outlined
                    dense
                    :label="$t('sections.contact.form.content')"
                    rows="7"
                  ></v-textarea>
                  <v-btn block color="primary" disabled>
                    {{ $t('actions.send') }}
                  </v-btn>
                </v-form>
              </v-card-text>
            </v-card>
          </v-col>
          <v-divider
            vertical
            inset
            class="mr-3 ml-3 d-none d-lg-block"
          />
          <v-col cols="12" lg="4">
            <v-row wrap>
              <v-col
                v-for="(social, i) in socials"
                :key="i"
                cols="12"
                style="padding-bottom: 5px;"
              >
                <socials-buttons :social="social" />
              </v-col>
            </v-row>
          </v-col>
        </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'ContactSection',
  props: {
    socials: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      name: '',
      message: '',
      email: '',
      isLoading: false,
      valid: false,
      nameRules: [
        v => !!v || 'Name is required',
        v => v.length <= 10 || 'Name must be less than 10 characters'
      ],
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid'
      ]
    }
  },
  computed: {
    isFormValid () {
      return this.$refs.form.validate()
    },
    isLocaleItalian () {
      return this.$i18n.locale === 'it'
    }
  }
}
</script>
