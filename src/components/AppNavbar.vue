<script setup lang="ts">
import nav from '@/ui.config/nav'
import navigation from '@/data/navigation'

const navClasses = computed(() => [
	nav.height,
	nav.base,
	nav.position,
	nav.background,
	nav.backdrop,
	nav.paddingX,
])

const github = computed(() =>
	navigation.socials.find(item => item.name === 'GitHub')
)

const navTextClasses = computed(() => [nav.inner.font, nav.inner.textSize])

const route = useRoute()
</script>
<template>
	<nav :class="navClasses">
		<!-- TODO: add logo or svg -->
		<NuxtLink to="/">DS</NuxtLink>
		<ul :class="nav.inner.base">
			<li v-for="item in navigation.navItems" :key="item.name">
				<NuxtLink
					:to="item.href"
					:class="[
						...navTextClasses,
						route.path === item.href ? 'underline' : '',
					]"
				>
					{{ item.name }}
				</NuxtLink>
			</li>
			<li>
				<NuxtLink external :to="github?.href" :title="github?.name">
					<Icon size="24px" :name="github?.iconKey as string" />
				</NuxtLink>
			</li>
			<li>
				<ColorSwitch />
			</li>
		</ul>
	</nav>
</template>

/* TODO: fix the issue when rolling later. */
<!-- <style scoped>
.bg-image {
  background-image: linear-gradient(
    rgb(245, 245, 247) calc(114px),
    rgb(255, 255, 255) 0%
  );
  background-color: rgba(0, 0, 0, 0);
}
</style> -->
