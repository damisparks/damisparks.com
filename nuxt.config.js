export default {
	target: 'static',
	// Global page headers: https://go.nuxtjs.dev/config-head
	head: {
		title: 'Dami Sparks | Software Engineer, Mentor & Technical Writer',
		htmlAttrs: {
			lang: 'en',
		},
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: '' },
			{ name: 'format-detection', content: 'telephone=no' },
		],
		link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
	},

	// Global CSS: https://go.nuxtjs.dev/config-css
	css: ['@/assets/css/main.css'],

	// Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
	plugins: [],

	// Auto import components: https://go.nuxtjs.dev/config-components
	components: true,

	/*
	 ** Customize the progress-bar color
	 */
	loading: { color: '#fff' },

	/**
	 * Image provider
	 */
	image: {
		cloudinary: {
			baseURL: 'https://res.cloudinary.com/damisparks/image/upload/',
		},
	},

	// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
	buildModules: [
		// https://go.nuxtjs.dev/eslint
		'@nuxtjs/eslint-module',
		// https://go.nuxtjs.dev/stylelint
		'@nuxtjs/stylelint-module',
		// https://go.nuxtjs.dev/tailwindcss
		'@nuxtjs/tailwindcss',
		'@nuxt/postcss8',
		'@nuxt/image',
	],

	// Modules: https://go.nuxtjs.dev/config-modules
	modules: [],

	// Build Configuration: https://go.nuxtjs.dev/config-build
	build: {
		postcss: {
			plugins: {
				tailwindcss: {},
				autoprefixer: {},
			},
		},
	},
}
