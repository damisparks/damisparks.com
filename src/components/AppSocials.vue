<script setup lang="ts">
import navigation from '@/data/navigation'
type SocialPropsType = { iconSize?: string; showText?: boolean }
const props = withDefaults(defineProps<SocialPropsType>(), { iconSize: '24px' })
</script>
<template>
	<div class="space-x-6">
		<NuxtLink
			v-for="nav in navigation.socials"
			external
			:key="nav.name"
			:to="nav.href"
			:title="nav.name"
		>
			<span class="inline-flex items-center">
				<Icon :name="nav.iconKey" :size="props.iconSize" />
				<span
					v-if="props.showText"
					class="ml-1 text-gray-400 hover:text-gray-500 dark:border-gray-700"
				>
					{{ nav.name }}
				</span>
			</span>
		</NuxtLink>
	</div>
</template>
