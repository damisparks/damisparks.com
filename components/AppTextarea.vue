<script setup lang="ts">
const props = defineProps<{
	modelValue?: string | string[]
	error?: string
}>()

const emit = defineEmits<{
	(e: 'update:modelValue', v: string | string[] | number): void
}>()

const hasError = computed(
	() => props.error !== undefined && props.error.toString().length > 0
)
const filled = computed(
	() => props.modelValue !== undefined && props.modelValue.toString().length > 0
)

const onInput = (e: Event) => {
	emit('update:modelValue', (e.target as HTMLInputElement).value)
}

const isEmptyMode = computed(() => !filled.value && !hasError.value)
</script>
<template>
	<textarea
		:aria-invalid="error ? true : false"
		:value="props.modelValue"
		:class="[
			{ 'ring-green-300': filled },
			{ 'ring-red-300': hasError },
			{ 'ring-zinc-900/10': isEmptyMode }
		]"
		class="shadow-sm block w-full border-0 rounded-md text-sm text-zinc-500 ring-1 transition hover:ring-zinc-900/20 dark:bg-white/5 dark:text-zinc-400 dark:ring-inset dark:ring-white/20 bg-zinc-900/7.5 dark:bg-white/7.5 focus:ring-1 focus:ring-inset focus:ring-zinc-900/10"
		@input="onInput"
	></textarea>
</template>

<!-- ring-zinc-900/10 -->
