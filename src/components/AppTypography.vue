<script setup lang="ts">
import typography from '@/ui.config/typography'

type TypographyTagType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span'
type TypographyPropsType = {
  tag?: TypographyTagType
  muted?: boolean
  paragraph?: boolean
}

const props = withDefaults(defineProps<TypographyPropsType>(), {
  tag: 'span',
  muted: false,
  paragraph: false
})

const typographyClass = computed(() => [
  props.muted ? typography.muted : ''
])
const tag = computed(() => props.paragraph ? 'p' : props.tag)

</script>
<template>
  <component
    :is="tag"
    :class="typographyClass"
  >
    <slot />
  </component>
</template>
