<template>
  <div class="flex">
    <div class="mr-4 shrink-0">
      <slot name="media" />
    </div>
    <div v-if="$slots.content">
      <slot name="content" />
    </div>
  </div>
</template>
