import { defineStore } from 'pinia'

export const useTravelStore = defineStore('travels', {
   state: () => ({
      travels:  [
         {
            code: 'valsesia-2023',
            title: {
               it: 'Zambla (BG)',
               en: 'Zambla (BG)'
            },
            state: {
               it: 'Italia',
               en: 'Italy'
            },
            background: 'https://file-harbor.com/api/v1/files/1592da16cae9a30b1b4be0f667300949',
            time: {
               start: '2023-08-03',
               end: '2023-08-06'
            },
            photos: 194
         },
         {
            code: 'valsesia-2023',
            title: {
               it: 'Valsesia',
               en: 'Valsesia'
            },
            state: {
               it: 'Italia',
               en: 'Italy'
            },
            background: 'https://file-harbor.com/api/v1/files/92b83568dac5af1789fe3ff4813baee5',
            time: {
               start: '2023-06-29',
               end: '2023-07-02'
            },
            photos: 573
         },
         {
            code: 'scottland-2022',
            title: {
               it: 'Scozia',
               en: 'Scotland'
            },
            state: {
               it: 'Regno unito',
               en: 'United Kingdom'
            },
            background: 'https://file-harbor.com/api/v1/files/1f411c33ba295890895214af38afbee9',
            time: {
               start: '2022-08-25',
               end: '2022-09-03'
            },
            photos: 423
         },
         {
            code: 'route-66-2022',
            title: {
               it: 'Route 66',
               en: 'Route 66'
            },
            state: {
               it: 'Stati Uniti',
               en: 'United States'
            },
            background: 'https://file-harbor.com/api/v1/files/2f34563f7b7905b32b9d992649a66853',
            time: {
               start: '2022-05-13',
               end: '2022-05-30'
            },
            photos: 1420,
            gallery: [
               {
                  image: 'https://file-harbor.com/api/v1/files/71867ef5e339a93e15f302f7df800961',
                  alt: 'Chicago - Illinois',
                  cols: 4
               },
               {
                  image: 'https://file-harbor.com/api/v1/files/29e4e66c6ebdd110a3a6a36866d62440',
                  alt: 'Chicago - Illinois',
                  cols: 8
               },
               {
                  image: 'https://file-harbor.com/api/v1/files/0a75a186a45dbdd630ca1d53731bf637',
                  alt: 'Chicago - Illinois',
                  cols: 8
               },
               {
                  image: 'https://file-harbor.com/api/v1/files/a6dad869e7607c0b9e72b4d42b8ea492',
                  alt: 'Chicago - Illinois',
                  cols: 4
               },
               {
                  image: 'https://file-harbor.com/api/v1/files/7d61ddebc1d367bdedc2a32f7033c13a',
                  alt: 'Chicago - Illinois',
                  cols: 6
               },
               {
                  image: 'https://file-harbor.com/api/v1/files/73b7c98a17804604cfe6682fe85e6038',
                  alt: 'Chicago - Illinois',
                  cols: 6
               },
               {
                  image: 'https://file-harbor.com/api/v1/files/834f906a76a9dd362b5214ea7f7a82fd',
                  alt: 'Chicago - Illinois',
                  cols: 4
               },
               {
                  image: 'https://file-harbor.com/api/v1/files/78ae14c1ab7debc9ad0192e341a6a86f',
                  alt: 'Unknown - Unknown',
                  cols: 4
               },
               {
                  image: 'https://file-harbor.com/api/v1/files/5e6a00a39ec1a113399156728fd84dcc',
                  alt: 'Unknown - Unknown',
                  cols: 4
               },
               {
                  image: 'https://file-harbor.com/api/v1/files/6bfb9ed7beb0454534044f4c21f87d1a',
                  alt: 'Unknown - Unknown',
                  cols: 4
               },
               {
                  image: 'https://file-harbor.com/api/v1/files/69770f8106b1be9870f8a6d6e7cb9486',
                  alt: 'Unknown - Unknown',
                  cols: 4
               },
               {
                  image: 'https://file-harbor.com/api/v1/files/d403867d8d1cd20a391d23d8fd70d0bb',
                  alt: 'Unknown - Unknown',
                  cols: 4
               },
               {
                  image: 'https://file-harbor.com/api/v1/files/c60ddf932af99c80682ce54ae16d2470',
                  alt: 'Unknown - Unknown',
                  cols: 6
               },
               {
                  image: 'https://file-harbor.com/api/v1/files/9f940245e43f4132ef74ea1e3122aeb3',
                  alt: 'Unknown - Unknown',
                  cols: 6
               },
               {
                  image: 'https://file-harbor.com/api/v1/files/bf18223cbcc3f2ce57b60e31b922e1e2',
                  alt: 'Saint Luis - Unknown',
                  cols: 8
               },
               {
                  image: 'https://file-harbor.com/api/v1/files/5b822aa4a74057293aac67e00ed67367',
                  alt: 'Unknown - Unknown',
                  cols: 4
               },
               {
                  image: 'https://file-harbor.com/api/v1/files/84650a4512ef7f9349e3d1d55b8ec9ad',
                  alt: 'Unknown - Unknown',
                  cols: 3
               },
               {
                  image: 'https://file-harbor.com/api/v1/files/8d87e534ae6ebd2a4bca0536fd1e2d6f',
                  alt: 'Unknown - Unknown',
                  cols: 5
               },
               {
                  image: 'https://file-harbor.com/api/v1/files/6e0b768d3bd83a2ef0b807e30cba484e',
                  alt: 'Unknown - Unknown',
                  cols: 4
               },
               {
                  image: 'https://file-harbor.com/api/v1/files/7df7045497dd57d5707797f542912936',
                  alt: 'Unknown - Unknown',
                  cols: 8
               },
               {
                  image: 'https://file-harbor.com/api/v1/files/a7313d944c8820ea12bfc37dfb03e496',
                  alt: 'Unknown - Unknown',
                  cols: 4
               },
               {
                  image: 'https://file-harbor.com/api/v1/files/e19ed5844bc486e80b4b09973f98071e',
                  alt: 'Unknown - Unknown',
                  cols: 8
               },
               {
                  image: 'https://file-harbor.com/api/v1/files/f6d23719e5de7c0c299e5f500a54f9df',
                  alt: 'Unknown - Unknown',
                  cols: 4
               },
               {
                  image: 'https://file-harbor.com/api/v1/files/dc14fc0904abe501f2d1bf520b5efbd8',
                  alt: 'Unknown - Unknown',
                  cols: 4
               },
               {
                  image: 'https://file-harbor.com/api/v1/files/9f6993931bc4afd71f4edeb95689608a',
                  alt: 'Unknown - Unknown',
                  cols: 4
               },
               {
                  image: 'https://file-harbor.com/api/v1/files/fa82a2a2f57b12db6bbcdb2cd57153e4',
                  alt: 'Unknown - Unknown',
                  cols: 4
               },
               {
                  image: 'https://file-harbor.com/api/v1/files/6321a3e4f483f90074d44467babb55d6',
                  alt: 'Unknown - Unknown',
                  cols: 4
               },
            ]
         },
         {
            code: 'lisbon-2019',
            title: {
               it: 'Lisbona',
               en: 'Lisbon'
            },
            state: {
               it: 'Portogallo',
               en: 'Portugal'
            },
            background: 'https://file-harbor.com/api/v1/files/4b548feae1df148b33e40ae2d14d169a',
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
               it: 'Andalusia',
               en: 'Andalusia'
            },
            state: {
               it: 'Spagna',
               en: 'Spain'
            },
            background: 'https://file-harbor.com/api/v1/files/3193b1f3e827844a844cc6a8d55b6637',
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
               it: 'Val di Fassa',
               en: 'Val di Fassa'
            },
            state: {
               it: 'Italia',
               en: 'Italy'
            },
            background: 'https://file-harbor.com/api/v1/files/e9812c767ff6337c534b91530775769e',
            time: {
               start: '2018-09-03',
               end: '2018-09-18'
            },
            photos: 479
         },
         {
            code: 'london-2014',
            title: {
               it: 'Londra',
               en: 'London'
            },
            state: {
               it: 'Regno unito',
               en: 'United Kingdom'
            },
            background: 'https://file-harbor.com/api/v1/files/56359f080ef275fc46f72ab899e12fd1',
            time: {
               start: '2014-08-31',
               end: '2014-09-04'
            },
            photos: 173
         }
      ]
   }),
   getters: {
      getAllTravels (state) {
         return state.travels
      },
      getTravelByCode (state: string) {
          return (code: string) => {
              return state.travels.find(travel => travel.code === code)
          }
      }
   },
})
