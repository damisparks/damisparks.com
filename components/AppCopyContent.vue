<script setup lang="ts">
import { useClipboard } from '@vueuse/core'

const { copy, copied, isSupported } = useClipboard()
defineProps<{ content: string }>()
const toggleIcon = computed(() =>
	copied.value
		? 'fluent:clipboard-checkmark-20-regular'
		: 'fluent:clipboard-20-regular'
)
</script>

<template>
	<span v-if="isSupported" class="p-1">
		<button role="button" title="Copy" @click="copy(content)">
			<small class="mr-2" :class="copied ? 'text-green-600' : ''">
				{{ copied ? 'Copied' : 'Copy' }}
			</small>
			<Icon
				:name="toggleIcon"
				class="h-6 w-6 cursor-pointer"
				:class="copied ? 'text-green-600' : ''"
			/>
		</button>
	</span>
	<p v-else class="px-2 py-1 text-sm">
		Your browser does not support Clipboard API
	</p>
</template>
