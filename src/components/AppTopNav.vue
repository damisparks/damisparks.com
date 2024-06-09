<script setup lang="ts">
import navigation from '@/data/navigation'
const route = useRoute()
</script>
<template>
  <nav class="fixed w-full z-50 bg-zinc-100/50 dark:bg-zinc-800/50 backdrop-saturate-100 backdrop-blur-lg">
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
            class="hover:bg-zinc-200/80 dark:hover:bg-zinc-800 text-sm sm:text-base text-gray-600 dark:text-gray-300 rounded-full leading-6 px-1.5 py-1"
          >
            <NuxtLink
              :to="item.href"
              :class="[
                route.path === item.href ? 'font-medium' : '',
                'flex items-center justify-center'
              ]"
            >
              <Icon
                size="24px"
                :name="item.iconKey"
                class="leading-6"
              />
              <span class="ml-1">
                {{ item.name }}
              </span>
            </NuxtLink>
          </li>
          <li
            v-for="item in navigation.socials"
            :key="item.name"
            class="leading-6 px-3 hidden sm:flex"
          >
            <NuxtLink
              external
              target="_blank"
              :to="item?.href"
              :title="`Visit ${item.name}`"
            >
              <span class="p-1 rounded-full inline-flex hover:bg-zinc-200/80 dark:hover:bg-zinc-800">
                <Icon
                  size="24px"
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
