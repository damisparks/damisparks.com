<script setup lang="ts">
definePageMeta({ title: 'Blog' })

const { data: entries } = useAsyncData('blogentries', () => {
	return queryContent('/blog').only(['title', 'date', '_path']).find()
})

const computedDate = (date: string) => {
	if (!date) return
	const d = new Date(date)
	return d.toLocaleDateString('en-US', {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	})
}
</script>
<template>
	<NuxtLayout name="blog">
		<header class="relative">
			<div class="absolute inset-0 flex items-center" aria-hidden="true">
				<div class="w-full border-t border-zinc-300" />
			</div>
			<div class="relative flex justify-center">
				<h1
					class="app-heading bg-zinc-100 dark:text-zinc-300 dark:bg-black px-3 font-light text-xl md:text-2xl"
				>
					Articles
				</h1>
			</div>
		</header>
		<!-- <pre>{{ entries }}</pre> -->
		<section
			class="grid grid-cols-1 space-y-6 sm:space-y-0 sm:grid-cols-2 sm:gap-6 py-4"
		>
			<NuxtLink
				v-for="{ _path, title, date } in entries"
				:key="_path"
				:to="_path"
				:title="title"
				class="shadow-sm p-4 rounded bg-zinc-200/90 text-zinc-700 dark:text-zinc-300 dark:bg-zinc-700/90 space-y-1"
			>
				<article>
					<span class="text-sm">
						<time :datetime="date" class="text-zinc-500">
							{{ computedDate(date) }}
						</time>
					</span>
					<p>{{ title }}</p>
				</article>
			</NuxtLink>
		</section>
	</NuxtLayout>
</template>
