<script setup lang="ts">
import type { ISocialsNavigation } from '@/types'

const me = useMe()
const socials: ISocialsNavigation[] = [
	{
		id: me.uniqueId(),
		iconKey: 'uil:linkedin',
		href: 'https://www.linkedin.com/in/damisparks',
		name: 'LinkedIn',
	},

	{
		id: me.uniqueId(),
		iconKey: 'uil:github',
		href: 'https://www.github.com/damisparks',
		name: 'GitHub',
	},
	{
		id: me.uniqueId(),
		iconKey: 'ri:twitter-x-fill',
		href: 'https://www.twitter.com/DamiSparks',
		name: 'Twitter',
	},
]
</script>

<template>
	<a
		v-for="item in socials"
		:key="item.name"
		:href="item.href"
		class="text-zinc-400 hover:text-zinc-500"
		target="_blank"
	>
		<span class="sr-only">{{ item.name }}</span>
		<Icon :name="item.iconKey" class="h-6 w-6" aria-hidden="true" />
	</a>
</template>
