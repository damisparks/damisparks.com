<script setup lang="ts">
const year = new Date().getFullYear()
</script>
<template>
	<footer class="pt-16 pb-8">
		<div class="lg:flex lg:items-center lg:justify-between">
			<div class="max-w-md">
				<h3
					class="text-base font-montserrat app-text-content font-medium leading-6"
				>
					Let's inspire growth together
				</h3>
				<p class="mt-2 text-sm leading-6 text-zinc-500">
					Feel free to reach out if you're looking for a software engineer, have
					a question or just want to connect 📭
				</p>
				<p>
					<NuxtLink
						to="mailto:rethinkwithdami@gmail.com"
						class="text-sm text-blue-500 dark:text-blue-400"
						external
					>
						rethinkwithdami@gmail.com
					</NuxtLink>
				</p>
			</div>
		</div>
		<div
			class="mt-8 border-t border-zinc-900/10 pt-8 md:flex md:items-center md:justify-between"
		>
			<div class="flex md:order-2">
				<AppSocials />
			</div>
			<p
				class="body-compact-small mt-8 text-zinc-500 dark:text-zinc-700 md:order-1 md:mt-0"
			>
				<span class="text-zinc-500 dark:text-zinc-400">
					&copy; Dami Sparks {{ year }} | Software Engineer |
				</span>
				<NuxtLink
					to="https://creativecommons.org/licenses/by-sa/4.0/"
					class="hover:underline"
				>
					CC BY-SA 4.0
				</NuxtLink>
			</p>
		</div>
	</footer>
</template>
