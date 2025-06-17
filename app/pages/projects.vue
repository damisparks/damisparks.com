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
  switch (type) {
    case 'open-source':
      return 'neutral'
    case 'commercial':
      return 'secondary'
    case 'personal':
      return 'primary'
    default:
      return 'neutral'
  }
}

const setBadgeText = (type: ProjectType) => {
  switch (type) {
    case 'open-source':
      return 'Open Source'
    case 'commercial':
      return 'Commercial'
    case 'personal':
      return 'Personal'
    default:
      return 'Unknown'
  }
}
</script>

<template>
  <div class="space-y-12">
    <section>
      <AppTypography
        tag="h1"
        class="text-4xl sm:text-5xl font-medium tracking-tight font-dmsans text-pretty"
      >
        <AppTitle label="Delivering Aspirations," />
        <br>
        <AppTitle label="Mentoring Individuals." />
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

    <section class="mx-auto max-w-5xl mt-12">
      <ul role="list" class="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 xl:gap-x-8">
        <Motion
          v-for="(item, index) in filteredProjects"
          :key="item.name"
          class="relative"
          :initial="{ opacity: 0, transform: 'translateY(10px)' }"
          :while-in-view="{ opacity: 1, transform: 'translateY(0)' }"
          :transition="{ delay: 0.2 * index }"
          :in-view-options="{ once: true }"
        >
          <NuxtLink
            :to="item.websiteUrl"
            target="_blank"
            class="block"
          >
            <ProjectImage
              :src="item.imageUrl"
              :alt="item.name"
            />
            <ProjectDetails
              :label="item.name"
              :description="item.description"
            />
          </NuxtLink>
          <UBadge
            class="mt-2"
            :color="setBadgeColor(item.type)"
            :label="setBadgeText(item.type)"
            variant="soft"
          />
        </Motion>
      </ul>
    </section>
  </div>
</template>
