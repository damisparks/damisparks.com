<script setup lang="ts">
import { links as navList } from '@/constants'

const showNavbar = ref<boolean>(true)
const lastScrollPosition = ref<number>(0)

const onScroll = () => {
	const currentScrollPosition =
		window.pageYOffset || document.documentElement.scrollTop
	// Momentum scrolling on iOS can cause the scroll position to be negative
	if (currentScrollPosition < 0) return
	// add 60px delay
	if (Math.abs(currentScrollPosition - lastScrollPosition.value) < 60) return
	// show if scrolling up
	showNavbar.value = currentScrollPosition < lastScrollPosition.value
	lastScrollPosition.value = currentScrollPosition
}

onMounted(() => {
	window.addEventListener('scroll', onScroll)
})

onBeforeUnmount(() => {
	window.removeEventListener('scroll', onScroll)
})
</script>
<template>
	<div
		:class="[
			showNavbar ? 'translate-y-0' : '-translate-y-full',
			'transform-gpu transition-transform duration-500 sticky top-0 z-50',
		]"
	>
		<AppContainer class="pt-2">
			<nav class="flex items-center justify-between">
				<NuxtLink to="/">
					<AppLogo />
				</NuxtLink>
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
						<AppColorSwitch />
					</div>
				</div>
			</nav>
		</AppContainer>
	</div>
</template>
