<script setup lang="ts">
const route = useRoute()
useHead({
  title: () => (route.meta.title as string) || '',
  titleTemplate: title =>
    title
      ? `${title} - Dami Sparks`
      : 'Dami Sparks - Freelance Full-Stack Developer, Mentor, Technical Writer and Fractional CTO',
  meta: [{ name: 'viewport', content: 'width=device-width, initial-scale=1' }],
  bodyAttrs: {
    class: 'flex h-full flex-col bg-white text-zinc-900 dark:text-zinc-300 dark:bg-black font-sans' },
  htmlAttrs: { lang: 'en', class: 'font-sans h-full antialiased' }
})

if (import.meta.server) {
  const PATH_RE = createRegExp(
    exactly(char.times.any().and(charNotIn('/')))
      .as('path')
      .and(exactly('/').optionally())
      .at.lineEnd()
  )

  const { path = '/' } = route.fullPath.match(PATH_RE)?.groups ?? {}
  const url = `https://damisparks.com${path}`

  useServerSeoMeta({
    ogUrl: url,
    ogTitle: (route.meta.title as string) || 'Dami Sparks',
    description: (route.meta.description as string)
    || 'The personal website of Dami Sparks - Freelance Full-Stack Developer, Fractional CTO, Mentor & Technical Writer.He founded Actif, an Age-tech SaaS startup and continues contributing to the European developer community.',
    ogDescription: (route.meta.description as string)
    || 'The personal website of Dami Sparks - Freelance Full-Stack Developer, Fractional CTO, Mentor & Technical Writer. He founded Actif, an Age-tech SaaS startup and continues contributing to the European developer community.',
    twitterCard: 'summary_large_image',
    twitterCreator: '@damisparks',
    twitterSite: '@damisparks'
  })
}
</script>

<template>
  <div id="app">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
