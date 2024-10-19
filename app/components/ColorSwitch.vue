<script setup lang="ts">
const colorMode = useColorMode()
</script>

<template>
  <button
    role="button"
    aria-label="Change site theme"
    type="button"
    class="relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-zinc-300/80 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-1 focus:ring-zinc-300 focus:ring-offset-1 dark:bg-zinc-800"
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
          class="translate-x-5 rounded-full bg-white text-yellow-500 shadow transition duration-200 ease-in-out"
        />
      </template>
      <template v-if="colorMode.value === 'dark'">
        <Icon
          size="20px"
          name="fluent:weather-moon-16-regular"
          class="rounded-full bg-black text-yellow-500 shadow transition duration-200 ease-in-out"
        />
      </template>
    </ColorScheme>
  </button>
</template>
