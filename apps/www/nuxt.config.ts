export default defineNuxtConfig({
  extends: ['@nuxt-monorepo-boilerplate/ui'],
  modules: ['@nuxt/image', '@nuxtjs/google-fonts'],
  googleFonts: {
    families: {
      Inter: [400, 500, 600, 700]
    }
  },
  devtools: { enabled: true },
  compatibilityDate: '2024-09-22'
})
