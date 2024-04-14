<template>
	<main class="h-screen flex flex-col">
		<AppNavbar />
		<!-- main -->
		<div class="flex-auto mt-6">
			<AppContainer><slot /></AppContainer>
		</div>
		<div>
			<AppFooter />
		</div>
	</main>
</template>
