<script lang="ts" setup>
const me = ref({
	name: 'Dami Sparks',
	role: ['Digital Freelancer', 'Software Engineer'],
	shortDescription: `I'm Dami, a digital freelancer, full-stack software and technical writer based in Lisboa who's passionate about creating digital products and helping others find their passion to code. I'm all about combining innovative development and product thinking to bring ideas into reality.`
})
</script>

<template>
	<NuxtLayout>
		<div>
			<AppHeroText>
				<template #default>
					<span class="mt-1">
						<span
							class="text-base font-normal text-ds-blue dark:text-ds-blue-accent-400"
						>
							Hi there, I am
							<NuxtLink
								:to="{ name: 'about' }"
								class="font-montserrat underline"
							>
								{{ me.name }}
							</NuxtLink>
							✋🏾
						</span>
						<span
							class="block text-ds-teal text-4xl tracking-tight font-bold sm:text-5xl xl:text-6xl space-y-3 font-montserrat"
						>
							<span v-for="(item, index) in me.role" :key="index">
								{{ item }}

								<span
									v-if="index !== me.role.length - 1"
									class="h-4 w-4 inline-block rounded-full bg-ds-orange mr-2 lg:mr-3"
								></span>
							</span>
						</span>
					</span>
				</template>
				<template #description>
					<span
						class="mt-3 text-base text-zinc-500 dark:text-ds-smokewhite sm:mt-5 sm:text-xl lg:text-lg xl:text-xl"
					>
						{{ me.shortDescription }}
					</span>
				</template>
			</AppHeroText>

			<div class="mt-8 sm:max-w-lg sm:mx-auto text-center">
				<NuxtLink :to="{ name: 'about' }" class="btn btn-ds-blue">
					Learn More
				</NuxtLink>
			</div>
		</div>
	</NuxtLayout>
</template>
