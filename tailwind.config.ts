import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'
import palette from './src/theme/palette'
import plugin from 'tailwindcss/plugin'
const srcDir: string = './src'

export default {
	content: [
		`${srcDir}/components/**/*.{js,vue,ts}`,
		`${srcDir}/layouts/**/*.vue`,
		`${srcDir}/pages/**/*.vue`,
		`${srcDir}/plugins/**/*.{js,ts}`,
		`${srcDir}/app.vue`,
		`${srcDir}/error.vue`,
		`${srcDir}/ui.config/**/*.{js,vue,ts}`,
	],
	darkMode: 'class',
	theme: {
		colors: {
			...palette,
		},
		fontFamily: {
			firasans: ['Fira Sans', 'sans-serif', ...defaultTheme.fontFamily.sans],
			montserrat: ['Montserrat', 'sans-serif', ...defaultTheme.fontFamily.sans],
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
					'@apply text-sm font-normal font-firasans leading-4 tracking-[-0.12px]':
						{},
				},
				'.caption': {
					'@apply text-xs font-normal font-firasans tracking-[0.4px]': {},
				},
			})
		}),

		require('@tailwindcss/aspect-ratio'),
	],
} satisfies Config
