<script setup lang="ts">
import typography from '~/config/typography'

type TypographyTagType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span'
interface TypographyPropsType {
  tag?: TypographyTagType
  paragraph?: boolean
  variant?: keyof typeof typography.variants
}

const props = withDefaults(defineProps<TypographyPropsType>(), {
  tag: 'span',
  paragraph: false,
  variant: 'default',
})

const typographyVariant = computed(() => typography.variants[props.variant])
const tag = computed(() => props.paragraph ? 'p' : props.tag)
</script>

<template>
  <component
    :is="tag"
    :class="typographyVariant"
  >
    <slot />
  </component>
</template>
