<script setup lang="ts">
type FluidHeadlineTags = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
withDefaults(defineProps<{ tag?: FluidHeadlineTags }>(), { tag: 'h3' })
</script>

<template>
  <component
    :is="tag"
    class="font-montserrat text-[5vw] sm:text-[3vw] font-normal tracking-[-.5px] leading-[1.2em] lg:text-[28px] lg:leading-[36px]"
  >
    <slot />
  </component>
</template>
