<script lang="ts" setup>
const route = useRoute()

const slug = route.params.article
if (!slug) navigateTo('/blog')

const path = computed(() =>
	route.path.replace(/(index)?\.json$/, '').replace(/\/$/, '')
)

const { data: post } = await useAsyncData(
	path.value,
	() =>
		((import.meta.server || import.meta.dev) as true) &&
		queryContent(path.value).where({ _path: route.path }).findOne()
)

if (!post.value) {
	throw createError({ statusCode: 404, fatal: true })
}

route.meta.title = post.value.title
</script>

<template>
	<NuxtLayout name="blog">
		<main v-if="post">
			<h1
				class="app-heading font-normal text-[2em] tracking-tight mt-10 mb-4 border-b-2 pb-2 border-zinc-200 dark:border-zinc-300"
			>
				{{ post.title }}
			</h1>
			<div>
				<AppTime :date="post.date" />
			</div>
			<section class="mt-4">
				<ContentRenderer :value="post" />
			</section>
		</main>
	</NuxtLayout>
</template>
