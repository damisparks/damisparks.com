// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	app: {
		head: {
			title:
				'Dami Sparks | Full-Stack Software Developer, Mentor, Technical Writer & more',
			titleTemplate: '%s - Dami Sparks',
			meta: [
				{ charset: 'utf-8' },
				{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
				{
					hid: 'description',
					name: 'description',
					content:
						'Dami is the CTO and co-founder of Actif, a tech company focusing on improving the health of older people with fitness and cognitive programs. He is a Certified Mentor, Machine Learning Engineer and Cloud Developer with vast experience in front-end and back-end design and development.'
				},
				{ name: 'format-detection', content: 'telephone=no' },
				{ property: 'og:site_name', content: 'DamiSparks' },
				{ key: 'og:type', property: 'og:type', content: 'website' },
				{
					key: 'og:url',
					property: 'og:url',
					content: 'https://damisparks.com'
				},
				{
					key: 'og:title',
					property: 'og:title',
					content:
						'Dami loves what he does. He help others find their passion to code by making the complicated awesomely simple and empowering them to become their heroes.'
				},
				{
					key: 'og:description',
					property: 'og:description',
					content:
						'Dami is the CTO and co-founder of Actif, a tech company focusing on improving the health of older people with fitness and cognitive programs. He is a Certified Mentor, Machine Learning Engineer and Cloud Developer with vast experience in front-end and back-end design and development.'
				}
			],
			link: [
				{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
				{
					rel: 'preconnect',
					href: 'https://fonts.googleapis.com'
				},
				{
					rel: 'preconnect',
					href: 'https://fonts.gstatic.com'
				},
				{
					href: 'https://fonts.googleapis.com/css2?Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&family=Fira+Sans:ital,wght@0,100;0,400;0,600;0,700;1,400&display=swap',
					rel: 'stylesheet'
				}
			]
		}
	},

	modules: ['@nuxt/image-edge', 'nuxt-icon', '@nuxtjs/color-mode', 'nuxt-gtag'],

	// nuxt image configuration
	image: {
		cloudinary: {
			baseURL: 'https://res.cloudinary.com/damisparks/image/upload/'
		}
	},

	runtimeConfig: {
		publicGtagId: ''
	},
	// https://nuxt.com/modules/gtag
	// gtag: {
	// 	initialConsent:
	// },

	// https://tailwindcss.com/docs/guides/nuxtjs#3
	css: ['~/assets/css/main.css'],
	postcss: {
		plugins: {
			tailwindcss: {},
			autoprefixer: {}
		}
	},

	// https://color-mode.nuxtjs.org/
	colorMode: {
		classSuffix: ''
	},

	// https://nuxt.com/docs/guide/directory-structure/composables
	imports: {
		dirs: [
			// Scan top-level modules
			'use',
			'use/**'
		]
	}
})
