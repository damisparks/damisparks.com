<script setup lang="ts">
const route = useRoute()

const slug = route.params.article
if (!slug) navigateTo('/blog')

const path = computed(() =>
  route.path.replace(/(index)?\.json$/, '').replace(/\/$/, ''),
)
const { data: post } = await useAsyncData(
  path.value,
  () =>
    ((import.meta.server || import.meta.dev) as true)
    && queryContent(path.value).where({ _path: route.path }).findOne(),
)

if (!post.value) {
  throw createError({ statusCode: 404, fatal: true })
}

route.meta.title = post.value.title
</script>
<template>
  <ContentRenderer :value="post!" />
</template>
