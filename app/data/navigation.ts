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
  {
    iconKey: 'simple-icons:medium',
    href: 'https://medium.com/@damisparks',
    name: 'Medium',
  },
  {
    iconKey: 'simple-icons:devdotto',
    href: 'https://dev.to/damisparks',
    name: 'Dev.to',
  },
] satisfies INavItem[]

export const navItems = [
  {
    name: 'projects',
    href: '/projects',
    iconKey: 'i-simple-icons-project-diagram',
  },
  {
    name: 'notes',
    href: '/notes',
    iconKey: 'i-simple-icons-notepad',
  },
] satisfies INavItem[]
