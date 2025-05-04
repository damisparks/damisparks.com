<script setup lang="ts">
import { navItems } from '@/data/navigation'

const year = new Date().getFullYear()
</script>

<template>
  <footer class="pb-4 pt-16">
    <div class="lg:flex lg:items-center lg:justify-between">
      <div class="max-w-md">
        <AppTypography
          tag="h3"
          class="font-notosans font-medium"
        >
          Questions or collaboration ideas?
        </AppTypography>
        <AppTypography
          paragraph
          variant="secondary"
          class="mt-2 text-sm leading-6"
        >
          I'd love to hear from you! Contact me with any <strong>questions</strong> about my work,
          <strong>collaboration ideas</strong>, <strong>mentoring</strong> or <strong>project opportunities</strong>.
        </AppTypography>
      </div>
    </div>
    <div class="mt-8 flex flex-col items-center justify-between gap-6 pt-8 md:flex-row">
      <div class="flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm font-medium text-zinc-800 dark:text-zinc-200">
        <NuxtLink
          v-for="item in navItems"
          :key="item.name"
          :to="item.href"
          class="capitalize transition hover:underline hover:underline-offset-4"
        >
          {{ item.name }}
        </NuxtLink>
      </div>
      <AppSocials />
    </div>
    <div class="mt-8 flex items-center justify-center border-t border-zinc-900/10 pt-4">
      <AppTypography
        tag="span"
        variant="muted"
        class="text-xs"
      >
        Copyright &copy; {{ year }} Dami Sparks. All rights reserved.
      </AppTypography>
    </div>
  </footer>
</template>
