<script setup lang="ts">
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
</script>

<template>
	<div
		class="mx-auto w-full rounded-lg bg-zinc-100 dark:bg-zinc-700 shadow-sm font-firasans"
	>
		<Disclosure v-slot="{ open }">
			<DisclosureButton
				class="flex w-full justify-between rounded-lg p-4 text-left font-medium text-lg text-zinc-800 dark:text-zinc-100 hover:text-zinc-900 focus:outline-none focus-visible:ring focus-visible:ring-zinc-500 focus-visible:ring-opacity-75"
			>
				<slot name="header"> Header </slot>
				<Icon
					name="fluent:chevron-circle-up-16-regular"
					:class="open ? 'rotate-180 transform' : ''"
					class="h-8 w-8"
				/>
			</DisclosureButton>
			<transition
				enter-active-class="transition duration-100 ease-out"
				enter-from-class="transform scale-95 opacity-0"
				enter-to-class="transform scale-100 opacity-100"
				leave-active-class="transition duration-75 ease-out"
				leave-from-class="transform scale-100 opacity-100"
				leave-to-class="transform scale-95 opacity-0"
			>
				<DisclosurePanel
					class="px-4 pb-4 text-zinc-500 dark:text-ds-smokewhite"
				>
					<hr class="mb-4 h-px border-0 bg-zinc-400 dark:bg-zinc-200" />

					<slot name="content"> Content go here </slot>
				</DisclosurePanel>
			</transition>
		</Disclosure>
	</div>
</template>
