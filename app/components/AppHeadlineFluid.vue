<script setup lang="ts">
type FluidHeadlineTags = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
withDefaults(defineProps<{ tag?: FluidHeadlineTags }>(), { tag: 'h3' })
</script>

<template>
  <component
    :is="tag"
    class="font-notosans text-[5vw] leading-[1.2em] tracking-[-.5px] sm:text-[3vw] lg:text-[28px] lg:leading-[36px]"
  >
    <slot />
  </component>
</template>
