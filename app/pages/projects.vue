<script setup lang="ts">
import type { ProjectType } from '@/types'
import projects from '@/data/projects'

const title = 'Projects'
const description = 'Things that I created or collaborated on.'
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

const setBadgeColor = (type: ProjectType) => {
  if (type === 'open-source') {
    return 'neutral'
  }
  if (type === 'commercial') {
    return 'secondary'
  }
  if (type === 'personal') {
    return 'primary'
  }
  return 'neutral'
}

const setBadgeText = (type: ProjectType) => {
  if (type === 'open-source') {
    return 'Open Source'
  }
}
</script>

<template>
  <div class="space-y-12">
    <section>
      <AppTypography
        tag="h1"
        class="text-4xl sm:text-5xl font-medium tracking-tight font-dmsans"
      >
        <span class="text-royalblue-800 dark:text-royalblue-400">
          Delivering Aspirations,
        </span>
        <br>
        <span class="text-royalblue-800 dark:text-royalblue-400">
          Mentoring Individuals.
        </span>
      </AppTypography>
      <AppTypography
        variant="secondary"
        paragraph
        class="mt-4"
      >
        {{ description }}
      </AppTypography>
    </section>

    <div class="flex flex-wrap gap-2">
      <UButton
        :color="filter === 'all' ? 'primary' : 'neutral'"
        :variant="filter === 'all' ? 'solid' : 'soft'"
        @click="filter = 'all'"
      >
        All Projects
      </UButton>
      <UButton
        :color="filter === 'open-source' ? 'primary' : 'neutral'"
        :variant="filter === 'open-source' ? 'solid' : 'soft'"
        @click="filter = 'open-source'"
      >
        Open Source
      </UButton>
      <UButton
        :color="filter === 'commercial' ? 'primary' : 'neutral'"
        :variant="filter === 'commercial' ? 'solid' : 'soft'"
        @click="filter = 'commercial'"
      >
        Commercial
      </UButton>
      <UButton
        :color="filter === 'personal' ? 'primary' : 'neutral'"
        :variant="filter === 'personal' ? 'solid' : 'soft'"
        @click="filter = 'personal'"
      >
        Personal
      </UButton>
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
              <UBadge
                :color="setBadgeColor(item.type)"
                :label="setBadgeText(item.type)"
                variant="soft"
                class="uppercase rounded-full"
              />
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
