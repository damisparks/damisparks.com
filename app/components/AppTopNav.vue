<script setup lang="ts">
import { navItems } from '@/data/navigation'

const route = useRoute()
</script>

<template>
  <header class="w-full sticky top-0 z-50 bg-white/70 backdrop-blur-lg backdrop-saturate-150 dark:bg-[#161617]/70">
    <AppContainer>
      <nav class="flex items-center justify-between h-12 max-h-12">
        <div class="flex items-center gap-1.5 min-w-0">
          <NuxtLink to="/">
            <AppLogoWord />
          </NuxtLink>
        </div>
        <ul class="flex items-center gap-4 text-sm font-medium">
          <li v-for="item in navItems" :key="item.name">
            <NuxtLink
              :to="item.href"
              class="capitalize"
              :class="[
                route.name === item.name ? 'text-primary-600 dark:text-primary-300' : 'text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-200',
              ]"
            >
              {{ item.name }}
            </NuxtLink>
          </li>
        </ul>
        <div class="flex items-center">
          <ColorModeButton />
        </div>
      </nav>
    </AppContainer>
  </header>
</template>
