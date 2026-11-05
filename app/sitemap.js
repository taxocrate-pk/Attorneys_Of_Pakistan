import { allPages, blogPosts, pathFor } from '../lib/routes'
import { siteConfig } from '../lib/content'

export default function sitemap() {
  const paths = ['/', '/blog/', ...[...allPages, ...blogPosts].map(({ slug }) => pathFor(slug))]
  return paths.map(path => ({ url: `${siteConfig.url}${path}`, lastModified: '2026-11-05' }))
}
