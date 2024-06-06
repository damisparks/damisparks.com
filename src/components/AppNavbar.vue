<script setup lang="ts">
import nav from '@/ui.config/nav'
import navigation from '@/data/navigation'

const route = useRoute()
const navClasses = computed(() => [
  nav.height,
  nav.base,
  nav.position,
  nav.background,
  nav.backdrop,
])

const navTextClasses = computed(() => [nav.inner.font, nav.inner.textSize])
</script>
<template>
  <nav :class="navClasses">
    <AppContainer class="w-full">
      <div :class="nav.wrapper">
        <NuxtLink to="/">
          <pre class="inline-flex">
						<small>{{ '<' }}</small>
						<small class="text-sm text-primary-500">damisparks</small>
						<small>{{ '/>' }}</small>
					</pre>
        </NuxtLink>
        <ul :class="nav.inner.base">
          <li
            v-for="item in navigation.navItems"
            :key="item.name"
          >
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
          <li
            v-for="item in navigation.socials"
            :key="item.name"
          >
            <NuxtLink
              external
              target="_blank"
              :to="item?.href"
              :title="`Visit ${item.name}`"
            >
              <Icon
                size="20px"
                :name="item.iconKey"
              />
              <span class="sr-only">
                {{ item.name }}
              </span>
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
