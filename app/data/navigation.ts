import type INavItem from '@/types/navItem'

export const socials = [
  {
    iconKey: 'i-simple-icons-github',
    href: 'https://www.github.com/damisparks',
    name: 'GitHub',
  },
  {
    iconKey: 'i-simple-icons-x',
    href: 'https://www.twitter.com/DamiSparks',
    name: 'X',
  },
  {
    iconKey: 'i-simple-icons-linkedin',
    href: 'https://www.linkedin.com/in/damisparks',
    name: 'LinkedIn',
  },
] satisfies INavItem[]

export const navItems = [
  {
    name: 'projects',
    href: '/projects',
    iconKey: 'fluent:lightbulb-filament-24-regular',
  },
  {
    name: 'notes',
    href: '/notes',
    iconKey: 'fluent:notepad-24-regular',
  },
] satisfies INavItem[]
