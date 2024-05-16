export default defineNuxtConfig({
  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ],

      title: 'Vuestic Admin — Vue 3 admin template',

      meta: [
        { charset: 'utf-8' },
        { name: 'theme-color', content: '#154EC1' },
        { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0, minimum-scale=1.0' },
        {
          hid: 'description',
          name: 'description',
          content: 'Vuestic Admin is a modern admin template utilizing Vue 3, Vite, Pinia, and Tailwind CSS'
        },
        {
          vmid: 'keywords',
          name: 'keywords',
          content: 'vue, vue components, vuestic admin, vuestic, vuestic-ui, component framework'
        },
        {
          vmid: 'og:description',
          property: "og:description",
          content: 'Vuestic Admin is a modern admin template utilizing Vue 3, Vite, Pinia, and Tailwind CSS'
        },
        {
          vmid: 'og:image',
          property: "og:image",
          content: 'https://raw.githubusercontent.com/epicmaxco/vuestic-ui/develop/.github/assets/vuestic-ui-social.png'
        },
        {
          vmid: 'og:site_name',
          property: "og:site_name",
          content: 'Vuestic Admin'
        },
        {
          vmid: 'og:title',
          property: "og:title",
          content: 'Vuestic Admin — Vue 3 admin template'
        },
        {
          vmid: 'og:type',
          property: "og:type",
          content: 'website'
        },
        {
          vmid: 'twitter:card',
          property: 'twitter:card',
          content: 'https://raw.githubusercontent.com/epicmaxco/vuestic-ui/develop/.github/assets/vuestic-ui-social.png'
        },
        {
          vmid: 'twitter:domain',
          property: 'twitter:domain',
          content: 'https://admin-demo.vuestic.dev/dashboard'
        },
        {
          vmid: 'twitter:site',
          property: 'twitter:site',
          content: 'Vuestic Admin'
        },
      ]
    },
  },

  modules: [
    '@vuestic/nuxt',
    '@nuxtjs/google-fonts',
    '@zadigetvoltaire/nuxt-gtm'
  ],

  googleFonts: {
    families: {
      Inter: [400, 600, 700],
    },
    display: 'swap',
  },

  vuestic: {
    config: {
      breakpoint: {
        bodyClass: false,
        thresholds: {
          xs: 0,
          sm: 640,
          md: 1108,
          lg: 1440,
          xl: 1920,
        },
      },
    },

    css: ['typography'],
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  css: ['~/assets/css/main.css'],

  ssr: true,

  nitro: {
    compressPublicAssets: true,
  },

  gtm: {
    id: process.env.NUXT_GTM_KEY,
    enabled: process.env.NUXT_GTM_ENABLED,
  },

  runtimeConfig: {
    public: {
      recaptchaKey: process.env.NUXT_PUBLIC_RECAPTCHA_KEY,
    },
  },
})
