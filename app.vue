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
			'flex h-full flex-col bg-zinc-100 text-zinc-700 dark:text-zinc-300 dark:bg-black',
	},
	htmlAttrs: {
		lang: 'en',
		class: 'font-firasans h-full antialiased',
	},
})
</script>
<template>
	<div>
		<NuxtLoadingIndicator />
		<NuxtPage />
	</div>
</template>
