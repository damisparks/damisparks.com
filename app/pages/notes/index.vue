<script setup lang="ts">
const title = 'The Sparks Notes'
const description = 'Notes, articles, quick reads, book summaries, and personal reflections on topics close to my heart.'
useSeoMeta({
  title,
  description,
  ogDescription: description,
  ogTitle: title,
})
defineOgImageComponent('Note')

const notes = await queryCollection('notes')
  .select('title', 'description', 'image', 'date', 'path')
  .all()
  .then((res) => {
    return res.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  })
</script>

<template>
  <div
    class="space-y-12 py-12"
  >
    <div>
      <AppTypography
        tag="h1"
        class="text-4xl font-medium tracking-tight font-dmsans"
      >
        <span>The Sparks Notes</span>
      </AppTypography>
      <AppTypography
        variant="secondary"
        paragraph
        class="mt-2"
      >
        {{ description }}
      </AppTypography>
    </div>

    <ResponsiveGrid>
      <DSNoteCard
        v-for="({ path, title, image, date }, index) in notes"
        :key="index"
        :to="path"
        :title="title"
        :description="description"
      >
        <template #header>
          <NuxtImg
            :src="image"
            :alt="title"
            :loading="index === 0 ? 'eager' : 'lazy'"
            class="size-full object-cover object-top"
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
            <time>{{ formatDateByLocale(date, 'en') }} </time>
          </AppTypography>
        </template>
      </DSNoteCard>
    </ResponsiveGrid>
  </div>
</template>
