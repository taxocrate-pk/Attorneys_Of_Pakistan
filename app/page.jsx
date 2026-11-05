import Link from 'next/link'
import { ArrowUpRight, BriefcaseBusiness, ChevronDown, Clock3, Gavel, HeartHandshake, MapPin, Menu, Phone, Scale, ShieldCheck } from 'lucide-react'
import { cities, faqs, practiceAreas, siteConfig } from '../lib/content'
import { formatDate } from '../lib/formatting'
import SiteHeader, { Brand } from '../components/site-header'
import { LawyerPair } from '../components/money-page'
import { blogPosts, pathFor } from '../lib/routes'

const iconMap = { HeartHandshake, ShieldCheck, BriefcaseBusiness, Scale, Gavel }
export const metadata = {
  title: 'Attorneys and Lawyers in Pakistan | Attorneys of Pakistan',
  description: 'Family, property, corporate, tax, civil and criminal legal advice. Contact the Karachi, Islamabad, Rawalpindi or Lahore team for a consultation.',
  alternates: { canonical: '/' },
}
const practiceRoute = {
  'family-law': 'explaining-family-law-rule',
  'divorce-custody': 'explaining-family-law-rule',
  'property-law': 'civil-lawyer',
  'corporate-tax': 'family-and-corporate-lawyers-in-pakistan',
  'civil-litigation': 'civil-lawyer',
  'criminal-law': 'criminal-law-in-pakistan',
  'court-marriage': 'court-marriage-services-fees-process-in-pakistan',
  'marriage-registration': 'court-marriage-services-fees-process-in-pakistan',
}

function SectionIntro({ eyebrow, title, copy, dark = false }) {
  return <div className={`mb-12 max-w-2xl ${dark ? 'text-white' : ''}`}>
    <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--brass)]">{eyebrow}</p>
    <h2 className="font-serif text-4xl leading-tight tracking-tight md:text-5xl">{title}</h2>
    {copy && <p className={`mt-5 max-w-xl text-base leading-7 ${dark ? 'text-white/65' : 'text-[var(--muted)]'}`}>{copy}</p>}
  </div>
}

export default function Page() {
  return <main id="top" className="min-h-screen overflow-hidden bg-[var(--paper)] text-[var(--ink)]">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'LegalService', '@id': `${siteConfig.url}/#legalservice`, name: siteConfig.name, url: `${siteConfig.url}/`, parentOrganization: { '@id': `${siteConfig.url}/#organization` }, image: `${siteConfig.url}/apple-icon.png`, telephone: siteConfig.phone, address: { '@type': 'PostalAddress', streetAddress: 'DHA Phase 7', addressLocality: 'Karachi', addressCountry: 'PK' }, areaServed: ['Karachi', 'Islamabad', 'Rawalpindi', 'Lahore'] }).replace(/</g, '\\u003c') }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.slice(0, 5).map(faq => ({ '@type': 'Question', name: faq.question, acceptedAnswer: { '@type': 'Answer', text: faq.answer } })) }).replace(/</g, '\\u003c') }} />
    <SiteHeader />

    <section className="relative border-b border-black/10 bg-[var(--paper)]">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 lg:grid-cols-[1.08fr_.92fr] lg:items-center lg:px-8 lg:py-28">
        <div>
          <p className="mb-7 text-xs font-semibold uppercase tracking-[0.26em] text-[var(--brass)]">Trusted advocates since 1985</p>
          <h1 className="max-w-3xl font-serif text-5xl leading-[0.98] tracking-[-0.04em] text-[var(--ink)] md:text-7xl">Attorneys and lawyers <span className="font-normal text-[var(--brass)]">in Pakistan.</span></h1>
          <p className="mt-8 max-w-xl text-lg leading-8 text-[var(--muted)]">Legal advice for individuals, families and businesses begins with the facts and the documents. Discuss a family issue, property transaction, company obligation or court dispute with the relevant city team. We will help identify the immediate decision, the records to review and the lawful options available in your circumstances.</p>
          <div className="mt-10 flex flex-wrap items-center gap-4"><a href="https://wa.me/923331127830" className="rounded-md bg-[var(--brass)] px-7 py-4 text-sm font-semibold text-white">WhatsApp Now</a><a href="tel:+923331127830" className="rounded-md border-2 border-[var(--ink)] px-7 py-4 text-sm font-semibold text-[var(--ink)]">Call +92 333 1127830</a></div>
          <div className="mt-14 flex flex-wrap gap-8 border-t border-black/10 pt-6 text-sm"><div><strong className="block font-serif text-2xl text-[var(--ink)]">5</strong><span className="text-[var(--muted)]">offices in 4 cities</span></div><div><strong className="block font-serif text-2xl text-[var(--ink)]">17+</strong><span className="text-[var(--muted)]">advocates in the team</span></div><div><strong className="block font-serif text-2xl text-[var(--ink)]">2</strong><span className="text-[var(--muted)]">Advocates Supreme Court</span></div><div><strong className="block font-serif text-2xl text-[var(--ink)]">1985</strong><span className="text-[var(--muted)]">practising since</span></div></div>
        </div>
        <div><LawyerPair /><p className="mt-4 text-sm text-[var(--muted)]">Senior counsel for Punjab, Islamabad and Sindh matters, with a team of 17+ advocates.</p></div>
      </div>
    </section>

    <section id="practice" className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28"><SectionIntro eyebrow="What we do" title="Legal services for people and businesses in Pakistan." copy="Choose the practice area that fits your immediate question. Each matter needs its own record, forum and remedy. Our service pages explain what to prepare for a consultation and how the next legal step is assessed." /><div className="grid gap-px overflow-hidden rounded-2xl border border-black/10 bg-black/10 sm:grid-cols-2 lg:grid-cols-4">{practiceAreas.map((area, index) => { const Icon = iconMap[area.icon] || Scale; return <Link key={area.id} href={pathFor(practiceRoute[area.id])} className="group bg-[var(--paper)] p-7 transition hover:bg-[var(--ink)] hover:text-white"><span className="mb-16 flex items-center justify-between"><span className="text-xs text-[var(--muted)] group-hover:text-white/50">0{index + 1}</span><Icon className="text-[var(--brass)]" size={22} /></span><h3 className="font-serif text-2xl leading-tight">{area.name}</h3><p className="mt-3 text-sm leading-6 text-[var(--muted)] group-hover:text-white/60">{area.shortDescription}</p><span className="mt-6 inline-block text-xs font-semibold uppercase tracking-[0.16em] text-[var(--brass)]">Learn more <ArrowUpRight className="ml-1 inline" size={13} /></span></Link> })}</div></section>

    <section id="about" className="bg-[var(--ink)] px-5 py-20 text-white lg:px-8 lg:py-28"><div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[.8fr_1.2fr] lg:items-end"><SectionIntro dark eyebrow="Our approach" title="Serious about the law. Human about the work." copy="Legal issues can affect relationships, property, livelihoods and business decisions at the same time. We begin by listening to the client’s objective, reviewing the documents and identifying the facts that remain disputed. The resulting advice should explain the appropriate forum and the possible next steps in plain language. Where negotiation is sensible, the proposed terms should be recorded properly; where proceedings are needed, the evidence and relief should be prepared for the correct forum." /><div className="grid gap-8 border-t border-white/15 pt-8 sm:grid-cols-3"><div><HeartHandshake className="mb-5 text-[var(--brass)]" size={23} /><h3 className="font-serif text-xl">Client-first</h3><p className="mt-2 text-sm leading-6 text-white/55">We identify the decision you need to make and examine the documents, risks and practical alternatives relevant to that decision. A family, business or property matter cannot be resolved through a generic checklist alone.</p></div><div><ShieldCheck className="mb-5 text-[var(--brass)]" size={23} /><h3 className="font-serif text-xl">Trusted counsel</h3><p className="mt-2 text-sm leading-6 text-white/55">We distinguish what the records establish from what remains disputed. You should understand the scope, likely procedure and uncertainties before instructing further work; a contested outcome cannot be guaranteed.</p></div><div><Clock3 className="mb-5 text-[var(--brass)]" size={23} /><h3 className="font-serif text-xl">Responsive</h3><p className="mt-2 text-sm leading-6 text-white/55">Agree how updates and instructions will be shared. Tell the team immediately about a new notice, hearing date or other urgent change, so the next step can be assessed against the current record.</p></div></div></div></section>

    <section id="offices" className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28"><SectionIntro eyebrow="Where we are" title="Contact the relevant city team." copy="Contact the relevant city team for advice on your matter." /><div className="grid gap-5 md:grid-cols-3">{cities.map(city => <div key={city.id} className="rounded-2xl border border-black/10 p-6"><MapPin className="mb-8 text-[var(--brass)]" size={21} /><h3 className="font-serif text-2xl">{city.name}</h3><p className="mt-2 text-sm leading-6 text-[var(--muted)]">{city.description}</p><a className="mt-7 inline-block text-sm font-semibold" href={`tel:${city.phone.replaceAll(' ', '')}`}>{city.phone} <ArrowUpRight className="ml-1 inline" size={14} /></a></div>)}</div></section>

    <section id="insights" className="border-t border-black/10 bg-[#eeeae2] px-5 py-20 lg:px-8 lg:py-28"><div className="mx-auto max-w-7xl"><SectionIntro eyebrow="From our desk" title="Legal articles and practical updates." /><div className="grid gap-6 md:grid-cols-3">{blogPosts.map(article => <article key={article.slug} className="group"><Link href={pathFor(article.slug)} className="mb-6 block aspect-[1.45] rounded-2xl bg-[var(--ink)] p-6 text-white"><span className="text-xs uppercase tracking-[0.18em] text-[var(--brass)]">Taxation</span><div className="flex h-full items-end"><p className="font-serif text-2xl leading-tight">{article.title}</p></div></Link><p className="text-xs text-[var(--muted)]">{formatDate(article.date)}</p><h3 className="mt-2 text-lg font-semibold leading-snug group-hover:text-[var(--brass)]">{article.summary}</h3></article>)}</div></div></section>

    <section id="contact" className="bg-[var(--brass)] px-5 py-20 lg:px-8 lg:py-24"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-10 md:flex-row md:items-end"><div><p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--ink)]/60">Start a conversation</p><h2 className="max-w-2xl font-serif text-5xl leading-none tracking-tight text-[var(--ink)] md:text-6xl">Let&apos;s discuss what comes next.</h2></div><div className="max-w-xs"><p className="text-sm leading-6 text-[var(--ink)]/70">Tell us a little about your matter. We will connect you with the right member of our team.</p><a href="https://wa.me/923331127830" className="mt-6 inline-block rounded-md bg-[var(--ink)] px-6 py-4 text-sm font-semibold text-white">WhatsApp +92 333 1127830 <ArrowUpRight className="ml-2 inline" size={15} /></a></div></div></section>

    <section className="mx-auto max-w-4xl px-5 py-20 lg:px-8"><SectionIntro eyebrow="Questions, answered" title="Before you get in touch." /> <div className="divide-y divide-black/10 border-y border-black/10">{faqs.slice(0, 5).map(faq => <details key={faq.question} className="group py-5"><summary className="flex cursor-pointer list-none items-center justify-between font-serif text-xl">{faq.question}<ChevronDown className="transition group-open:rotate-180" size={19} /></summary><p className="max-w-2xl pt-4 text-sm leading-7 text-[var(--muted)]">{faq.answer}</p></details>)}</div></section>

    <footer className="bg-[var(--maroon-dark)] px-5 py-10 text-white lg:px-8"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 md:flex-row md:items-center"><Brand /><div className="text-sm text-white/55"><p>{siteConfig.offices.map(o => <span key={o} className="block">{o}</span>)}</p><p className="mt-2">{siteConfig.email} · {siteConfig.phone}</p></div><p className="text-xs text-white/40">© 2024–{new Date().getFullYear()} Attorneys of Pakistan</p></div></footer>
  </main>
}
