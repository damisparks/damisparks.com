import type { ParsedContent } from '@nuxt/content'

export default interface Notes extends ParsedContent {
  description: string
  tags: string[]
  date: Date
  image: string
}
