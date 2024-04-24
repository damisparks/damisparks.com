<script setup lang="ts">
definePageMeta({
	title: 'Blog',
	description: 'The articles I have written',
})

const { data: articles } = useAsyncData('articles', () => {
	return queryContent('/blog')
		.only(['title', 'date', '_path', 'cover', 'tags', 'description'])
		.find()
})
</script>
<template>
	<NuxtLayout name="blog">
		<div class="space-y-12 py-8">
			<div>
				<h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
					<span class="mr-2">📑</span>Articles
				</h2>
				<p class="mt-2 text-lg leading-8 text-gray-600">
					The articles I have written
				</p>
			</div>
			<div
				class="mt-10 space-y-16 border-t border-gray-200 pt-8 sm:mt-8 sm:pt-8"
			>
				<article v-for="article in articles" :key="article._path">
					<div class="flex items-center gap-x-4 text-xs">
						<AppTime :date="article.date" />
						<NuxtLink :to="article._path">
							<AppBadge
								variant="subtle"
								:color="article.tags[0] === 'personal' ? 'primary' : 'accent'"
							>
								{{ article.tags[0] }}
							</AppBadge>
						</NuxtLink>
					</div>
					<div class="group relative">
						<h3
							class="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600"
						>
							<NuxtLink :to="article._path">
								<span class="absolute inset-0" />
								{{ article.title }}
							</NuxtLink>
						</h3>
						<p class="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
							{{ article.description }}
						</p>
					</div>
				</article>
			</div>
		</div>
	</NuxtLayout>
</template>
