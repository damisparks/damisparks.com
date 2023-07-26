<script setup lang="ts">
import { ISocialsNavigation } from '@/types'
const socials: ISocialsNavigation[] = [
	{
		iconKey: 'uil:linkedin',
		href: '//www.linkedin.com/in/damisparks',
		name: 'LinkedIn',
	},
	{ iconKey: 'uil:github', href: '//github.com/damisparks', name: 'GitHub' },
	{ iconKey: 'uil:twitter', href: '//twitter.com/DamiSparks', name: 'Twitter' },
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
