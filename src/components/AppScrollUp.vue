<script setup lang="ts">
import { ref } from 'vue'
import { useWindowScroll } from '@vueuse/core'

const buttonOpacity = ref(0)
const { y: scroll } = useWindowScroll()
const gotoTop = () => {
	window.scrollTo({
		top: 0,
		behavior: 'smooth',
	})
}

// Calculate opacity based on scroll position
buttonOpacity.value = Math.min(1, (scroll.value - 300) / 300)
</script>

<template>
	<button
		class="fixed right-3 bottom-3 w-10 h-10 rounded-full transition duration-300 z-50 print:hidden shadow"
		:style="`backdrop-filter: blur(${(1 - buttonOpacity) * 10}px);
            background-color: rgba(240, 240, 240, ${buttonOpacity});
            backdrop-blur: blur(${(1 - buttonOpacity) * 10}px);
            visibility: ${scroll > 300 ? 'visible' : 'hidden'};
            `"
		@click="gotoTop"
	>
		<Icon name="fluent:arrow-up-20-regular" />
	</button>
</template>
