<script lang="ts" setup>
const me = ref({
	name: 'Dami Sparks',
	role: ['Digital Freelancer', 'Full-Stack Developer', 'Mentor'],
	shortDescription: `I'm a digital freelance full-stack developer, mentor and technical writer passionate about crafting solid and scalable digital products and helping others find their passion for coding. I'm all about combining innovative development and product thinking to bring ideas into reality.`,
	want: 'Are you looking for a freelance Vue.js developer? 🔎',
	wantCriteria: [
		'Support to craft a complex web and mobile application to your needs?',
		'A hybrid developer with frontend expertise with cross-discipline competencies in backend development, testing, continuous integration and development, and cloud computing?',
		'A developer who focuses on clean, high-quality, scalable and well-documented code?',
		'A developer who delivers products timely within the budget?'
	]
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
						{{ me.want }}
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
							:key="`wantCriteria-${idx}`"
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
			<div class="mt-8 sm:max-w-lg sm:mx-auto text-center">
				<NuxtLink :to="{ name: 'about' }" class="btn btn-ds-blue">
					Learn More
				</NuxtLink>
			</div>
		</div>
	</NuxtLayout>
</template>
