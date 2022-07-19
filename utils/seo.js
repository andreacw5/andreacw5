export const createSEOMeta = data => [
  { charset: 'utf-8' },
  { name: 'viewport', content: 'width=device-width, initial-scale=1' },
  { hid: 'og:title', property: 'og:title', content: data.title },
  { hid: 'description', name: 'description', content: data.description },
  {
    hid: 'og:description',
    property: 'og:description',
    content: data.description
  },
  { hid: 'og:image', property: 'og:image', content: data.image },
  {
    hid: 'og:url',
    property: 'og:url',
    content: 'https://andreacw.dev/' + data.url
  },
  {
    hid: 'twitter:card',
    name: 'twitter:card',
    content: 'summary_large_image'
  },
  { name: 'msapplication-TileColor', content: '#202124' },
  { name: 'msapplication-TileImage', content: 'icons/ms-icon-144x144.png' },
  { name: 'theme-color', content: '#00A86B' }
]
