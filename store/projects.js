export const state = () => ({
  projects: [
    {
      title: 'ALIR Website',
      description: 'Altis Life Italia Reloaded community website ',
      src: 'alircommunity.webp',
      explore: true,
      id: 'alircommunity',
      slides: [
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg'
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg'
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg'
        }
      ],
      about: [
        'On this Open Source project I was responsible for the initial UI/UX architecture, structure, design and animations. The idea was to follow the 3 column UX trend of webchats like skype, hipchat, gitter and slack. Building upon that an Open Source alternative with similar functionalities.',
        'The UI/UX was conceived with a mobile first approach. So it would be possible to effortlessly launch it into any platform without making any changes to the main application.'
      ],
      technical: {
        stack: [
          'UI/UX Design',
          'UI/UX Architecture',
          'HTML5',
          'CSS3',
          'Meteor.js',
          'MongoDB'
        ]
      },
      other: {
        online: false,
        github: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg'
      }
    },
    {
      title: 'ALIRDB',
      description: 'Online data viewer of the Arma 3 videogame, to allow users to access their game statistics ',
      src: 'alirdb.webp',
      explore: true,
      id: 'alirdb'
    },
    {
      title: 'Gym Track App',
      description: 'Web application of a personal trainer for customer management ',
      src: 'default.webp',
      explore: false,
      id: 'gymtrack'
    },
    {
      title: 'PROCIV Website',
      description: 'Civil protection website of the municipality of Settimo Milanese ',
      src: 'prociv-sm.webp',
      explore: false,
      id: 'prociv'
    },
    {
      title: 'Element Website',
      description: 'Element Gaming sports association website ',
      src: 'element.webp',
      explore: true,
      id: 'element'
    },
    {
      title: 'Element Network',
      description: 'A monitoring site of the various Network Element teams, shows users in streaming and allows their management ',
      src: 'elementapp.webp',
      explore: true,
      id: 'elementapp'
    }
  ]
})

export const getters = {
  getProject: state => (id) => {
    return state.projects.find(project => project.id === id)
  }
}
