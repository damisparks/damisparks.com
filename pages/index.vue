<script lang="ts" setup>
const me = ref({
	name: 'Dami Sparks',
	role: ['Digital Freelancer', 'Software Engineer'],
	shortDescription: `I'm Dami, a digital freelancer, full-stack software and technical writer based in Lisboa who's passionate about creating digital products and helping others find their passion to code. I'm all about combining innovative development and product thinking to bring ideas into reality.`
})
</script>

<template>
	<div class="relative bg-white overflow-hidden">
		<div class="hidden lg:block lg:absolute lg:inset-0" aria-hidden="true">
			<svg
				class="absolute top-0 left-1/2 transform translate-x-64 -translate-y-8"
				width="640"
				height="784"
				fill="none"
				viewBox="0 0 640 784"
			>
				<defs>
					<pattern
						id="9ebea6f4-a1f5-4d96-8c4e-4c2abf658047"
						x="118"
						y="0"
						width="20"
						height="20"
						patternUnits="userSpaceOnUse"
					>
						<rect
							x="0"
							y="0"
							width="4"
							height="4"
							class="text-gray-200"
							fill="currentColor"
						/>
					</pattern>
				</defs>
				<rect
					y="72"
					width="640"
					height="640"
					class="text-gray-50"
					fill="currentColor"
				/>
				<rect
					x="118"
					width="404"
					height="784"
					fill="url(#9ebea6f4-a1f5-4d96-8c4e-4c2abf658047)"
				/>
			</svg>
		</div>

		<div class="relative pb-16 sm:pb-24 lg:pb-32">
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
							class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl"
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
					<div
						class="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center"
					>
						<svg
							class="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-8 scale-75 origin-top sm:scale-100 lg:hidden"
							width="640"
							height="784"
							fill="none"
							viewBox="0 0 640 784"
							aria-hidden="true"
						>
							<defs>
								<pattern
									id="4f4f415c-a0e9-44c2-9601-6ded5a34a13e"
									x="118"
									y="0"
									width="20"
									height="20"
									patternUnits="userSpaceOnUse"
								>
									<rect
										x="0"
										y="0"
										width="4"
										height="4"
										class="text-gray-200"
										fill="currentColor"
									/>
								</pattern>
							</defs>
							<rect
								y="72"
								width="640"
								height="640"
								class="text-gray-50"
								fill="currentColor"
							/>
							<rect
								x="118"
								width="404"
								height="784"
								fill="url(#4f4f415c-a0e9-44c2-9601-6ded5a34a13e)"
							/>
						</svg>
						<div
							class="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md"
						>
							<img
								class="w-full rounded-lg shadow-xl"
								src="https://images.unsplash.com/photo-1556740758-90de374c12ad?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
								alt=""
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
