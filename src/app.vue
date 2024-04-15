<script setup lang="ts">
const route = useRoute()
useHead({
	title: () => (route.meta.title as string) || '',
	titleTemplate: title =>
		title
			? `${title} - Dami Sparks`
			: 'Dami Sparks - Freelance Full-Stack Developer, Mentor, Technical Writer and Fractional CTO',
	bodyAttrs: {
		class:
			'flex h-full flex-col font-firasans bg-background dark:bg-background-dark text-color dark:text-color-dark-default',
	},
	htmlAttrs: {
		lang: 'en',
		class: 'font-firasans h-full antialiased',
	},
})
</script>
<template>
	<div id="app">
		<NuxtLayout>
			<NuxtPage />
		</NuxtLayout>
	</div>
</template>
