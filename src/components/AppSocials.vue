<script setup lang="ts">
import navigation from '@/data/navigation'
type SocialPropsType = { iconSize?: string, showText?: boolean }
const props = withDefaults(defineProps<SocialPropsType>(), { iconSize: '20px' })
</script>
<template>
  <div class="space-x-6">
    <NuxtLink
      v-for="nav in navigation.socials"
      :key="nav.name"
      external
      :to="nav.href"
      :title="`Visit ${nav.name}`"
    >
      <span class="inline-flex items-center">
        <Icon
          :name="nav.iconKey"
          :size="props.iconSize"
        />
        <span
          v-if="props.showText"
          class="ml-1 text-zinc-400 hover:text-zinc-400 dark:border-zinc-700"
        >
          {{ nav.name }}
        </span>
        <span class="sr-only">
          {{ nav.name }}
        </span>
      </span>
    </NuxtLink>
  </div>
</template>
