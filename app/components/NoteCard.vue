<script setup lang="ts">
import type { NoteTag } from '@/types'

defineProps<{ title: string, description: string, label: NoteTag, to: string }>()
</script>

<template>
  <div class="flex">
    <div class="mr-4 shrink-0">
      <slot name="media" />
    </div>
    <div>
      <NoteBadge :label="label" class="mb-2" />
      <NuxtLink :to="to">
        <AppTypography
          tag="h4"
          class="font-medium text-lg hover:underline"
        >
          {{ title }}
        </AppTypography>
      </NuxtLink>
      <AppTypography
        variant="muted"
        paragraph
        class="mt-1"
      >
        {{ description }}
      </AppTypography>
    </div>
  </div>
</template>
