<template>
  <div class="sm:flex">
    <div class="mb-4 shrink-0 sm:mr-4 sm:mb-0">
      <slot name="media" />
    </div>
    <div v-if="$slots.content">
      <slot name="content" />
    </div>
  </div>
</template>
