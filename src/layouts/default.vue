<template>
	<div class="h-screen flex flex-col mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
		<AppNavbar />
		<div class="flex-auto mx-auto mt-12">
			<slot />
		</div>
		<div>
			<AppFooter />
		</div>
	</div>
</template>
