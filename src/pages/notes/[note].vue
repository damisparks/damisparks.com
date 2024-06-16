<script setup lang="ts">
import type Notes from '~/types/notes'

const route = useRoute()
const slug = route.params.note
if (!slug) navigateTo('/notes')

const path = computed(() =>
  route.path.replace(/(index)?\.json$/, '').replace(/\/$/, '')
)
const { data: note } = await useAsyncData(
  path.value,
  () =>
    ((import.meta.server || import.meta.dev) as true)
    && queryContent<Notes>(path.value).where({ _path: route.path }).findOne()
)

if (!note.value) {
  throw createError({ statusCode: 404, statusMessage: 'Note not found', fatal: true })
}

useSeoMeta({
  title: note.value.head?.title || note.value.title,
  description: note.value.head?.description || note.value.description
})

route.meta.title = note.value.title

const title = note.value.head?.title || note.value.title
const description = note.value.head?.description || note.value.description
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
  twitterCard: 'summary'
})

if (note.value.image) {
  defineOgImage({ url: note.value.image })
}
else {
  defineOgImageComponent('Note', {
    title: note.value.title,
    description: note.value.description }
  )
}
useHead({
  link: [
    {
      rel: 'icon',
      type: 'image/ico',
      href: '/favicon.ico'
    }
  ]
})
</script>

<template>
  <ContentRenderer :value="note!" />
</template>
