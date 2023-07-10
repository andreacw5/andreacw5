export const state = () => ({
  works: [
    {
      color: 'blue',
      logo: 'https://cdn.andreacw.dev/uploads/company/medas.webp',
      title: {
        en: 'Full-stack Developer',
        it: 'Full-stack Developer'
      },
      company: 'Medas',
      website: 'https://medas-solutions.it',
      period: 'Jul 2016 – Present',
      description: {
        en: 'A company focused on developing web tools for patients to access their medical information. Develop with Vue.js, Java and some other framework.',
        it: 'Una società specializzata nello sviluppo di strumenti web per consentire ai pazienti di accedere alle proprie informazioni mediche. Sviluppo con Vue.js, Java e altri framework.'
      }
    },
    {
      color: 'red',
      logo: 'https://cdn.andreacw.dev/uploads/company/element.webp',
      title: {
        en: 'Board Member',
        it: 'Membro del Consiglio Direttivo'
      },
      company: 'Element Gaming',
      website: 'https://element-gaming.eu',
      period: 'Nov 2020 – Present',
      description: {
        en: "Management of the company's R&D, graphic and social department personnel.",
        it: 'Gestione del personale del dipartimento R&D, grafico e social della società.'
      }
    },
    {
      color: 'red',
      logo: 'https://cdn.andreacw.dev/uploads/company/element.webp',
      title: {
        en: 'Full Stack Developer & Project Manager',
        it: 'Full Stack Developer & Project Manager'
      },
      company: 'Element Gaming',
      website: 'https://element-gaming.eu',
      period: 'Feb 2019 – Nov 2020',
      description: {
        en: 'Development of web apps for the automation and management of the group streamers. Develop with Nuxt.js, Node.js and some other framework.',
        it: 'Sviluppo di web app per l\'automazione e la gestione degli streamer del gruppo. Sviluppo con Nuxt.js, Node.js e altri framework.'
      }
    }
  ],
  // https://devicon.dev/
  skills: [
    {
      icon: 'devicon-vuejs-plain',
      title: 'Vue.js',
      color: '#41b883',
      url: 'https://vuejs.org'
    },
    {
      icon: 'devicon-nuxtjs-plain',
      title: 'Nuxt.js',
      color: '#58b2bb',
      url: 'https://nuxtjs.org'
    },
    {
      icon: 'devicon-javascript-plain',
      title: 'Javascript',
      color: '#f0db4f',
      url: 'https://javascript.com'
    },
    {
      icon: 'devicon-typescript-plain',
      title: 'Typescript',
      color: '#175db8',
      url: 'https://typescriptlang.org'
    },
    {
      icon: 'devicon-nodejs-plain',
      title: 'Node.js',
      color: '#68a063',
      url: 'https://nodejs.org/en/'
    },
    {
      icon: 'devicon-java-plain',
      title: 'Java',
      color: '#5382a1',
      url: 'https://java.com'
    },
    {
      icon: 'devicon-nestjs-plain',
      title: 'Nest.js',
      color: '#e0234e',
      url: 'https://nestjs.com/'
    },
    {
      icon: 'devicon-grails-plain',
      title: 'Grails',
      color: '#ec7b3f',
      url: 'https://grails.org'
    },
    {
      icon: 'devicon-docker-plain',
      title: 'Docker',
      color: '#0db7ed',
      url: 'https://docker.com'
    },
    {
      icon: 'devicon-firebase-plain',
      title: 'Google firebase',
      color: '#FFA611',
      url: 'https://firebase.google.com'
    },
    {
      icon: 'devicon-git-plain',
      title: 'Git',
      color: '#f34f29',
      url: 'https://git-scm.com'
    },
    {
      icon: 'mdi-npm',
      title: 'Npm packages',
      color: '#cc3534',
      url: 'https://npmjs.com'
    }
  ],
  volunteering: [
    {
      title: {
        en: 'Volunteer',
        it: 'Volontario'
      },
      company: 'Dipartimento Protezione Civile',
      website: 'https://www.protezionecivile.gov.it',
      period: 'Set 2014 – Gen 2021'
    },
    {
      title: {
        it: 'Responsabile di turno',
        en: 'Shift Manager'
      },
      company: 'Dipartimento Protezione Civile',
      website: 'https://www.protezionecivile.gov.it',
      period: 'Gen 2021 - Presente'
    }
  ],
  socials: [
    {
      title: 'LinkedIn',
      href: 'https://www.linkedin.com/in/atombolato',
      subtitle: '/in/atombolato',
      color: '#0a66c2',
      icon: 'mdi-linkedin'
    },
    {
      title: 'Github',
      href: 'https://github.com/andreacw5',
      subtitle: 'andreacw5',
      color: '#636a70',
      icon: 'mdi-github'
    },
    {
      title: 'Steam',
      subtitle: '/id/andreacw96',
      href: 'https://steamcommunity.com/id/andreacw96',
      color: '#636a70',
      icon: 'mdi-steam'
    },
    {
      title: 'Facebook',
      subtitle: 'andreacw5',
      href: 'https://www.facebook.com/andreacw5',
      color: '#3b76e3',
      icon: 'mdi-facebook'
    },
    {
      title: 'Instagram',
      href: 'https://www.instagram.com/andreacw96',
      subtitle: '@andreacw96',
      color: '#c91bf1',
      icon: 'mdi-instagram'
    },
    {
      title: 'Twitter',
      href: 'https://twitter.com/atomweb96',
      subtitle: '@atomweb96',
      color: '#1DA1F2',
      icon: 'mdi-twitter'
    }
  ]
})

export const getters = {
  getAllWorks (state) {
    return state.works
  },
  getAllSkills (state) {
    return state.skills
  },
  getAllVolunteering (state) {
    return state.volunteering
  },
  getAllSocials (state) {
    return state.socials
  }
}
