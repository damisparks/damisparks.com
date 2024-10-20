import type INavItem from '@/types/navItem'

export default {
  socials: [
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
  ],
  navItems: [
    {
      name: 'Projects',
      href: 'projects',
      iconKey: 'fluent:lightbulb-filament-24-regular',
    },
    {
      name: 'Notes',
      href: 'notes',
      iconKey: 'fluent:notepad-24-regular',
    },
  ] satisfies INavItem[],
}
