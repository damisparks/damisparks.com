<script setup lang="ts">
import { INavLink } from '@/types'
defineProps<{ navList: INavLink[] }>()
</script>

<template>
	<ul class="flex items-center gap-4">
		<NuxtLink
			v-for="({ name, href }, index) in navList"
			:key="`navitems-${index}`"
			:to="href"
			:class="[
				$route.name === href
					? 'text-ds-blue'
					: 'text-zinc-700 dark:text-zinc-400',
				'px-2 hover:text-zinc-900 dark:hover:text-zinc-200'
			]"
		>
			{{ name }}
		</NuxtLink>
	</ul>
</template>
