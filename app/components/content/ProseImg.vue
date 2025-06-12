<script setup lang="ts">
import { computed, useRuntimeConfig } from '#imports'
import { withBase } from 'ufo'

const props = withDefaults(
  defineProps<{
    src?: string
    alt?: string
    width?: string | number
    height?: string | number
  }>(),
  { src: '', alt: '', width: undefined, height: undefined },
)

const refinedSrc = computed(() => {
  if (props.src?.startsWith('/') && !props.src.startsWith('//')) {
    return withBase(props.src, useRuntimeConfig().app.baseURL)
  }
  return props.src
})
</script>

<template>
  <div class="group block text-clip rounded-[10px]">
    <img
      :src="refinedSrc"
      :alt="alt"
      :width="width"
      :height="height"
      class="pointer-events-none size-full rounded-md object-cover shadow group-hover:opacity-75"
    >
  </div>
</template>
