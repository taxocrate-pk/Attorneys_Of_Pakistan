import Link from 'next/link'
import { ChevronDown, Menu, Phone, Scale } from 'lucide-react'
import { pages, pathFor } from '../lib/routes'
import { siteConfig } from '../lib/content'

const groups = [...new Set(pages.map(page => page.group))]

export function Brand() {
  return <Link href="/" className="flex items-center gap-3" aria-label="Attorneys of Pakistan home">
    <span className="grid size-10 place-items-center rounded-full border border-[var(--brass)] text-[var(--brass)]"><Scale aria-hidden="true" size={19} /></span>
    <span className="font-serif text-lg font-semibold tracking-tight text-[var(--ink)]">Attorneys <span className="font-normal text-[var(--brass)]">of Pakistan</span></span>
  </Link>
}

function ServiceLinks() {
  return <div className="grid gap-6 p-5 lg:grid-cols-2 lg:p-7">{groups.map(group => <div key={group}>
    <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-[var(--brass)]">{group}</p>
    <div className="grid gap-2">{pages.filter(page => page.group === group).map(page => <Link key={page.slug} href={pathFor(page.slug)} className="block text-sm leading-5 hover:text-[var(--brass)]">{page.title}</Link>)}</div>
  </div>)}</div>
}

export default function SiteHeader() {
  return <header className="relative z-30 border-b border-black/10 bg-[var(--paper)]">
    <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
      <Brand />
      <nav className="hidden items-center gap-8 text-sm font-medium lg:flex" aria-label="Primary navigation">
        <Link href="/" className="hover:text-[var(--brass)]">Home</Link>
        <details className="group relative"><summary className="flex cursor-pointer list-none items-center gap-1 hover:text-[var(--brass)]">Our Services <ChevronDown size={15} className="group-open:rotate-180" /></summary><div className="absolute left-1/2 top-full z-40 mt-4 hidden max-h-[70vh] group-hover:block group-focus-within:block group-open:block w-[min(760px,90vw)] -translate-x-1/2 overflow-y-auto rounded-2xl border border-black/10 bg-[var(--paper)] shadow-xl"><ServiceLinks /></div></details>
        <Link href="/blog/" className="hover:text-[var(--brass)]">Blog</Link>
        <Link href="/about-us/" className="hover:text-[var(--brass)]">About Us</Link>
      </nav>
      <div className="flex items-center gap-3">
        <a href={`tel:${siteConfig.phone.replaceAll(' ', '')}`} className="hidden items-center gap-2 text-sm font-medium md:flex"><Phone size={15} /> {siteConfig.phone}</a>
        <Link href="/contact-us/" className="rounded-full bg-[var(--ink)] px-5 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-white transition hover:bg-[var(--brass)] hover:text-[var(--ink)]">Consultation</Link>
        <details className="group relative lg:hidden"><summary className="grid size-10 cursor-pointer list-none place-items-center rounded-full border border-black/10" aria-label="Open navigation"><Menu size={18} /></summary><nav aria-label="Mobile navigation" className="absolute right-0 top-full z-40 mt-3 max-h-[75vh] w-[min(360px,90vw)] overflow-y-auto rounded-2xl border border-black/10 bg-[var(--paper)] p-5 shadow-xl"><div className="grid gap-4 text-sm font-medium"><Link href="/">Home</Link><details><summary className="flex cursor-pointer list-none items-center gap-1">Our Services <ChevronDown size={15} /></summary><ServiceLinks /></details><Link href="/blog/">Blog</Link><Link href="/about-us/">About Us</Link></div></nav></details>
      </div>
    </div>
  </header>
}
