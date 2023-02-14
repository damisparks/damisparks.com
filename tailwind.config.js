module.exports = {
	content: [
		'./components/**/*.{js,vue,ts}',
		'./layouts/**/*.vue',
		'./pages/**/*.vue',
		'./plugins/**/*.{js,ts}',
		'./nuxt.config.{js,ts}',
	],
	theme: {
		// todo: add this as well later.
		// darkSelector: '.dark',
		extend: {
			colors: {
				'ds-blue': '#304382',
				'ds-orange': '#F7C860',
				'ds-teal': '#5ac8d0',
				'ds-gray': '#CCCCCC',
				'ds-smokewhite': '#F1F2F8',
				dark: 'dark',
				linkExactActiveClass: 'tbd', // todo: to change this later.
			},
			fontFamily: {
				// todo: tbd
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [
		require('@tailwindcss/aspect-ratio'),
		require('@tailwindcss/forms'),
	],

	future: {
		removeDeprecatedGapUtilities: true,
		purgeLayersByDefault: true,
	},
}
