<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps<{ error: NuxtError }>()
const handleError = () => clearError({ redirect: '/' })

useSeoMeta({
  title: 'Page Not Found',
  description: 'We can\'t seem to find the page you\'re looking for.'
})
</script>

<template>
  <main class="isolate relative min-h-screen">
    <figure>
      <NuxtImg
        src="/images/photo-1545972154-9bb223aac798.webp"
        format="webp"
        loading="lazy"
        alt="car on road with tire at the back"
        width="1525"
        height="1235"
        class="absolute inset-0 -z-10 h-full w-full object-cover object-top"
      />
    </figure>
    <div class="mx-auto max-w-7xl px-6 py-32 text-center sm:py-40 lg:px-8">
      <div class="space-y-4">
        <h1 class="text-4xl font-nunito leading-8 text-white">
          {{ props.error?.statusCode }}.
        </h1>
        <p class="text-white/70 dark:text-gray-400">
          We can't seem to find the page you're looking for.
        </p>
        <AppButton
          type="button"
          label="Go Home"
          @click="handleError"
        />
      </div>
    </div>
  </main>
</template>
