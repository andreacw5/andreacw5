<script setup lang="ts">
import PageTitle from "@/components/shared/PageTitle.vue";
import type { BreadcrumbItem, ChatGPTResponse } from "@/utils/types";
import { useI18n } from "#imports";
import { ref, shallowRef, watch } from "vue";

const { t } = useI18n();

useHead({
  title: t('gpt.title'),
})

definePageMeta({
  middleware: 'sidebase-auth'
})

const { data, status } = useAuth();
// @ts-ignore
const token = data.value?.token;
const loading = ref(false);
const error = ref(false);
const message = shallowRef('')
const enableGPT = shallowRef(true)
const response = ref<ChatGPTResponse | null>(null);
const textarea = ref()
const menu = shallowRef(false)
const suggestions = shallowRef<{ title: string, message: string, type: string }[]>([]);
const version = shallowRef(['0'])

const sendRequest = async () => {
  loading.value = true;

  if (!message.value) {
    error.value = true;
    loading.value = false;
    return;
  }

  try {
    response.value = await $fetch<ChatGPTResponse>('https://andreatombolato.dev/api/v1/chatgpt', {
      method: 'POST',
      body: {
        prompt: message.value,
        requestGPT: enableGPT.value,
      },
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    });
    error.value = false;
    loading.value = false;
  } catch (e) {
    error.value = true;
    loading.value = false;
  }

  loading.value = false;
};

const breadcrumbs: BreadcrumbItem[] = [
  { title: 'Home', to: '/' },
  { title: t('gpt.title'), active: true },
];

const actions = [
  {
    text: 'Create a story',
    icon: 'mdi-text-box-outline',
    onClick: () => {
      message.value = 'Crea una storia e un titolo con il seguente contenuto, usa personaggi che hanno almeno 18/25 anni: ';
      onClick('Crea una storia e un titolo con il seguente contenuto, usa personaggi che hanno almeno 18/25 anni: ')
    },
  },
  {
    text: 'Reply to comment',
    icon: 'mdi-lightning-bolt',
    onClick: () => {
      onClick('Reply to comment ')
    },
  }
]

watch(version, () => menu.value = false)
watch(message, val => {
  if (val.length) return

  suggestions.value = []
})

async function fetchSuggestions(value: string) {
  try {
    suggestions.value = await $fetch<{
      title: string,
      message: string,
      type: string
    }[]>('https://andreatombolato.dev/api/v1/chatgpt/suggestions', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    });
  } catch (e) {
    console.error('Failed to fetch suggestions', e);
    suggestions.value = [];
  }
}

function onClick(value: string) {
  message.value = value;
  if (value === 'Crea una storia e un titolo con il seguente contenuto, usa personaggi che hanno almeno 18/25 anni: ') {
    fetchSuggestions(value);
  } else {
    suggestions.value = [];
  }
  textarea.value?.focus();
}

function onClickSuggestion(suggestion: { title: string, message: string, type: string }) {
  message.value = `${message.value}${suggestion.message}`;
  suggestions.value = [];
}
</script>

<template>
  <v-container class="v-col-auto grid-list-md text-xs-center ms-auto mb-16">
    <v-container class="grid-list-sm text-xs-center">
      <page-title icon="line-md:question-circle" :title="t('gpt.title')" :breadcrumbs="breadcrumbs" />

      <v-container class="pa-md-2 mb-2" fluid>

        <div class="text-center text-body-2 mb-4">How can I help you today?</div>

        <v-card
          border
          class="mx-auto mb-6 card"
          flat
          rounded="lg"
        >
          <v-card-text class="pt-0 pe-0 me-n1 mt-n1">
            <v-responsive class="overflow-y-auto" max-height="500">
              <v-textarea
                ref="textarea"
                v-model="message"
                auto-grow
                bg-color="transparent"
                hide-details
                no-resize
                persistent-placeholder
                placeholder="What do you want to know?"
                rows="3"
                variant="plain"
              />
            </v-responsive>
          </v-card-text>

          <v-card-actions class="flex-wrap">
            <v-btn
              v-for="(action, i) in actions"
              :key="i"
              border
              class="text-none"
              :prepend-icon="action.icon"
              rounded
              :text="action.text"
              variant="text"
              @click="action.onClick"
            >
              <template #prepend>
                <v-icon color="disabled" />
              </template>
            </v-btn>

            <v-btn :append-icon="menu ? 'mdi-chevron-up' : 'mdi-chevron-down'" class="text-none ms-auto" rounded>
              {{ enableGPT ? 'Enabled' : 'Disabled' }}

              <v-menu
                v-model="menu"
                activator="parent"
                :close-on-content-click="false"
                location="bottom end"
                offset="4"
              >
                <v-list
                  v-model:selected="version"
                  border
                  elevation="0"
                  lines="two"
                  rounded="lg"
                  class="card"
                >
                  <v-list-item density="compact" :subtitle="enableGPT ? 'Response include ChatGPT integration' : 'Answer without ChatGPT integration'" title="Enable ChatGPT">
                    <template #append>
                      <v-list-item-action>
                        <v-switch
                          v-model="enableGPT"
                          color="primary"
                          density="compact"
                          hide-details
                          inset
                        />
                      </v-list-item-action>
                    </template>
                  </v-list-item>
                </v-list>
              </v-menu>
            </v-btn>

            <v-btn
              :loading="loading"
              :color="!message ? 'surface-variant' : 'primary'"
              density="comfortable"
              icon="mdi-arrow-up"
              variant="flat"
              @click="sendRequest"
            >
              <v-icon size="small" />
            </v-btn>
          </v-card-actions>
        </v-card>

        <v-list
          bg-color="transparent"
          class="mx-auto d-flex flex-column ga-1"
          density="comfortable"
          lines="two"
        >
          <v-list-item
            v-for="(suggestion, i) in suggestions"
            :key="i"
            link
            rounded="lg"
            :title="suggestion.title"
            :subtitle="suggestion.message"
            @click="onClickSuggestion(suggestion)"
          />
        </v-list>
      </v-container>

      <v-container v-if="response?.response" class="pa-md-2 mb-4" fluid>
        <h3 class="text-h4 font-weight-bold mb-4">
          Risposta ottenuta
        </h3>

        <v-card class="card round-border mb-8">
          <v-card-text class="mt-4">
            <v-row>
              <v-col cols="12" md="6">
                <v-textarea
                  v-model="response.response.chatGptResp"
                  class="mx-auto"
                  density="compact"
                  label="ChatGPT response"
                  persistent-placeholder
                  placeholder="I'm writing you to..."
                  variant="outlined"
                  auto-grow
                />
              </v-col>
              <v-col cols="12" md="6">
                <v-textarea
                  v-model="response.response.translatedResp"
                  class="mx-auto"
                  density="compact"
                  label="Translated response"
                  persistent-placeholder
                  placeholder="I'm writing you to..."
                  variant="outlined"
                  auto-grow
                />
              </v-col>
              <v-col cols="12">
                <v-btn
                  color="primary"
                  variant="tonal"
                  block
                  prepend-icon="line-md:text-box-multiple"
                  :href="response.translate"
                  target="_blank"
                >
                  Translated content
                </v-btn>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-container>
    </v-container>
  </v-container>
</template>

<style scoped>

</style>
