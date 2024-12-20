<script setup lang="ts">
const route = useRoute()

const description = (route.meta.description as string)
  || 'The personal website of Dami Sparks - JS/TS Engineer, Design System Engineer, Fractional CTO & Mentor. He founded Actif, an Age-tech SaaS startup and continues contributing to the European developer community.'
useHead({
  title: () => (route.meta.title as string) || '',
  titleTemplate: title =>
    title
      ? `${title} - Dami Sparks`
      : 'Dami Sparks - JS/TS Engineer, Design System Engineer, Fractional CTO & Mentor',
  meta: [{ name: 'viewport', content: 'width=device-width, initial-scale=1' }],
  bodyAttrs: {
    class: 'flex h-full flex-col bg-zinc-100 text-zinc-900 dark:text-zinc-300 dark:bg-black font-worksans font-normal',
  },
  htmlAttrs: { lang: 'en', class: 'font-worksans h-full antialiased' },
})

if (import.meta.server) {
  const PATH_RE = createRegExp(
    exactly(char.times.any().and(charNotIn('/')))
      .as('path')
      .and(exactly('/').optionally())
      .at.lineEnd(),
  )

  const { path = '/' } = route.fullPath.match(PATH_RE)?.groups ?? {}
  const url = `https://damisparks.com${path}`

  useServerSeoMeta({
    ogUrl: url,
    ogTitle: (route.meta.title as string) || 'Dami Sparks',
    description,
    ogDescription: description,
    twitterCard: 'summary_large_image',
    twitterCreator: '@damisparks',
    twitterSite: '@damisparks',
  })
}
</script>

<template>
  <div id="app">
    <!-- TODO :  Using <NuxtLayout> inside app.vue will cause unwanted layout shifting in your application. Consider removing <NuxtLayout> from app.vue and using it in your pages. -->
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
