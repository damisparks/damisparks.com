<script setup lang="ts">
import { showcase } from '@/data/work'
</script>
<template>
	<dl
		class="grid grid-cols-1 gap-1 pt-8 overflow-hidden rounded-md text-center sm:grid-cols-2 lg:grid-cols-4"
	>
		<AppBlurbCard v-for="item in showcase" :key="item.name">
			<NuxtLink
				external
				target="_blank"
				:to="item.websiteUrl"
				class="flex flex-col"
			>
				<dt class="text-sm font-normal leading-6 text-color-light-muted">
					{{ item.description }}
				</dt>
				<dd
					class="order-first font-montserrat font-medium leading-7 lg:leading-8 lg:text-xl"
				>
					{{ item.name }}
				</dd>
			</NuxtLink>
		</AppBlurbCard>
	</dl>
</template>
