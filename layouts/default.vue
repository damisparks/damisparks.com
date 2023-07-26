<template>
	<main class="h-screen flex flex-col">
		<!-- page ring -->
		<div class="fixed inset-0 flex justify-center sm:px-8">
			<div class="flex w-full max-w-7xl lg:px-8">
				<div
					class="w-full bg-white ring-1 ring-zinc-200/50 dark:bg-zinc-800 dark:ring-zinc-500/20"
				/>
			</div>
		</div>

		<AppNavbar />

		<!-- main -->
		<div class="flex-auto">
			<AppContainer><slot /></AppContainer>
		</div>

		<div>
			<!-- footer -->
			<AppFooter />
		</div>
	</main>
</template>
