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
				class="app-heading font-normal text-[2em] tracking-tight mt-10 mb-4 border-b-2 pb-2 border-zinc-200 dark:border-zinc-300"
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
