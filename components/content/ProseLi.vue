<template>
	<div class="my-4 pl-4">
		<div class="flex gap-x-3">
			<span class="flex h-6 items-center">
				<Icon
					name="fluent:circle-16-filled"
					class="h-4 w-4 text-ds-blue dark:text-ds-blue-accent-600"
				/>
			</span>
			<li
				class="font-medium text-zinc-900 dark:text-zinc-300 text-sm leading-6"
			>
				<slot />
			</li>
		</div>
	</div>
</template>
