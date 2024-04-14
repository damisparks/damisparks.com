// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	// https://content.nuxtjs.org/guide/recipes/sitemap
	nitro: {
		prerender: {
			crawlLinks: true,
			routes: ['/sitemap.xml'],
		},
	},

	app: {
		head: {
			htmlAttrs: { lang: 'en' },
			meta: [
				{ charset: 'utf-8' },
				{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
				{ name: 'format-detection', content: 'telephone=no' },
				{
					name: 'keywords',
					content:
						'Vue.js, Nuxt.js, Full-Stack Development, Technical Writing, Mentorship, Innovative Development, Product Thinking, Scalable Digital Products, Responsive Web Application Interfaces, User-Friendly Design, RESTful API Integration, Cloud Platform Deployment, Timely Delivery, Affordable Pricing, Clean Code, High-Quality Code, Well-Documented Code, Client Satisfaction, Industry Expertise, Agile Development, Test-Driven Development, DevOps, Front-end Development, Back-end Development, Database Development, Web Development, Mobile Development, Custom Web Applications, E-commerce Development, CMS Development, UI/UX Design, Cross-Platform Development, Progressive Web Applications, Single Page Applications, Server-Side Rendering, SEO Optimization, Google Analytics, Social Media Integration, Payment Gateway Integration, Security, Software Architecture, Technical Consulting, Project Management, Startup Development, MVP Development, API Design, Technical SEO, Content Creation, Technical Marketing, Growth Hacking, Digital Strategy, Branding, Product Design, User Research, User Testing, Accessibility',
				},
			],
			link: [
				{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
				{
					rel: 'preconnect',
					href: 'https://fonts.googleapis.com',
				},
				{
					rel: 'preconnect',
					href: 'https://fonts.gstatic.com',
				},
				{
					href: 'https://fonts.googleapis.com/css2?Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&family=Fira+Sans:ital,wght@0,100;0,400;0,500;0,600;0,700;1,400&display=swap',
					rel: 'stylesheet',
				},
			],
		},
	},

	// nuxt image configuration
	image: {
		cloudinary: {
			baseURL: 'https://res.cloudinary.com/damisparks/image/upload/',
		},
	},

	content: {
		highlight: {
			preload: ['zsh', 'hcl', 'yaml'],
			theme: {
				default: 'one-dark-pro',
				dark: 'one-dark-pro',
			},
		},
	},

	runtimeConfig: {
		publicGtagId: '',
	},

	// https://tailwindcss.com/docs/guides/nuxtjs#3
	css: ['~/assets/css/main.css'],

	eslint: {
		config: {
			stylistic: true,
		},
	},

	postcss: {
		plugins: {
			tailwindcss: {},
			autoprefixer: {},
		},
	},

	// https://color-mode.nuxtjs.org/
	colorMode: {
		classSuffix: '',
	},

	// https://nuxt.com/docs/guide/directory-structure/composables
	imports: {
		dirs: [
			// Scan top-level modules
			'use',
			'use/**',
		],
	},

	modules: [
		'@nuxt/image',
		'nuxt-icon',
		'@nuxtjs/color-mode',
		'nuxt-gtag',
		'@nuxt/content',
		'@vueuse/nuxt',
		'magic-regexp/nuxt',
		'@nuxt/eslint',
	],
})
