export const state = () => ({
  technologies: [
    { icon: 'mdi-expand-all-outline', name: 'All' },
    { icon: 'mdi-language-typescript', name: 'Typescript' },
    { icon: 'mdi-language-javascript', name: 'Javascript' },
    { icon: 'mdi-nuxt', name: 'Nuxt.js' },
    { icon: 'mdi-nodejs', name: 'Node.js' }
  ],
  portfolio: [
    {
      slug: 'puma-arts',
      title: 'Website for Emanuele Puma',
      description: {
        it: 'Sito web per l\'artista Emanuele Puma, una vetrina sulle sue opere, i suoi progetti e le sue collaborazioni.',
        en: 'Website for the artist Emanuele Puma, a showcase on his works, his projects and his collaborations.'
      },
      preview: 'https://i.imgur.com/nPcLGI5.jpg',
      startDate: { secods: 1548802800, nanoseconds: 40000000 },
      current: true,
      website: 'https://studioartepuma.it/',
      github: 'https://github.com/andreacw5/puma-arts',
      company: 'Emamuele Puma',
      technical: {
        main: { icon: 'mdi-nuxt', name: 'Nuxt.js', color: '#00A86B' },
        technologies: [
          { icon: 'mdi-nuxt', name: 'Nuxt.js' },
          { icon: 'mdi-nodejs', name: 'Node.js' }
        ]
      }
    },
    {
      title: 'Url Manager App',
      description: {
        it: 'Url manager system with Rest API for management of short urls, click statistics and redirects by personalized codes',
        en: 'Url manager system with Rest API for management of short urls, click statistics and redirects by personalized codes'
      },
      slug: 'url-manager-app',
      startDate: { seconds: 1661983200, nanoseconds: 822000000 },
      current: true,
      github: 'https://github.com/andreacw5/url-manager-app',
      company: 'Open source',
      preview: 'https://firebasestorage.googleapis.com/v0/b/pw-9483234.appspot.com/o/projects%2FLink%20..%20(1).jpg?alt=media&token=34111aee-65c5-49d1-9633-c594eb1c8c56',
      technical: {
        main: {
          name: 'Typescript',
          icon: 'mdi-language-typescript',
          color: '#2d79c7'
        },
        technologies: [
          { icon: 'mdi-language-typescript', name: 'Typescript' }
        ]
      }
    },
    {
      slug: 'element',
      title: 'Website for Element Gaming',
      description: {
        it: 'Applicazione web di gestione di una associazione no-profit operante nel campo e-sport. I giocatori iscritti possono partecipare ad eventi, creare team e cercare giocatori con cui giocare in base alle proprie preferenze.',
        en: 'Web application for the management of a non-profit association operating in the e-sports field. Registered players can participate in events, create teams and search for players to play with based on their preferences.'
      },
      preview: 'https://i.imgur.com/glSLPVL.png',
      startDate: { secods: 1548802800, nanoseconds: 40000000 },
      current: true,
      website: 'https://element-gaming.eu',
      company: 'Element Gaming',
      technical: {
        main: { icon: 'mdi-nuxt', name: 'Nuxt.js', color: '#00A86B' },
        technologies: [
          { icon: 'mdi-nuxt', name: 'Nuxt.js' },
          { icon: 'mdi-nodejs', name: 'Node.js' }
        ]
      }
    },
    {
      slug: 'prociv',
      company: 'Comune di Settimo Milanese',
      current: false,
      startDate: { seconds: 1546297200, nanoseconds: 938000000 },
      website: 'https://procivsettimomi.it',
      description_en: 'Website for the Civil Protection Association of Settimo Milanese, a showcase on the activities of the association, the staff, training and equipment used.',
      description: "Sito web per l'associazione di Protezione Civile di Settimo Milanese, una vetrina sulle attività dell'associazione, il personale, la formazione e le attrezzature impiegate.",
      preview: 'https://i.imgur.com/s5TUOg6.jpg',
      title: 'Website for Civil Defence',
      technical: {
        main: { icon: 'mdi-nuxt', color: '#00A86B', name: 'Nuxt.js' },
        technologies: [
          { icon: 'mdi-nuxt', name: 'Nuxt.js' },
          { icon: 'mdi-nodejs', name: 'Node.js' },
          { icon: 'mdi-firebase', name: 'Firebase' }
        ]
      }
    },
    {
      startDate: { seconds: 1546297200, nanoseconds: 795000000 },
      title: 'Gym Track',
      preview: 'https://firebasestorage.googleapis.com/v0/b/pw-9483234.appspot.com/o/projects%2Fgymapp.webp?alt=media&token=b74c501e-3f5b-4a6d-a5e7-4b8333b9a6e0',
      company: 'Gigante Studio',
      technical: {
        main: { color: '#68a063', name: 'Node.js', icon: 'mdi-nodejs' },
        technologies: [
          { name: 'Node.js', icon: 'mdi-nodejs' },
          { icon: 'mdi-language-html5', name: 'HTML5' },
          { name: 'CSS3', icon: 'mdi-language-css3' },
          { icon: 'mdi-language-javascript', name: 'Javascript' }
        ]
      },
      current: false,
      description: 'Applicazione web per la gestione dei clienti remoti di un personal trainer, che permette di gestire i clienti e le sessioni di fitness. Assegnando anche esercizi da remoto ai clienti.',
      slug: 'gymtrack',
      description_en: 'Web application for the management of remote customers of a personal trainer, which allows you to manage clients and fitness sessions. Also assigning remote exercises to customers.'
    },
    {
      company: 'ALIR Community',
      description: "Un portale online per la visualizzazione dei propri dati e progressi personali all'interno del gioco Arma 3. Fornisce dati sui veicoli, incarichi, armi, ruoli e conti bancari dei giocatori.",
      startDate: { seconds: 1483225200, nanoseconds: 534000000 },
      preview: 'https://firebasestorage.googleapis.com/v0/b/pw-9483234.appspot.com/o/projects%2Falirdb.webp?alt=media&token=7c6ee20f-05fe-4cfa-bb06-62b3004c8701',
      description_en: "An online portal for viewing your personal data and progress within the Arma 3 game. It provides data on players' vehicles, assignments, weapons, roles, and bank accounts.",
      slug: 'alirdb',
      website: 'https://db.alir.community',
      technical: {
        main: {
          icon: 'mdi-language-javascript',
          color: '#f0db4f',
          name: 'Javascript'
        },
        technologies: [
          { icon: 'mdi-language-html5', name: 'HTML5' },
          { name: 'CSS3', icon: 'mdi-language-css3' },
          { icon: 'mdi-language-javascript', name: 'Javascript' }
        ]
      },
      current: false,
      title: 'ALIRDB',
      endDate: { seconds: 1514761200, nanoseconds: 434000000 },
      github: 'https://github.com/andreacw5/ALIRDB'
    },
    {
      title: 'ALIR Website',
      description: {
        en: 'Arma 3 website and community forum. The website is a platform for discussion and support to the ALIR community, playing in the dedicated server based on Altis Life, a game mode.',
        it: 'Sito web e forum per la community di Arma 3. Il sito web è una piattaforma di discussione e di supporto alla community di ALIR, giocante nel server dedicato basato su Altis Life, una modalità di gioco.'
      },
      startDate: { seconds: 1451602800, nanoseconds: 648000000 },
      endDate: { seconds: 1514761200, nanoseconds: 164000000 },
      slug: 'alircommunity',
      preview: 'https://firebasestorage.googleapis.com/v0/b/pw-9483234.appspot.com/o/projects%2Falircommunity.webp?alt=media&token=91d8b574-9509-4756-9434-aa9be5bf687b',
      website: 'https://alir.community',
      company: 'ALIR Community',
      technical: {
        technologies: [
          { name: 'HTML5', icon: 'mdi-language-html5' },
          { icon: 'mdi-language-css3', name: 'CSS3' },
          { icon: 'mdi-language-javascript', name: 'Javascript' },
          { icon: 'mdi-language-php', name: 'PHP' }
        ],
        main: {
          color: '#f0db4f',
          icon: 'mdi-language-javascript',
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
