<script setup lang="ts">
defineProps<{ date: string }>()
</script>

<template>
  <time
    :datetime="date"
    class="text-sm text-zinc-400 dark:text-zinc-400"
  >
    {{ formdateDate(date) }}
  </time>
</template>
