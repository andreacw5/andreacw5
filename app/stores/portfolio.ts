import { defineStore } from 'pinia'

// ICONS: https://icon-sets.iconify.design/simple-icons/?category=Brands+%2F+Social&query=php

export const useProjectStore = defineStore('project', {
   state: () => ({
      technologies: [
         { icon: 'mdi-expand-all-outline', name: 'All', slug: 'all' },
         { icon: 'simple-icons:nuxtdotjs', name: 'Nuxt.js', slug: 'nuxtjs' },
         { icon: 'simple-icons:nestjs', name: 'Nest.js', slug: 'nestjs' },
         { icon: 'simple-icons:nodedotjs', name: 'Node.js', slug: 'nodejs' },
         { icon: 'simple-icons:javascript', name: 'Javascript', slug: 'javascript' },
      ],
      projects: [
         {
            slug: 'element',
            title: {
               it: 'Sito web per i gamer',
               en: 'Website for gamers'
            },
            description: {
               it: 'Ho progettato e sviluppato una piattaforma web per il monitoraggio in tempo reale degli utenti dei vari\n' +
                 'team di streamer del Network Element Gaming. L’applicazione, integrata con le API di Twitch, consente di\n' +
                 'visualizzare lo stato live di tutti gli streamer appartenenti al network, mostrando informazioni aggiornate\n' +
                 'sugli utenti online, sullo streaming attivo, e dettagli sul gioco attualmente in uso.',
               en: 'Web application for the management of a non-profit association operating in the e-sports field. Registered players can participate in events, create teams and search for players to play with based on their preferences.'
            },
            features: [
               {
                  title: 'Monitoraggio in tempo reale',
                  subtitle: 'Il sistema aggiorna in tempo reale la lista degli streamer attivi, rendendo immediatamente visibile chi è online e in streaming',
                  icon: 'line-md:document-report'
               },
               {
                  title: 'Integrazione Twitch API',
                  subtitle: 'Grazie all’integrazione diretta con le API di Twitch, l’applicazione recupera e visualizza informazioni precise sugli spettatori attivi, il titolo dello streaming e il gioco in corso',
                  icon: 'line-md:document-code'
               },
               {
                  title: 'Dashboard utente intuitiva',
                  subtitle: 'La piattaforma è dotata di un’interfaccia user-friendly sviluppata in Nuxt.js, che offre una navigazione semplice e informazioni chiare sull\'attività dei membri del team di Element Gaming.',
                  icon: 'line-md:person'
               },
               {
                  title: 'Backend affdabile',
                  subtitle: 'Sviluppato in Node.js per garantire performance elevate e la gestione efficiente dei dati in tempo reale.',
                  icon: 'line-md:speedometer'
               }
            ],
            images: [
               {
                  image: 'https://file-harbor.com/api/v1/files/6b319d775a8a9be85142abfbd612054b',
                  title: 'Homepage',
               },
               {
                  image: 'https://file-harbor.com/api/v1/files/0e63b3906b488c86b7aeca3ef50d8528',
                  title: 'Elenco giocatori',
               },
               {
                  image: 'https://file-harbor.com/api/v1/files/1d4e64ee41ed8cf44af6ec0825421930',
                  title: 'Dettaglio giocatori',
               },
               {
                  image: 'https://file-harbor.com/api/v1/files/f33ccd994a53ae2b7482366069587013',
                  title: 'Elenco streamers',
               },
               {
                  image: 'https://file-harbor.com/api/v1/files/d2089dd002171ebac8fbd502e8b58548',
                  title: 'Dettaglio streamer',
               },
               {
                  image: 'https://file-harbor.com/api/v1/files/fd09dad0ac1e2f5ef91e0f5d42064239',
                  title: 'Elenco delle sezioni',
               },
               {
                  image: 'https://file-harbor.com/api/v1/files/4cfffc3bff2b5bf313aa64d3e4d609f5',
                  title: 'Elenco dei team'
               },
               {
                  image: 'https://file-harbor.com/api/v1/files/fe11b090557d6fd55591e9268b27f5c7',
                  title: 'Dettaglio del team'
               },
               {
                  image: 'https://file-harbor.com/api/v1/files/744c4944c340df5ee798e504f21d7233',
                  title: 'Elenco degli eventi'
               },
               {
                  image: 'https://file-harbor.com/api/v1/files/d14f5b3279fb6f91fa3e58000369cf8a',
                  title: 'Dettaglio evento'
               },
               {
                  image: 'https://file-harbor.com/api/v1/files/ad8b2389cd3415fde1c54d2dcae7e420',
                  title: 'Elenco delle news'
               },
               {
                  image: 'https://file-harbor.com/api/v1/files/1554a5baeb81107c94cb13ee9e23fd40',
                  title: 'Dettaglio news'
               },
               {
                  image: 'https://file-harbor.com/api/v1/files/af88406da3e46ea2eec2852e0cd6f68a',
                  title: 'Dashboard degli streamer'
               },
               {
                  image: 'https://file-harbor.com/api/v1/files/b85c608090674ecfaa2924d564c7309e',
                  title: 'Marketplace degli streamer'
               }
            ],
            preview: 'https://file-harbor.com/api/v1/files/6b319d775a8a9be85142abfbd612054b',
            startDate: '2019',
            current: true,
            website: 'https://element-gaming.eu',
            client: {
               name: 'Element Gaming ASD',
               bio: 'Associazione operante nel campo e-sport',
               website: 'https://element-gaming.eu',
               logo: 'https://file-harbor.com/api/v1/files/53cb109ede17055fcf4280649b9906e5',
               instagram: 'https://www.instagram.com/elementgaming.eu',
               linkedin: 'https://www.linkedin.com/company/elementgaming'
            },
            technical: {
               main: { icon: 'simple-icons:nuxtdotjs', name: 'Nuxt.js', color: '#00A86B' },
               technologies: [
                  { icon: 'simple-icons:nuxtdotjs', title: 'Nuxt.js' },
                  { icon: 'simple-icons:nodedotjs', title: 'Node.js' },
                  { icon: 'simple-icons:vuetify', title: 'Vuetify' },
                  { icon: 'simple-icons:nginx', title: 'NGINX' },
                  { icon: 'simple-icons:sass', title: 'Sass' }
               ]
            }
         },
         {
            slug: 'emt-links',
            title: {
               it: 'Linktree website',
               en: 'Linktree website'
            },
            description: {
               it: 'Un\'applicazione simile a Linktree sviluppata in Nuxt.js è una piattaforma web che consente agli utenti di aggregare e presentare una serie di link utili in una singola pagina personalizzabile. Questo tipo di applicazione è progettato per essere leggero e performante, sfruttando le capacità di rendering lato server (SSR) e la generazione di siti statici di Nuxt.js.',
               en: 'A Linktree-like application developed in Nuxt.js is a web platform that allows users to aggregate and present a series of useful links on a single customizable page. This type of application is designed to be lightweight and performant, leveraging the server-side rendering (SSR) capabilities and static site generation of Nuxt.js.'
            },
            images: [
               {
                  image: 'https://file-harbor.com/api/v1/files/33925b190be7f512bc95f9062dce6d4f',
                  title: 'Homepage',
               }
            ],
            features: [
               {
                  title: "Personalizzazione dei link",
                  subtitle: "Gli utenti possono aggiungere, modificare e rimuovere link utili che puntano a risorse esterne, articoli, pagine aziendali o documenti.",
                  icon: "line-md:link"
               },
               {
                  title: "Link ai profili social",
                  subtitle: "Possibilità di inserire e visualizzare in maniera ottimale i collegamenti ai profili sui social network (es. Instagram, Facebook, LinkedIn).",
                  icon: "line-md:facebook"
               },
               {
                  title: "Personalizzazione grafica",
                  subtitle: "Inclusione del logo aziendale, colori personalizzati e tipografia in linea con l'identità visiva del brand.",
                  icon: "line-md:paint-drop"
               }
            ],
            preview: 'https://file-harbor.com/api/v1/files/33925b190be7f512bc95f9062dce6d4f',
            startDate: '2023',
            current: true,
            website: 'https://links.element-gaming.eu',
            client: {
               name: 'Element Gaming ASD',
               bio: 'Associazione operante nel campo e-sport',
               website: 'https://element-gaming.eu',
               logo: 'https://file-harbor.com/api/v1/files/53cb109ede17055fcf4280649b9906e5',
               instagram: 'https://www.instagram.com/elementgaming.eu',
               linkedin: 'https://www.linkedin.com/company/elementgaming'
            },
            technical: {
               main: { icon: 'simple-icons:nuxtdotjs', name: 'Nuxt.js', color: '#00A86B' },
               technologies: [
                  { icon: 'simple-icons:nuxtdotjs', title: 'Nuxt.js' },
                  { icon: 'simple-icons:nodedotjs', title: 'Node.js' },
                  { icon: 'simple-icons:vuetify', title: 'Vuetify' },
                  { icon: 'simple-icons:nginx', title: 'NGINX' },
                  { icon: 'simple-icons:sass', title: 'Sass' }
               ]
            }
         },
         {
            slug: 'prociv',
            title: {
               it: 'Sito web per la Protezione Civile',
               en: 'Website for Civil Defence'
            },
            client: {
               name: 'Protezione Civile di Settimo Milanese',
               bio: 'Associazione di Protezione Civile',
               website: 'https://procivsettimomi.it',
               logo: 'https://file-harbor.com/api/v1/files/0163bb330af52453b2735bf5186d8b25',
               instagram: 'https://www.instagram.com/procivsettimomi'
            },
            current: false,
            startDate: '2019',
            github: 'https://github.com/prociv-sm/website',
            website: 'https://procivsettimomi.it',
            description: {
               it: 'Sito web per l\'associazione di Protezione Civile di Settimo Milanese, una vetrina sulle attività dell\'associazione, il personale, la formazione e le attrezzature impiegate.',
               en: 'Website for the Civil Protection Association of Settimo Milanese, a showcase on the activities of the association, the staff, training and equipment used.'
            },
            features: [
               {
                  title: "Monitoraggio delle allerte in tempo reale",
                  subtitle: "Il sito fornisce aggiornamenti tempestivi sulle allerte in corso, permettendo ai cittadini di visualizzare i dettagli delle emergenze attive, gli avvisi di sicurezza e le linee guida da seguire.",
                  icon: "line-md:phone-call"
               },
               {
                  title: "Informazioni sugli eventi e sulle attività del gruppo",
                  subtitle: "La piattaforma offre una panoramica delle iniziative della Protezione Civile, inclusi eventi di sensibilizzazione, corsi di formazione e opportunità di volontariato.",
                  icon: "line-md:calendar"
               },
               {
                  title: "Integrazione con sistemi di allerta e gestione delle emergenze",
                  subtitle: "Grazie al backend sviluppato in NestJS, il sistema può ricevere e processare notiche da fonti di emergenza e pubblicare aggiornamenti in tempo reale.",
                  icon: "line-md:alert"
               },
               {
                  title: "Interfaccia user-friendly",
                  subtitle: "Il sito, realizzato in Nuxt.js, presenta una struttura chiara e accessibile, ottimizzata per dispositivi mobili, che facilita la navigazione e l’accesso rapido alle informazioni critiche per la sicurezza pubblica.",
                  icon: "line-md:computer"
               }
            ],
            images: [
               {
                  image: 'https://file-harbor.com/api/v1/files/7c461f4d8a1a2f286d5d7af35f98bc9d',
                  title: 'Homepage',
               },
               {
                  image: 'https://file-harbor.com/api/v1/files/a4dbd2135b6b264b8db13f0e57c50ee0',
                  title: 'Le attività del gruppo',
               },
               {
                  image: 'https://file-harbor.com/api/v1/files/3a252f4a7b30fb8ca0e614fd1927590b',
                  title: 'La sede e i contatti',
               },
               {
                  image: 'https://file-harbor.com/api/v1/files/3c32584e42ddac97888b52b217102c7d',
                  title: 'I Volontari',
               },
               {
                  image: 'https://file-harbor.com/api/v1/files/a9f4d55e3c8365691b6fb18ae738351b',
                  title: 'I mezzi del gruppo',
               }
            ],
            preview: 'https://file-harbor.com/api/v1/files/7c461f4d8a1a2f286d5d7af35f98bc9d',
            technical: {
               main: { icon: 'simple-icons:nuxtdotjs', color: '#00A86B', name: 'Nuxt.js' },
               technologies: [
                  { icon: 'simple-icons:nuxtdotjs', title: 'Nuxt.js' },
                  { icon: 'simple-icons:nodedotjs', title: 'Node.js' },
                  { icon: 'simple-icons:vuetify', title: 'Vuetify' },
                  { icon: 'simple-icons:nginx', title: 'NGINX' }
               ]
            }
         },
         {
            slug: 'kaish-dbd',
            title: {
               it: 'Sito web per Kaish79',
               en: 'Kaish79\'s website'
            },
            description: {
               it: 'Sito web personale dello streamer Kaish79, con creazione, salvataggio e condivisione di build personalizzate per Dead by Daylight. Il progetto include la gestione avanzata di perk, addon e personaggi, supporta l\'upload di immagini, la validazione dei ruoli e il tracciamento delle visualizzazioni per le metriche. Include integrazione completa con un backend NestJS + Prisma e un pannello di amministrazione per gestire le build in evidenza.',
               en: 'Personal website of the streamer Kaish79, with creation, saving and sharing of custom builds for Dead by Daylight. The project includes advanced management of perks, addons and characters, supports image upload, role validation and view tracking for metrics. It includes full integration with a NestJS + Prisma backend and an admin panel to manage featured builds.'
            },
            website: 'https://kaish-dbd.it',
            startDate: '2025',
            current: true,
            client: {
               name: 'Kaish79 (Private Client)',
               bio: 'Kaish personal website and tool for DBD fans',
               logo: 'https://static-cdn.jtvnw.net/jtv_user_pictures/80cb02d5-ffa5-400a-af19-ff652b2c1d6b-profile_image-150x150.png',
               website: 'https://kaish-dbd.it',
               instagram: 'https://www.instagram.com/kaish_1979/'
            },
            features: [
               {
                  title: 'Gestione completa delle build',
                  subtitle: 'Crea build per Survivors e Killers con perk e addon dedicati',
                  icon: 'line-md:clipboard-check'
               },
               {
                  title: 'Sistema utenti e ruoli',
                  subtitle: 'Registrazione, login, ruolo admin con privilegi avanzati',
                  icon: 'line-md:account'
               },
               {
                  title: 'Upload immagini con File Harbor',
                  subtitle: 'Supporto per immagini custom di perk, personaggi e addon',
                  icon: 'line-md:upload'
               },
               {
                  title: 'Build in evidenza e metriche',
                  subtitle: 'Visualizzazioni, ordinamento per popolarità e gestione delle featured',
                  icon: 'line-md:speedometer'
               }
            ],
            preview: 'https://file-harbor.com/api/v1/files/e1c2a47b-6282-4a3b-9d76-ce3dc04fe8b5',
            images: [
                {
                    image: 'https://file-harbor.com/api/v1/files/e1c2a47b-6282-4a3b-9d76-ce3dc04fe8b5',
                    title: 'Homepage',
                }
            ],
            technical: {
               main: { icon: 'simple-icons:nuxtdotjs', name: 'Nuxt.js', color: '#00A86B' },
               technologies: [
                  { icon: 'simple-icons:nuxtdotjs', title: 'Nuxt.js' },
                  { icon: 'simple-icons:vuetify', title: 'Vuetify' },
                  { title: 'Nest.js', icon: 'simple-icons:nestjs' },
                  { title: 'Prisma ORM', icon: 'simple-icons:prisma' },
                  { title: 'Typescript', icon: 'simple-icons:typescript' },
                  { title: 'PostgreSQL', icon: 'simple-icons:postgresql' }
               ]
            }
         },
         {
            slug: 'fileharbor',
            title: {
               it: 'FileHarbor',
               en: 'FileHarbor'
            },
            description: {
               it: 'Servizio costruito con Nest.js dedicato alla gestione degli upload di immagini, come avatar, copertine di post e altri asset.',
               en: 'Service built with Nest.js dedicated to handling image uploads, such as avatars, post covers, and other assets. '
            },
            startDate: '2024',
            current: true,
            github: 'https://github.com/andreacw5/fileharbor',
            client: {
               name: 'Open Source',
               bio: 'Progetto open source',
               website: 'https://github.com/andreacw5/fileharbor',
               logo: 'https://file-harbor.com/api/v1/files/3fcd8577e8c1a378f655a3d5e0956d28'
            },
            features: [
               {
                  "title": "Gestione degli upload",
                  "subtitle": "Servizio costruito con Nest.js per la gestione degli upload di immagini.",
                  "icon": "line-md:cloud-alt-upload"
               },
               {
                  "title": "Supporto per Avatar",
                  "subtitle": "Carica e gestisci immagini personalizzate come avatar per gli utenti.",
                  "icon": "line-md:account"
               },
               {
                  "title": "Owner dei contenuti",
                  "subtitle": "I contenuti caricati sono assegnati ad un proprietario e viene salvato il dominio di provenienza, che può gestirli e modificarli.",
                  "icon": "line-md:cloud-alt-braces"
               }
            ],
            preview: 'https://file-harbor.com/api/v1/files/9eb12aade81517f5a5e63909d6ef1ae6',
            technical: {
               main: {
                  name: 'Nest.js',
                  icon: 'simple-icons:nestjs',
                  color: '#e0234e'
               },
               technologies: [
                  { title: 'Nest.js', icon: 'simple-icons:nestjs' },
                  { title: 'Prisma ORM', icon: 'simple-icons:prisma' },
                  { title: 'Typescript', icon: 'simple-icons:typescript' },
                  { title: 'PostgreSQL', icon: 'simple-icons:postgresql' }
               ]
            }
         },
         {
            slug: 'stream-scanner',
            title: {
               it: 'Stream Scanner',
               en: 'Stream Scanner'
            },
            description: {
               it: 'Stream Scanner è un microservizio pensato per monitorare in tempo reale lo stato dei canali Twitch, raccogliendo dati su dirette, giochi e clip. Espone un\'API REST protetta da API Key per consentire ad altri servizi di integrarsi e ricevere aggiornamenti sui canali monitorati. Supporta notifiche automatiche tramite Webhook Discord e analisi dei cambiamenti di stato (live, fine diretta, cambio gioco, nuove clip).',
               en: 'Stream Scanner is a microservice designed to monitor Twitch channels in real-time, collecting data about live streams, games, and clips. It exposes a REST API protected by an API Key to allow other services to integrate and receive updates about monitored channels. It supports automatic notifications via Discord Webhooks and tracks status changes such as going live, stream end, game switch, or new clips.'
            },
            startDate: '2025',
            current: true,
            client: {
               name: 'Private client',
               bio: 'Companion service for content tracking',
               logo: 'https://file-harbor.com/api/v1/files/3fcd8577e8c1a378f655a3d5e0956d28'
            },
            features: [
               {
                  title: 'Monitoraggio live',
                  subtitle: 'Controllo automatico dello stato online/offline dei canali Twitch',
                  icon: 'line-md:cloud-up'
               },
               {
                  title: 'Notifiche Discord',
                  subtitle: 'Webhook con embed personalizzati per eventi come dirette, giochi e clip',
                  icon: 'line-md:bell'
               },
               {
                  title: 'Gestione clip e VOD',
                  subtitle: 'Controllo periodico e salvataggio automatico di nuove clip e VOD',
                  icon: 'line-md:pause-to-play-filled-transition'
               },
               {
                  title: 'API sicura',
                  subtitle: 'REST API protetta con autenticazione tramite API Key personale',
                  icon: 'line-md:security'
               }
            ],
            preview: 'https://file-harbor.com/api/v1/files/3065664c-c028-48f8-99f3-c5e707410a99',
            technical: {
               main: {
                  name: 'Nest.js',
                  icon: 'simple-icons:nestjs',
                  color: '#e0234e'
               },
               technologies: [
                  { title: 'Nest.js', icon: 'simple-icons:nestjs' },
                  { title: 'Prisma ORM', icon: 'simple-icons:prisma' },
                  { title: 'Typescript', icon: 'simple-icons:typescript' },
                  { title: 'PostgreSQL', icon: 'simple-icons:postgresql' },
                  { title: 'Twitch API', icon: 'simple-icons:twitch' },
                  { title: 'Swagger', icon: 'simple-icons:swagger' }
               ]
            }
         },
         {
            slug: 'respondo',
            title: {
               it: 'Respondo',
               en: 'Respondo'
            },
            description: {
               it: 'Respondo è applicazione progettata per monitorare risorse, endpoint e heartbeat in tempo reale.  Attualmente è in sviluppo la parte di backend, che fornirà un\'API REST per la gestione delle risorse e dei loro stati. La parte frontend è in fase di sviluppo.',
               en: 'Respondo is an application designed to monitor resources, endpoints, and heartbeats in real time. Currently, the backend part is under development, which will provide a REST API for managing resources and their states. The frontend part is under development.'
            },
            startDate: '2025',
            current: true,
            github: 'https://github.com/atomwebdev/respondo-api',
            client: {
               name: 'Open Source',
               bio: 'Progetto open source',
               website: 'https://github.com/atomwebdev/respondo-api',
               logo: 'https://file-harbor.com/api/v1/files/3fcd8577e8c1a378f655a3d5e0956d28'
            },
            features: [
               {
                  "title": "Heartbeat e monitoraggio",
                  "subtitle": "Heartbeat e monitoraggio HTTP/endpoint configurabile per risorse",
                  "icon": "line-md:cloud-alt-upload"
               },
               {
                  "title": "Storico temporale",
                  "subtitle": "Tracciamento uptime su tempi di 30/60/90 giorni con log storico dello stato",
                  "icon": "line-md:account"
               },
               {
                  "title": "Integrazione notifiche",
                  "subtitle": "Webhook Discord con embed custom, estendibile facilmente con altri canali di notifica (Slack, Telegram, etc.)",
                  "icon": "line-md:cloud-alt-braces"
               },
               {
                  "title": "Multi-tenant",
                  "subtitle": "Supporto multi-azienda/multi-applicazione",
                  "icon": "line-md:cloud-alt-braces"
               }
            ],
            preview: 'https://file-harbor.com/api/v1/files/8b93cf49-c117-49e2-86fe-ac670bd77295',
            technical: {
               main: {
                  name: 'Nest.js',
                  icon: 'simple-icons:nestjs',
                  color: '#e0234e'
               },
               technologies: [
                  { title: 'Nest.js', icon: 'simple-icons:nestjs' },
                  { title: 'Prisma ORM', icon: 'simple-icons:prisma' },
                  { title: 'Typescript', icon: 'simple-icons:typescript' },
                  { title: 'PostgreSQL', icon: 'simple-icons:postgresql' }
               ]
            }
         },
         {
            slug: 'ziplink',
            title: {
               it: 'ZipLink',
               en: 'ZipLink'
            },
            description: {
               it: 'ZipLink è un sistema gestore di url con Rest API per la gestione di url accorciati, statistiche sui click e reindirizzamenti tramite codici personalizzati.',
               en: 'ZipLink, is an url manager system with Rest API for management of short urls, click statistics and redirects by personalized codes'
            },
            features: [
               {
                  title: "Gestione di URL accorciati",
                  subtitle: "ZipLink è un sistema gestore di URL con Rest API che consente la creazione e la gestione di URL accorciati.",
                  icon: "line-md:folder-network"
               },
               {
                  title: "Statistiche sui click",
                  subtitle: "Il sistema fornisce statistiche dettagliate sui click ricevuti dagli URL accorciati.",
                  icon: "line-md:check-list-3"
               },
               {
                  title: "Reindirizzamenti tramite codici personalizzati",
                  subtitle: "Permette la configurazione di reindirizzamenti utilizzando codici URL personalizzati.",
                  icon: "line-md:edit"
               }
            ],
            startDate: '2022',
            current: true,
            github: 'https://github.com/andreacw5/ziplink',
            client: {
               name: 'Open Source',
               bio: 'Progetto open source',
               website: 'https://github.com/andreacw5/ziplink',
               logo: 'https://file-harbor.com/api/v1/files/3fcd8577e8c1a378f655a3d5e0956d28'
            },
            preview: 'https://file-harbor.com/api/v1/files/aa446189ee45f5b45daa112ad43861c6',
            technical: {
               main: {
                  name: 'Nest.js',
                  icon: 'simple-icons:nestjs',
                  color: '#e0234e'
               },
               technologies: [
                  { title: 'Nest.js', icon: 'simple-icons:nestjs' },
                  { title: 'Prisma ORM', icon: 'simple-icons:prisma' },
                  { title: 'Typescript', icon: 'simple-icons:typescript' },
                  { title: 'PostgreSQL', icon: 'simple-icons:postgresql' }
               ]
            }
         },
         {
            slug: 'puma-arts',
            title: {
               it: 'Sito web per Puma Arts',
               en: 'Website for Puma Arts'
            },
            description: {
               it: 'Sito web per l\'artista Emanuele Puma, una vetrina sulle sue opere, i suoi progetti e le sue collaborazioni.',
               en: 'Website for the artist Emanuele Puma, a showcase on his works, his projects and his collaborations.'
            },
            images: [
               {
                  image: 'https://file-harbor.com/api/v1/files/842b5dc5-7aa8-4eb1-9c8f-11deb68d6872',
                  title: 'Homepage',
               },
               {
                  image: 'https://file-harbor.com/api/v1/files/87f52800-da77-456a-b471-a4d7368f83ad',
                  title: 'Su di me',
               }
            ],
            preview: 'https://file-harbor.com/api/v1/files/842b5dc5-7aa8-4eb1-9c8f-11deb68d6872',
            startDate: '2023',
            current: true,
            website: 'https://studioartepuma.it/',
            github: 'https://github.com/andreacw5/puma-arts',
            client: {
               name: 'Private Client',
               bio: 'Piccola bottega artistica',
               website: 'https://studioartepuma.it',
               logo: 'https://file-harbor.com/api/v1/files/3fcd8577e8c1a378f655a3d5e0956d28',
               instagram: 'https://www.instagram.com/puma_art_lab'
            },
            technical: {
               main: { icon: 'simple-icons:nuxtdotjs', name: 'Nuxt.js', color: '#00A86B' },
               technologies: [
                  { icon: 'simple-icons:nuxtdotjs', title: 'Nuxt.js' },
                  { icon: 'simple-icons:nodedotjs', title: 'Node.js' },
                  { icon: 'simple-icons:vuetify', title: 'Vuetify' },
                  { icon: 'simple-icons:nginx', title: 'NGINX' }
               ]
            }
         },
         {
            slug: 'alertconnector',
            title: {
               it: 'AlertConnector',
               en: 'AlertConnector'
            },
            description: {
               it: 'AlertConnect è un servizio di agregazione degli alert di emergenza emessi dal dipartimento di Protezione civile Nazionale Italiano, in un servizio REST accessibile a tutti. Il servizio aggrega gli alert e li rende disponibili in un formato standardizzato, per essere utilizzato da altri servizi o applicazioni.',
               en: 'AlertConnect is an emergency alert aggregation service issued by the Italian National Civil Protection Department, in a REST service accessible to all. The service aggregates alerts and makes them available in a standardized format, to be used by other services or applications.'
            },
            startDate: '2024',
            current: true,
            github: 'https://github.com/prociv-sm/management-api',
            features: [
               {
                  "title": "Aggregazione degli alert",
                  "subtitle": "Aggregazione degli alert di emergenza emessi dal dipartimento di Protezione civile Nazionale Italiano.",
                  "icon": "line-md:cloud-alt-upload"
               },
               {
                  "title": "Servizio REST",
                  "subtitle": "Accessibile a tutti, per essere utilizzato da altri servizi o applicazioni.",
                  "icon": "line-md:account"
               },
               {
                  "title": "Formato standardizzato",
                  "subtitle": "Gli alert sono disponibili in un formato standardizzato.",
                  "icon": "line-md:cloud-alt-braces"
               },
            ],
            client: {
               name: 'Open Source',
               bio: 'Progetto open source',
               website: 'https://github.com/prociv-sm/management-api',
               logo: 'https://file-harbor.com/api/v1/files/3fcd8577e8c1a378f655a3d5e0956d28'
            },
            preview: 'https://file-harbor.com/api/v1/files/cc7e65a9-1467-46ce-98bd-2b8bc56ec114',
            technical: {
               main: {
                  name: 'Nest.js',
                  icon: 'simple-icons:nestjs',
                  color: '#e0234e'
               },
               technologies: [
                  { title: 'Nest.js', icon: 'simple-icons:nestjs' },
                  { icon: 'simple-icons:typescript', title: 'Typescript' }
               ]
            }
         },
         {
            slug: 'gymtrack',
            startDate: '2018',
            title: {
               it: 'Gym Track',
               en: 'Gym Track'
            },
            preview: 'https://file-harbor.com/api/v1/files/dd294ba4654b994e9f921882215726ae',
            client: {
               name: 'Private Client',
               bio: 'Personal Trainer',
               logo: 'https://file-harbor.com/api/v1/files/3fcd8577e8c1a378f655a3d5e0956d28'
            },
            description: {
               it: 'Applicazione web per la gestione dei clienti remoti di un personal trainer, che permette di gestire i clienti e le sessioni di fitness. Assegnando anche esercizi da remoto ai clienti.',
               en: 'Web application for the management of remote customers of a personal trainer, which allows you to manage clients and fitness sessions. Also assigning remote exercises to customers.'
            },
            features: [
               {
                  title: "Gestione Clienti",
                  subtitle: "Crea, modifica e visualizza i profili dei clienti con informazioni dettagliate.",
                  icon: "line-md:account"
               },
               {
                  title: "Pianificazione Sessioni",
                  subtitle: "Organizza e programma sessioni di fitness individuali o di gruppo.",
                  icon: "line-md:calendar"
               },
               {
                  title: "Assegnazione Esercizi",
                  subtitle: "Crea piani di esercizi personalizzati e condividili con i clienti.",
                  icon: "line-md:document-code"
               },
               {
                  title: "Monitoraggio Progressi",
                  subtitle: "Tieni traccia dei risultati e dei progressi dei clienti.",
                  icon: "line-md:backup-restore"
               },
               {
                  title: "Comunicazione Diretta",
                  subtitle: "Chat integrata per mantenere il contatto con i clienti in tempo reale.",
                  icon: "line-md:chat"
               }
            ],
            technical: {
               main: { color: '#68a063', name: 'Node.js', icon: 'simple-icons:nodedotjs' },
               technologies: [
                  { title: 'Node.js', icon: 'simple-icons:nodedotjs' },
                  { icon: 'simple-icons:html5', title: 'HTML5' },
                  { title: 'CSS3', icon: 'simple-icons:css3' },
                  { icon: 'simple-icons:javascript', title: 'Javascript' }
               ]
            },
            current: false
         },
         {
            slug: 'alirdb',
            client: {
               name: 'ALIR Community',
               bio: 'Community di Arma 3',
               logo: 'https://file-harbor.com/api/v1/files/b770e4eef73c37303ffe66d40db35a05',
               instagram: 'https://www.instagram.com/alircommunity'
            },
            description: {
               it: 'Un portale online per la visualizzazione dei propri dati e progressi personali all\'interno del gioco Arma 3. Fornisce dati sui veicoli, incarichi, armi, ruoli e conti bancari dei giocatori.',
               en: 'An online portal for viewing your personal data and progress within the Arma 3 game. It provides data on players\' vehicles, assignments, weapons, roles, and bank accounts.'
            },
            features: [
               {
                  title: "Visualizzazione Dati Personali",
                  subtitle: "Accedi ai tuoi dati di gioco, inclusi progressi e statistiche personali.",
                  icon: "line-md:file-document"
               },
               {
                  title: "Monitoraggio Veicoli",
                  subtitle: "Consulta i dettagli e lo stato dei veicoli associati al tuo profilo.",
                  icon: "line-md:car-light"
               },
               {
                  title: "Ruoli e Specializzazioni",
                  subtitle: "Esamina i ruoli giocati e le abilità sviluppate nel tempo.",
                  icon: "line-md:document-code"
               },
               {
                  title: "Gestione Conti Bancari",
                  subtitle: "Monitora e gestisci i tuoi conti bancari di gioco con dati aggiornati.",
                  icon: "line-md:monitor-arrow-down"
               }
            ],
            startDate: '2017',
            preview: 'https://file-harbor.com/api/v1/files/e0f298cb75d18b5a6ee5b273d22f101a',
            technical: {
               main: {
                  icon: 'simple-icons:javascript',
                  color: '#f0db4f',
                  name: 'Javascript'
               },
               technologies: [
                  { icon: 'simple-icons:html5', title: 'HTML5' },
                  { title: 'CSS3', icon: 'simple-icons:css3' },
                  { icon: 'simple-icons:javascript', title: 'Javascript' }
               ]
            },
            current: false,
            title: {
               it: 'ALIRDB',
               en: 'ALIRDB'
            },
            github: 'https://github.com/andreacw5/ALIRDB'
         },
         {
            slug: 'alircommunity',
            title: {
               it: 'Sito web per ALIR',
               en: 'Website for ALIR'
            },
            description: {
               en: 'Arma 3 website and community forum. The website is a platform for discussion and support to the ALIR community, playing in the dedicated server based on Altis Life, a game mode.',
               it: 'Sito web e forum per la community di Arma 3. Il sito web è una piattaforma di discussione e di supporto alla community di ALIR, giocante nel server dedicato basato su Altis Life, una modalità di gioco.'
            },
            startDate: '2016',
            preview: 'https://file-harbor.com/api/v1/files/f265f76e62f263a4a76b57652ea5ed40',
            client: {
               name: 'ALIR Community',
               bio: 'Community di Arma 3',
               logo: 'https://file-harbor.com/api/v1/files/b770e4eef73c37303ffe66d40db35a05',
               instagram: 'https://www.instagram.com/alircommunity'
            },
            technical: {
               technologies: [
                  { title: 'HTML5', icon: 'simple-icons:html5' },
                  { icon: 'simple-icons:css3', title: 'CSS3' },
                  { icon: 'simple-icons:javascript', title: 'Javascript' },
                  { icon: 'simple-icons:php', title: 'PHP' }
               ],
               main: {
                  color: '#f0db4f',
                  icon: 'simple-icons:javascript',
                  name: 'Javascript'
               }
            }
         },
         {
            slug: 'nuxt3-vuetify',
            title: {
               it: 'Nuxt 3 Vuetify Template',
               en: 'Nuxt 3 Vuetify Template'
            },
            description: {
               it: 'Modello di partenza per Nuxt 3 con Vuetify. Ottimo punto di partenza per la costruzione di un nuovo progetto Nuxt 3 con Vuetify.',
               en: 'Minimal Nuxt 3 starter template with Vuetify. Good starting point for building a new Nuxt 3 project with Vuetify. '
            },
            preview: 'https://file-harbor.com/api/v1/files/1d1516da142bc712ae31b3a8504c9e75',
            startDate: '2023',
            current: true,
            github: 'https://github.com/andreacw5/nuxt3-vuetify',
            client: {
               name: 'Open Source',
               bio: 'Progetto open source',
               website: 'https://github.com/andreacw5/nuxt3-vuetify',
               logo: 'https://file-harbor.com/api/v1/files/3fcd8577e8c1a378f655a3d5e0956d28'
            },
            features: [
               {
                  title: "Integrazione Nuxt 3 e Vuetify",
                  subtitle: "Configurazione pronta per una perfetta sinergia tra Nuxt 3 e Vuetify.",
                  icon: "line-md:link"
               },
               {
                  title: "Architettura modulare",
                  subtitle: "Struttura organizzata per scalabilità e manutenibilità del codice.",
                  icon: "line-md:folder"
               }
            ],
            technical: {
               main: { icon: 'simple-icons:nuxtdotjs', name: 'Nuxt.js', color: '#00A86B' },
               technologies: [
                  { icon: 'simple-icons:nuxtdotjs', title: 'Nuxt.js' },
                  { icon: 'simple-icons:vuetify', title: 'Vuetify' }
               ]
            }
         },
      ]
   }),
   getters: {
      getAllTechs (state) {
         const uniqueTechs = [...new Set(state.projects.map(project => project.technical.main.name))].sort();
         return [...uniqueTechs];
      },
      getAllCompanies (state) {
         const uniqueCompanies = [...new Set(state.projects.map(project => project.client.name))].sort();
         return [...uniqueCompanies];
      },
      getAllProjects (state) {
         return state.projects
      },
      getProjectByTech (state) {
         return (tech: string) => {
            if (tech === 'All') return state.projects
            return state.projects.filter(project => project.technical.main.name.includes(tech))
         }
      },
      getProjectsByFilters (state) {
         return (filters: { techs: Array<string>, clients: Array<string>, title: string }) => {
            const { techs, clients, title } = filters;
            return state.projects.filter(project => {
               const techMatch = techs.length === 0 || techs.includes(project.technical.main.name);
               const clientMatch = clients.length === 0 || clients.includes(project.client.name);
               const titleMatch = title === '' || project.title.it.includes(title) || project.title.en.includes(title);
               return techMatch && clientMatch && titleMatch;
            });
         };
      },
      getProjectBySlug (state) {
          return (slug: string | string[]) => {
             return state.projects.find(project => project.slug === slug)
          }
      },
      getSimilarProjects (state) {
         return (slug: string | string[]) => {
            const project = state.projects.find(project => project.slug === slug)
            const filtered = state.projects.filter(p => p.technical.main.name === project?.technical.main.name && p.slug !== project.slug)
            // Limit return to 3
            return filtered.slice(0, 2)
         }
      }
   },
})
