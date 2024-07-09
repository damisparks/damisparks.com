type ProjectListTypes = Record<string, any[]>

const showcase = [
  {
    id: 'actifage-lda-actif-for-professionals',
    name: 'Actif for Professionals',
    description: 'Elder Care Solution with Adaptive Exercises and Facilities Management',
    websiteUrl: 'https://pro.actif.online/login',
    imageUrl: '/images/actif-pro.webp'
  },
  {
    id: 'actifage-lda-actif-for-individuals',
    name: 'Actif for Individuals',
    description: 'Elder Care Solution with Adaptive Exercises for Individuals.',
    websiteUrl: 'https://me.actif.online/login',
    imageUrl: '/images/actif-individual.webp'
  },
  {
    name: 'Photoweb | Izzy',
    websiteUrl: 'http://photoweb.fr/',
    description: 'Photoweb is a French company that offers a wide range of photo products.',
    imageUrl: '/images/photoweb.webp'
  },
  {
    id: 'actifage-lda-actif-online',
    name: 'Actif Online',
    websiteUrl: 'https://www.actif.online/',
    description: 'A tech company focusing on empowering older adults through exercise, anytime and everywhere.',
    imageUrl: '/images/actif-main.webp'
  }
]
const all: ProjectListTypes = {
  'business': [
    {
      id: 'actifage-lda-actif-online',
      name: 'Actif Online',
      websiteUrl: 'https://www.actif.online/',
      description: 'A tech company focusing on empowering older adults through exercise, anytime and everywhere.'
    },
    {
      id: 'actifage-lda-actif-for-professionals',
      name: 'Actif for Professionals',
      description: 'Elder Care Solution with Adaptive Exercises and Facilities Management',
      websiteUrl: 'https://pro.actif.online/login'
    },
    {
      id: 'actifage-lda-actif-for-individuals',
      name: 'Actif for Individuals',
      description: 'Elder Care Solution with Adaptive Exercises for Individuals.',
      websiteUrl: 'https://me.actif.online/login'
    },
    {
      name: 'Photoweb | Izzy',
      websiteUrl: 'http://photoweb.fr/',
      description: 'Photoweb is a French company that offers a wide range of photo products.'
    }
  ],
  'open-source': [
    {
      id: 'how-to-become-microsoft-certified-azure-ai-engineer-associate',
      name: 'How to become Microsoft Certified: Azure AI Engineer Associate',
      websiteUrl: 'https://github.com/damisparks/microsoft-azure-ai-engineer-associate',
      description: `Here are notes and resources I used for those pursuing certification in Cloud Solution Architecture, Azure AI, and development.`
    },
    {
      id: 'nuxt-validate',
      name: 'Nuxt-validate',
      websiteUrl: 'https://www.npmjs.com/package/nuxt-validate',
      description: 'A Simple Nuxt input validation module using vee-validate library. I am actively contributing to this project.'
    },
    {
      id: 'nuxt-js-eslint-module',
      name: '@nuxtjs/eslint-module',
      description: 'ESLint module for Nuxt.js',
      websiteUrl: 'https://github.com/nuxt-modules/eslint'
    },
    {
      id: 'nuxt-js-google-fonts',
      name: '@nuxtjs/google-fonts',
      description: 'Google Fonts module for NuxtJS',
      websiteUrl: 'https://github.com/nuxt-modules/google-fonts'
    },
    {
      id: 'nuxt-pwa',
      name: '@nuxtjs/pwa',
      description: 'Zero config PWA solution for Nuxt.js',
      websiteUrl: 'https://github.com/nuxt-community/pwa-module'
    }
  ]
}

export { showcase, all }
