<script setup lang="ts">
import button from '@/ui.config/button'

type ButtonPropsTypes = {
	disabled?: boolean
	label?: string
}

const props = withDefaults(defineProps<ButtonPropsTypes>(), {
	disabled: false,
})

const buttonClasses = computed(() => {
	return button.disabled
})
</script>

<template>
	<button :disabled="props.disabled" :class="buttonClasses">
		<slot>
			<span v-if="props.label">{{ props.label }}</span>
		</slot>
	</button>
</template>
