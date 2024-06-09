<script setup lang="ts">
const colorMode = useColorMode()
</script>
<template>
  <button
    role="button"
    aria-label="Change site theme"
    type="button"
    class="bg-zinc-300/80 dark:bg-zinc-800 relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-1 focus:ring-zinc-300 focus:ring-offset-1"
    @click="
      colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
    "
  >
    <ColorScheme
      placeholder="..."
      tag="span"
    >
      <template v-if="colorMode.value === 'light'">
        <Icon
          size="20px"
          name="fluent:weather-sunny-20-regular"
          class="translate-x-5 transform rounded-full bg-white text-yellow-500 shadow transition duration-200 ease-in-out"
        />
      </template>
      <template v-if="colorMode.value === 'dark'">
        <Icon
          size="20px"
          name="fluent:weather-moon-16-regular"
          class="transform rounded-full bg-black text-yellow-500 shadow transition duration-200 ease-in-out"
        />
      </template>
    </ColorScheme>
  </button>
</template>
