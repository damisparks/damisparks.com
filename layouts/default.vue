<template>
	<main class="flex flex-col h-screen">
		<div class="flex-auto">
			<div>
				<AppHeader />
			</div>
			<slot></slot>
		</div>
		<AppFooter />
	</main>
</template>
