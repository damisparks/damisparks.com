<template>
	<main class="flex flex-col h-screen">
		<div class="flex-auto">
			<div>
				<app-header />
			</div>
			<Nuxt class="nuxt" />
		</div>
		<app-footer />
	</main>
</template>

<script>
import AppFooter from '~/components/AppFooter.vue'
import AppHeader from '~/components/AppHeader.vue'
export default {
	name: 'DefaultLayout',
	components: { AppFooter, AppHeader },
}
</script>

<style>
html {
	font-family: 'Open Sans', Poppins, sans-serif;
	-moz-osx-font-smoothing: grayscale;
	-webkit-font-smoothing: antialiased;
	box-sizing: border-box;
}

*,
*::before,
*::after {
	box-sizing: border-box;
	margin: 0;
}

.nuxt {
	transition: all 0.3s cubic-bezier(0.55, 0, 0.1, 1);
}
</style>
