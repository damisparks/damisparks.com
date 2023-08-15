<script lang="ts" setup>
const route = useRoute()
const { data: post } = useAsyncData(`content-${route.path}`, () => {
	return queryContent().where({ _path: route.path }).findOne()
})
route.meta.title = post.value?.title
</script>
<template>
	<NuxtLayout name="blog">
		<main>
			<h1
				class="app-heading bg-zinc-100 dark:text-zinc-300 dark:bg-black font-normal text-xl md:text-2xl"
			>
				{{ post?.title }}
			</h1>
			<div>
				<AppTime :date="post?.date" />
			</div>
			<section class="mt-4">
				<ContentRenderer v-if="post" :value="post" />
			</section>
		</main>
	</NuxtLayout>
</template>
