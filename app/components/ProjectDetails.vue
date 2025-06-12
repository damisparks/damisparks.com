<script setup lang="ts">
defineProps<{ label: string, description: string }>()
</script>

<template>
  <div class="mt-2">
    <AppTypography class="pointer-events-none block truncate text-sm font-medium">
      {{ label }}
    </AppTypography>
    <AppTypography class="pointer-events-none block text-sm font-medium" variant="muted">
      {{ description }}
    </AppTypography>
  </div>
</template>
