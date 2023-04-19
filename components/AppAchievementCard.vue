<script setup lang="ts">
import { IAchievement } from '@/types'
defineProps<{ achievement: IAchievement }>()
</script>

<template>
	<div class="w-full flex flex-col sm:max-w-sm">
		<div
			class="bg-white dark:bg-zinc-700 rounded-lg shadow-lg overflow-hidden flex-1 flex flex-col"
		>
			<div
				class="bg-blend-multiply bg-cover h-48 bg-ds-blue/10 dark:bg-ds-blue-accent-100"
				style="
					background-image: url(https://s3-us-west-2.amazonaws.com/udacity-printer/production/certificates/0e4e7509-edd9-44f2-b066-d8242a3fa1c6.svg);
				"
			></div>
			<div class="p-4 flex-1 flex flex-col">
				<NuxtLink
					:to="achievement.url"
					class="mb-4 text-2xl text-ds-blue dark:text-zinc-100 hover:underline"
				>
					{{ achievement.name }}
				</NuxtLink>
				<div
					class="mb-4 text-sm flex-1 leading-tight text-zinc-600 dark:text-zinc-400 sm:line-clamp-3"
				>
					<p>{{ achievement.description }}</p>
				</div>
				<a
					class="border-t border-zinc-300 font-firasans pt-2 text-xs uppercase no-underline tracking-wide"
				>
					Udacity
				</a>
			</div>
		</div>
	</div>
</template>
