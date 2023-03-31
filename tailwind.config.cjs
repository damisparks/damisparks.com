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
					800: '#3A519D'
				},
				'ds-orange': '#F7C860',
				'ds-teal': '#5ac8d0',
				'ds-gray': '#CCCCCC',
				'ds-smokewhite': '#F1F2F8',
				dark: 'dark',
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
		require('@tailwindcss/forms')
	],

	future: {
		removeDeprecatedGapUtilities: true,
		purgeLayersByDefault: true
	}
}
