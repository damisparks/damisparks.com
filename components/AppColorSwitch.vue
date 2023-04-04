<script setup lang="ts">
const colorMode = useColorMode()
const onSetColorMode = () =>
	colorMode.value === 'light'
		? (colorMode.preference = 'dark')
		: (colorMode.preference = 'light')
</script>
<template>
	<button
		aria-label="ColorMode"
		class="border inline-flex rounded-full p-2 text-zinc-500 border-zinc-500 hover:bg-white hover:text-zinc-900 hover:border-zinc-900 active:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-700 focus-visible:ring-opacity-75"
		@click="onSetColorMode"
	>
		<template v-if="colorMode.value === 'dark'">
			<Icon name="fluent:weather-sunny-20-regular" class="w-4 h-4" />
			<span class="sr-only">Dark Mode</span>
		</template>
		<template v-if="colorMode.value === 'light'">
			<Icon name="fluent:weather-moon-16-regular" class="w-4 h-4" />
			<span class="sr-only">Light Mode</span>
		</template>
		<template v-if="colorMode.value === 'system'">
			<Icon name="fluent:desktop-20-regular" class="w-4 h-4" />
			<span class="sr-only">System Mode</span>
		</template>
	</button>
</template>
