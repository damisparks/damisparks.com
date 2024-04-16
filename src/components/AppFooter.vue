<script setup lang="ts">
const year = new Date().getFullYear()
</script>
<template>
	<footer class="bg-background dark:bg-background-dark pb-8 pt-16">
		<hr class="text-gray-300 dark:text-gray-700 pt-6" />
		<div
			class="flex flex-col sm:flex-row sm:justify-between space-y-2 sm:space-y-0"
		>
			<p class="body-compact-small">
				<span class="text-color-light-muted dark:text-color-dark-muted"
					>&copy; Dami Sparks {{ year }} | Software Engineer |
				</span>
				<NuxtLink
					to="https://creativecommons.org/licenses/by-sa/4.0/"
					class="hover:underline"
				>
					CC BY-SA 4.0
				</NuxtLink>
			</p>
			<AppSocials />
		</div>
	</footer>
</template>
