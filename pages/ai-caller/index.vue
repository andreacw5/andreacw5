<script setup lang="ts">
import PageTitle from "~/components/shared/PageTitle.vue";
import type { BreadcrumbItem, ChatGPTResponse } from '~/utils/types';
import { useI18n } from "#imports";
import { ref, shallowRef, watch } from 'vue'

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
const suggestions = shallowRef<{ title: string, text: string }[]>([]);
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
      message.value = 'Create a story '
      onClick('Create a story ')
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

function onClick (value: string) {
  message.value = value
  if (value === 'Create a story ') {
    suggestions.value = [
      { title: 'Astronaut Story', text: `${value}based on a image of a young astronaut, 23 years old, with a symmetrical, handsome face and short wet hair. His toned physique is covered in sweat and grime, and he wears a partially unzipped high-tech space suit, revealing his muscular upper body. His damp undershirt clings to his skin. His expression is intense—exhausted yet determined—standing in the aftermath of a brutal space battle. The futuristic battlefield is dimly lit, with flickering emergency lights, distant explosions, and thick smoke in the air. His body glistens under the harsh, cold glow of a damaged spaceship, emphasizing his resilience and struggle in this high-stakes sci-fi setting.` },
      { title: 'Living Room Story', text: `${value}based on a image of a 23- or 24-year-old young man with a symmetrical, handsome face and short, slightly tousled hair. He has a toned physique and is casually dressed in a fitted T-shirt and sweatpants. He sits in his cozy, dimly lit living room, illuminated by the soft glow of a TV or a laptop screen. A steaming cup of coffee rests on the table beside him, and the warm, ambient lighting highlights the contours of his face. His expression is introspective, lost in thought, evoking a sense of quiet contemplation and comfort in his personal space.` },
      { title: 'Park Story', text: `${value}based on a image of a 23- or 24-year-old young man with a symmetrical, handsome face and short, neatly styled hair. His toned physique is accentuated by a casual, well-fitted hoodie and jeans. He stands in a lush public park, surrounded by vibrant greenery, with sunlight filtering through the trees. He gazes into the distance, his expression relaxed yet thoughtful. Nearby, people are walking, jogging, or sitting on benches, adding a lively yet peaceful atmosphere to the scene. His posture is casual, exuding a sense of calmness and connection to nature.` },
      { title: 'Garden Story', text: `${value}based on a image of a 23- or 24-year-old young man with a symmetrical, handsome face and short, slightly messy hair. His toned physique is visible beneath a sleeveless shirt, revealing his strong arms as he tends to a small garden. He kneels near a bed of colorful flowers and fresh vegetables, hands lightly covered in soil. The golden light of the late afternoon sun casts a warm glow on his skin. His expression is content and focused, enjoying the tranquility of working with nature. A wooden fence and a cozy house are visible in the background, completing the peaceful suburban setting.` },
      { title: 'Cowboy Story', text: `${value}based on a image of a 23- or 24-year-old cowboy with a ruggedly handsome, symmetrical face and short, slightly wavy hair. His toned physique is clad in a dusty, well-fitted plaid shirt with the sleeves rolled up, faded jeans, and a leather belt with a classic buckle. A wide-brimmed hat shades his intense yet thoughtful eyes. He stands near a wooden fence on a sprawling ranch, with rolling fields, grazing horses, and a rustic barn in the background. The warm, golden light of sunset highlights the sweat and dust on his skin, emphasizing his hardworking nature and deep connection to the land.` },
      { title: 'Soldier Story', text: `${value}based on a image of a 23- or 24-year-old military soldier with a symmetrical, chiseled face and short, neatly cropped hair. His toned physique is clad in a tactical, battle-worn uniform with a bulletproof vest and utility straps. Sweat and dirt mark his skin as he stands in a tense battlefield, gripping his rifle with a firm, steady hand. His expression is intense—exhausted yet unwaveringly determined. Smoke rises in the distance, helicopters hover overhead, and the dim glow of fires reflects in his piercing eyes. The atmosphere is heavy with the weight of duty and resilience, capturing the high-stakes reality of his mission.` },
    ];
  } else {
    suggestions.value = []
  }
  textarea.value?.focus()
}

function onClickSuggestion(suggestion: { title: string, text: string }) {
  message.value = suggestion.text;
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
            :subtitle="suggestion.text"
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
