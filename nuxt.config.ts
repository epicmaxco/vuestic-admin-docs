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
      // Vuestic config here
    }
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
