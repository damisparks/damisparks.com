<template>
	<div class="relative">
		<div class="absolute inset-0 flex items-center" aria-hidden="true">
			<div class="w-full border-t border-zinc-300" />
		</div>
		<div class="relative flex justify-center">
			<span
				class="bg-white app-heading dark:bg-zinc-800 px-3 text-xl font-semibold leading-6 text-zinc-900"
			>
				<slot></slot>
			</span>
		</div>
	</div>
</template>
