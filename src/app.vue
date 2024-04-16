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
			'flex h-full flex-col font-firasans bg-gray-100 text-gray-700 dark:text-gray-300 dark:bg-black',
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
