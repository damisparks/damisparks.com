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
        title: z.string(),
        date: z.date(),
        tags: z.array(z.string()),
        image: z.string(),
        description: z.string(),
      }),
    }),
  },
})
