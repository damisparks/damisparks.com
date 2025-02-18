import { SitemapStream, streamToPromise } from 'sitemap'

export default defineEventHandler(async (event) => {
  // Fetch all documents
  const docs = await queryCollection(event, 'notes').all()
  const sitemap = new SitemapStream({
    hostname: process.env.NODE_ENV !== 'development'
      ? 'https://damisparks.com'
      : 'http://localhost:3000',
  })

  for (const doc of docs) {
    sitemap.write({
      url: doc.path,
      changefreq: 'monthly',
    })
  }
  sitemap.end()

  return streamToPromise(sitemap)
})
