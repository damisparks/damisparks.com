<script setup lang="ts">
const route = useRoute()
const colorMode = useColorMode()
const color = computed(() => colorMode.value === 'dark' ? '#020618' : 'white')

const description = (route.meta.description as string)
  || 'The personal website of Dami Sparks - JS/TS Software Engineer, Design Engineer & Mentor. He founded Actif, an Age-tech SaaS startup and continues contributing to the European developer community.'

useHead({
  title: () => (route.meta.title as string) || '',
  titleTemplate: title =>
    title
      ? `${title} - Dami Sparks`
      : 'Dami Sparks - JS/TS Software Engineer, Design Engineer & Mentor',
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'theme-color', content: color },
  ],
  bodyAttrs: {
    class: 'flex h-full flex-col bg-zinc-100 text-zinc-900 dark:text-zinc-300 dark:bg-black font-notosans font-normal',
  },

  link: [{ rel: 'icon', href: '/favicon.ico' }],
  htmlAttrs: { lang: 'en', class: 'font-notosans h-full antialiased' },
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

  useSeoMeta({
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
  <UApp>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>
