<script setup lang="ts">
import { all } from '@/data/projects'

const title = ref('Projects')
const description = ref('Things that I created or collaborated on trying to put my dent in the universe.')
useSeoMeta({
  title,
  description,
  ogDescription: description,
  ogTitle: title
})
</script>

<template>
  <div class="space-y-12 py-8">
    <section class=" text-center">
      <AppTypography
        tag="h1"
        class="text-3xl font-medium tracking-tight sm:text-4xl"
      >
        <span>{{ title }}</span>
      </AppTypography>
      <AppTypography
        variant="secondary"
        paragraph
        class="mt-2 text-lg leading-8"
      >
        {{ description }}
      </AppTypography>
    </section>
    <section class="max-w-5xl mx-auto">
      <div
        v-for="(key, keyIdx) in Object.keys(all)"
        :key="key"
        :style="{ '--enter-stage': keyIdx + 1 }"
        slide-enter
        class="space-y-8"
      >
        <div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <NuxtLink
            v-for="item in all[key]"
            :key="item.name"
            class="p-4 rounded-lg hover:bg-primary-50 dark:hover:bg-primary-500/40 col-span-1"
            :to="item.websiteUrl"
            target="_blank"
            external
          >
            <div
              class="font-montserrat font-medium leading-7 lg:leading-8 lg:text-xl"
            >
              {{ item.name }}
            </div>
            <div
              class="text-sm font-normal leading-6 text-zinc-400 dark:text-zinc-400"
            >
              {{ item.description }}
            </div>
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>
