<script setup lang="ts">
import { showcase } from '@/data/work'
const threeShowcase = showcase.slice(0, 3)
const moreShowcase = showcase.slice(3)
</script>
<template>
	<div class="space-y-4 slide-enter">
		<section class="pt-8">
			<AppTopBlurb>
				<AppBlurb>
					Committed to
					<span style="color: hsla(217, 89%, 61%, 1)">envisioning</span> ideas
					and <span style="color: hsla(328, 100%, 54%, 1)">turning</span> them
					into scalable digital products while
					<span style="color: hsla(136, 53%, 43%, 1)">igniting</span> a passion
					for coding in
					<span style="color: hsla(41, 100%, 49%, 1)">others</span> — currently
					working at Tricentis.
				</AppBlurb>
			</AppTopBlurb>
		</section>
		<section class="py-8 text-center space-y-8">
			<AppHeadlineFluid class="py-8">
				Digital products. Built with you in mind.
			</AppHeadlineFluid>
			<div class="inline-flex items-center space-x-4">
				<NuxtLink
					class="rounded-md flex bg-primary-500 text-white hover:bg-primary-600 px-4 py-2 font-normal"
					to="/projects"
				>
					All works
				</NuxtLink>
				<NuxtLink
					class="rounded-md flex shadow-sm px-4 py-2 bg-transparent text-primary-500 ring-1 ring-inset ring-primary-500 focus:ring-1 focus:ring-primary-500 hover:text-primary-600 hover:border-primary-600 font-normal"
					to="/bio"
				>
					See my bio
				</NuxtLink>
			</div>
		</section>
		<section>
			<div class="grid grid-cols-1 gap-8 sm:grid-cols-2 pt-8">
				<div class="space-y-6">
					<p class="uppercase text-gray-500 dark:text-gray-400">
						featured work
					</p>
					<div v-for="item in threeShowcase" :key="item.id">
						<NuxtLink
							class="grid grid-cols-6 gap-3 items-center hover:bg-primary-50 dark:hover:bg-primary-500/40 p-2 rounded-md"
							:to="item.websiteUrl"
							target="_blank"
							external
						>
							<NuxtImg
								class="object-cover object-center col-span-2 w-full h-16 rounded-md"
								:src="item.imageUrl"
								:alt="item.name"
							/>
							<div class="col-span-4">
								{{ item.name }}
							</div>
						</NuxtLink>
					</div>
				</div>
				<NuxtLink :to="moreShowcase[0].websiteUrl" external class="h-fit">
					<NuxtImg
						class="object-cover w-full rounded-md border border-gray-100"
						:src="moreShowcase[0].imageUrl"
					/>
					<p class="py-4 font-normal">
						{{ moreShowcase[0].name }}
					</p>
				</NuxtLink>
			</div>
		</section>
	</div>
</template>
