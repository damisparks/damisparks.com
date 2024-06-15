<script setup lang="ts">
import { formatDateByLocale } from '@/utils'
const { notes, fetchNotes } = useNote()

const title = 'The Sparks Notes'
const description = 'My notes, articles, quick reads, book summaries including personal reflections and thoughts.'
useSeoMeta({
  title,
  description,
  ogDescription: description,
  ogTitle: title
})

await fetchNotes()
</script>
<template>
  <div
    class="space-y-12 py-8"
  >
    <div>
      <AppTypography
        tag="h1"
        class="text-3xl font-medium tracking-tight sm:text-4xl"
      >
        <Icon
          name="fluent:notepad-24-regular"
          class="mr-2"
        />
        <span>The Sparks Notes</span>
      </AppTypography>
      <AppTypography
        class="mt-2 text-lg leading-8"
        variant="secondary"
      >
        {{ description }}
      </AppTypography>
    </div>

    <DSGrid>
      <DsStoryCard
        v-for="(note, index) in notes"
        :key="index"
        :to="note._path || ''"
        :title="note.title || ''"
        :description="note.description || ''"
      >
        <template #header>
          <NuxtImg
            :src="note.image"
            :alt="note.title || ''"
            :loading="index === 0 ? 'eager' : 'lazy'"
            class="object-cover object-top w-full h-full"
            width="384"
            height="192"
          />
        </template>
        <template #footer>
          <AppTypography
            tag="span"
            variant="muted"
            class="text-sm"
          >
            <time>{{ formatDateByLocale(note.date,'en') }} </time>
          </AppTypography>
        </template>
      </DsStoryCard>
    </DSGrid>
  </div>
</template>
