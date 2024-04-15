<script setup lang="ts">
definePageMeta({
	title: 'Blog',
	description: 'Articles I have written',
})

const { data: articles } = useAsyncData('articles', () => {
	return queryContent('/blog')
		.only(['title', 'date', '_path', 'cover', 'tags'])
		.find()
})
</script>
<template>
	<div class="space-y-12">
		<header>
			<AppTopBlurb>
				<AppBlurb>
					<p>Articles I have written</p>
				</AppBlurb>
			</AppTopBlurb>
		</header>
		<section>
			<ul
				role="list"
				class="grid grid-cols gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8"
			>
				<li v-for="article in articles" :key="article.title" class="relative">
					<div
						class="group aspect-h-7 aspect-w-10 shadow block w-full overflow-hidden rounded-lg bg-background focus-within:ring-2 focus-within:ring-divider focus-within:ring-offset-2 focus-within:ring-offset-divider"
					>
						<NuxtImg
							:src="article.cover"
							:alt="article.title"
							class="pointer-events-none object-cover group-hover:opacity-75"
						/>
						<NuxtLink
							:key="article._path"
							:to="article._path"
							:title="article.title"
						>
							<span class="sr-only">View details for {{ article.title }}</span>
						</NuxtLink>
					</div>

					<AppBadge
						class="mt-2"
						:color="article.tags[0] === 'personal' ? 'primary' : 'accent'"
					>
						<span class="uppercase">{{ article.tags[0] }}</span>
					</AppBadge>
					<p
						class="pointer-events-none font-montserrat mt-2 block text-sm font-medium text-color dark:text-color-dark"
					>
						{{ article.title }}
					</p>
					<AppTime
						:date="article.date"
						class="pointer-events-none font-medium"
					/>
				</li>
			</ul>
		</section>
	</div>
</template>
