<script setup lang="ts">
import storycard from '~/ui.config/storycard'
type HrefTargetType = '_blank' | '_self' | '_parent' | '_top'
type StoryCardProps = {
  to: string
  title: string
  description?: string
  target?: HrefTargetType
}
const props = withDefaults(defineProps<StoryCardProps>(), {
  description: '',
  target: '_self'
})

const storyCardClasses = computed(() => [
  storycard.wrapper,
  storycard.ring,
  storycard.rounded,
  storycard.base,
  storycard.shadow
])

const bodyClasses = computed(() => [
  storycard.body,
  storycard.padding
])

const titleClasses = computed(() => [
  storycard.title
])
</script>
<template>
  <div :class="storyCardClasses">
    <div
      v-if="$slots.header"
      :class="storycard.base"
    >
      <slot name="header" />
    </div>
    <div :class="bodyClasses">
      <div
        v-if="props.title"
      >
        <AppTypography
          paragraph
          :class="titleClasses"
          variant="default"
          class="text-lg truncate"
        >
          {{ props.title }}
        </AppTypography>
      </div>
      <slot
        v-else
        name="title"
      />
      <AppTypography
        paragraph
        variant="secondary"
        class="mt-1 text-sm line-clamp-2"
      >
        {{ props.description }}
      </AppTypography>
    </div>
    <div
      v-if="$slots.footer"
      :class="storycard.footer.padding"
    >
      <slot name="footer" />
    </div>
    <NuxtLink
      :to="props.to"
      :target="props.target"
    >
      <span
        class="absolute inset-0"
        aria-hidden="true"
      />
    </NuxtLink>
  </div>
</template>
