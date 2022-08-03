export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Micheal Adisa',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
      {name: 'twitter:card', content: 'summary_large_image'},
      {name: 'og:title', content: 'Micheal Adisa'},
      {name: 'og:description', content: 'Micheal Adisa is a Software Engineer with a demonstrated history of working in the information technology and services industry. Skilled in Vue.js, ReactJS, HTML, CSS, Web Development'}
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/micheal.ico' },
      {rel: 'preconnect', href: 'https://fonts.gstatic.com'},
      {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=DM+Sans&display=swap'}
    ]
  },
  target: 'static',

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/scss/main.scss'
  ],
  

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // '@nuxtjs/style-resources'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/style-resources',
     // https://go.nuxtjs.dev/axios
    '@nuxtjs/apollo',
  ],

  // Apollo configuration
  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: 'https://api.hashnode.com',
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
