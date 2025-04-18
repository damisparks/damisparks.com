import type { Config } from 'tailwindcss'
import typography from '@tailwindcss/typography'
import defaultTheme from 'tailwindcss/defaultTheme'
import plugin from 'tailwindcss/plugin'
import themeOptions from './app/theme'

const appDir: string = './app'

export default <Partial<Config>>{
  content: [
    `${appDir}/components/**/*.{js,vue,ts}`,
    `${appDir}/layouts/**/*.vue`,
    `${appDir}/pages/**/*.vue`,
    `${appDir}/plugins/**/*.{js,ts}`,
    `${appDir}/app.vue`,
    `${appDir}/error.vue`,
    `${appDir}/ui.config/**/*.{js,vue,ts}`,
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        ...themeOptions,
      },
    },
    fontFamily: {
      dmsans: ['DM Sans', ...defaultTheme.fontFamily.sans],
      notosans: ['Noto Sans', ...defaultTheme.fontFamily.serif],
    },
    fontWeight: {
      light: '300',
      normal: '400',
      medium: '500',
    },
    borderRadius: {
      xl: `calc(var(--radius) + 4px)`,
      lg: `var(--radius)`,
      md: `calc(var(--radius) - 2px)`,
      sm: 'calc(var(--radius) - 4px)',
      full: 'calc(9999px)',
    },
  },
  /** @type {import('tailwindcss/plugin')} */
  plugins: [
    plugin(({ addComponents }) => {
      addComponents({
        '.body-compact-small': {
          '@apply text-sm font-normal font-notosans leading-4 tracking-[-0.12px]': {},
        },
        '.caption': {
          '@apply text-xs font-normal font-notosans tracking-[0.4px]': {},
        },
      })
    }),
    // eslint-disable-next-line ts/no-require-imports
    require('@tailwindcss/aspect-ratio'),
    typography(),
  ],
}
