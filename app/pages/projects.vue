<script setup lang="ts">
import { all } from '@/data/projects'

const title = 'Projects'
const description = 'Things that I created or collaborated on trying to put my dent in the universe.'
useSeoMeta({
  title,
  description,
  ogDescription: description,
  ogTitle: title
})
</script>

<template>
  <div class="space-y-12 py-12">
    <section class="text-center">
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
      <ul
        role="list"
        class="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 xl:gap-x-8"
      >
        <li
          v-for="(item, idx) in all"
          :key="item.name"
          :style="{ '--enter-stage': idx + 1 }"
          slide-enter
          class="relative shadow-lg rounded-lg p-2"
        >
          <div class="group aspect-h-7 aspect-w-10 block w-full overflow-hidden rounded-lg bg-zinc-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-zinc-100">
            <img
              :src="item.imageUrl"
              alt=""
              class="pointer-events-none object-cover group-hover:opacity-75"
            >
            <button
              type="button"
              class="absolute inset-0 focus:outline-none"
            >
              <span class="sr-only">View details for {{ item.name }}</span>
            </button>
          </div>
          <AppTypography
            paragraph
            class="pointer-events-none mt-2 block truncate text-sm font-medium"
          >
            {{ item.name }}
          </AppTypography>
          <AppTypography
            paragraph
            variant="muted"
            class="pointer-events-none block text-sm font-medium"
          >
            {{ item.description }}
          </AppTypography>
        </li>
      </ul>
    </section>
  </div>
</template>
