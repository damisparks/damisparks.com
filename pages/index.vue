<script lang="ts" setup>
const me = ref({
	name: 'Dami Sparks',
	role: ['Digital Freelancer', 'Software Engineer'],
	shortDescription: `I'm Dami, a digital freelancer, full-stack software and technical writer based in Lisboa who's passionate about creating digital products and helping others find their passion to code. I'm all about combining innovative development and product thinking to bring ideas into reality.`
})
</script>

<template>
	<div class="pb-16 sm:pb-24 lg:pb-32">
		<div class="mt-16 mx-auto max-w-7xl px-4 sm:mt-24 sm:px-6 lg:mt-32">
			<div class="lg:grid lg:grid-cols-12 lg:gap-8">
				<div
					class="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left"
				>
					<h1 class="space-y-3 font-opensans">
						<span
							class="mt-1 space-y-2 block text-4xl tracking-tight font-extrabold sm:text-5xl xl:text-6xl"
						>
							<span class="block text-ds-blue">
								I'm
								<NuxtLink to="/">
									<span>{{ me.name }}</span>
								</NuxtLink>
							</span>
							<span class="block text-ds-teal">
								<span v-for="(item, index) in me.role" :key="index">
									{{ item }}

									<span
										v-if="index !== me.role.length - 1"
										class="h-4 w-4 inline-block rounded-full bg-ds-orange mr-2 lg:mr-3"
									></span>
								</span>
							</span>
						</span>
					</h1>
					<p
						class="mt-3 text-base text-zinc-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl"
					>
						{{ me.shortDescription }}
					</p>
					<div
						class="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0"
					>
						<NuxtLink :to="{ name: 'about' }">
							<span
								class="p-3 bg-ds-blue text-white text-base leading-5 font-bold rounded hover:shadow-lg"
								>Learn More</span
							>
						</NuxtLink>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
