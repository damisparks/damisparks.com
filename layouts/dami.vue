<template>
	<div>
		<div class="fixed inset-0 flex justify-center sm:px-8">
			<div class="flex w-full max-w-7xl lg:px-8">
				<div
					class="w-full bg-white ring-1 ring-zinc-200/50 dark:bg-zinc-900 dark:ring-zinc-500/20"
				/>
			</div>
		</div>
		<div class="relative">
			<AppNavbar />
			<main>
				<AppContainer>
					<slot />
				</AppContainer>
			</main>
			<AppFooter />
		</div>
	</div>
</template>
