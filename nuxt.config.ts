// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
		// https://content.nuxtjs.org/guide/recipes/sitemap
	nitro: {
		prerender: {
			crawlLinks: true,
			routes: ['/sitemap.xml'],
		},
		hooks: {
      'prerender:generate' (route) {
        if (route.fileName)
          route.fileName = route.fileName.replace(
            /(\.\w{3})\/index.html$/,
            '$1',
          )

        if (route.fileName?.endsWith('.html') && route.contents) {
          route.contents = route.contents.replace(/(src|href|srcset)="\/_ipx[^"]+"/g, r => r.replaceAll('//', '/'))
        }

        if (route.error) {
          console.error(route.route, route.error, route)
          process.exit(1)
        }
      },
		}
	},

	routeRules: {
		'/projects': { redirect: {to: '/work', statusCode: 301} }, // 307 (temp redirect)
		'/about': { redirect: {to: '/bio', statusCode: 301}},
		'/blog': { redirect: { to: '/articles', statusCode: 301 } },
		'/blog/how-to-provision-a-node-app-on-amazon-eks-using-terraform': { redirect: { to: '/articles/how-to-provision-a-node-app-on-amazon-eks-using-terraform', statusCode: 301 } },
		'/blog/intro': { redirect: { to: '/articles/intro', statusCode: 301 } },
		// '/old-page': { redirect: '/new-page' }, // 307 (temp redirect)
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
			// TODO: Review the rules and update the config.
			stylistic: true,
		},
	},

	// https://image.nuxt.com/get-started/configuration
	image: {
		quality: 80,
		// TODO: Figure out how to make unsplash work on netlify on production.
		domains: ['https://images.unsplash.com'],
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
		'@nuxtjs/sitemap',
		'magic-regexp/nuxt',
	],
})
