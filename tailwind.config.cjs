/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./components/**/*.{js,vue,ts}',
		'./layouts/**/*.vue',
		'./pages/**/*.vue',
		'./plugins/**/*.{js,ts}',
		'./nuxt.config.{js,ts}',
		'./app.vue',
		'./error.vue'
	],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				'ds-blue': '#304382',
				'ds-blue-accent': {
					100: '#E4E8F5',
					200: '#C9D1EB',
					300: '#AEBAE1',
					400: '#93A3D7',
					500: '#788CCD',
					600: '#5D75C3',
					700: '#445FB8',
					800: '#3A519D',
					900: '#23254C'
				},
				'ds-orange': '#F7C860',
				'ds-orange-darker': '#E7CE8C',
				'ds-teal': '#5ac8d0',
				'ds-teal-darker': '#69b6b5',
				'ds-gray': '#CCCCCC',
				'ds-tertiary': '#D0625A',
				'ds-tertiary-darker': '#B6696A',
				'ds-smokewhite': '#E8ECF4',
				'ds-gray-light': '#E1E2E5',
				linkExactActiveClass: 'tbd' // todo: to change this later.
			},
			fontFamily: {
				montserrat: ["'Montserrat', sans-serif"],
				firasans: ["'Fira Sans', sans-serif"]
			}
		}
	},
	variants: {
		extend: {}
	},
	plugins: [
		require('@tailwindcss/aspect-ratio'),
		require('@tailwindcss/forms'),

		// solution reference : https://github.com/tailwindlabs/tailwindcss-intellisense/issues/227
		/** @type {import('tailwindcss/types/config').PluginCreator} */
		({ addComponents }) => {
			addComponents({
				'.btn': {
					'@apply text-base leading-5 font-semibold rounded hover:shadow-lg p-2 font-firasans':
						{}
				},
				'.btn-ds-blue': {
					'@apply bg-ds-blue text-white dark:bg-ds-orange dark:text-ds-blue': {}
				},
				'.app-input-label': {
					'@apply block text-sm font-medium font-firasans text-zinc-500 dark:text-zinc-400':
						{}
				},
				'.app-heading': {
					'@apply text-zinc-800 dark:text-zinc-100 font-montserrat': {}
				},
				'.app-text-content': {
					'@apply text-zinc-600 dark:text-zinc-400 font-firasans': {}
				},
				'.app-text-gradient': {
					'@apply text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500 dark:from-yellow-400 dark:to-pink-600':
						{}
				}
			})
		}
	],

	future: {
		removeDeprecatedGapUtilities: true,
		purgeLayersByDefault: true
	}
}
