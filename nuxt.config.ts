// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  future: {
    compatibilityVersion: 4
  },
  devtools: { enabled: true },
  // https://content.nuxtjs.org/guide/recipes/sitemap
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/sitemap.xml']
    },
    hooks: {
      'prerender:generate' (route) {
        if (route.fileName)
          route.fileName = route.fileName.replace(
            /(\.\w{3})\/index.html$/,
            '$1'
          )

        if (route.fileName?.endsWith('.html') && route.contents) {
          route.contents = route.contents.replace(
            /(src|href|srcset)="\/_ipx[^"]+"/g,
            r => r.replaceAll('//', '/')
          )
        }

        if (route.error) {
          console.error(route.route, route.error, route)
          process.exit(1)
        }
      }
    }
  },

  routeRules: {
    '/projects': { redirect: { to: '/work', statusCode: 301 } }, // 307 (temp redirect)
    '/about': { redirect: { to: '/bio', statusCode: 301 } },
    '/blog': { redirect: { to: '/articles', statusCode: 301 } },
    '/blog/how-to-provision-a-node-app-on-amazon-eks-using-terraform': {
      redirect: {
        to: '/articles/how-to-provision-a-node-app-on-amazon-eks-using-terraform',
        statusCode: 301
      }
    },
    '/blog/intro': { redirect: { to: '/notes/intro', statusCode: 301 } },
    '/articles': { redirect: { to: '/notes', statusCode: 301 } },
    '/articles/how-to-provision-a-node-app-on-amazon-eks-using-terraform': {
      redirect: {
        to: '/notes/how-to-provision-a-node-app-on-amazon-eks-using-terraform',
        statusCode: 301
      }
    },
    '/articles/intro': { redirect: { to: '/notes/intro', statusCode: 301 } }
  },
  // https://color-mode.nuxtjs.org/
  colorMode: {
    classSuffix: '',
    preference: 'dark'
  },
  css: ['~/assets/css/main.css'],
  // https://tailwindcss.com/docs/guides/nuxtjs
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },
  srcDir: 'src/',
  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never'
      }
    }
  },

  // https://image.nuxt.com/get-started/configuration
  image: {
    quality: 80
  },

  // https://github.com/nuxt/fonts
  fonts: {
    google: {
      families: [
        { name: 'Inter', weight: ['300', '400', '500'] },
        { name: 'Montserrat', weight: ['300', '400', '500'] }
      ]
    }
  },

  // https://content.nuxt.com/get-started/installation
  content: {
    highlight: {
      preload: ['zsh', 'hcl', 'yaml'],
      theme: {
        default: 'one-dark-pro',
        dark: 'one-dark-pro'
      }
    }
  },

  runtimeConfig: {
    publicGtagId: ''
  },

  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    'nuxt-icon',
    '@nuxtjs/color-mode',
    '@nuxt/content',
    '@nuxt/image',
    '@vueuse/nuxt',
    '@nuxtjs/sitemap',
    'magic-regexp/nuxt',
    'nuxt-og-image'
  ]
})
