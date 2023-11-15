export const state = () => ({
  travels: [
    {
      code: 'scottland-2022',
      title: {
        it: 'Italia - Valsesia',
        en: 'Italy - Valsesia'
      },
      background: 'https://cdn.andreacw.dev/uploads/travels/valsesia-image.webp',
      time: {
        start: '2023-06-29',
        end: '2023-07-02'
      },
      photos: 573
    },
    {
      code: 'scottland-2022',
      title: {
        it: 'Regno unito - Scozia',
        en: 'United Kingdom - Scotland'
      },
      background: 'https://cdn.andreacw.dev/uploads/travels/dublino-image.webp',
      time: {
        start: '2022-08-25',
        end: '2022-09-03'
      },
      photos: 423
    },
    {
      code: 'route-66-2022',
      title: {
        it: 'Stati Uniti - Route 66',
        en: 'United States - Route 66'
      },
      background: 'https://cdn.andreacw.dev/uploads/travels/route-66-image.webp',
      time: {
        start: '2022-05-13',
        end: '2022-05-30'
      },
      photos: 1420
    },
    {
      code: 'lisbon-2019',
      title: {
        it: 'Portogallo - Lisbona',
        en: 'Portugal - Lisbon'
      },
      background: 'https://strapi-imaginary.weroad.it/resource/large/12068/viaggio-portogallo-santuario-nazionale-di-cristo-rei-lisbona.jpg',
      startDate: '2019-11-02',
      time: {
        start: '2019-11-02',
        end: '2019-11-08'
      },
      photos: 155
    },
    {
      code: 'andalusia-2019',
      title: {
        it: 'Spagna - Andalusia',
        en: 'Spain - Andalusia'
      },
      background: 'https://cdn.andreacw.dev/uploads/travels/andalusia.webp',
      startDate: '2019-09-21',
      time: {
        start: '2019-09-21',
        end: '2019-09-26'
      },
      photos: 516
    },
    {
      code: 'trentino-2018',
      title: {
        it: 'Italia - Val di Fassa',
        en: 'Italy - Val di Fassa'
      },
      background: 'https://cdn.andreacw.dev/uploads/travels/trentino-carezza-image.webp',
      time: {
        start: '2018-09-03',
        end: '2018-09-18'
      },
      photos: 479
    },
    {
      code: 'london-2014',
      title: {
        it: 'Regno unito - Londra',
        en: 'United Kingdom - London'
      },
      background: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.insurethebox.com%2Fwp-content%2Fuploads%2F2017%2F02%2Fbigstock-151414967-resized.jpg&f=1&nofb=1',
      time: {
        start: '2014-08-31',
        end: '2014-09-04'
      },
      photos: 173
    }
  ]
})

export const getters = {
  getAllTravels (state) {
    return state.travels
  }
}
