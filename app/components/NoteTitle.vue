<script setup lang="ts">
defineProps<{ label: string }>()
</script>

<template>
  <AppTypography
    tag="h4"
    class="font-medium text-lg hover:underline"
  >
    {{ label }}
  </AppTypography>
</template>
