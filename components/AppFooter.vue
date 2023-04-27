<template>
	<AppContainer>
		<footer>
			<div class="py-12">
				<div class="flex justify-center space-x-6 md:order-2">
					<AppSocials />
				</div>
				<div class="mt-8 md:order-1 md:mt-0">
					<p class="mt-8 text-center text-sm leading-5">
						<NuxtLink to="/privacy" class="text-zinc-500 mr-3">
							Privacy Policy
						</NuxtLink>

						<!-- copyright -->
						&copy; {{ new Date().getFullYear() }}
						<NuxtLink to="/" class="text-zinc-500">DamiSparks</NuxtLink>, All
						rights reserved.
					</p>
				</div>
			</div>
			<p class="my-4 font-montserrat italic text-center text-sm text-zinc-600">
				Logo by
				<a
					class="text-ds-blue dark:text-ds-teal hover:opacity-90 font-bold"
					href="mailto:rubenfaria@live.com"
				>
					Ruben
				</a>
			</p>
		</footer>
		<CookieConsent />
	</AppContainer>
</template>
