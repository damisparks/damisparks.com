export default {
	target: 'static',
	// Global page headers: https://go.nuxtjs.dev/config-head
	head: {
		title: 'Dami Sparks | Software Engineer, Mentor, Technical Writer & more',
		htmlAttrs: {
			lang: 'en',
		},
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{
				hid: 'description',
				name: 'description',
				content:
					'Damilola is the CTO and co-founder of Actif, a tech company focusing on improving the health of older people with fitness and cognitive programs. He is a Certified Mentor, Machine Learning Engineer and Cloud Developer with vast experience in front-end and back-end design and development.',
			},
			{ name: 'format-detection', content: 'telephone=no' },
			{ property: 'og:site_name', content: 'DamiSparks' },
			{ hid: 'og:type', property: 'og:type', content: 'website' },
			{
				hid: 'og:url',
				property: 'og:url',
				content: 'https://damisparks.com',
			},
			{
				hid: 'og:title',
				property: 'og:title',
				content:
					'Damilola loves what he does. He help others find their passion to code by making the complicated awesomely simple and empowering them to become their heroes.',
			},
			{
				hid: 'og:description',
				property: 'og:description',
				content:
					'Damilola is the CTO and co-founder of Actif, a tech company focusing on improving the health of older people with fitness and cognitive programs. He is a Certified Mentor, Machine Learning Engineer and Cloud Developer with vast experience in front-end and back-end design and development.',
			},
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
