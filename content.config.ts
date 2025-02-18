import { defineCollection, defineContentConfig, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    page: defineCollection({
      source: '*.md',
      type: 'page',
    }),
    notes: defineCollection({
      type: 'page',
      source: 'notes/*.md',
      schema: z.object({
        description: z.string(),
        tags: z.array(z.string()),
        date: z.date(),
        image: z.string(),
      }),
    }),
  },
})
