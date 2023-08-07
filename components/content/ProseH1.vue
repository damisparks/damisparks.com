<script setup lang="ts">
import { useRuntimeConfig } from '#imports'
defineProps<{ id?: string }>()
const heading = 1
const { anchorLinks } = useRuntimeConfig().public.content
const generate =
	anchorLinks?.depth >= heading && !anchorLinks?.exclude.includes(heading)
</script>
<template>
	<h1
		:id="id"
		class="app-heading bg-zinc-100 dark:text-zinc-300 dark:bg-black font-light text-xl md:text-2xl mb-4"
	>
		<a v-if="id && generate" :href="`#${id}`">
			<slot />
		</a>
		<slot v-else />
	</h1>
</template>
