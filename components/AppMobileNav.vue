<script setup lang="ts">
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'
import { INavLink } from '@/types'
defineProps<{ navList: INavLink[] }>()
</script>
<template>
	<Menu as="div" class="inline-block text-left z-10">
		<div>
			<MenuButton
				class="border rounded-full px-2 py-2 text-zinc-500 border-zinc-500 hover:bg-white hover:text-zinc-900 hover:border-zinc-900 active:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-700 focus-visible:ring-opacity-75"
			>
				<span class="sr-only">Menu</span>
				<Icon
					name="fluent:navigation-20-regular"
					class="h-5 w-5"
					aria-hidden="true"
				/>
			</MenuButton>
		</div>

		<transition
			enter-active-class="transition duration-100 ease-out"
			enter-from-class="transform scale-95 opacity-0"
			enter-to-class="transform scale-100 opacity-100"
			leave-active-class="transition duration-75 ease-in"
			leave-from-class="transform scale-100 opacity-100"
			leave-to-class="transform scale-95 opacity-0"
		>
			<MenuItems
				class="absolute right-0 mt-4 w-56 origin-top-right divide-y divide-zinc-100 dark:divide-zinc-700 rounded-xl bg-white dark:bg-black shadow-lg ring-1 ring-black dark:ring-white ring-opacity-5 dark:ring-opacity-5 focus:outline-none"
			>
				<div class="px-2 py-2 w-full">
					<MenuItem
						v-for="({ href, name }, index) in navList"
						:key="`app-mobile-nav-${index}`"
						v-slot="{ close }"
					>
						<NuxtLink
							:class="[
								$route.path === href
									? 'bg-zinc-200 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-200'
									: 'text-zinc-900 dark:text-zinc-200',
								'group block w-full items-center rounded-xl text-sm'
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
