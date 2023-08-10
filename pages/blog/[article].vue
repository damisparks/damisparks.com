<script lang="ts" setup>
const route = useRoute()
const { data: post } = useAsyncData(`content-${route.path}`, () => {
	return queryContent().where({ _path: route.path }).findOne()
})
</script>
<template>
	<NuxtLayout name="blog">
		<main>
			<ContentRenderer v-if="post" :value="post" />
		</main>
	</NuxtLayout>
</template>
