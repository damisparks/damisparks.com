import { defineCollection, defineContentConfig, z } from '@nuxt/content'
import { asOgImageCollection } from 'nuxt-og-image/content'

export default defineContentConfig({
  collections: {
    content: defineCollection(
      asOgImageCollection({
        type: 'page',
        source: '**/*.md',
      }),
    ),
    page: defineCollection({
      source: '*.md',
      type: 'page',
    }),
    notes: defineCollection({
      type: 'page',
      source: 'notes/*.md',
      schema: z.object({
        title: z.string(),
        date: z.date(),
        tags: z.array(z.string()),
        image: z.string(),
        description: z.string(),
      }),
    }),
    bio: defineCollection({
      type: 'page',
      source: 'bio.md',
      schema: z.object({
        title: z.string(),
        description: z.string(),
      }),
    }),
  },
})
