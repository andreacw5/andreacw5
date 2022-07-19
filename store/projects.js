export const state = () => ({
  projects: [
    {
      title: 'Element App',
      description: 'Applicazione web di gestione di una associazione no-profit operante nel campo e-sport. I giocatori iscritti possono partecipare ad eventi, creare team e cercare giocatori con cui giocare in base alle proprie preferenze.',
      src: 'elementapp.webp',
      website: 'https://app.element-gaming.eu',
      time:'2019/Today',
      company: 'Element Gaming',
      explore: false,
      id: 'elementapp',
      technical: {
        main: {icon: 'mdi-nuxt', name: 'Nuxt.js', color: "#00A86B"},
        technologies: [
          {icon: 'mdi-nuxt', name: 'Nuxt.js'},
          {icon: 'mdi-nodejs', name: 'Node.js'}
        ]
      }
    },
    {
      title: 'PROCIV Website',
      description: 'Sito web per l\'associazione di Protezione Civile di Settimo Milanese, una vetrina sulle attività dell\'associazione, il personale, la formazione e le attrezzature impiegate.',
      src: 'prociv-sm.webp',
      website: 'https://procivsm.it',
      time:'2020',
      company: 'Comune di Settimo Milanese',
      explore: false,
      id: 'prociv',
      technical: {
        main: {icon: 'mdi-nuxt', name: 'Nuxt.js', color: "#00A86B"},
        technologies: [
          {icon: 'mdi-nuxt', name: 'Nuxt.js'},
          {icon: 'mdi-nodejs', name: 'Node.js'},
          {icon: 'mdi-firebase', name: 'Firebase'},
        ]
      }
    },
    {
      title: 'Gym Track',
      description: 'Applicazione web per la gestione dei clienti remoti di un personal trainer, che permette di gestire i clienti e le sessioni di fitness. Assegnando anche esercizi da remoto ai clienti.',
      src: 'gymapp.webp',
      time:'2019',
      company: 'Gigante Studio',
      explore: false,
      id: 'gymtrack',
      technical: {
        main: {icon: 'mdi-nodejs', name: 'Node.js', color: "#68a063"},
        technologies: [
          {icon: 'mdi-nodejs', name: 'Node.js'},
          {icon: 'mdi-language-html5', name: 'HTML5'},
          {icon: 'mdi-language-css3', name: 'CSS3'},
          {icon: 'mdi-language-javascript', name: 'Javascript'}
        ]
      }
    },
    {
      title: 'ALIRDB',
      description: 'Un portale online per la visualizzazione dei propri dati e progressi personali all\'interno del gioco Arma 3. Fornisce dati sui veicoli, incarichi, armi, ruoli e conti bancari dei giocatori.',
      src: 'alirdb.webp',
      website: 'https://db.alir.community',
      time: '2017/2018',
      company: 'ALIR Community',
      github: 'https://github.com/andreacw5/ALIRDB',
      explore: false,
      id: 'alirdb',
      technical: {
        main: {icon: 'mdi-language-javascript', name: 'Javascript', color: "#f0db4f"},
        technologies: [
          {icon: 'mdi-language-html5', name: 'HTML5'},
          {icon: 'mdi-language-css3', name: 'CSS3'},
          {icon: 'mdi-language-javascript', name: 'Javascript'}
        ]
      }
    },
    {
      title: 'ALIR Website',
      description: 'Sito web e forum per la community di Arma 3. Il sito web è una piattaforma di discussione e di supporto alla community di ALIR, giocante nel server dedicato basato su Altis Life, una modalità di gioco.',
      src: 'alircommunity.webp',
      website: 'https://alir.community',
      time: '2015/2018',
      company: 'ALIR Community',
      github: 'https://github.com/ALIRDev/Homepage',
      id: 'alircommunity',
      technical: {
        main: {icon: 'mdi-language-javascript', name: 'Javascript', color: "#f0db4f"},
        technologies: [
          {icon: 'mdi-language-html5', name: 'HTML5'},
          {icon: 'mdi-language-css3', name: 'CSS3'},
          {icon: 'mdi-language-javascript', name: 'Javascript'},
          {icon: 'mdi-language-php', name: 'PHP'}
        ]
      }
    }
  ]
})

export const getters = {
  getProject: state => (id) => {
    return state.projects.find(project => project.id === id)
  }
}
