<script setup lang="ts">
import { socials } from '@/data/navigation'
import { showcase } from '@/data/projects'

const threeShowcase = showcase.slice(0, 3)
const moreShowcase = showcase.slice(3)
</script>

<template>
  <div class="slide-enter space-y-4">
    <section class="pt-8">
      <div class="max-w-2xl space-y-6">
        <AppTypography
          class="text-4xl font-medium tracking-tight sm:text-5xl font-dmsans"
          tag="h1"
        >
          <span class="text-royalblue-800 dark:text-royalblue-400">
            Software engineer, mentor, and designer engineer.
          </span>
        </AppTypography>
        <AppTypography paragraph variant="secondary" class="mt-6 text-zinc-600 dark:text-zinc-400">
          I am Dami, a software engineer, mentor and design engineer based in Europe. I craft performant web apps with great user experiences while igniting a passion for coding in others.
        </AppTypography>
        <div class="mt-6 flex gap-6">
          <NuxtLink
            v-for="nav in socials"
            :key="nav.name"
            external
            :to="nav.href"
            :title="`Visit ${nav.name}`"
            :aria-label="`Dami Sparks on ${nav.name}`"
            class="transform content-center items-center rounded-full transition-all hover:scale-110 hover:rotate-[-4deg] text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 hover:dark:text-zinc-200"
          >
            <Icon :name="nav.iconKey" class="size-5" />
          </NuxtLink>
        </div>
      </div>
    </section>
    <section>
      <div class="grid grid-cols-1 gap-8 pt-8 sm:grid-cols-2">
        <div class="space-y-6">
          <AppTypography paragraph variant="muted" class="uppercase">
            featured work
          </AppTypography>
          <div v-for="item in threeShowcase" :key="item.id">
            <NuxtLink
              class="grid grid-cols-6 items-center gap-3 rounded-md p-2 hover:bg-primary-50 dark:hover:bg-primary-500/40"
              :to="item.websiteUrl"
              target="_blank"
              external
            >
              <NuxtImg
                class="col-span-2 h-16 w-full rounded-md object-cover object-center"
                :src="item.imageUrl"
                alt=""
              />
              <div class="col-span-4">
                {{ item.name }}
              </div>
            </NuxtLink>
          </div>
        </div>
        <NuxtLink
          v-if="moreShowcase[0]"
          :to="moreShowcase[0].websiteUrl"
          external
          class="h-fit"
        >
          <NuxtImg
            class="w-full rounded-md border border-gray-100 object-cover"
            :src="moreShowcase[0].imageUrl"
            alt=""
          />
          <AppTypography paragraph class="py-4">
            {{ moreShowcase[0]?.name }}
          </AppTypography>
        </NuxtLink>
      </div>
    </section>
  </div>
</template>
