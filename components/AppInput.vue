<script lang="ts" setup>
const props = withDefaults(
	defineProps<{
		modelValue?: string | number
		error?: string
	}>(),
	{ modelValue: '', error: '' }
)

// events
const emit = defineEmits<{
	(e: 'update:modelValue', v: string | number): void
}>()

// computed
const errorClass = computed(() => {
	return { 'border border-red-300': props.error }
})

const isValid = computed(() => {
	return { 'border border-green-300': props.modelValue && !props.error }
})

const onInput = (e: Event) => {
	emit('update:modelValue', (e.target as HTMLInputElement).value)
}
</script>

<template>
	<input
		v-bind="$attrs"
		:aria-invalid="error ? true : false"
		:value="props.modelValue"
		:class="[errorClass, isValid]"
		class="shadow-sm mt-1 block w-full rounded-md border-0 text-sm text-zinc-500 ring-1 ring-zinc-900/10 transition hover:ring-zinc-900/20 dark:bg-white/5 dark:text-zinc-400 dark:ring-inset dark:ring-white/20 bg-zinc-900/7.5 dark:bg-white/7.5 focus:ring-1 focus:ring-inset focus:ring-zinc-900/10"
		@input="onInput($event)"
	/>
</template>
