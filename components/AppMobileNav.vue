<script setup lang="ts">
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'
import { INavLink } from '@/types'
defineProps<{ navList: INavLink[] }>()
</script>
<template>
	<Menu as="div" class="relative inline-block text-left z-10">
		<div>
			<MenuButton
				class="inline-flex w-full border rounded-full p-2 text-zinc-500 border-zinc-500 hover:bg-white hover:text-zinc-900 hover:border-zinc-900 active:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-700 focus-visible:ring-opacity-75"
			>
				<span class="sr-only">Menu</span>
				<Icon
					name="fluent:navigation-20-regular"
					class="h-4 w-4"
					aria-hidden="true"
				/>
			</MenuButton>
		</div>

		<transition
			enter-active-class="transition ease-out duration-100"
			enter-from-class="transform opacity-0 scale-95"
			enter-to-class="transform opacity-100 scale-100"
			leave-active-class="transition ease-in duration-75"
			leave-from-class="transform opacity-100 scale-100"
			leave-to-class="transform opacity-0 scale-95"
		>
			<MenuItems
				class="absolute right-0 z-10 mt-4 w-48 origin-top-right rounded-xl bg-white dark:bg-black shadow-lg ring-1 ring-black dark:ring-white ring-opacity-5 dark:ring-opacity-5 focus:outline-none"
			>
				<div class="px-2 w-full">
					<MenuItem
						v-for="{ href, name, id } in navList"
						:key="`app-mobile-nav-${id}`"
						v-slot="{ close, active }"
						class="my-1"
					>
						<NuxtLink
							:class="[
								active ? 'bg-ds-blue-accent-100/60 dark:bg-zinc-900' : '',
								$route.name === href
									? 'bg-ds-blue-accent-200  dark:bg-zinc-700 text-zinc-900 dark:text-zinc-300'
									: 'text-zinc-900 dark:text-zinc-200',
								'group block w-full items-center rounded-lg text-sm'
							]"
							:to="href"
						>
							<span class="truncate px-4 py-2 block" @click="close">
								{{ name }}
							</span>
						</NuxtLink>
					</MenuItem>
				</div>
			</MenuItems>
		</transition>
	</Menu>
</template>
