<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

defineProps<{ links: NavigationMenuItem[] }>()
</script>

<template>
  <div class="fixed top-2 sm:top-4 mx-auto left-1/2 transform -translate-x-1/2 z-10">
    <UNavigationMenu
      :items="links"
      variant="link"
      color="neutral"
      class="backdrop-blur-xl bg-zinc-100/75 dark:bg-zinc-950/75 dark:shadow-zinc-950/75 rounded-full px-2 sm:px-4 border border-white dark:border-muted/50 shadow-xl shadow-zinc-950/10"
      :ui="{
        link: 'px-2 py-1',
        linkLeadingIcon: 'hidden',
      }"
    >
      <template #list-trailing>
        <ColorModeButton />
      </template>
    </UNavigationMenu>
  </div>
</template>
