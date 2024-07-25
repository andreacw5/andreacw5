import { defineStore } from 'pinia'

export const useAboutStore = defineStore('about', {
   state: () => ({
      works: [
         {
            color: 'blue',
            logo: 'https://file-harbor.com/api/v1/files/351ebcaa1378244c4c1fdf78000c7bf9',
            title: {
               en: 'Full-stack Developer',
               it: 'Full-stack Developer'
            },
            company: 'Medas',
            website: 'https://medas-solutions.it',
            period: {
               start: '2016-06-15'
            },
            description: {
               en: 'A company focused on developing web tools for patients to access their medical information. Develop with Vue.js, Java and some other framework.',
               it: 'Una società specializzata nello sviluppo di strumenti web per consentire ai pazienti di accedere alle proprie informazioni mediche. Sviluppo con Vue.js, Java e altri framework.'
            }
         },
         {
            color: 'red',
            logo: 'https://file-harbor.com/api/v1/files/53cb109ede17055fcf4280649b9906e5',
            title: {
               en: 'Board Member',
               it: 'Membro del Consiglio Direttivo'
            },
            company: 'Element Gaming',
            website: 'https://element-gaming.eu',
            period: {
               start: '2020-11-03'
            },
            description: {
               en: "Management of the company's R&D, graphic and social department personnel.",
               it: 'Gestione del personale del dipartimento R&D, grafico e social della società.'
            }
         },
         {
            color: 'red',
            logo: 'https://file-harbor.com/api/v1/files/53cb109ede17055fcf4280649b9906e5',
            title: {
               en: 'Full Stack Developer & Project Manager',
               it: 'Full Stack Developer & Project Manager'
            },
            company: 'Element Gaming',
            website: 'https://element-gaming.eu',
            period: {
               start: '2019-02-01',
               end: '2020-11-02'
            },
            description: {
               en: 'Development of web apps for the automation and management of the group streamers. Develop with Nuxt.js, Node.js and some other framework.',
               it: 'Sviluppo di web app per l\'automazione e la gestione degli streamer del gruppo. Sviluppo con Nuxt.js, Node.js e altri framework.'
            }
         }
      ],
   }),
   getters: {
      getAllWorks (state) {
         return state.works
      },
   },
})
