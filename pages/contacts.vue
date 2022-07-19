<template>
  <v-container grid-list-md text-xs-center>
    <v-row wrap>
      <v-col cols="12">
        <h1 class="text-uppercase mt-5" style="font-size: x-large; font-weight: bolder">
          <i18n path="sections.contact.end" tag="span">
            <template #contact>
              <span class="primary-text">{{ $t('sections.contact.title') }}</span>
            </template>
          </i18n>
        </h1>
      </v-col>
    </v-row>
    <v-row wrap>
      <v-col cols="12">
        v
      </v-col>
      <v-col cols="12" lg="7">
        <v-card
          elevation="2"
          class="card"
          outlined
          tile
        >
          <v-form
            ref="form"
            v-model="form"
            class="pa-3 pt-6"
            disabled
          >
            <v-text-field
              v-model="name"
              :rules="[rules.required]"
              outlined
              dense
              :label="$t('sections.contact.form.name')"
            ></v-text-field>
            <v-text-field
              v-model="email"
              dense
              :rules="[rules.email]"
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
        </v-card>
      </v-col>
      <v-divider
        vertical
        inset
        class="mr-2 ml-2 d-none d-lg-block"
      />
      <v-col cols="12" lg="4">
        <p>{{ $t('sections.contact.others') }}</p>
        <v-row wrap>
          <v-col
            v-for="(social, i) in socials" :key="i" xs="12" sm="12" md="12"
            lg="12"
            style="padding-bottom: 5px"
          >
            <v-btn
              target="_blank"
              :href="social.href"
              class="mx-md-4 transition-h social-button"
              :color="social.color || 'white darken-4'"
              large
              block
              :data-hover="social.subtitle"
              :outlined="isDarkMode"
            >
              <div>
                <v-icon
                  :color="isDarkMode ? social.color : 'gray darken-2'"
                  size="38px"
                >
                  {{ social.icon }}
                </v-icon>
                <span class="hidden-xs-and-down" style="padding-left: 8px">
                  {{ social.title }}
                </span>
              </div>
            </v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import socials from '@/static/data/socials'
export default {
  name: 'Contacts',
  data: () => ({
    socials: socials.one,
    agreement: false,
    name: '',
    message: '',
    email: undefined,
    form: false,
    isLoading: false,
    rules: {
      email: v => !!(v || '').match(/@/) || 'Please enter a valid email',
      required: v => !!v || 'This field is required'
    }
  }),
  computed: {
    isDarkMode () {
      return this.$colorMode.preference === 'dark'
    }
  }
}
</script>

<style scoped>

a.social-button:hover{cursor: pointer}
a.social-button {
  background: transparent; outline: none;
  position: relative;
  overflow: hidden;
}

/*button:before (attr data-hover)*/
a.social-button:hover:before{opacity: 1; transform: translate(0,0);}
a.social-button:before{
  content: attr(data-hover);
  position: absolute;
  top: 1.1em; left: 0;
  width: 100%;
  text-transform: uppercase;
  letter-spacing: 3px;
  font-weight: 800;
  font-size: .8em;
  opacity: 0;
  transform: translate(-100%,0);
  transition: all .3s ease-in-out;
  background-color: transparent;
  text-align: center;
}
/*button div (button text before hover)*/
a.social-button:hover div{
  opacity: 0; transform: translate(100%,0)
}
a.social-button div{
  text-transform: uppercase;
  letter-spacing: 3px;
  font-weight: 800;
  font-size: .8em;
  transition: all .3s ease-in-out;
}
</style>
