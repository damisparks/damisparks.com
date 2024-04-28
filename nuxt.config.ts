// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
		// https://content.nuxtjs.org/guide/recipes/sitemap
	nitro: {
		prerender: {
			crawlLinks: true,
			routes: ['/sitemap.xml'],
		},
	},

	routeRules: {
		'/projects': { redirect: '/work' }, // 307 (temp redirect)
		'/about': { redirect: {to: '/bio', statusCode: 301}},
		// '/old-page': { redirect: { to: '/new-page', statusCode: 301 } }, // 301 (perm redirect)
	},
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

	// https://image.nuxt.com/get-started/configuration
	image: {
		quality: 80,
		domains: ['images.unsplash.com'],
		alias: {
			unsplash: 'https://images.unsplash.com',
		},
	},

	// https://github.com/nuxt/fonts
	fonts: {
		google: {
			families: [
				{ name: 'Fira Sans', weight: ['300', '400', '500'] },
				{ name: 'Montserrat', weight: ['300', '400', '500'] },
			],
		},
	},

	// https://content.nuxt.com/get-started/installation
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
			'composables',
			'composables/**',
		],
	},

	modules: [
		'@nuxt/eslint',
		'@nuxt/fonts',
		'nuxt-icon',
		'@nuxtjs/color-mode',
		'@nuxt/content',
		'@nuxt/image',
		'@vueuse/nuxt',
		'@nuxtjs/sitemap'
	],
})
