<script setup lang="ts">
import button from '@/ui.config/button'

type ButtonPropsTypes = {
	disabled?: boolean
	label?: string
	color?: keyof typeof button.color
}

const props = withDefaults(defineProps<ButtonPropsTypes>(), {
	disabled: false,
	color: 'primary',
})

const buttonClasses = computed(() => [
	button.disabled,
	button.color[props.color],
])
</script>

<template>
	<button :disabled="props.disabled" :class="buttonClasses">
		<slot>
			<span v-if="props.label">{{ props.label }}</span>
		</slot>
	</button>
</template>
