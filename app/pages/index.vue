<script setup lang="ts">
import { socials } from '@/data/navigation'
import projects from '@/data/projects'

const galleryImages = projects.slice(0, 7).map(project => ({ src: project.imageUrl, alt: project.name }))
</script>

<template>
  <div class="slide-enter">
    <section class="max-w-4xl space-y-8 mx-auto">
      <Motion
        :initial="{
          scale: 1.1,
          opacity: 0,
          filter: 'blur(20px)',
        }"
        :animate="{
          scale: 1,
          opacity: 1,
          filter: 'blur(0px)',
        }"
        :transition="{
          duration: 0.6,
          delay: 0.1,
        }"
      >
        <AppTypography class="text-4xl font-medium tracking-tight sm:text-5xl lg:text-6xl font-dmsans text-center text-pretty" tag="h1">
          <AppTitle label="Software engineer, design engineer, founder and mentor." />
        </AppTypography>
      </Motion>
      <Motion
        :initial="{
          scale: 1.1,
          opacity: 0,
          filter: 'blur(20px)',
        }"
        :animate="{
          scale: 1,
          opacity: 1,
          filter: 'blur(0px)',
        }"
        :transition="{
          duration: 0.6,
          delay: 0.3,
        }"
      >
        <AppTypography paragraph variant="secondary" class="text-zinc-600 dark:text-zinc-400 text-center sm:text-lg">
          I craft performant web apps with great user experiences while igniting a passion for coding in others.
          <NuxtLink
            to="/about"
            class="font-medium relative inline-block text-royalblue-600 dark:text-royalblue-400 hover:text-royalblue-800 dark:hover:text-royalblue-300 transition-colors duration-200"
          >
            <span class="relative inline-block">
              More about Dami
              <svg
                class="absolute -bottom-1 w-full"
                height="3"
                viewBox="0 0 100 3"
                preserveAspectRatio="none"
              >
                <path
                  d="M0,2 Q50,0 100,2"
                  stroke="currentColor"
                  stroke-width="2"
                  fill="none"
                  class="text-royalblue-600 dark:text-royalblue-400"
                />
              </svg>
            </span>
          </NuxtLink>
        </AppTypography>
      </Motion>
      <div class="flex justify-center">
        <Motion
          :initial="{
            scale: 1.1,
            opacity: 0,
            filter: 'blur(20px)',
          }"
          :animate="{
            scale: 1,
            opacity: 1,
            filter: 'blur(0px)',
          }"
          :transition="{
            duration: 0.6,
            delay: 0.5,
          }"
        >
          <AvailabilityBadge />
        </Motion>
      </div>
      <div class="flex gap-6 justify-center items-center">
        <NuxtLink
          v-for="nav in socials"
          :key="nav.name"
          external
          :to="nav.href"
          :title="`Visit ${nav.name}`"
          :aria-label="`Dami Sparks on ${nav.name}`"
          class="transform content-center items-center rounded-full transition-all hover:scale-110 hover:rotate-[-4deg] text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 hover:dark:text-zinc-200"
        >
          <Icon :name="nav.iconKey || ''" class="size-5" />
        </NuxtLink>
      </div>
    </section>
    <ProjectImageGallery :images="galleryImages" class="mt-16" />
    <section class="pt-32">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div class="space-y-4">
          <AppTypography tag="h2" class="text-5xl font-medium">
            <span class="text-royalblue-800 dark:text-royalblue-400">I build &amp; design</span>
          </AppTypography>
          <AppTypography paragraph variant="secondary" class="text-lg">
            Open source projects, web apps and experimentals.
          </AppTypography>
          <UButton
            to="/projects"
            variant="outline"
            class="mt-8"
            size="lg"
          >
            SEE MY WORK
            <Icon name="heroicons:arrow-right" class="ml-2" />
          </UButton>
        </div>

        <div class="space-y-4">
          <AppTypography tag="h2" class="text-5xl font-medium">
            <span class="text-royalblue-800 dark:text-royalblue-400">I write</span>
          </AppTypography>
          <AppTypography paragraph variant="secondary" class="text-lg">
            About design, web dev, learning and life.
          </AppTypography>
          <UButton
            to="/notes"
            variant="outline"
            class="mt-8"
            size="lg"
          >
            READ MY NOTES
            <Icon name="heroicons:arrow-right" class="ml-2" />
          </UButton>
        </div>
      </div>
    </section>
  </div>
</template>
