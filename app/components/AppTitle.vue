<script setup lang="ts">
const props = defineProps<{ label: string }>()
</script>

<template>
  <span class="text-royalblue-800 dark:text-royalblue-400">
    {{ props.label }}
  </span>
</template>
