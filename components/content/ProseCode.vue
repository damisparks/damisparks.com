<script setup lang="ts">
import { useClipboard } from '@vueuse/core'
const { copy, copied, isSupported } = useClipboard()

withDefaults(
	defineProps<{
		code?: string
		language?: string | null
		filename?: string | null
		highlights?: number[]
		meta: string | null
	}>(),
	{ code: '', language: null, filename: null, highlights: () => [], meta: null }
)
</script>
<template>
	<div class="rounded border my-4 relative min-h-[1rem] overflow-hidden">
		<div
			class="flex flex-col items-end justify-center min-h-[1.5rem] bg-zinc-200 dark:bg-zinc-700"
		>
			<span v-if="isSupported" class="p-1">
				<small class="mr-2" :class="copied ? 'text-green-600' : ''">
					{{ copied ? 'Copied' : 'Copy' }}
				</small>
				<button role="button" @click="copy(code)">
					<Icon name="fluent:copy-20-regular" class="h-6 w-6 cursor-pointer" />
				</button>
			</span>
			<p v-else class="px-2 py-1 text-sm">
				Your browser does not support Clipboard API
			</p>
		</div>
		<hr class="h-px border-0 bg-zinc-200 dark:bg-zinc-300" />
		<div class="p-2 overflow-auto">
			<slot />
		</div>
	</div>
</template>

<style scoped>
code {
	font-family: 'Fira Code', monospace;
	white-space: pre-wrap;
}
</style>
