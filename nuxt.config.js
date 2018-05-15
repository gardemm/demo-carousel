module.exports = {
  mode: 'spa',

  modules: [
    ['bootstrap-vue/nuxt']
  ],

  /*
  ** Headers of the page
  */
  head: {
    title: 'demo-carousel',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },

  plugins: [
    '~plugins/vue-carousel.js'
  ],

  router: {
    scrollBehavior: function (to, from, savedPosition) {
      return {x: 0, y: 0}
    }
  }

}
