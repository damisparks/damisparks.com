<script setup lang="ts">
defineProps<{ date: string }>()
const { formdateDate } = useDate()
</script>

<template>
  <time
    :datetime="date"
    class="text-sm text-zinc-400 dark:text-zinc-400"
  >
    {{ formdateDate(date) }}
  </time>
</template>
