import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'
import plugin from 'tailwindcss/plugin'
import typography from '@tailwindcss/typography'
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
    `${appDir}/ui.config/**/*.{js,vue,ts}`
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        ...themeOptions
      }
    },
    fontFamily: {
      sans: ['Inter', ...defaultTheme.fontFamily.sans],
      montserrat: ['Montserrat', 'sans-serif', ...defaultTheme.fontFamily.sans],
      dmsans: ['DM Sans', ...defaultTheme.fontFamily.sans]
    },
    fontWeight: {
      light: '300',
      normal: '400',
      medium: '500'
    },
    borderRadius: {
      xl: `calc(var(--radius) + 4px)`,
      lg: `var(--radius)`,
      md: `calc(var(--radius) - 2px)`,
      sm: 'calc(var(--radius) - 4px)',
      full: 'calc(9999px)'
    }
  },
  /** @type {import('tailwindcss/plugin')} */
  plugins: [
    plugin(({ addComponents }) => {
      addComponents({
        '.body-compact-small': {
          '@apply text-sm font-normal font-sans leading-4 tracking-[-0.12px]': {}
        },
        '.caption': {
          '@apply text-xs font-normal font-sans tracking-[0.4px]': {}
        }
      })
    }),

    require('@tailwindcss/aspect-ratio'),
    typography()
    // See https://github.com/tailwindlabs/tailwindcss/discussions/12496
    // plugin(function ({ addVariant }) {
    //   addVariant('prose-inline-code', '&.prose :where(:not(pre)>code):not(:where([class~="not-prose"] *))')
    // })
  ]
}
