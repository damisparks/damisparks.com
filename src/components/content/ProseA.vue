<script setup lang="ts">
defineProps({
  href: {
    type: String,
    default: '',
  },
  target: {
    type: String,
    default: undefined,
    required: false,
  },
})
</script>
<template>
  <NuxtLink
    :href="href"
    :target="target"
    class="hover:underline text-color font-sans font-medium dark:text-white"
  >
    <slot />
  </NuxtLink>
</template>
