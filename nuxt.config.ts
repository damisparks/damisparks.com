// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	app: {
		head: {
			title: 'Dami Sparks | Software Engineer, Mentor, Technical Writer & more',
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
			link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
		}
	},
	modules: ['@nuxt/image-edge', 'nuxt-icon', '@nuxtjs/color-mode'],

	// nuxt image configuration
	image: {
		cloudinary: {
			baseURL: 'https://res.cloudinary.com/damisparks/image/upload/'
		}
	},

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
	}
})
