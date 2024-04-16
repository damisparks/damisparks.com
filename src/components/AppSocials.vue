<script setup lang="ts">
import navigation from '@/data/navigation'
type SocialPropsType = { iconSize?: string; showText?: boolean }
const props = withDefaults(defineProps<SocialPropsType>(), { iconSize: '' })
</script>
<template>
	<div class="space-x-2">
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
					class="ml-1 border-b border-gray-300 hover:border-gray-500 dark:border-gray-700"
				>
					{{ nav.name }}
				</span>
			</span>
		</NuxtLink>
	</div>
</template>
