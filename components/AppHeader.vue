<template>
	<div class="relative overflow-hidden">
		<header class="relative">
			<nav
				class="relative max-w-7xl mx-auto flex items-center justify-between"
				aria-label="Global"
			>
				<div class="flex items-center flex-1 py-4">
					<div class="px-5">
						<nuxt-link to="/" class="overflow-hidden">
							<span class="sr-only">I'm DamiSparks</span>
							<app-logo />
						</nuxt-link>
					</div>

					<div class="space-x-8 flex">
						<div v-for="{ name, url } in links" :key="name">
							<nuxt-link
								:to="{ name: url }"
								class="font-medium text-gray-700 hover:text-ds-teal"
							>
								{{ name }}
							</nuxt-link>
						</div>
					</div>
				</div>
			</nav>
		</header>
	</div>
</template>

<script>
import AppLogo from './AppLogo.vue'
export default {
	name: 'AppHeader',
	components: { AppLogo },
	data() {
		return {
			links: [
				{ name: 'Portfolio', url: 'projects' },
				{ name: 'About ', url: 'about' },
				{ name: 'Contact', url: 'contact' },
			],
		}
	},
}
</script>
