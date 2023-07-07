export const state = () => ({
  technologies: [
    { icon: 'mdi-expand-all-outline', name: 'All' },
    { icon: 'devicon-javascript-plain', name: 'Javascript' },
    { icon: 'devicon-nestjs-plain', name: 'Nest.js' },
    { icon: 'devicon-nuxtjs-plain', name: 'Nuxt.js' },
    { icon: 'devicon-nodejs-plain', name: 'Node.js' }
  ],
  portfolio: [
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
      preview: 'https://i.imgur.com/nPcLGI5.jpg',
      startDate: '2023',
      current: true,
      website: 'https://studioartepuma.it/',
      github: 'https://github.com/andreacw5/puma-arts',
      company: 'Puma Arts',
      technical: {
        main: { icon: 'devicon-nuxtjs-plain', name: 'Nuxt.js', color: '#00A86B' },
        technologies: [
          { icon: 'devicon-nuxtjs-plain', name: 'Nuxt.js' },
          { icon: 'devicon-nodejs-plain', name: 'Node.js' },
          { icon: 'devicon-vuetify-plain', name: 'Vuetify' },
          { icon: 'devicon-nginx-plain', name: 'NGINX' },
          { icon: 'devicon-firebase-plain', name: 'Firebase' }
        ]
      }
    },
    {
      title: {
        it: 'Gestore di URL',
        en: 'Url Manager'
      },
      description: {
        it: 'Sistema gestore di url con Rest API per la gestione di url accorciati, statistiche sui click e reindirizzamenti tramite codici personalizzati.',
        en: 'Url manager system with Rest API for management of short urls, click statistics and redirects by personalized codes'
      },
      slug: 'url-manager-app',
      startDate: '2022',
      current: true,
      github: 'https://github.com/andreacw5/url-manager-app',
      company: 'Open source',
      preview: 'https://firebasestorage.googleapis.com/v0/b/pw-9483234.appspot.com/o/projects%2FLink%20..%20(1).jpg?alt=media&token=34111aee-65c5-49d1-9633-c594eb1c8c56',
      technical: {
        main: {
          name: 'Nest.js',
          icon: 'devicon-nestjs-plain',
          color: '#e0234e'
        },
        technologies: [
          { name: 'Nest.js', icon: 'devicon-nestjs-plain' },
          { icon: 'devicon-typescript-plain', name: 'Typescript' }
        ]
      }
    },
    {
      slug: 'element',
      title: {
        it: 'Sito web per Element Gaming',
        en: 'Website for Element Gaming'
      },
      description: {
        it: 'Applicazione web di gestione di una associazione no-profit operante nel campo e-sport. I giocatori iscritti possono partecipare ad eventi, creare team e cercare giocatori con cui giocare in base alle proprie preferenze.',
        en: 'Web application for the management of a non-profit association operating in the e-sports field. Registered players can participate in events, create teams and search for players to play with based on their preferences.'
      },
      preview: 'https://i.imgur.com/glSLPVL.png',
      startDate: '2019',
      current: true,
      website: 'https://element-gaming.eu',
      company: 'Element Gaming',
      technical: {
        main: { icon: 'devicon-nuxtjs-plain', name: 'Nuxt.js', color: '#00A86B' },
        technologies: [
          { icon: 'devicon-nuxtjs-plain', name: 'Nuxt.js' },
          { icon: 'devicon-nodejs-plain', name: 'Node.js' },
          { icon: 'devicon-vuetify-plain', name: 'Vuetify' },
          { icon: 'devicon-nginx-plain', name: 'NGINX' },
          { icon: 'devicon-sass-original', name: 'Sass' }
        ]
      }
    },
    {
      slug: 'prociv',
      title: {
        it: 'Sito web per la Protezione Civile',
        en: 'Website for Civil Defence'
      },
      company: 'Comune di Settimo Milanese',
      current: false,
      startDate: '2019',
      website: 'https://procivsettimomi.it',
      description: {
        it: 'Sito web per l\'associazione di Protezione Civile di Settimo Milanese, una vetrina sulle attività dell\'associazione, il personale, la formazione e le attrezzature impiegate.',
        en: 'Website for the Civil Protection Association of Settimo Milanese, a showcase on the activities of the association, the staff, training and equipment used.'
      },
      preview: 'https://i.imgur.com/s5TUOg6.jpg',
      technical: {
        main: { icon: 'devicon-nuxtjs-plain', color: '#00A86B', name: 'Nuxt.js' },
        technologies: [
          { icon: 'devicon-nuxtjs-plain', name: 'Nuxt.js' },
          { icon: 'devicon-nodejs-plain', name: 'Node.js' },
          { icon: 'devicon-vuetify-plain', name: 'Vuetify' },
          { icon: 'devicon-nginx-plain', name: 'NGINX' },
          { icon: 'devicon-firebase-plain', name: 'Firebase' }
        ]
      }
    },
    {
      startDate: '2018',
      title: {
        it: 'Gym Track',
        en: 'Gym Track'
      },
      preview: 'https://firebasestorage.googleapis.com/v0/b/pw-9483234.appspot.com/o/projects%2Fgymapp.webp?alt=media&token=b74c501e-3f5b-4a6d-a5e7-4b8333b9a6e0',
      company: 'Gigante Studio',
      description: {
        it: 'Applicazione web per la gestione dei clienti remoti di un personal trainer, che permette di gestire i clienti e le sessioni di fitness. Assegnando anche esercizi da remoto ai clienti.',
        en: 'Web application for the management of remote customers of a personal trainer, which allows you to manage clients and fitness sessions. Also assigning remote exercises to customers.'
      },
      technical: {
        main: { color: '#68a063', name: 'Node.js', icon: 'devicon-nodejs-plain' },
        technologies: [
          { name: 'Node.js', icon: 'devicon-nodejs-plain' },
          { icon: 'devicon-html5-plain', name: 'HTML5' },
          { name: 'CSS3', icon: 'devicon-css3-plain' },
          { icon: 'devicon-javascript-plain', name: 'Javascript' }
        ]
      },
      current: false,
      slug: 'gymtrack'
    },
    {
      company: 'ALIR Community',
      description: {
        it: 'Un portale online per la visualizzazione dei propri dati e progressi personali all\'interno del gioco Arma 3. Fornisce dati sui veicoli, incarichi, armi, ruoli e conti bancari dei giocatori.',
        en: 'An online portal for viewing your personal data and progress within the Arma 3 game. It provides data on players\' vehicles, assignments, weapons, roles, and bank accounts.'
      },
      startDate: '2017',
      preview: 'https://firebasestorage.googleapis.com/v0/b/pw-9483234.appspot.com/o/projects%2Falirdb.webp?alt=media&token=7c6ee20f-05fe-4cfa-bb06-62b3004c8701',
      slug: 'alirdb',
      website: 'https://db.alir.community',
      technical: {
        main: {
          icon: 'devicon-javascript-plain',
          color: '#f0db4f',
          name: 'Javascript'
        },
        technologies: [
          { icon: 'devicon-html5-plain', name: 'HTML5' },
          { name: 'CSS3', icon: 'devicon-css3-plain' },
          { icon: 'devicon-javascript-plain', name: 'Javascript' }
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
      title: {
        it: 'Sito web per ALIR',
        en: 'Website for ALIR'
      },
      description: {
        en: 'Arma 3 website and community forum. The website is a platform for discussion and support to the ALIR community, playing in the dedicated server based on Altis Life, a game mode.',
        it: 'Sito web e forum per la community di Arma 3. Il sito web è una piattaforma di discussione e di supporto alla community di ALIR, giocante nel server dedicato basato su Altis Life, una modalità di gioco.'
      },
      startDate: '2016',
      slug: 'alircommunity',
      preview: 'https://firebasestorage.googleapis.com/v0/b/pw-9483234.appspot.com/o/projects%2Falircommunity.webp?alt=media&token=91d8b574-9509-4756-9434-aa9be5bf687b',
      website: 'https://alir.community',
      company: 'ALIR Community',
      technical: {
        technologies: [
          { name: 'HTML5', icon: 'devicon-html5-plain' },
          { icon: 'devicon-css3-plain', name: 'CSS3' },
          { icon: 'devicon-javascript-plain', name: 'Javascript' },
          { icon: 'devicon-php-plain', name: 'PHP' }
        ],
        main: {
          color: '#f0db4f',
          icon: 'devicon-javascript-plain',
          name: 'Javascript'
        }
      }
    }
  ]
})

export const getters = {
  getTechs (state) {
    return state.technologies
  },
  getAllProjects (state) {
    return state.portfolio
  }
}
