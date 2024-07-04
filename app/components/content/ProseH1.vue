<script setup lang="ts">
import { useRuntimeConfig } from '#imports'

defineProps<{ id?: string }>()
const heading = 1
const { anchorLinks } = useRuntimeConfig().public.content
const generate = anchorLinks?.depth
  >= heading && !anchorLinks?.exclude.includes(heading)
</script>

<template>
  <h2
    :id="id"
    class="text-3xl sm:text-4xl font-medium font-montserrat mt-2 mb-4 tracking-tight"
  >
    <a
      v-if="id && generate"
      :href="`#${id}`"
    >
      <slot />
    </a>
    <slot v-else />
  </h2>
</template>
