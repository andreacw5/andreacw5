export const state = () => ({
  travels: [
    {
      title: {
        it: 'Regno unito - Scozia',
        en: 'United Kingdom - Scotland'
      },
      background: 'https://strapi-imaginary.weroad.it/resource/large/12877/travel-scotland-portree-landscape.jpeg',
      startDate: '25/08/2022',
      photos: 423,
      days: 14
    },
    {
      title: {
        it: 'Stati Uniti - Route 66',
        en: 'United States - Route 66'
      },
      background: 'https://strapi-imaginary.weroad.it/resource/webp-cover/14012/tour-chicago-los-angeles-route-66-strada-autunno.webp',
      startDate: '13/05/2022',
      photos: 1420,
      days: 22
    },
    {
      title: {
        it: 'Portogallo - Lisbona',
        en: 'Portugal - Lisbon'
      },
      background: 'https://strapi-imaginary.weroad.it/resource/large/12068/viaggio-portogallo-santuario-nazionale-di-cristo-rei-lisbona.jpg',
      startDate: '02/11/2019',
      photos: 155,
      days: 4
    },
    {
      title: {
        it: 'Spagna - Andalusia',
        en: 'Spain - Andalusia'
      },
      background: 'https://strapi-imaginary.weroad.it/resource/webp-cover/3609/tour-di-8-giorni-in-andalusia.webp',
      startDate: '21/09/2019',
      photos: 516,
      days: 14
    },
    {
      title: {
        it: 'Regno unito - Londra',
        en: 'United Kingdom - London'
      },
      background: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.insurethebox.com%2Fwp-content%2Fuploads%2F2017%2F02%2Fbigstock-151414967-resized.jpg&f=1&nofb=1',
      startDate: '31/08/2014',
      photos: 173,
      days: 15
    }
  ]
})

export const getters = {
  getAllTravels (state) {
    return state.travels
  }
}
