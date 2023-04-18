<script lang="ts" setup>
const me = ref({
	name: 'Dami Sparks',
	role: ['Digital Freelancer', 'Full-Stack Software Engineer', 'Mentor'],
	shortDescription: `I'm a digital freelance full-stack NodeJS engineer, mentor and technical writer passionate about crafting solid and scalable digital products and helping others find their passion for coding. I'm all about combining innovative development and product thinking to bring ideas into reality.`
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
							class="block my-2 font-montserrat text-zinc-500 dark:text-ds-smokewhite"
						>
							Are you looking for ?
						</span>
						<span
							class="block text-ds-teal text-3xl tracking-tight font-bold sm:text-4xl xl:text-5xl space-y-3 font-montserrat"
						>
							<span v-for="(item, index) in me.role" :key="index">
								<span v-if="index !== me.role.length - 1 && index !== 0">
									,
								</span>
								<span v-if="index === me.role.length - 1" class="ml-2">&</span>
								{{ item }}
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
