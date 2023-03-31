<script setup lang="ts">
import { links as navList } from '@/utils'
</script>
<template>
	<nav class="shadow-lg">
		<AppNavList :nav-list="navList" />

		<AppMobileNav :nav-list="navList" />
	</nav>
</template>
