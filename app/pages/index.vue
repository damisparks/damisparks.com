<script setup lang="ts">
import { showcase } from '@/data/projects'

const threeShowcase = showcase.slice(0, 3)
const moreShowcase = showcase.slice(3)
</script>

<template>
  <div class="space-y-4 slide-enter">
    <section class="pt-8">
      <AppTopBlurb>
        <AppBlurb>
          Committed to
          <span class="text-[#475DC9] dark:text-[#5F7BD7]">envisioning</span> ideas
          and <span class="text-[#C83F49] dark:text-[#E77471]">turning</span> them
          into scalable digital products while
          <span class="text-[#437C17] dark:text-[#A0D6B4]">igniting</span> a passion
          for coding in
          <span class="text-[#BC4E12] dark:text-[#F1811E]">others</span>
        </AppBlurb>
      </AppTopBlurb>
    </section>
    <section class="py-8 text-center space-y-8">
      <AppHeadlineFluid
        tag="h2"
        class="py-8"
      >
        Digital products. Built with you in mind.
      </AppHeadlineFluid>
      <div class="inline-flex items-center space-x-4">
        <UButton
          variant="outline"
          to="/bio"
        >
          See my bio
        </UButton>
        <UButton
          to="/projects"
        >
          All works
        </UButton>
      </div>
    </section>
    <section>
      <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 pt-8">
        <div class="space-y-6">
          <AppTypography
            paragraph
            variant="muted"
            class="uppercase"
          >
            featured work
          </AppTypography>
          <div
            v-for="item in threeShowcase"
            :key="item.id"
          >
            <NuxtLink
              class="grid grid-cols-6 gap-3 items-center hover:bg-primary-50 dark:hover:bg-primary-500/40 p-2 rounded-md"
              :to="item.websiteUrl"
              target="_blank"
              external
            >
              <NuxtImg
                class="object-cover object-center col-span-2 w-full h-16 rounded-md"
                :src="item.imageUrl"
                alt=""
              />
              <div class="col-span-4">
                {{ item.name }}
              </div>
            </NuxtLink>
          </div>
        </div>
        <NuxtLink
          v-if="moreShowcase[0]"
          :to="moreShowcase[0].websiteUrl"
          external
          class="h-fit"
        >
          <NuxtImg
            class="object-cover w-full rounded-md border border-gray-100"
            :src="moreShowcase[0].imageUrl"
            alt=""
          />
          <AppTypography
            paragraph
            class="py-4"
          >
            {{ moreShowcase[0]?.name }}
          </AppTypography>
        </NuxtLink>
      </div>
    </section>
  </div>
</template>
