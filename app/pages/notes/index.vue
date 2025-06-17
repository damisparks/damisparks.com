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
      <div class="grid border-t border-zinc-200 dark:border-zinc-600 ">
        <Motion
          v-for="(note, index) in notes"
          :key="index"
          :initial="{ opacity: 0, transform: 'translateY(10px)' }"
          :while-in-view="{ opacity: 1, transform: 'translateY(0)' }"
          :transition="{ delay: 0.2 * index }"
          :in-view-options="{ once: true }"
          class="py-8 border-b border-zinc-200 dark:border-zinc-600"
        >
          <NoteCard>
            <template #content>
              <NoteBadge :label="note.tags[0] as NoteTag" class="mb-2" />
              <NuxtLink :to="note.path">
                <NoteTitle :label="note.title" />
                <AppTypography
                  variant="muted"
                  paragraph
                  class="mt-1"
                >
                  {{ note.description }}
                </AppTypography>
              </NuxtLink>
              <time
                :datetime="note.date"
                class="mt-2 text-sm text-zinc-500 dark:text-zinc-500 block"
              >
                {{ formatDateByLocale(note.date) }}
              </time>
            </template>
            <template #media>
              <NuxtLink :to="note.path">
                <NoteAvatar :src="note.image" :alt="note.title" />
              </NuxtLink>
            </template>
          </NoteCard>
        </Motion>
      </div>
    </section>
  </div>
</template>
