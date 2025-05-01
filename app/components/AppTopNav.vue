<script setup lang="ts">
import { navItems, socials } from '@/data/navigation'

const route = useRoute()
</script>

<template>
  <nav class="fixed z-50 h-12 max-h-12 w-full bg-white/70 backdrop-blur-lg backdrop-saturate-150 dark:bg-[#161617]/70">
    <AppContainer>
      <div class="flex items-center justify-between">
        <div>
          <NuxtLink to="/">
            <AppLogoWord />
          </NuxtLink>
        </div>
        <ul class="my-2 flex items-center text-sm">
          <li v-for="item in navItems" :key="item.name">
            <NuxtLink
              :to="item.href"
              class="transition flex items-center font-medium justify-center rounded-md p-2 font-notosans capitalize hover:bg-zinc-200/80 dark:hover:bg-zinc-800"
              :class="[
                route.name === item.name ? 'text-primary-600 dark:text-primary-300' : 'text-gray-600 dark:text-gray-300',
              ]"
            >
              {{ item.name }}
            </NuxtLink>
          </li>
          <li v-for="item in socials" :key="item.name" class="hidden px-3 leading-3 sm:flex">
            <NuxtLink
              external
              target="_blank"
              :to="item?.href"
              :title="`Visit ${item.name}`"
            >
              <span class="inline-flex rounded-md p-1 hover:bg-zinc-200/80 dark:hover:bg-zinc-800">
                <Icon size="20px" :name="item.iconKey" />
              </span>
              <span class="sr-only">
                {{ item.name }}
              </span>
            </NuxtLink>
          </li>
          <li class="ml-2 inline-flex sm:ml-0">
            <ColorSwitch />
          </li>
        </ul>
      </div>
    </AppContainer>
  </nav>
</template>
