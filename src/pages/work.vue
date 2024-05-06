<script setup lang="ts">
import { all } from '@/data/work'

function slug(name: string) {
	return name.toLowerCase().replace(/\s/g, '-')
}

definePageMeta({
	title: 'Work',
	description:
		"Things I've built or collaborated on trying to put my dent in the universe.",
})
</script>
<template>
	<div class="space-y-12">
		<section>
			<AppTopBlurb>
				<AppBlurb>
					Committed to building scalable digital products and digital
					experiences — currently working at Tricentis.
				</AppBlurb>
			</AppTopBlurb>
		</section>
		<section class="py-8 text-center">
			<AppHeadlineFluid class="py-8">
				Things I&#39;ve built trying to put my dent in the universe.
			</AppHeadlineFluid>
		</section>
		<section class="max-w-5xl mx-auto">
			<div
				v-for="(key, keyIdx) in Object.keys(all)"
				:style="{ '--enter-stage': keyIdx + 1 }"
				slide-enter
			>
				<div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
					<NuxtLink
						v-for="item in all[key]"
						:key="item.name"
						class="p-4 rounded-lg hover:bg-primary-50 dark:hover:bg-primary-500/40 col-span-1"
						:to="item.websiteUrl"
						target="_blank"
						external
					>
						<div
							class="font-montserrat font-medium leading-7 lg:leading-8 lg:text-xl"
						>
							{{ item.name }}
						</div>
						<div
							class="text-sm font-normal leading-6 text-zinc-500 dark:text-zinc-400"
						>
							{{ item.description }}
						</div>
					</NuxtLink>
				</div>
			</div>
		</section>
	</div>
</template>
