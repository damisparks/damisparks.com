<template>
	<main class="flex flex-col h-screen">
		<div class="flex-auto">
			<div>
				<AppHeader />
				<div class="my-4">
					<AppNavbar />
				</div>
			</div>
			<slot></slot>
		</div>
		<AppFooter />
	</main>
</template>
