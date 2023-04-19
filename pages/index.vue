<script lang="ts" setup>
const me = ref({
	name: 'Dami',
	shortDescription: `I'm a digital freelance full-stack developer, mentor and technical writer passionate about crafting solid and scalable digital products and helping others find their passion for coding. I'm all about combining innovative development and product thinking to bring ideas into reality.`,
	title: 'Freelance Vue.js Fullstack Developer for Hire',
	role: 'Vue.js Fullstack Software Developer | Mentor | Digital Freelancer',
	wantCriteria: [
		'A skilled Vue.js developer to build responsive and user-friendly interfaces for your web applications',
		'Expertise in integrating Vue.js with RESTful APIs and deploying on cloud platforms like AWS, Azure and Google Cloud',
		'A reliable and experienced freelance developer who can deliver scalable applications timely within the budget for clients across various industries',
		'A developer who focuses on clean, high-quality and well-documented code'
	],
	specialisation: `I specialise in frontend and backend development, testing, data science, and cloud computing. So let's work together to bring your project to life.`
})
</script>

<template>
	<NuxtLayout>
		<div class="sm:py-24 sm:px-6 lg:px-8">
			<header class="mt-8">
				<div class="mx-auto max-w-2xl lg:max-w-5xl">
					<h1
						class="text-4xl font-normal tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl"
					>
						{{ me.title }}
					</h1>
				</div>
			</header>

			<section class="space-y-7 pt-8 lg:pt-16 mx-auto max-w-2xl lg:max-w-5xl">
				<div>
					<span
						class="font-montserrat leading-tight text-3xl md:text-4xl lg:text-5xl text-zinc-600 dark:text-zinc-400 text-left"
					>
						Do you need:
					</span>
				</div>
				<div>
					<ul class="text-left space-y-7">
						<li
							v-for="(cr, idx) in me.wantCriteria"
							:key="`wantcriteria-${idx}`"
						>
							<span
								class="font-firasans text-base font-normal text-zinc-600 dark:text-zinc-400 tracking-tight"
							>
								<Icon
									name="fluent:checkmark-circle-24-filled"
									class="h-6 w-6 text-ds-teal"
									aria-hidden="true"
								/>
								{{ cr }}
							</span>
						</li>
					</ul>
				</div>
			</section>
			<section>
				<hr class="my-10 h-px border-0 bg-zinc-200 dark:bg-zinc-300" />

				<div class="flex flex-col gap-10 pt-12 sm:flex-row">
					<NuxtImg
						loading="lazy"
						class="aspect-[4/5] w-56 flex-none rounded-2xl object-cover"
						provider="cloudinary"
						src="/damisparks.com/ds-portrait-tiny.webp"
						height="800"
						width="800"
						format="webp"
						alt="dami sparks omifare"
					/>
					<div class="max-w-xl flex-auto">
						<h3
							class="text-lg font-firasans font-semibold leading-8 tracking-tight text-zinc-800 dark:text-zinc-100"
						>
							I am {{ me.name }}
						</h3>
						<p class="text-base leading-7 text-zinc-600 dark:text-zinc-400">
							{{ me.role }}
						</p>
						<p
							class="mt-6 text-base leading-7 text-zinc-600 dark:text-zinc-400"
						>
							{{ me.specialisation }}
						</p>
						<div role="list" class="mt-6 flex gap-x-6">
							<AppSocials />
						</div>
					</div>
				</div>
			</section>

			<div class="mt-16 sm:max-w-lg sm:mx-auto text-center">
				<NuxtLink
					:to="{ name: 'contact' }"
					class="btn btn-ds-blue font-firasans font-semibold w-full block"
				>
					Let's talk
				</NuxtLink>
			</div>
		</div>
	</NuxtLayout>
</template>
