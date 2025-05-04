<script setup lang="ts">
import projects from '@/data/projects'

const title = 'Projects'
const description = 'Things that I created or collaborated on trying to put my dent in the universe.'
useSeoMeta({
  title,
  description,
  ogDescription: description,
  ogTitle: title,
})

const filter = ref('all')
const filteredProjects = computed(() => {
  if (filter.value === 'all') {
    return projects
  }
  return projects.filter(project => project.type === filter.value)
})
</script>

<template>
  <div class="space-y-12 py-12">
    <section>
      <AppTypography
        tag="h1"
        class="text-4xl font-medium tracking-tight font-dmsans"
      >
        {{ title }}
      </AppTypography>
      <AppTypography
        variant="secondary"
        paragraph
        class="mt-2"
      >
        {{ description }}
      </AppTypography>
    </section>

    <div class="flex flex-wrap gap-2 justify-center">
      <button
        class="px-4 py-2 rounded-full transition-colors"
        :class="filter === 'all' ? 'bg-royalblue-500 text-white' : 'bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700'"
        @click="filter = 'all'"
      >
        All Projects
      </button>
      <button
        class="px-4 py-2 rounded-full transition-colors"
        :class="filter === 'open-source' ? 'bg-royalblue-500 text-white' : 'bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700'"
        @click="filter = 'open-source'"
      >
        Open Source
      </button>
      <button
        class="px-4 py-2 rounded-full transition-colors"
        :class="filter === 'commercial' ? 'bg-royalblue-500 text-white' : 'bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700'"
        @click="filter = 'commercial'"
      >
        Commercial
      </button>
      <button
        class="px-4 py-2 rounded-full transition-colors"
        :class="filter === 'personal' ? 'bg-royalblue-500 text-white' : 'bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700'"
        @click="filter = 'personal'"
      >
        Personal
      </button>
    </div>

    <section class="mx-auto max-w-5xl">
      <ul
        role="list"
        class="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 xl:gap-x-8"
      >
        <li
          v-for="(item, idx) in filteredProjects"
          :key="item.name"
          :style="{ '--enter-stage': idx + 1 }"
          slide-enter
          class="relative rounded-lg bg-white shadow-lg dark:bg-[#161617]"
        >
          <div class="group aspect-h-7 aspect-w-10 block w-full overflow-hidden rounded-t-lg focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-zinc-100">
            <img
              :src="item.imageUrl"
              alt=""
              class="pointer-events-none object-cover group-hover:opacity-75"
            >
            <NuxtLink
              :to="item.websiteUrl"
              target="_blank"
              class="absolute inset-0 focus:outline-none"
            >
              <span class="sr-only">View details for {{ item.name }}</span>
            </NuxtLink>
          </div>
          <div class="px-2 py-2">
            <div class="flex items-center justify-between">
              <AppTypography
                paragraph
                class="pointer-events-none block truncate text-lg font-medium"
              >
                {{ item.name }}
              </AppTypography>
              <span
                v-if="item.type"
                class="text-xs px-2 py-1 rounded-full"
                :class="{
                  'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200': item.type === 'open-source',
                  'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200': item.type === 'commercial',
                  'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200': item.type === 'personal',
                }"
              >
                {{ item.type }}
              </span>
            </div>
            <AppTypography
              paragraph
              variant="muted"
              class="pointer-events-none mt-1 line-clamp-2 block text-sm"
            >
              {{ item.description }}
            </AppTypography>
          </div>
        </li>
      </ul>
    </section>
  </div>
</template>
