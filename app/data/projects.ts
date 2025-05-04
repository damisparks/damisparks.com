interface ProjectItemTypes {
  id: string
  name: string
  description: string
  websiteUrl: string
  imageUrl: string
  type?: 'open-source' | 'commercial' | 'personal'
  featured?: boolean
}

const projects: ProjectItemTypes[] = [
  {
    id: 'actifage-lda-actif-for-professionals',
    name: 'Actif for Professionals',
    description: 'Elder Care Solution with Adaptive Exercises and Facilities Management',
    websiteUrl: 'https://pro.actif.online/login',
    imageUrl: '/assets/projects/actif-for-pro.png',
    type: 'commercial',
    featured: true,
  },
  {
    id: 'actifage-lda-actif-for-individuals',
    name: 'Actif for Individuals',
    description: 'Elder Care Solution with Adaptive Exercises for Individuals.',
    websiteUrl: 'https://me.actif.online/login',
    imageUrl: '/assets/projects/actif-for-individuals.png',
    type: 'commercial',
    featured: true,
  },
  {
    id: 'photoweb-izzy',
    name: 'Photoweb | Izzy',
    websiteUrl: 'http://photoweb.fr/',
    description: 'Photoweb is a French company that offers a wide range of photo products.',
    imageUrl: '/assets/landing/photoweb-izzy.png',
    type: 'commercial',
    featured: true,
  },
  {
    id: 'actifage-lda-actif-online',
    name: 'Actif Online',
    websiteUrl: 'https://www.actif.online/',
    description: 'Age-tech startup focusing on empowering older adults through exercise.',
    imageUrl: '/assets/projects/actif-homepage.png',
    type: 'commercial',
    featured: true,
  },
  {
    id: 'how-to-become-microsoft-certified-azure-ai-engineer-associate',
    name: 'Become Microsoft Certified: Azure AI Engineer Associate',
    websiteUrl: 'https://github.com/damisparks/microsoft-azure-ai-engineer-associate',
    description: `Resources I used for pursuing certification in Azure AI Engineer Associate.`,
    imageUrl: '/assets/projects/microsoft-ai-associate-cert.png',
    type: 'personal',
  },
  {
    id: 'nuxt-validate',
    name: 'Nuxt-validate',
    websiteUrl: 'https://www.npmjs.com/package/nuxt-validate',
    description: 'A Simple Nuxt input validation module with the vee-validate library',
    imageUrl: '/assets/projects/nuxt-validate.png',
    type: 'open-source',
  },
  {
    id: 'nuxt-js-eslint-module',
    name: '@nuxtjs/eslint-module',
    description: 'ESLint module for Nuxt.js',
    websiteUrl: 'https://github.com/nuxt-modules/eslint',
    imageUrl: '/assets/projects/nuxt-eslint.png',
    type: 'open-source',
  },
  {
    id: 'nuxt-js-google-fonts',
    name: '@nuxtjs/google-fonts',
    description: 'Google Fonts module for NuxtJS',
    websiteUrl: 'https://github.com/nuxt-modules/google-fonts',
    imageUrl: '/assets/projects/nuxt-google-fonts.png',
    type: 'open-source',
  },
  {
    id: 'nuxt-pwa',
    name: '@nuxtjs/pwa',
    description: 'Zero config PWA solution for Nuxt.js',
    websiteUrl: 'https://github.com/nuxt-community/pwa-module',
    imageUrl: '/assets/projects/nuxt-pwa.png',
    type: 'open-source',
  },
  {
    id: 'damisparks/eslint-config',
    name: '@damisparks/eslint-config',
    description: 'My personal ESLint presets',
    websiteUrl: 'https://github.com/damisparks/eslint-config',
    imageUrl: '/assets/projects/damisparks-eslint-config.png',
    type: 'open-source',
  },
]

// Helper functions to filter projects
const getFeaturedProjects = () => projects.filter(project => project.featured)

export default projects
export const featured = getFeaturedProjects()
export const all = projects
