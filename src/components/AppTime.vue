<script setup lang="ts">
const { formdateDate } = useDate()
defineProps<{ date: string }>()
</script>
<template>
	<time :datetime="date" class="text-gray-500 dark:text-gray-400 text-sm">
		{{ formdateDate(date) }}
	</time>
</template>
