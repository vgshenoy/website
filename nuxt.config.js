const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: 'Vignesh Shenoy',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Portfolio of Vignesh Shenoy' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Barlow|Gudea|K2D|Noto+Serif+JP|Open+Sans
      
      '},
      { rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  // loading: { color: '#fff' },
  loading: false,

  /*
  ** Global CSS
  */
  css: [
    '@/assets/css/main.scss'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    ['@nuxtjs/google-analytics', { ua: 'UA-78239545-3' }]
  ],
  generate: {
    routes: [
      '/projects/shapeofthegame',
      '/projects/indiahikes',
      '/projects/nostragamus',
      '/projects/yoky',
      '/projects/airtel-chromecast',
      '/projects/den'
    ]
  }
}
