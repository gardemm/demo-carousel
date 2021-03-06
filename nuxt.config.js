module.exports = {
  mode: 'spa',
  modules: [
    ['bootstrap-vue/nuxt']
  ],

  head: {
    title: 'Vue bootstrap carousel demo',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'keywords', content: 'Vue bootstrap carousel demo'},
      { hid: 'description', name: 'description', content: 'Vue bootstrap carousel demo' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  loading: { color: '#3B8070' },

  build: {
    vendor: [
      'babel-polyfill'
    ],

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
    { src: '~/plugins/font-awesome' },
    { src: '~/plugins/vue-carousel.js', ssr: false }
  ],

  router: {
    scrollBehavior: function () {
      return {x: 0, y: 0}
    }
  }

}
