<script setup lang="ts">
import badge from '@/ui.config/badge'

interface BadgePropsTypes {
  color?: keyof typeof badge.color
  variant?: keyof typeof badge.variant
  size?: keyof typeof badge.size
}
const props = withDefaults(defineProps<BadgePropsTypes>(), {
  color: 'primary',
  variant: 'flat',
  size: 'sm',
})
const badgeClasses = computed(() => {
  const color = badge.color?.[props.color]
  const variant = (color && color[props.variant as keyof typeof color])
    || badge.variant[props.variant]
  return [
    badge.base,
    badge.rounded,
    badge.font,
    badge.size[props.size],
    variant.replaceAll('{color}', props.color),
  ]
})
</script>

<template>
  <span :class="badgeClasses"><slot /></span>
</template>
