/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./components/**/*.{js,vue,ts}',
		'./layouts/**/*.vue',
		'./pages/**/*.vue',
		'./plugins/**/*.{js,ts}',
		'./nuxt.config.{js,ts}',
		'./app.vue'
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
				opensans: "'Open Sans', sans-serif",
				montserrat: ["'Montserrat', sans-serif"]
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
					'@apply text-base leading-5 font-semibold rounded hover:shadow-lg p-2':
						{}
				},
				'.btn-ds-blue': {
					'@apply bg-ds-blue text-white': {}
				}
			})
		}
	],

	future: {
		removeDeprecatedGapUtilities: true,
		purgeLayersByDefault: true
	}
}
