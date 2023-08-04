<script lang="ts" setup>
import { projectSpotlight as spotlights } from '@/constants'
</script>

<template>
	<NuxtLayout>
		<div class="py-4 sm:py-8 lg:px-8">
			<header class="leading-none mb-[1vw]">
				<AppTitle>Dami Sparks Omifare</AppTitle>
			</header>

			<section class="text-zinc-600 dark:text-zinc-300">
				<StaticMarkdownRenderer path="/" />
			</section>

			<hr class="my-10 h-px border-0 bg-zinc-200 dark:bg-zinc-300" />
			<section>
				<p
					class="uppercase text-xl sm:text-2xl md:text-3xl tracking-widest font-light text-zinc-800 dark:text-ds-orange my-6"
				>
					project spotlights
				</p>

				<ProjectSpotlightAccordion
					v-for="(spot, idx) in spotlights"
					:key="`spotlights-${idx}`"
					class="my-6"
				>
					<template #header>
						<span class="text-sm sm:text-base max-w-xs">
							{{ spot.description }}
						</span>
					</template>
					<template #content>
						<div>
							<NuxtLink
								class="text-zinc-600 dark:text-zinc-400"
								:to="spot.client.website"
								target="_blank"
							>
								<span class="font-bold mr-2">Client:</span>
								<span
									class="hover:underline hover:dark:text-ds-orange-darker hover:text-ds-teal"
								>
									<Icon name="heroicons:link-20-solid" class="h-5 w-5" />
									{{ spot.client.name }}
								</span>
							</NuxtLink>
							<div class="mt-3">
								<p
									class="text-base text-zinc-800 dark:text-zinc-100 font-semibold capitalize"
								>
									main contributions:
								</p>
								<ul
									class="list-disc list-inside text-sm text-zinc-600 dark:text-zinc-400"
								>
									<li
										v-for="(ct, cIdx) in spot.contributions"
										:key="`contributions-${cIdx}`"
										class="py-2"
									>
										{{ ct }}
									</li>
								</ul>
							</div>
							<div class="mt-3">
								<p
									class="text-base text-zinc-800 dark:text-zinc-100 font-semibold capitalize mb-1"
								>
									tech stack:
								</p>
								<ul class="flex flex-wrap gap-2">
									<li
										v-for="(st, sIdx) in spot.techStack"
										:key="`techStack-${sIdx}`"
									>
										<span
											class="inline-flex items-center gap-x-1.5 rounded-md px-2 py-1 text-xs bg-indigo-100 dark:bg-ds-blue-accent-200 text-ds-blue font-firasans"
										>
											<Icon
												name="fluent:circle-16-filled"
												class="h-2 w-2 fill-ds-blue-accent-500"
											/>
											{{ st }}
										</span>
									</li>
								</ul>
							</div>
						</div>
					</template>
				</ProjectSpotlightAccordion>
			</section>
		</div>
	</NuxtLayout>
</template>
