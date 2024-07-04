<script setup lang="ts">
withDefaults(
  defineProps<{
    code?: string
    language?: string | null
    filename?: string | null
    highlights?: number[]
    meta: string | null
  }>(),
  { code: '', language: null, filename: null, highlights: () => [], meta: null }
)
</script>

<template>
  <div
    class="rounded border border-divider rounded-md my-4 relative min-h-[1rem] overflow-hidden"
  >
    <div
      class="flex flex-col items-end justify-center min-h-[1.5rem] bg-zinc-200 dark:bg-zinc-700"
    >
      <ClientOnly>
        <AppCopyContent :content="code" />
      </ClientOnly>
    </div>
    <hr class="h-px border-0 bg-zinc-200 dark:bg-zinc-300">
    <div class="p-2 overflow-auto max-h-[600px] lg:max-h-[800px]">
      <slot />
    </div>
  </div>
</template>

<style scoped>
code {font-family: 'Fira Code', monospace; white-space: pre-wrap;}
</style>
