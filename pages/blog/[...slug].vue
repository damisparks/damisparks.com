<script lang="ts" setup>
const { path } = useRoute()
const { data: post } = useAsyncData(`content-${path}`, () => {
	return queryContent().where({ _path: path }).findOne()
})
</script>
<template>
	<NuxtLayout name="blog">
		<ContentRenderer v-if="post" :value="post" />
		{{ post }}
	</NuxtLayout>
</template>
