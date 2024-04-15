<script setup lang="ts">
const colorMode = useColorMode()
const onSetColorMode = () =>
	colorMode.value === 'light'
		? (colorMode.preference = 'dark')
		: (colorMode.preference = 'light')
</script>
<template>
	<button
		class="inline-flex border rounded-full p-1 active:shadow-md border-color text-color focus:outline-none focus-visible:ring-2 focus-visible:ring-color focus-visible:ring-opacity-75 dark:border-foreground-dark-default dark:text-foreground-dark-default dark:focus-visible:ring-foreground-dark-default dark:focus-visible:ring-opacity-75"
		aria-label="ColorMode"
		@click="onSetColorMode"
	>
		<ColorScheme placeholder="..." tag="span">
			<template v-if="colorMode.value === 'dark'">
				<Icon
					size="20px"
					name="fluent:weather-sunny-20-regular"
					class="w-4 h-4"
				/>
				<span class="sr-only">Dark Mode</span>
			</template>
			<template v-if="colorMode.value === 'light'">
				<Icon
					size="20px"
					name="fluent:weather-moon-16-regular"
					class="w-4 h-4"
				/>
				<span class="sr-only">Light Mode</span>
			</template>
		</ColorScheme>
	</button>
</template>
