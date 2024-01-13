export default defineNuxtConfig({
  modules: [
    '@vuestic/nuxt',
    '@nuxtjs/google-fonts'
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
})
