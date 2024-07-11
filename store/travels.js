export const state = () => ({
  travels: [
    {
      code: 'valsesia-2023',
      title: {
        it: 'Italia - Zambla (BG)',
        en: 'Italy - Zambla (BG)'
      },
      background: 'https://fileharbor.eu/api/v1/files/1592da16cae9a30b1b4be0f667300949',
      time: {
        start: '2023-08-03',
        end: '2023-08-06'
      },
      photos: 194
    },
    {
      code: 'valsesia-2023',
      title: {
        it: 'Italia - Valsesia',
        en: 'Italy - Valsesia'
      },
      background: 'https://fileharbor.eu/api/v1/files/92b83568dac5af1789fe3ff4813baee5',
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
      background: 'https://fileharbor.eu/api/v1/files/1f411c33ba295890895214af38afbee9',
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
      background: 'https://fileharbor.eu/api/v1/files/2f34563f7b7905b32b9d992649a66853',
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
      background: 'https://fileharbor.eu/api/v1/files/4b548feae1df148b33e40ae2d14d169a',
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
      background: 'https://fileharbor.eu/api/v1/files/3193b1f3e827844a844cc6a8d55b6637',
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
      background: 'https://fileharbor.eu/api/v1/files/e9812c767ff6337c534b91530775769e',
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
      background: 'https://fileharbor.eu/api/v1/files/56359f080ef275fc46f72ab899e12fd1',
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
