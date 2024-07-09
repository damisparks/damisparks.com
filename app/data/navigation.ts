import type INavItem from '@/types/navItem'

export default {
  socials: [
    {
      iconKey: 'uil:github',
      href: 'https://www.github.com/damisparks',
      name: 'GitHub'
    },
    {
      iconKey: 'uil:linkedin',
      href: 'https://www.linkedin.com/in/damisparks',
      name: 'LinkedIn'
    },
    {
      iconKey: 'ri:twitter-x-fill',
      href: 'https://www.twitter.com/DamiSparks',
      name: 'Twitter'
    }
  ],
  navItems: [
    {
      name: 'Projects',
      href: '/projects',
      iconKey: 'fluent:lightbulb-filament-24-regular'
    },
    {
      name: 'Notes',
      href: '/notes',
      iconKey: 'fluent:notepad-24-regular'
    }
  ] satisfies INavItem[]
}
