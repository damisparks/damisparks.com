<script setup lang="ts">
defineProps<{ src: string, alt: string }>()
</script>

<template>
  <NuxtImg
    :src="src"
    :alt="alt"
    class="size-[168px] object-cover object-top max-w-[200px] max-h-[200px] rounded-md transform-3d hover:scale-105 hover:translate-z-0 transition-transform duration-600"
    width="200"
    height="200"
    loading="lazy"
  />
</template>
