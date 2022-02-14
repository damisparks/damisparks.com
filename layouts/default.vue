<template>
	<main class="flex flex-col h-screen">
		<app-header />
		<div class="flex-auto border">
			<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<Nuxt />
			</div>
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

* {
	border: 1px solid blue;
}
</style>
