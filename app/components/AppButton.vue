<script setup lang="ts">
import button from '@/ui.config/button'

type ButtonPropsTypes = {
  disabled?: boolean
  label?: string
  color?: keyof typeof button.color
  block?: boolean
  size?: keyof typeof button.size
  variant?: keyof typeof button.variant
  type?: 'button' | 'submit' | 'reset'
}

const props = withDefaults(defineProps<ButtonPropsTypes>(), {
  disabled: false,
  color: 'primary',
  block: false,
  size: 'md',
  variant: 'solid',
  type: 'submit',
  label: ''
})

const buttonClasses = computed(() => {
  const color = button.color[props.color]
  const variant = (color && color[props.variant]) || ''
  return [
    button.disabled,
    button.base,
    button.rounded,
    button.color[props.color],
    props.block ? button.block : button.inline,
    props.disabled ? button.disabled : '',
    button.size[props.size],
    variant
  ]
})
</script>

<template>
  <button
    :disabled="props.disabled"
    :aria-disabled="props.disabled"
    :class="buttonClasses"
    v-bind="$attrs"
    :type="props.type"
  >
    <slot>
      <span v-if="props.label">{{ props.label }}</span>
    </slot>
  </button>
</template>
