import Link from 'next/link'
import { ArrowUpRight, BriefcaseBusiness, ChevronDown, Clock3, Gavel, HeartHandshake, MapPin, Menu, Phone, Scale, ShieldCheck } from 'lucide-react'
import { attorneys, blogArticles, cities, faqs, practiceAreas, siteConfig } from '../lib/content'
import { formatDate } from '../lib/formatting'

const iconMap = { HeartHandshake, ShieldCheck, BriefcaseBusiness, Scale, Gavel }

function Brand() {
  return <Link href="#top" className="flex items-center gap-3" aria-label="Attorneys of Pakistan home">
    <span className="grid size-10 place-items-center rounded-full border border-[var(--brass)] text-[var(--brass)]"><Scale aria-hidden="true" size={19} /></span>
    <span className="font-serif text-lg font-semibold tracking-tight text-[var(--ink)]">Attorneys <span className="font-normal text-[var(--brass)]">of Pakistan</span></span>
  </Link>
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
    <header className="border-b border-black/10 bg-[var(--paper)]">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <Brand />
        <nav className="hidden items-center gap-8 text-sm font-medium lg:flex" aria-label="Primary navigation">
          <Link href="#practice" className="hover:text-[var(--brass)]">Practice areas</Link>
          <Link href="#about" className="hover:text-[var(--brass)]">Our approach</Link>
          <Link href="#offices" className="hover:text-[var(--brass)]">Our offices</Link>
          <Link href="#insights" className="hover:text-[var(--brass)]">Insights</Link>
        </nav>
        <div className="flex items-center gap-3">
          <a href={`tel:${siteConfig.phone.replaceAll(' ', '')}`} className="hidden items-center gap-2 text-sm font-medium md:flex"><Phone size={15} /> {siteConfig.phone}</a>
          <a href="#contact" className="rounded-full bg-[var(--ink)] px-5 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-white transition hover:bg-[var(--brass)] hover:text-[var(--ink)]">Consultation</a>
          <button className="grid size-10 place-items-center rounded-full border border-black/10 lg:hidden" aria-label="Open navigation"><Menu size={18} /></button>
        </div>
      </div>
    </header>

    <section className="relative border-b border-black/10 bg-[var(--paper)]">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 lg:grid-cols-[1.08fr_.92fr] lg:items-center lg:px-8 lg:py-28">
        <div>
          <p className="mb-7 text-xs font-semibold uppercase tracking-[0.26em] text-[var(--brass)]">Trusted counsel. Strong representation.</p>
          <h1 className="max-w-3xl font-serif text-5xl leading-[0.98] tracking-[-0.04em] text-[var(--ink)] md:text-7xl">A clear path through <em className="font-normal text-[var(--brass)]">complex law.</em></h1>
          <p className="mt-8 max-w-xl text-lg leading-8 text-[var(--muted)]">Practical legal advice and measured advocacy for individuals, families, and businesses across Pakistan.</p>
          <div className="mt-10 flex flex-wrap items-center gap-4"><a href="#contact" className="rounded-full bg-[var(--ink)] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[var(--brass)] hover:text-[var(--ink)]">Speak with an attorney <ArrowUpRight className="ml-2 inline" size={16} /></a><a href="#practice" className="rounded-full border border-black/15 px-7 py-4 text-sm font-semibold hover:border-[var(--brass)]">Explore our expertise</a></div>
          <div className="mt-14 flex flex-wrap gap-8 border-t border-black/10 pt-6 text-sm"><div><strong className="block font-serif text-2xl">5</strong><span className="text-[var(--muted)]">cities across Pakistan</span></div><div><strong className="block font-serif text-2xl">15+</strong><span className="text-[var(--muted)]">years of experience</span></div><div><strong className="block font-serif text-2xl">24h</strong><span className="text-[var(--muted)]">response for urgent matters</span></div></div>
        </div>
        <div className="relative min-h-[430px] overflow-hidden rounded-[2rem] bg-[var(--ink)] p-8 text-white md:p-12"><div className="absolute -right-20 -top-24 size-80 rounded-full border border-[var(--brass)]/30" /><div className="absolute -bottom-40 -left-20 size-96 rounded-full border border-white/10" /><div className="relative flex h-full flex-col justify-between"><div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-white/55"><span>Est. 2010</span><span>Karachi · Pakistan</span></div><div><p className="font-serif text-4xl leading-tight md:text-5xl">Justice is not only a principle. It is a practice.</p><div className="mt-8 h-px w-16 bg-[var(--brass)]" /><p className="mt-5 max-w-sm text-sm leading-6 text-white/60">We combine local insight with a disciplined, client-first approach to every matter.</p></div><div className="flex items-center gap-3 text-sm text-white/70"><MapPin size={16} className="text-[var(--brass)]" /> Serving clients throughout Pakistan</div></div></div>
      </div>
    </section>

    <section id="practice" className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28"><SectionIntro eyebrow="What we do" title="Legal expertise, grounded in your reality." copy="Our practice is built around the moments that matter most — protecting what you have built, resolving what is uncertain, and moving forward with confidence." /><div className="grid gap-px overflow-hidden rounded-2xl border border-black/10 bg-black/10 sm:grid-cols-2 lg:grid-cols-4">{practiceAreas.map((area, index) => { const Icon = iconMap[area.icon] || Scale; return <Link key={area.id} href={`#contact`} className="group bg-[var(--paper)] p-7 transition hover:bg-[var(--ink)] hover:text-white"><span className="mb-16 flex items-center justify-between"><span className="text-xs text-[var(--muted)] group-hover:text-white/50">0{index + 1}</span><Icon className="text-[var(--brass)]" size={22} /></span><h3 className="font-serif text-2xl leading-tight">{area.name}</h3><p className="mt-3 text-sm leading-6 text-[var(--muted)] group-hover:text-white/60">{area.shortDescription}</p><span className="mt-6 inline-block text-xs font-semibold uppercase tracking-[0.16em] text-[var(--brass)]">Learn more <ArrowUpRight className="ml-1 inline" size={13} /></span></Link> })}</div></section>

    <section id="about" className="bg-[var(--ink)] px-5 py-20 text-white lg:px-8 lg:py-28"><div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[.8fr_1.2fr] lg:items-end"><SectionIntro dark eyebrow="Our approach" title="Serious about the law. Human about the work." copy="Legal matters are rarely just legal. They affect livelihoods, relationships, homes, and futures. We listen closely, explain clearly, and act decisively." /><div className="grid gap-8 border-t border-white/15 pt-8 sm:grid-cols-3"><div><HeartHandshake className="mb-5 text-[var(--brass)]" size={23} /><h3 className="font-serif text-xl">Client-first</h3><p className="mt-2 text-sm leading-6 text-white/55">Advice shaped around your priorities, not a template.</p></div><div><ShieldCheck className="mb-5 text-[var(--brass)]" size={23} /><h3 className="font-serif text-xl">Trusted counsel</h3><p className="mt-2 text-sm leading-6 text-white/55">Clear options, honest expectations, no unnecessary complexity.</p></div><div><Clock3 className="mb-5 text-[var(--brass)]" size={23} /><h3 className="font-serif text-xl">Responsive</h3><p className="mt-2 text-sm leading-6 text-white/55">You stay informed at every stage of your matter.</p></div></div></div></section>

    <section id="offices" className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28"><SectionIntro eyebrow="Where we are" title="Local presence. National reach." copy="Our offices make it easier to access considered legal advice wherever you are in Pakistan." /><div className="grid gap-5 md:grid-cols-3">{cities.map(city => <div key={city.id} className="rounded-2xl border border-black/10 p-6"><MapPin className="mb-8 text-[var(--brass)]" size={21} /><h3 className="font-serif text-2xl">{city.name}</h3><p className="mt-2 text-sm leading-6 text-[var(--muted)]">{city.description}</p><a className="mt-7 inline-block text-sm font-semibold" href={`tel:${city.phone.replaceAll(' ', '')}`}>{city.phone} <ArrowUpRight className="ml-1 inline" size={14} /></a></div>)}</div></section>

    <section id="insights" className="border-t border-black/10 bg-[#eeeae2] px-5 py-20 lg:px-8 lg:py-28"><div className="mx-auto max-w-7xl"><SectionIntro eyebrow="From our desk" title="Useful perspective on the law." /><div className="grid gap-6 md:grid-cols-3">{blogArticles.map(article => <article key={article.id} className="group"><div className="mb-6 aspect-[1.45] rounded-2xl bg-[var(--ink)] p-6 text-white"><span className="text-xs uppercase tracking-[0.18em] text-[var(--brass)]">{article.category}</span><div className="flex h-full items-end"><p className="font-serif text-2xl leading-tight">{article.title}</p></div></div><p className="text-xs text-[var(--muted)]">{formatDate(article.date)}</p><h3 className="mt-2 text-lg font-semibold leading-snug group-hover:text-[var(--brass)]">{article.excerpt}</h3></article>)}</div></div></section>

    <section id="contact" className="bg-[var(--brass)] px-5 py-20 lg:px-8 lg:py-24"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-10 md:flex-row md:items-end"><div><p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--ink)]/60">Start a conversation</p><h2 className="max-w-2xl font-serif text-5xl leading-none tracking-tight text-[var(--ink)] md:text-6xl">Let&apos;s discuss what comes next.</h2></div><div className="max-w-xs"><p className="text-sm leading-6 text-[var(--ink)]/70">Tell us a little about your matter. We will connect you with the right member of our team.</p><a href={`mailto:${siteConfig.email}`} className="mt-6 inline-block rounded-full bg-[var(--ink)] px-6 py-4 text-sm font-semibold text-white">Email our office <ArrowUpRight className="ml-2 inline" size={15} /></a></div></div></section>

    <section className="mx-auto max-w-4xl px-5 py-20 lg:px-8"><SectionIntro eyebrow="Questions, answered" title="Before you get in touch." /> <div className="divide-y divide-black/10 border-y border-black/10">{faqs.slice(0, 5).map(faq => <details key={faq.question} className="group py-5"><summary className="flex cursor-pointer list-none items-center justify-between font-serif text-xl">{faq.question}<ChevronDown className="transition group-open:rotate-180" size={19} /></summary><p className="max-w-2xl pt-4 text-sm leading-7 text-[var(--muted)]">{faq.answer}</p></details>)}</div></section>

    <footer className="bg-[var(--ink)] px-5 py-10 text-white lg:px-8"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 md:flex-row md:items-center"><Brand /><div className="text-sm text-white/55"><p>{siteConfig.address}</p><p className="mt-2">{siteConfig.email} · {siteConfig.phone}</p></div><p className="text-xs text-white/40">© {new Date().getFullYear()} Attorneys of Pakistan</p></div></footer>
  </main>
}
