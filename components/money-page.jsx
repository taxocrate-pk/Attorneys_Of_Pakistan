import Link from 'next/link'
import { MessageCircle, Phone } from 'lucide-react'
import SiteHeader from './site-header'
import { siteConfig } from '../lib/content'
import { pathFor } from '../lib/routes'

// Renders a full "money page" from the structured data in lib/money-pages/.
// Inline links in copy use the form [anchor text](/slug/).

const linkPattern = /\[([^\]]+)\]\(([^)]+)\)/g

export function Rich({ text }) {
  const parts = []
  let last = 0
  let match
  linkPattern.lastIndex = 0
  while ((match = linkPattern.exec(text))) {
    if (match.index > last) parts.push(text.slice(last, match.index))
    const [, anchor, href] = match
    parts.push(href.startsWith('/')
      ? <Link key={match.index} href={href} className="font-medium underline decoration-[var(--brass)] underline-offset-4 hover:text-[var(--brass)]">{anchor}</Link>
      : <a key={match.index} href={href} className="underline" rel="noopener">{anchor}</a>)
    last = match.index + match[0].length
  }
  if (last < text.length) parts.push(text.slice(last))
  return parts
}

export const plain = text => text.replace(linkPattern, '$1')

const digits = phone => phone.replace(/[^0-9]/g, '')

// Hero image slot: renders nothing until an image is supplied in the page data.
export function HeroImage({ image }) {
  if (!image?.src) return null
  return <figure className="mt-12 overflow-hidden rounded-2xl border border-black/10">
    <img src={image.src} alt={image.alt || ''} width={image.width || 1200} height={image.height || 675} className="h-auto w-full" loading="eager" decoding="async" />
  </figure>
}

const LAWYERS = {
  karachi: [['syed-akhtar-rizvi', 'Syed Akhtar Rizvi', 'Advocate Supreme Court'], ['tahir-pervez-qureshi', 'Tahir Pervez Qureshi', 'Advocate High Court']],
  marriage: [['fiaz-ahmed-khakh', 'Fiaz Ahmed Khakh', 'Advocate Supreme Court'], ['tahir-pervez-qureshi', 'Tahir Pervez Qureshi', 'Advocate High Court']],
  default: [['fiaz-ahmed-khakh', 'Fiaz Ahmed Khakh', 'Advocate Supreme Court'], ['syed-akhtar-rizvi', 'Syed Akhtar Rizvi', 'Advocate Supreme Court']],
}
export function LawyerPair({ set = 'default' }) {
  return <div className="grid grid-cols-2 gap-4">{(LAWYERS[set] || LAWYERS.default).map(([file, name, title]) => <figure key={file} className="overflow-hidden rounded-lg border-[3px] border-[var(--brass)] bg-[#efe4cc]">
    <img src={`/lawyers/${file}.webp`} alt={`${name}, ${title}`} width="300" height="375" className="aspect-[4/5] w-full object-cover object-top" loading="lazy" decoding="async" />
    <figcaption className="px-3 py-2 text-sm"><strong className="block font-serif text-[var(--ink)]">{name}</strong><span className="text-[var(--muted)]">{title}</span></figcaption>
  </figure>)}</div>
}

function ContactButtons({ phone, dark = false }) {
  return <div className="flex flex-wrap gap-3">
    <a href={`tel:+${digits(phone)}`} className={`inline-flex items-center gap-2 rounded-md px-6 py-3.5 text-sm font-semibold ${dark ? 'bg-white text-[var(--ink)]' : 'border-2 border-[var(--ink)] text-[var(--ink)]'}`}><Phone size={16} aria-hidden="true" /> Call {phone}</a>
    <a href={`https://wa.me/${digits(phone)}`} className={`inline-flex items-center gap-2 rounded-md px-6 py-3.5 text-sm font-semibold ${dark ? 'bg-[var(--brass)] text-white' : 'bg-[var(--brass)] text-white'}`}><MessageCircle size={16} aria-hidden="true" /> WhatsApp {phone}</a>
  </div>
}

const H2 = ({ children }) => <h2 className="mb-5 font-serif text-3xl leading-tight">{children}</h2>
const H3 = ({ children }) => <h3 className="mb-3 mt-7 font-serif text-xl leading-snug">{children}</h3>

export function moneySchema(slug, page) {
  const canonical = `${siteConfig.url}${pathFor(slug)}`
  return [
    { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: siteConfig.url }, { '@type': 'ListItem', position: 2, name: page.h1, item: canonical }] },
    { '@context': 'https://schema.org', '@type': 'LegalService', name: siteConfig.name, url: canonical, telephone: page.phone, email: siteConfig.email, areaServed: page.areaServed, address: { '@type': 'PostalAddress', streetAddress: page.schemaAddress.street, addressLocality: page.schemaAddress.locality, addressCountry: 'PK' } },
    { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: page.faqs.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: plain(a) } })) },
  ]
}

export default function MoneyPage({ slug, page }) {
  const schema = moneySchema(slug, page)
  return <div className="min-h-screen bg-[var(--paper)] text-[var(--ink)]"><SiteHeader />
    {schema.map((entry, index) => <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(entry).replace(/</g, '\\u003c') }} />)}
    <main data-keyphrase={page.keyphrase} className="mx-auto max-w-5xl px-5 py-14 lg:px-8 lg:py-20">
      <nav aria-label="Breadcrumb" className="mb-10 text-sm text-[var(--muted)]"><Link href="/">Home</Link> / {page.group} / {page.keyphrase}</nav>
      <p className="mb-5 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--brass)]">{page.group}</p>
      <h1 className="max-w-4xl font-serif text-4xl leading-tight tracking-tight md:text-5xl">{page.h1}</h1>
      <div className="mt-7 max-w-3xl space-y-5 text-lg leading-8 text-[var(--muted)]">{page.intro.map((p, i) => <p key={i}><Rich text={p} /></p>)}</div>
      <div className="mt-8 max-w-3xl rounded-2xl border border-[var(--brass)]/40 bg-white/50 p-6">
        <p className="mb-4 text-sm font-semibold">{page.shortCta}</p>
        <ContactButtons phone={page.phone} />
        <p className="mt-4 text-sm text-[var(--muted)]">Office: {page.officeLine}</p>
      </div>
      <HeroImage image={page.heroImage} />
      <div className="mt-10 max-w-xl"><LawyerPair set={/marriage|nikah/i.test(page.keyphrase + ' ' + page.h1) ? 'marriage' : /Karachi/.test(page.officeLine) ? 'karachi' : 'default'} /></div>

      <article className="mt-16 space-y-14 border-t border-black/10 pt-12 text-base leading-8">
        {page.cards && <section><H2>{page.cards.heading}</H2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{page.cards.items.map(([title, text]) => <div key={title} className="rounded-2xl border border-black/10 p-6"><h3 className="font-serif text-xl leading-snug">{title}</h3><p className="mt-3 text-sm leading-6 text-[var(--muted)]"><Rich text={text} /></p></div>)}</div>
        </section>}

        {page.sections.map(section => <section key={section.h2}><H2>{section.h2}</H2>
          {section.paras?.map((p, i) => <p key={i} className="mb-4"><Rich text={p} /></p>)}
          {section.subs?.map(sub => <div key={sub.h3}><H3>{sub.h3}</H3>{sub.paras.map((p, i) => <p key={i} className="mb-4"><Rich text={p} /></p>)}</div>)}
        </section>)}

        {page.table && <section><H2>{page.table.heading}</H2>
          {page.table.intro && <p className="mb-5"><Rich text={page.table.intro} /></p>}
          <div className="overflow-x-auto rounded-2xl border border-black/10"><table className="w-full min-w-[560px] text-left text-sm leading-6">
            <thead className="bg-[var(--ink)] text-white"><tr>{page.table.head.map(h => <th key={h} scope="col" className="px-4 py-3 font-semibold">{h}</th>)}</tr></thead>
            <tbody>{page.table.rows.map((row, r) => <tr key={r} className="border-t border-black/10 align-top">{row.map((cell, c) => c === 0 ? <th key={c} scope="row" className="px-4 py-3 font-semibold">{cell}</th> : <td key={c} className="px-4 py-3"><Rich text={cell} /></td>)}</tr>)}</tbody>
          </table></div>
        </section>}

        {page.steps && <section><H2>{page.steps.heading}</H2>
          {page.steps.intro && <p className="mb-5"><Rich text={page.steps.intro} /></p>}
          <ol className="space-y-5">{page.steps.items.map(([title, text], i) => <li key={title} className="grid grid-cols-[2.5rem_1fr] gap-4"><span className="grid size-10 place-items-center rounded-full bg-[var(--ink)] font-semibold text-white">{i + 1}</span><div><h3 className="font-serif text-xl leading-snug">{title}</h3><p className="mt-1"><Rich text={text} /></p></div></li>)}</ol>
        </section>}

        {page.documents && <section><H2>{page.documents.heading}</H2>
          {page.documents.intro && <p className="mb-5"><Rich text={page.documents.intro} /></p>}
          <ul className="list-disc space-y-2 pl-6">{page.documents.items.map(item => <li key={item}><Rich text={item} /></li>)}</ul>
          {page.documents.note && <p className="mt-5"><Rich text={page.documents.note} /></p>}
        </section>}

        {page.afterSections?.map(section => <section key={section.h2}><H2>{section.h2}</H2>
          {section.paras?.map((p, i) => <p key={i} className="mb-4"><Rich text={p} /></p>)}
          {section.subs?.map(sub => <div key={sub.h3}><H3>{sub.h3}</H3>{sub.paras.map((p, i) => <p key={i} className="mb-4"><Rich text={p} /></p>)}</div>)}
        </section>)}

        <section><H2>{page.faqHeading}</H2>
          <div className="space-y-7">{page.faqs.map(([q, a]) => <div key={q}><h3 className="mb-2 font-serif text-xl leading-snug">{q}</h3><p><Rich text={a} /></p></div>)}</div>
        </section>

        {page.related && <nav aria-label="Related legal services"><H2>{page.related.heading}</H2>
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{page.related.items.map(([slugTo, anchor]) => <li key={slugTo}><Link href={pathFor(slugTo)} className="block h-full rounded-xl border border-black/10 p-4 text-sm font-medium hover:border-[var(--brass)] hover:text-[var(--brass)]">{anchor}</Link></li>)}</ul>
        </nav>}

        <section className="rounded-3xl bg-[var(--ink)] p-8 text-white md:p-10"><h2 className="mb-5 font-serif text-3xl leading-tight">{page.closing.heading}</h2>
          {page.closing.paras.map((p, i) => <p key={i} className="mb-4 text-white/80"><Rich text={p} /></p>)}
          <div className="mt-6"><ContactButtons phone={page.phone} dark /></div>
          <p className="mt-5 text-sm text-white/70">Office: {page.officeLine}</p>
          <p className="mt-1 text-sm text-white/70">Email: <a className="underline" href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a></p>
        </section>

        {page.references?.length > 0 && <section className="text-sm"><h2 className="mb-3 font-serif text-2xl">Official sources</h2>
          <p className="mb-3 text-[var(--muted)]">Primary legislation and official portals referred to on this page. Check the current text and procedure for your circumstances.</p>
          <ul className="list-disc space-y-1 pl-6">{page.references.map(([label, url]) => <li key={url}><a className="underline" href={url} rel="noopener">{label}</a></li>)}</ul>
        </section>}

        <footer className="space-y-1 border-t border-black/10 pt-8 text-sm">
          <p><strong>Reviewed by:</strong> {page.reviewer}</p>
          <p><strong>Published by:</strong> Attorneys of Pakistan</p>
          <p><strong>Last updated:</strong> 2 November 2026</p>
          <p className="pt-4 text-[var(--muted)]">This page gives general information about Pakistani law and procedure. It is not advice on your particular case; the correct course depends on your facts, documents and the law that applies to you.</p>
        </footer>
      </article>
    </main>
    <footer className="bg-[var(--maroon-dark)] px-5 py-10 text-sm text-white/70 lg:px-8"><div className="mx-auto max-w-7xl"><Link href="/" className="font-serif text-xl text-white">Attorneys of Pakistan</Link><div className="mt-3 space-y-1">{siteConfig.offices.map(o => <p key={o}>{o}</p>)}</div><Link href="/comprehensive-privacy-policy-for-attorneys-com-pk/" className="mt-3 inline-block underline">Privacy Policy</Link></div><p className="mx-auto mt-6 max-w-7xl text-xs text-white/50">© 2024–{new Date().getFullYear()} Attorneys of Pakistan</p></footer>
  </div>
}
