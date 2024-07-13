<script setup lang="ts">
const title = 'Bio'
const description = 'A little about me.'
useSeoMeta({
  title,
  description,
  ogDescription: description,
  ogTitle: title
})

const { data: bio } = await useAsyncData(
  'bio',
  () =>
    ((import.meta.server || import.meta.dev) as true)
    && queryContent('bio').findOne()
)

if (!bio.value) {
  throw createError({ statusCode: 404, statusMessage: 'Bio not found', fatal: true })
}
</script>

<template>
  <NoteIsland>
    <ContentRenderer :value="bio!" />
  </NoteIsland>
</template>
