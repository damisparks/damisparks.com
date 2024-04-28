<script setup lang="ts">
import nav from '@/ui.config/nav'
import navigation from '@/data/navigation'

const route = useRoute()
const img = useImage()
const navClasses = computed(() => [
	nav.height,
	nav.base,
	nav.position,
	nav.background,
	nav.backdrop,
])

const github = computed(() =>
	navigation.socials.find(item => item.name === 'GitHub')
)
const navTextClasses = computed(() => [nav.inner.font, nav.inner.textSize])
</script>
<template>
	<nav :class="navClasses">
		<AppContainer class="w-full">
			<div :class="nav.wrapper">
				<NuxtLink to="/">
					<pre class="text-sm text-primary-500 inline-flex">
						<small>{{ '<' }}</small>
						<small>damisparks</small>
						<small>{{ '/>' }}</small>
					</pre>
				</NuxtLink>
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
							<Icon size="20px" :name="github?.iconKey as string" />
						</NuxtLink>
					</li>
					<li class="flex">
						<ColorSwitch />
					</li>
				</ul>
			</div>
		</AppContainer>
	</nav>
</template>
