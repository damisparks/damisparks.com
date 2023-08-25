<script lang="ts" setup>
const year = new Date().getFullYear()
</script>
<template>
	<AppContainer>
		<footer>
			<div class="py-4">
				<div class="flex justify-center space-x-6 md:order-2">
					<AppSocials />
				</div>
				<div class="mt-8 md:order-1">
					<p class="text-center text-sm app-text-content">
						<NuxtLink
							class="underline"
							to="https://creativecommons.org/licenses/by-sa/4.0/"
						>
							CC BY-SA 4.0
						</NuxtLink>
						&copy; 2019-{{ year }} Dami Sparks
						<NuxtLink class="underline" :to="{ name: 'privacy' }">
							Privacy Policy
						</NuxtLink>
					</p>
				</div>
			</div>
			<p class="my-4 font-montserrat italic text-center text-sm text-zinc-600">
				<small>
					Logo Designed by
					<a
						class="text-ds-blue dark:text-ds-teal hover:opacity-90 font-bold"
						href="mailto:rubenfaria@live.com"
					>
						Ruben
					</a>
				</small>
			</p>
		</footer>
		<AppScrollUp />
	</AppContainer>
</template>
