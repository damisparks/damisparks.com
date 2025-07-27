<script setup lang="ts">
import type { BadgeProps } from '@nuxt/ui'
import type { NoteTag } from '@/types'

type NoteTagColor = BadgeProps['color']

const props = defineProps<{ label: NoteTag }>()

const setNoteTagColor = (label: NoteTag): NoteTagColor => {
  switch (label) {
    case 'cloud':
      return 'info'
    case 'typescript':
      return 'secondary'
    case 'vue':
      return 'success'
    case 'nuxt':
      return 'secondary'
    case 'personal':
      return 'primary'
    case 'books':
      return 'error'
  }
}
</script>

<template>
  <UBadge
    :color="setNoteTagColor(props.label)"
    :label="`#${props.label}`"
    variant="soft"
    class="uppercase font-semibold"
  />
</template>
