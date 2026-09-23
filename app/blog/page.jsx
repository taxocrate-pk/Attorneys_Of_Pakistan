import Link from 'next/link'
import SiteHeader from '../../components/site-header'
import { blogPosts, pathFor } from '../../lib/routes'

export const metadata = { title: 'Blog | Attorneys of Pakistan', alternates: { canonical: '/blog/' } }

export default function Blog() { return <div className="min-h-screen bg-[var(--paper)] text-[var(--ink)]"><SiteHeader /><main className="mx-auto max-w-5xl px-5 py-20 lg:px-8"><p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--brass)]">Legal insights</p><h1 className="mt-5 font-serif text-5xl">Blog</h1><div className="mt-12 border-t border-black/10">{blogPosts.map(post => <article key={post.slug} className="border-b border-black/10 py-8"><p className="text-sm text-[var(--muted)]">{post.date}</p><h2 className="mt-2 font-serif text-3xl"><Link href={pathFor(post.slug)}>{post.title}</Link></h2><p className="mt-3 text-[var(--muted)]">{post.summary}</p></article>)}</div></main></div> }
