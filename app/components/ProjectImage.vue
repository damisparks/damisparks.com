<script setup lang="ts">
defineProps<{ src: string, alt: string }>()
</script>

<template>
  <div class="overflow-hidden rounded-lg bg-neutral-100">
    <NuxtImg
      :src="src"
      :alt="alt"
      class="object-cover aspect-10/7 transform-3d hover:scale-105 hover:translate-z-0 transition-transform duration-600"
      width="512"
      height="512"
      loading="lazy"
    />
  </div>
</template>
