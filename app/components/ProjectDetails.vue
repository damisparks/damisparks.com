<script setup lang="ts">
defineProps<{ label: string, description: string }>()
</script>

<template>
  <div class="mt-2">
    <AppTypography class="block truncate text-sm font-medium hover:underline">
      {{ label }}
    </AppTypography>
    <AppTypography class="pointer-events-none block text-sm font-medium" variant="muted">
      {{ description }}
    </AppTypography>
  </div>
</template>
