<script setup lang="ts">
import { socials } from '@/data/navigation'

interface SocialPropsType { iconSize?: string }
const props = withDefaults(defineProps<SocialPropsType>(), { iconSize: '20px' })
</script>

<template>
  <div class="flex flex-wrap justify-evenly gap-4">
    <NuxtLink
      v-for="nav in socials"
      :key="nav.name"
      external
      :to="nav.href"
      :title="`Visit ${nav.name}`"
      :aria-label="`Dami Sparks on ${nav.name}`"
      class="transform content-center items-center rounded-full transition-all hover:scale-110 hover:rotate-[-4deg] text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 hover:dark:text-zinc-200"
    >
      <Icon
        :name="nav.iconKey"
        :size="props.iconSize"
        class="size-4"
      />
    </NuxtLink>
  </div>
</template>
