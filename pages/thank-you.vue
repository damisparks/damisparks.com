<script setup lang="ts"></script>
<template>
	<AppContainer>
		<div class="relative">
			<div class="mx-auto max-w-lg absolute inset-x-16 mt-16 sm:mt-32">
				<div
					class="group aspect-h-7 aspect-w-10 -rotate-12 w-full overflow-hidden rounded-lg shadow-2xl bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100"
				>
					<NuxtImg
						loading="lazy"
						class="pointer-events-none object-cover group-hover:opacity-75"
						src="https://images.unsplash.com/photo-1635346236957-1d34fd8c81a4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
						height="800"
						width="800"
						format="webp"
						alt="thank you"
					/>
				</div>
				<div class="pt-8 sm:pt-12 space-y-4 flex items-center flex-col">
					<AppTitle>I will be in touch soon</AppTitle>
					<NuxtLink to="/" class="btn btn-ds-blue"> Go back home </NuxtLink>
				</div>
			</div>
		</div>
	</AppContainer>
</template>
