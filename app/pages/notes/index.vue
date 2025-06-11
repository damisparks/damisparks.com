<script setup lang="ts">
import type { NoteTag } from '@/types'

const title = 'The Sparks Notes'
const description = 'My thoughts on topics close to my heart.'
useSeoMeta({
  title,
  description,
  ogDescription: description,
  ogTitle: title,
})
defineOgImageComponent('Note')

const notes = await queryCollection('notes')
  .select('title', 'description', 'image', 'date', 'path', 'tags')
  .all()
  .then((res) => {
    return res.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  })
</script>

<template>
  <div
    class="space-y-12"
  >
    <div class="mx-auto max-w-2xl lg:mx-0">
      <AppTypography
        paragraph
        class="text-4xl font-medium tracking-tight font-dmsans text-pretty"
      >
        <AppTitle label="The Sparks Notes" />
      </AppTypography>
      <AppTypography
        variant="secondary"
        paragraph
        class="mt-2"
      >
        {{ description }}
      </AppTypography>
    </div>

    <section>
      <div class="grid border-t border-zinc-200 dark:border-zinc-500">
        <div
          v-for="(note, index) in notes"
          :key="index"
          class="py-8 border-b border-zinc-200 dark:border-zinc-500"
        >
          <NoteCard
            :label="note.tags[0] as NoteTag"
            :title="note.title"
            :description="note.description"
            :to="note.path"
          >
            <template #media>
              <NuxtLink :to="note.path">
                <NoteAvatar :src="note.image" :alt="note.title" />
              </NuxtLink>
            </template>
          </NoteCard>
        </div>
      </div>
    </section>
  </div>
</template>
