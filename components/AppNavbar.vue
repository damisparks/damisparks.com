<script setup lang="ts">
import { links as navList } from '@/utils'
</script>
<template>
	<AppContainer>
		<nav class="flex items-center justify-between">
			<!-- <h1 class="text-ds-blue">
			<span class="font-normal">Dami</span>
			<span class="font-semibold">Sparks</span>
		</h1> -->
			<AppLogo />
			<div
				class="border border-zinc-300/50 dark:border-zinc-900/60 rounded-full pl-2 lg:pl-4 pr-2 py-2 backdrop-blur-lg bg-zinc-100/50 dark:bg-zinc-800/50"
			>
				<div class="flex items-center gap-4">
					<div class="hidden md:block">
						<AppNavList :nav-list="navList" />
					</div>

					<!-- mobile nav -->
					<div class="md:hidden">
						<AppMobileNav :nav-list="navList" />
					</div>
				</div>
			</div>
		</nav>
	</AppContainer>
</template>
