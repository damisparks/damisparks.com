<script setup lang="ts">
const year = new Date().getFullYear()
</script>

<template>
  <footer class="pb-8 pt-16">
    <div class="lg:flex lg:items-center lg:justify-between">
      <div class="max-w-md">
        <AppTypography
          tag="h3"
          class="font-notosans font-medium"
        >
          Let's inspire growth together
        </AppTypography>
        <AppTypography
          paragraph
          variant="muted"
          class="mt-2 text-sm leading-6"
        >
          Feel free to reach out if you're looking for a software engineer, have
          a question or just want to connect 📭
        </AppTypography>
      </div>
    </div>
    <div
      class="mt-8 border-t border-zinc-900/10 pt-8 md:flex md:items-center md:justify-between"
    >
      <div class="flex md:order-2">
        <AppSocials />
      </div>
      <div
        class="body-compact-small mt-8 text-[12px] leading-[16px] md:order-1 md:mt-0"
      >
        <AppTypography
          tag="span"
          variant="secondary"
        >
          &copy; Dami Sparks {{ year }} | Software Engineer |
        </AppTypography>
        <NuxtLink
          to="https://creativecommons.org/licenses/by-sa/4.0/"
          class="hover:underline"
        >
          <AppTypography
            tag="span"
            variant="secondary"
          >
            CC BY-SA 4.0
          </AppTypography>
        </NuxtLink>
      </div>
    </div>
  </footer>
</template>
