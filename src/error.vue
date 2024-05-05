<script setup lang="ts">
import type { NuxtError } from '#app'
const props = defineProps({ error: Object as () => NuxtError })
const handleError = () => clearError({ redirect: '/' })
</script>

<template>
	<main class="isolate relative min-h-screen">
		<figure>
			<NuxtPicture
				src="/unsplash/photo-1545972154-9bb223aac798?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3050&q=80&exp=8&con=-15&sat=-75"
				format="webp"
				width="3750"
				height="2500"
				class="absolute inset-0 -z-10 h-full w-full object-cover object-top"
				sizes="xs:200px md:500px lg:1024"
			/>
		</figure>
		<div class="mx-auto max-w-7xl px-6 py-32 text-center sm:py-40 lg:px-8">
			<div class="space-y-4">
				<h1 class="text-4xl font-medium font-montserrat leading-8 text-white">
					{{ props.error?.statusCode }}.
				</h1>
				<p class="text-white/70 dark:text-gray-400">
					We can't seem to find the page you're looking for.
				</p>
				<AppButton @click="handleError" type="button" label="Go Home" />
			</div>
		</div>
	</main>
</template>
