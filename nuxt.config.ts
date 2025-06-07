// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  future: {
    compatibilityVersion: 4,
  },

  devtools: { enabled: true },

  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/image',
    'magic-regexp/nuxt',
    '@nuxt/ui',
    '@vueuse/nuxt',
    'nuxt-og-image',
    'motion-v/nuxt',
  ],

  css: ['~/assets/css/main.css'],

  routeRules: {
    '/work': { redirect: { to: '/projects', statusCode: 301 } },
    '/about': { redirect: { to: '/bio', statusCode: 301 } },
    '/blog': { redirect: { to: '/articles', statusCode: 301 } },
    '/blog/how-to-provision-a-node-app-on-amazon-eks-using-terraform': {
      redirect: {
        to: '/articles/how-to-provision-a-node-app-on-amazon-eks-using-terraform',
        statusCode: 301,
      },
    },
    '/blog/intro': { redirect: { to: '/notes/intro', statusCode: 301 } },
    '/articles': { redirect: { to: '/notes', statusCode: 301 } },
    '/articles/how-to-provision-a-node-app-on-amazon-eks-using-terraform': {
      redirect: {
        to: '/notes/how-to-provision-a-node-app-on-amazon-eks-using-terraform',
        statusCode: 301,
      },
    },
    '/articles/intro': { redirect: { to: '/notes/intro', statusCode: 301 } },
  },

  // https://color-mode.nuxtjs.org/
  colorMode: {
    classSuffix: '',
    preference: 'dark',
  },

  eslint: {
    config: {
      standalone: false,
    },
  },

  // https://image.nuxt.com/get-started/configuration
  image: {
    quality: 80,
  },

  // https://github.com/nuxt/fonts
  fonts: {
    families: [
      { name: 'DM Sans', provider: 'google' },
      { name: 'Noto Sans', provider: 'google' },
    ],
  },

  // https://content.nuxt.com/get-started/installation
  content: {
    watch: { enabled: true },
    build: {
      markdown: {
        highlight: {
          preload: ['zsh', 'hcl', 'yaml'],
          theme: { dark: 'monokai', default: 'github-light' },
        },
      },
    },
  },

  runtimeConfig: {
    publicGtagId: '',
    public: {
      siteUrl: '',
    },
  },

  site: {
    // production URL
    url: 'https://damisparks.com',
  },

  compatibilityDate: '2024-12-09',
})
