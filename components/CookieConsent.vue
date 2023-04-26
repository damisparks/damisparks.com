<script setup lang="ts">
const accept = () => {}
const deny = () => {}
</script>
<template>
	<div
		class="fixed bottom-0 py-2 px-4 sm:py-3 sm:px-6 z-10 bg-zinc-100 dark:bg-zinc-800 dark:ring-zinc-500/20 w-full left-0"
	>
		<div class="max-w-7xl mx-auto flex items-center justify-between">
			<div class="flex-1">
				<p class="text-sm sm:text-base font-firasans">
					This website uses cookies to ensure you get the best experience on our
					website.
				</p>
			</div>
		</div>
		<div class="flex items-end justify-end">
			<button type="button" class="btn btn-ds-blue mr-3" @click="accept">
				Accept
			</button>
			<button
				type="button"
				class="btn bg-ds-smokewhite text-ds-blue shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-ds-blue-accent-200"
				@click="deny"
			>
				Deny
			</button>
		</div>
	</div>
</template>
