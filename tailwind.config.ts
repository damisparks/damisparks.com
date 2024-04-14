import defaultTheme from 'tailwindcss/defaultTheme'
import type { Config } from 'tailwindcss'
import theme from './theme'

export default {
	content: [
		'./components/**/*.{js,vue,ts}',
		'./layouts/**/*.vue',
		'./pages/**/*.vue',
		'./plugins/**/*.{js,ts}',
		'./nuxt.config.{js,ts}',
		'./app.vue',
		'./error.vue',
	],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				...theme,
			},
			fontFamily: {
				firasans: ['Fira Sans', 'sans-serif', ...defaultTheme.fontFamily.sans],
				montserrat: [
					'Montserrat',
					'sans-serif',
					...defaultTheme.fontFamily.sans,
				],
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [
		require('@tailwindcss/aspect-ratio'),
		require('@tailwindcss/forms'),

		// solution reference : https://github.com/tailwindlabs/tailwindcss-intellisense/issues/227
		/** @type {import('tailwindcss/types/config').PluginCreator} */

		({ addComponents }: any) => {
			/** * @type {import('tailwindcss/types/config').PluginAPI} */
			addComponents({
				'.btn': {
					'@apply text-base leading-5 font-semibold rounded hover:shadow-lg p-2 font-firasans':
						{},
				},
				'.btn-ds-blue': {
					'@apply bg-ds-blue text-white dark:bg-ds-orange dark:text-ds-blue':
						{},
				},
				'.app-input-label': {
					'@apply block text-sm font-medium font-firasans text-zinc-500 dark:text-zinc-400':
						{},
				},
				'.app-heading': {
					'@apply text-zinc-800 dark:text-zinc-100 font-montserrat': {},
				},
				'.app-text-content': {
					'@apply text-zinc-600 dark:text-zinc-400 font-firasans': {},
				},
				'.app-text-gradient': {
					'@apply text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500 dark:from-yellow-400 dark:to-pink-600':
						{},
				},
			})
		},
	],
} satisfies Config
