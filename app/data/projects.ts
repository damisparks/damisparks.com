interface ProjectItemTypes {
  id: string
  name: string
  description: string
  websiteUrl: string
  imageUrl?: string
}

const showcase: ProjectItemTypes[] = [
  {
    id: 'actifage-lda-actif-for-professionals',
    name: 'Actif for Professionals',
    description: 'Elder Care Solution with Adaptive Exercises and Facilities Management',
    websiteUrl: 'https://pro.actif.online/login',
    imageUrl: '/images/projects/actif-for-pro.png',
  },
  {
    id: 'actifage-lda-actif-for-individuals',
    name: 'Actif for Individuals',
    description: 'Elder Care Solution with Adaptive Exercises for Individuals.',
    websiteUrl: 'https://me.actif.online/login',
    imageUrl: '/images/projects/actif-for-individuals.png',
  },
  {
    id: 'photoweb-izzy',
    name: 'Photoweb | Izzy',
    websiteUrl: 'http://photoweb.fr/',
    description: 'Photoweb is a French company that offers a wide range of photo products.',
    imageUrl: '/images/projects/photoweb-izzy.png',
  },
  {
    id: 'actifage-lda-actif-online',
    name: 'Actif Online',
    websiteUrl: 'https://www.actif.online/',
    description: 'Age-tech startup focusing on empowering older adults through exercise.',
    imageUrl: '/images/projects/actif-homepage.png',
  },
]
const all: ProjectItemTypes[] = [
  ...showcase,
  {
    id: 'how-to-become-microsoft-certified-azure-ai-engineer-associate',
    name: 'Become Microsoft Certified: Azure AI Engineer Associate',
    websiteUrl: 'https://github.com/damisparks/microsoft-azure-ai-engineer-associate',
    description: `Resources I used for pursuing certification in Azure AI Engineer Associate.`,
    imageUrl: '/images/projects/microsoft-ai-associate-cert.png',
  },
  {
    id: 'nuxt-validate',
    name: 'Nuxt-validate',
    websiteUrl: 'https://www.npmjs.com/package/nuxt-validate',
    description: 'A Simple Nuxt input validation module with the vee-validate library',
    imageUrl: '/images/projects/nuxt-validate.png',
  },
  {
    id: 'nuxt-js-eslint-module',
    name: '@nuxtjs/eslint-module',
    description: 'ESLint module for Nuxt.js',
    websiteUrl: 'https://github.com/nuxt-modules/eslint',
    imageUrl: '/images/projects/nuxt-eslint.png',
  },
  {
    id: 'nuxt-js-google-fonts',
    name: '@nuxtjs/google-fonts',
    description: 'Google Fonts module for NuxtJS',
    websiteUrl: 'https://github.com/nuxt-modules/google-fonts',
    imageUrl: '/images/projects/nuxt-google-fonts.png',
  },
  {
    id: 'nuxt-pwa',
    name: '@nuxtjs/pwa',
    description: 'Zero config PWA solution for Nuxt.js',
    websiteUrl: 'https://github.com/nuxt-community/pwa-module',
    imageUrl: '/images/projects/nuxt-pwa.png',
  },
  {
    id: 'damisparks/eslint-config',
    name: '@damisparks/eslint-config',
    description: 'My personal ESLint presets',
    websiteUrl: 'https://github.com/damisparks/eslint-config',
    imageUrl: '/images/projects/damisparks-eslint-config.png',
  },
]

export { all, showcase }
