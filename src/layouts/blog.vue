<template>
	<div class="h-screen flex flex-col">
		<!--  mx-auto max-w-2xl px-4 md:px-6 lg:px-8 -->
		<AppNavbar />
		<AppContainer>
			<div class="flex-auto mt-12">
				<slot />
			</div>
			<div>
				<AppFooter />
			</div>
		</AppContainer>
	</div>
</template>
