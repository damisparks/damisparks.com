<script setup lang="ts">
import card from '@/ui.config/card'

type CardPropsType = { as?: string }
const cardClasses = computed(() => [
  card.background,
  card.base,
  card.shadow,
  card.rounded,
  card.ring,
  card.divider
])

const props = withDefaults(defineProps<CardPropsType>(), { as: 'div' })

const headerClasses = computed(() => [
  card.header.base,
  card.header.padding,
  card.header.background
])

const bodyClasses = computed(() => [
  card.body.background,
  card.body.padding,
  card.body.base
])

const footerClasses = computed(() => [
  card.footer.base,
  card.footer.padding,
  card.footer.background
])
</script>

<template>
  <component
    :is="props.as"
    :class="cardClasses"
    v-bind="$attrs"
  >
    <div
      v-if="$slots.header"
      :class="headerClasses"
    >
      <slot name="header" />
    </div>
    <div :class="bodyClasses">
      <slot />
    </div>
    <div
      v-if="$slots.footer"
      :class="footerClasses"
    >
      <slot name="footer" />
    </div>
  </component>
</template>
