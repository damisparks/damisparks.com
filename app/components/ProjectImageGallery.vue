<script setup lang="ts">
defineProps<{ images: Array<{ src: string, alt: string }> }>()
</script>

<template>
  <section class="relative w-screen left-1/2 right-1/2 -mx-[50vw]">
    <div class="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
      <div
        v-for="(image, index) in images"
        :key="index"
        class="relative aspect-9/10 w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800 shadow-lg"
        :class="index % 2 === 0 ? 'rotate-2' : '-rotate-2'"
      >
        <NuxtImg
          class="absolute inset-0 h-full w-full object-cover"
          :src="image.src"
          :alt="image.alt"
        />
      </div>
    </div>
  </section>
</template>
