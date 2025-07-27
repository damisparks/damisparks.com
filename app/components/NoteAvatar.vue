<script setup lang="ts">
defineProps<{ src: string, alt: string }>()
</script>

<template>
  <div class="overflow-hidden rounded-lg bg-neutral-100">
    <NuxtImg
      :src="src"
      :alt="alt"
      class="w-full h-full aspect-10/7 sm:size-[168px] object-cover sm:max-w-[250px] max-h-[250px] rounded-lg transform-3d hover:scale-105 hover:translate-z-0 transition-transform duration-600 ease-in-out"
      width="512"
      height="512"
      loading="lazy"
    />
  </div>
</template>
