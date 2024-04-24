<script setup lang="ts">
import { all } from '@/data/work'

function slug(name: string) {
	return name.toLowerCase().replace(/\s/g, '-')
}
</script>
<template>
	<NuxtLayout>
		<div class="space-y-12">
			<section>
				<AppTopBlurb>
					<AppBlurb>
						<p>
							My main focus is on building scalable digital products and digital
							experiences — currently working at Tricentis.
						</p>
					</AppBlurb>
				</AppTopBlurb>
			</section>
			<section>
				<p
					class="text-center font-montserrat font-medium text-xl leading-7 lg:leading-8 lg:text-2xl py-8"
				>
					✨ Things I&#39;ve built trying to put my dent in the universe 🔨
				</p>
			</section>
			<section class="max-w-5xl mx-auto">
				<div
					v-for="(key, keyIdx) in Object.keys(all)"
					:style="{ '--enter-stage': keyIdx + 1 }"
					slide-enter
				>
					<div
						class="select-none relative h-20 pointer-events-none slide-enter"
						:style="{
							'--enter-stage': keyIdx - 2,
							'--enter-step': '60ms',
						}"
						:id="slug(key)"
					>
						<span
							:style="{
								'-webkit-text-stroke': '#AAA',
								'-webkit-text-stroke-width': '1.5px',
								color: 'transparent',
							}"
							class="text-[4em] capitalize absolute font-firasans font-medium left-4 top-0 leading-[1em] opacity-35 dark:opacity-20"
						>
							{{ key }}
						</span>
					</div>
					<div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
						<NuxtLink
							v-for="item in all[key]"
							:key="item.name"
							class="p-4 rounded-lg hover:bg-gray-50 col-span-1"
							:to="item.websiteUrl"
							external
						>
							<div
								class="font-montserrat font-medium leading-7 lg:leading-8 lg:text-xl"
							>
								{{ item.name }}
							</div>
							<div
								class="text-sm font-normal leading-6 text-gray-300 dark:text-gray-400"
							>
								{{ item.description }}
							</div>
						</NuxtLink>
					</div>
				</div>
			</section>
		</div>
	</NuxtLayout>
</template>
