// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
		// https://color-mode.nuxtjs.org/
	colorMode: {
		classSuffix: '',
	},
	css: ['~/assets/css/main.css'],
	// https://tailwindcss.com/docs/guides/nuxtjs
	postcss: {
		plugins: {
			tailwindcss: {},
			autoprefixer: {},
		},
	},
	srcDir: 'src',
	eslint: {
		config: {
			stylistic: true,
		},
	},
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
			title: 'Dami Sparks',
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
