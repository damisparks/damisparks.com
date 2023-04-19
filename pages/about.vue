<script setup lang="ts">
import { awards as achievements } from '@/utils'
</script>
<template>
	<NuxtLayout>
		<AppPageHeader>
			<AppTitle>Meet Dami</AppTitle>
		</AppPageHeader>
		<div class="relative mt-16">
			<div class="mx-auto max-w-2xl lg:max-w-5xl font-firasans">
				<div
					class="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12"
				>
					<div class="lg:pl-20">
						<div class="max-w-xs px-2.5 lg:max-w-none">
							<NuxtImg
								loading="lazy"
								class="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
								provider="cloudinary"
								src="/damisparks.com/ds-portrait-tiny.webp"
								height="800"
								width="800"
								format="webp"
								alt="dami sparks omifare"
							/>
						</div>
					</div>
					<div class="lg:order-first lg:row-span-2">
						<h1
							class="text-4xl font-medium tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl"
						>
							Dami Sparks
						</h1>

						<div
							class="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400"
						>
							<p>
								Dami is the CTO and co-founder of Actif, a tech company focusing
								on improving the health of older people with fitness and
								cognitive programs.
							</p>
							<p>
								He is a Certified Mentor, Machine Learning Engineer and Cloud
								Developer with experience in front-end and back-end design and
								development. Over the last five years, He has gained expertise
								in designing and developing web applications, writing technical
								documentation, and mentoring others working for tech companies
								like Udacity, Photoweb, PrimeIT, Fujitsu.
							</p>
							<p>
								He hosted the Ask Me Anything Session organised by Udacity
								Introduction to Programming Nanodegree. His Team won the Demium
								AllStartup Weekend 2020. Dami loves what he does, and he
								inspires others to do what they love and become their heroes.
							</p>
							<NuxtLink
								class="btn btn-ds-blue inline-flex"
								to="https://drive.google.com/uc?export=download&id=1qRSxju1bsJWOt098a9EXPpx8rOsgL-8m"
							>
								View Resume
							</NuxtLink>
						</div>
					</div>
				</div>

				<hr class="my-10 h-px border-0 bg-zinc-200 dark:bg-zinc-300" />

				<!-- achievement & milestones -->
				<div>
					<h2
						class="uppercase tracking-widest font-light text-zinc-800 dark:text-ds-orange my-6"
					>
						Achievements
					</h2>

					<div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-y-3 sm:gap-6">
						<!-- achievement card -->
						<AppAchievementCard
							v-for="achievement in achievements"
							:key="`achievements-${achievement.name}`"
							:achievement="achievement"
						/>
					</div>
				</div>
			</div>
		</div>
	</NuxtLayout>
</template>
