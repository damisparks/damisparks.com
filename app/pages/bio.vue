<script setup lang="ts">
const { data: bio } = await useAsyncData(
  'bio',
  () =>
    ((import.meta.server || import.meta.dev) as true)
    && queryCollection('page').first(),
)

if (!bio.value) {
  throw createError({ statusCode: 404, statusMessage: 'Bio not found', fatal: true })
}

useSeoMeta({
  title: bio.value.title,
  description: bio.value.description,
  ogDescription: bio.value.description,
  ogTitle: bio.value.title,
})
</script>

<template>
  <NoteIsland>
    <ContentRenderer v-if="bio" :value="bio" />
  </NoteIsland>
</template>
