<script setup lang="ts">
definePageMeta({ title: 'Blog' })

const { data: entries } = useAsyncData('blogentries', () => {
	return queryContent('/blog').find()
})
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
		<div
			class="grid grid-cols-1 space-y-6 sm:space-y-0 sm:grid-cols-2 sm:gap-6 py-4"
		>
			<article v-for="{ path, title, date } in entries" :key="path">
				<div
					class="shadow-sm p-4 rounded bg-zinc-200/90 text-zinc-700 dark:text-zinc-300 dark:bg-zinc-700/90"
				>
					<span class="text-sm">
						<time :datetime="date" class="text-zinc-500">{{ date }}</time>
					</span>
					<p>{{ title }}</p>
				</div>
			</article>
		</div>
	</NuxtLayout>
</template>
