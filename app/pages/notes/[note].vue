<script setup lang="ts">
const route = useRoute()
const slug = route.params.note
if (!slug) {
  navigateTo('/notes')
}

const path = computed(() =>
  route.path.replace(/(index)?\.json$/, '').replace(/\/$/, ''),
)
const { data: note } = await useAsyncData(
  path.value,
  () =>
    ((import.meta.server || import.meta.dev) as true)
    && queryCollection('notes').path(path.value).first(),
)

if (!note.value) {
  throw createError({ statusCode: 404, statusMessage: 'Note not found', fatal: true })
}

const { title, description, image } = note.value

useSeoMeta({ title, description })

route.meta.title = note.value.title
useSeoMeta({
  titleTemplate: '%s · Sparks Notes',
  title,
  description,
  ogDescription: description,
  ogTitle: `${title} · Sparks Notes`,
  ogImage: '[og:image]',
  ogUrl: '[og:url]',
  twitterTitle: '[twitter:title]',
  twitterDescription: '[twitter:description]',
  twitterImage: '[twitter:image]',
  twitterCard: 'summary',
})

if (note.value.image) {
  defineOgImage({ url: image })
} else {
  defineOgImageComponent('Note', { title, description })
}
useHead({
  link: [
    {
      rel: 'icon',
      type: 'image/ico',
      href: '/favicon.ico',
    },
  ],
})
</script>

<template>
  <NoteIsland>
    <ContentRenderer v-if="note" :value="note" />
  </NoteIsland>
</template>
