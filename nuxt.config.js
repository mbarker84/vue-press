import axios from 'axios'
import pages from './store/pages'

const dynamicRoutes = () => {
  return axios
    .get('https://css-tricks.com/wp-json/wp/v2/posts?page=1&per_page=20')
    .then((res) => {
      return [...res.data.map((post) => `/blog/${post.slug}`), ...pageRoutes]
    })
}

const pageRoutes = () => {
  return pages.map((page) => `/site/${page.slug}`)
}

export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['@/assets/css/tailwind.scss'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['~/plugins/getPostTags.js', '~/plugins/getPages.js'],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module',
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss'
  ],
  tailwindcss: {
    configPath: '~/config/tailwind.config.js',
    cssPath: '~/assets/css/tailwind.scss',
    purgeCSSInDev: false
  },
  /*
   ** Nuxt.js modules
   */
  modules: [],
  /*
   ** Build configuration
   */
  generate: {
    routes: dynamicRoutes
  },
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
