<script setup lang="ts">
import navigation from '@/data/navigation'

const route = useRoute()
</script>

<template>
  <nav class="fixed w-full z-50 bg-white/70 dark:bg-[#161617]/70 backdrop-saturate-150 backdrop-blur-lg h-12 max-h-12">
    <AppContainer>
      <div class="flex items-center justify-between">
        <div>
          <NuxtLink
            to="/"
          >
            <AppLogoWord />
          </NuxtLink>
        </div>
        <ul class="flex items-center my-2">
          <li
            v-for="item in navigation.navItems"
            :key="item.name"
            class="hover:bg-zinc-200/80 dark:hover:bg-zinc-800 text-gray-600 dark:text-gray-300 rounded-full text-[12px] leading-3 p-2"
          >
            <NuxtLink
              :to="item.href"
              :class="[
                route.path === item.href ? 'font-medium text-primary-600' : '',
                'flex items-center justify-center '
              ]"
            >
              {{ item.name }}
            </NuxtLink>
          </li>
          <li
            v-for="item in navigation.socials"
            :key="item.name"
            class="leading-3 px-3 hidden sm:flex"
          >
            <NuxtLink
              external
              target="_blank"
              :to="item?.href"
              :title="`Visit ${item.name}`"
            >
              <span class="p-1 rounded-full inline-flex hover:bg-zinc-200/80 dark:hover:bg-zinc-800">
                <Icon
                  size="20px"
                  :name="item.iconKey"
                />
              </span>
              <span class="sr-only">
                {{ item.name }}
              </span>
            </NuxtLink>
          </li>
          <li class="inline-flex ml-2 sm:ml-0">
            <ColorSwitch />
          </li>
        </ul>
      </div>
    </AppContainer>
  </nav>
</template>
