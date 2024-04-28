<script setup lang="ts">
const { formdateDate } = useDate()
defineProps<{ date: string }>()
</script>
<template>
	<time :datetime="date" class="text-zinc-500 dark:text-zinc-400 text-sm">
		{{ formdateDate(date) }}
	</time>
</template>
