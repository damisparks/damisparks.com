import { SitemapStream, streamToPromise } from 'sitemap'
import { serverQueryContent } from '#content/server'

export default defineEventHandler(async event => {
  // Fetch all documents
  const docs = await serverQueryContent(event).find()
  const sitemap = new SitemapStream({
    hostname: process.env.NODE_ENV !== 'development'
      ? 'https://damisparks.com'
      : 'http://localhost:3000'
  })

  for (const doc of docs) {
    sitemap.write({
      url: doc._path,
      changefreq: 'monthly'
    })
  }
  sitemap.end()

  return streamToPromise(sitemap)
})
