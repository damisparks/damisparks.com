import type { ProjectItem } from '@/types'

const projects: ProjectItem[] = [
  {
    id: 'actifage-lda-actif-for-professionals',
    name: 'Actif for Professionals',
    description: 'Comprehensive elder care platform with adaptive exercises and facilities management for professionals.',
    websiteUrl: 'https://pro.actif.online/login',
    imageUrl: '/assets/projects/actif-for-pro.png',
    type: 'commercial',
    featured: true,
  },
  {
    id: 'actifage-lda-actif-for-individuals',
    name: 'Actif for Individuals',
    description: 'Personalised elder care solution offering adaptive exercises and wellness tracking for independent living.',
    websiteUrl: 'https://me.actif.online/login',
    imageUrl: '/assets/projects/actif-for-individuals.png',
    type: 'commercial',
    featured: true,
  },
  {
    id: 'photoweb-izzy',
    name: 'Photoweb | Izzy',
    websiteUrl: 'http://photoweb.fr/',
    description: 'French service for premium photo products and prints, catering to both personal and business needs.',
    imageUrl: '/assets/landing/photoweb-izzy.png',
    type: 'commercial',
    featured: true,
  },
  {
    id: 'actifage-lda-actif-online',
    name: 'Actif Online',
    websiteUrl: 'https://www.actif.online/',
    description: 'Age-tech platform empowering older adults with tailored exercise and digital wellness solutions.',
    imageUrl: '/assets/projects/actif-homepage.png',
    type: 'commercial',
    featured: true,
  },
  {
    id: 'how-to-become-microsoft-certified-azure-ai-engineer-associate',
    name: 'Become Microsoft Certified: Azure AI Engineer Associate',
    websiteUrl: 'https://github.com/damisparks/microsoft-azure-ai-engineer-associate',
    description: 'Curated resources and guides for achieving the Microsoft Azure AI Engineer Associate certification.',
    imageUrl: '/assets/projects/microsoft-ai-associate-cert.png',
    type: 'personal',
  },
  {
    id: 'nuxt-validate',
    name: 'Nuxt-validate',
    websiteUrl: 'https://www.npmjs.com/package/nuxt-validate',
    description: 'Simple Nuxt input validation module using vee-validate for robust form handling.',
    imageUrl: '/assets/projects/nuxt-validate.png',
    type: 'open-source',
  },
  {
    id: 'nuxt-js-eslint-module',
    name: '@nuxtjs/eslint-module',
    description: 'Official ESLint module for Nuxt.js, providing customisable linting and code quality tools.',
    websiteUrl: 'https://github.com/nuxt-modules/eslint',
    imageUrl: '/assets/projects/nuxt-eslint.png',
    type: 'open-source',
  },
  {
    id: 'nuxt-js-google-fonts',
    name: '@nuxtjs/google-fonts',
    description: 'Google Fonts integration for NuxtJS, enabling easy font management and optimisation.',
    websiteUrl: 'https://github.com/nuxt-modules/google-fonts',
    imageUrl: '/assets/projects/nuxt-google-fonts.png',
    type: 'open-source',
  },
  {
    id: 'nuxt-pwa',
    name: '@nuxtjs/pwa',
    description: 'Zero-config PWA solution for Nuxt.js, adding offline support and modern web features.',
    websiteUrl: 'https://github.com/nuxt-community/pwa-module',
    imageUrl: '/assets/projects/nuxt-pwa.png',
    type: 'open-source',
  },
  {
    id: 'damisparks/eslint-config',
    name: '@damisparks/eslint-config',
    description: 'Personal ESLint presets for consistent code quality in JavaScript and TypeScript projects.',
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
