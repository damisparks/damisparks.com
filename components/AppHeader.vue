<template>
	<div class="relative overflow-hidden border">
		<header class="relative">
			<nav
				class="relative max-w-7xl mx-auto flex items-center justify-between"
				aria-label="Global"
			>
				<div class="flex items-center flex-1 py-4">
					<div class="px-5">
						<nuxt-link to="/">
							<span class="sr-only">DamiSparks</span>
							<h1 class="p-2 rounded bg-ds-secondary">
								<span class="text-ds-primary font-light">Dami</span
								><span class="text-ds-primary font-medium">Sparks</span>
							</h1>
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
export default {
	name: 'AppHeader',
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
