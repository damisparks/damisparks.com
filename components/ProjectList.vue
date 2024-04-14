<script setup lang="ts">
import type { IPortfolioItem } from '@/types'

defineProps<{ projects: IPortfolioItem[] }>()
</script>

<template>
	<div v-for="project in projects" :key="project.id" class="space-y-1">
		<h1 class="text-ds-blue dark:text-ds-teal text-xl font-semibold">
			{{ project.name }}
		</h1>
		<p class="text-zinc-500 dark:text-ds-smokewhite">
			{{ project.description }}
		</p>
		<NuxtLink
			:to="project.websiteUrl"
			class="block hover:underline text-zinc-600 dark:text-zinc-400 hover:dark:text-ds-orange-darker hover:text-ds-teal"
		>
			<Icon
				v-if="project.type !== 'open-source'"
				name="heroicons:link-20-solid"
				class="h-5 w-5 mr-2"
			/>
			<Icon v-else name="uil:github-alt" class="h-5 w-5 mr-2" />
			<span><i>Check it out</i></span>
		</NuxtLink>
	</div>
</template>
