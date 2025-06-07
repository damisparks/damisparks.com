import type { NavigationMenuItem } from '@nuxt/ui'

export const navLinks: NavigationMenuItem[] = [
  {
    label: 'Home',
    icon: 'i-lucide-house',
    to: '/',
  },
  {
    label: 'Projects',
    icon: 'i-lucide-folder',
    to: '/projects',
  },
  {
    label: 'Notes',
    icon: 'i-lucide-file-text',
    to: '/notes',
  },
  // TODO: Add speaking page when I have some speaking engagements
  // {
  //   label: 'Speaking',
  //   icon: 'i-lucide-mic',
  //   to: '/speaking',
  // },
  {
    label: 'Bio',
    icon: 'i-lucide-user',
    to: '/bio',
  },
]
