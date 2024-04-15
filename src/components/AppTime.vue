<script setup lang="ts">
const { formdateDate } = useDate()
defineProps<{ date: string }>()
</script>
<template>
	<time
		:datetime="date"
		class="text-color-light-muted dark:text-color-light-muted text-sm"
	>
		{{ formdateDate(date) }}
	</time>
</template>
