export default {
  target: 'static',
  router: {
    base: '/portfolio/'
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Portfolio Lukasz Dabik',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'LUKDEV Lukasz Dabik portfolio website' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'normalize.css/normalize.css',
    '~/assets/css/fonts.css',
    '~/assets/scss/global.scss',
    '~/assets/scss/buttons.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: "@/plugins/aos", mode: "client" },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/style-resources',
    '@nuxtjs/google-fonts',
    '@nuxtjs/svg'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/i18n',
    'nuxt-purgecss'
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  styleResources: {
    scss: [
      '~/assets/scss/variables.scss'
    ],
  },

  googleFonts: {
    families: {
      Roboto: [400, 600],
    },
    display: 'swap',
    prefetch: true
  },

  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
    vueI18n: {
      fallbackLocale: 'en',
      messages: {
        en: {
          projects_heading: 'Latest projects',
          header_heading: "Portfolio Lukasz Dabik",
          welcome_hi: "Hi, my name is",
          welcome_h1: "Lukasz Dabik",
          welcome_h2: "Web Developer/ +8 years experience",
          welcome_btn: "See my projects",
          footer_copyright: 'Copyright © LUK-DEV Lukasz Dabik'
        }
      }
    }
  },
  purgeCSS: {
    whitelist: ["aos-init", "aos-animate", "data-aos-delay", "data-aos-duration", "fade-up", "zoom-in"],
  }
}
