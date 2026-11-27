// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/ui',
    '@nuxt/content'
  ],

  devtools: {
    enabled: true
  },

  css: ['~/assets/css/main.css'],

  content: {
    build: {
      markdown: {
        // External links in Markdown open in a new tab
        rehypePlugins: {
          'rehype-external-links': {
            options: { target: '_blank', rel: ['noopener', 'noreferrer'] },
          },
        },
      },
    },
  },

  // Configure Nuxt UI theming
  ui: {

  },

  routeRules: {
    '/': { prerender: true },
    '/about': { prerender: true },
    '/projects': { prerender: true },
    '/projects/**': { prerender: true }
  },

  compatibilityDate: '2025-01-15',

  // Configure for static generation
  nitro: {
    prerender: {
      crawlLinks: true
    }
  },

  eslint: {
    config: {
      stylistic: true
    }
  }
})
