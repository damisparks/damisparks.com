<script lang="ts" setup>
const props = withDefaults(
	defineProps<{
		modelValue?: string | null
		error?: string
	}>(),
	{ modelValue: null, error: '' }
)

// events
const emit = defineEmits<{
	(e: 'update:modelValue', v: string | number): void
}>()

// computed
const hasError = computed(() => props.error.toString().length > 0)
const filled = computed(
	() => props.modelValue != null && props.modelValue.toString().length > 0
)
const isEmptyMode = computed(() => !filled.value && !hasError.value)

const onInput = (e: Event) => {
	emit('update:modelValue', (e.target as HTMLInputElement).value)
}
</script>

<template>
	<input
		v-bind="$attrs"
		:aria-invalid="error ? true : false"
		:value="props.modelValue"
		:class="[
			{ 'ring-red-300': hasError },
			{ 'ring-green-300': filled },
			{ 'ring-zinc-900/10': isEmptyMode },
		]"
		class="shadow-sm block w-full border-0 rounded-md font-firasans text-sm text-zinc-500 ring-1 ring-zinc-900/10 transition hover:ring-zinc-900/20 dark:bg-white/5 dark:text-zinc-400 dark:ring-inset dark:ring-white/20 bg-zinc-900/7.5 dark:bg-white/7.5 focus:ring-1 focus:ring-inset focus:ring-zinc-900/10"
		@input="onInput"
	/>
</template>
