<script setup lang="ts">
const { capitalizeWords } = useMe()
const cookiePolicy = reactive({
	name: 'cookie policy',
	content: `Stay informed about Dami Sparks' cookie policy. Learn about the cookies, web beacons, tracking pixels, and other tracking technologies used on the website and how to manage your preferences.`
})

useHead({
	title: capitalizeWords(cookiePolicy.name),
	meta: [
		{ key: 'description', name: 'description', content: cookiePolicy.content }
	],
	link: [
		{
			key: 'canonical',
			rel: 'canonical',
			href: `https://damisparks.com/cookie-policy`
		}
	]
})
</script>
<template>
	<NuxtLayout>
		<AppPageHeader>
			<AppTitle>{{ capitalizeWords(cookiePolicy.name) }}</AppTitle>
		</AppPageHeader>
	</NuxtLayout>
</template>
