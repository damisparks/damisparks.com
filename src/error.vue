<script lang="ts" setup>
const { capitalizeWords } = useMe()
</script>

<template>
	<div
		class="min-h-screen relative bg-zinc-100 text-zinc-700 dark:text-zinc-300 dark:bg-black"
	>
		<div
			class="mx-auto fixed h-max max-w-md inset-10 rounded-md px-6 py-12 shadow-2xl space-y-6 bg-white ring-1 ring-zinc-200/50 dark:bg-zinc-800 dark:ring-zinc-500/20"
		>
			<div class="flex flex-col items-center justify-center space-y-4">
				<Icon name="fluent:emoji-sad-24-regular" size="5rem" />
				<div
					class="font-normal text-2xl flex flex-col items-center font-montserrat app-heading"
				>
					<h1>Whoops!</h1>
					<h2>This page is unavailable.</h2>
				</div>
				<h3 class="font-normal text-sm app-text-content">
					You don't have access or this link doesn't exist anymore.
				</h3>
			</div>
			<div class="flex flex-col space-y-4">
				<NuxtLink class="btn btn-ds-blue text-center" to="/">
					{{ capitalizeWords('go home') }}
				</NuxtLink>
			</div>
		</div>
	</div>
</template>
