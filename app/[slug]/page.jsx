import Link from 'next/link'
import { notFound } from 'next/navigation'
import SiteHeader from '../../components/site-header'
import { allPages, blogPosts, pathFor } from '../../lib/routes'
import { siteConfig } from '../../lib/content'

const entries = [...allPages, ...blogPosts]

export function generateStaticParams() { return entries.map(({ slug }) => ({ slug })) }

export async function generateMetadata({ params }) {
  const { slug } = await params
  const page = entries.find(entry => entry.slug === slug)
  if (!page) return {}
  return { title: `${page.title} | Attorneys of Pakistan`, description: page.summary, alternates: { canonical: pathFor(slug) } }
}

export default async function ContentPage({ params }) {
  const { slug } = await params
  const page = entries.find(entry => entry.slug === slug)
  if (!page) notFound()
  const phone = page.phone || siteConfig.phone
  return <div className="min-h-screen bg-[var(--paper)] text-[var(--ink)]"><SiteHeader />
    <main className="mx-auto max-w-5xl px-5 py-16 lg:px-8 lg:py-24">
      <nav aria-label="Breadcrumb" className="mb-12 text-sm text-[var(--muted)]"><Link href="/">Home</Link> / {page.group || 'Blog'} / {page.title}</nav>
      <p className="mb-5 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--brass)]">{page.group || 'Legal insight'}</p>
      <h1 className="max-w-4xl font-serif text-5xl leading-tight tracking-tight md:text-6xl">{page.title}</h1>
      <p className="mt-7 max-w-3xl text-lg leading-8 text-[var(--muted)]">{page.summary}</p>
      <a href={`tel:${phone.replaceAll(' ', '')}`} className="mt-9 inline-block rounded-full bg-[var(--ink)] px-7 py-4 text-sm font-semibold text-white">Discuss your matter: {phone}</a>
      <div className="mt-16 grid gap-12 border-t border-black/10 pt-12 lg:grid-cols-[1fr_250px]">
        <article className="space-y-12 text-base leading-8">
          {(page.topics || ['Documents and records', 'When to seek professional advice', 'Next steps']).map((topic, index) => <section key={topic}>
            <h2 className="mb-4 font-serif text-3xl leading-tight">{topic}</h2>
            <p>{sectionCopy(page, index)}</p>
          </section>)}
          <p className="border-t border-black/10 pt-8 text-sm text-[var(--muted)]">This page provides general information. The appropriate procedure depends on the facts, documents and applicable law in your case. Discuss your circumstances with a qualified lawyer before taking action.</p>
        </article>
        <aside className="h-fit rounded-2xl border border-black/10 p-6"><h2 className="font-serif text-2xl">Arrange a consultation</h2><p className="mt-3 text-sm leading-6 text-[var(--muted)]">Tell us your city, the nature of the matter and the documents you already have.</p><a className="mt-5 block font-semibold text-[var(--brass)]" href={`tel:${phone.replaceAll(' ', '')}`}>{phone}</a><a className="mt-3 block text-sm underline" href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a></aside>
      </div>
    </main>
    <footer className="bg-[var(--ink)] px-5 py-10 text-sm text-white/70 lg:px-8"><div className="mx-auto max-w-7xl"><Link href="/" className="font-serif text-xl text-white">Attorneys of Pakistan</Link><p className="mt-3">{siteConfig.address}</p><Link href="/comprehensive-privacy-policy-for-attorneys-com-pk/" className="mt-3 inline-block underline">Privacy Policy</Link></div></footer>
  </div>
}

function sectionCopy(page, index) {
  if (page.slug === 'comprehensive-privacy-policy-for-attorneys-com-pk') return 'For questions about information submitted through this website, email info@attorneys.com.pk. Do not send confidential documents until an appropriate channel and engagement arrangements have been agreed. A complete privacy policy should identify the actual data collected, service providers and retention practices before publication.'
  if (page.slug === 'contact-us') return index === 0 ? `Our Karachi address is ${siteConfig.address}. Call ${siteConfig.phone} to discuss an appointment.` : 'For Islamabad call +92 333 1127836, for Rawalpindi call +92 333 1127831, and for Lahore call +92 333 1127835. Include your city and a short account of the issue in your enquiry.'
  if (page.group === 'City services') return index === 0 ? `People and businesses in ${page.title.split(' in ').at(-1)} may require advice on family disputes, property documents, contracts, tax obligations or court proceedings. The right approach depends on the issue and the forum involved.` : index === 1 ? 'Bring relevant agreements, notices, correspondence, identity documents and court papers, if any. A lawyer can review the chronology and explain available options, likely documents and the next procedural step.' : `To arrange a consultation, call ${page.phone}. Describe your issue briefly and confirm your city so the enquiry can be directed to the appropriate team.`
  if (page.slug.includes('court-marriage') || page.slug.includes('online-marriage')) return index === 0 ? 'Both parties must understand the proposed marriage and give free consent. Identity, age, marital status and the applicable personal law should be assessed before any ceremony or paperwork is arranged.' : index === 1 ? 'The documents and witnesses needed depend on the parties’ circumstances, location and intended use of the marriage record. Foreign-national and overseas cases may need additional review.' : 'Ask how the Nikah will be documented and registered and which certificate can be obtained afterwards. Timelines and costs should be confirmed for the particular case rather than assumed from a general guide.'
  if (page.slug.includes('child-adoption')) return index === 0 ? 'In Pakistan, guardianship and adoption are not interchangeable legal concepts. A child’s welfare is central when considering care, custody and court orders.' : 'The documents, parties and court process depend on the child’s circumstances. A proposed move abroad may raise additional immigration and recognition questions that should be assessed separately.'
  if (page.slug.includes('income-tax')) return index === 0 ? 'Business owners should reconcile income, expenses, bank records and supporting documents before preparing an income tax return. Inconsistencies can require explanation.' : 'A wealth statement should reflect assets, liabilities, receipts and expenditure accurately. Keep records supporting significant transactions and seek advice on any FBR notice or discrepancy.'
  return index === 0 ? 'Start with the facts, relevant documents and the result you hope to achieve. A lawyer can identify the applicable legal route after reviewing the matter rather than relying on general assumptions.' : index === 1 ? 'Keep a dated record of events, agreements, notices and correspondence. The appropriate legal response may involve advice, a written notice, negotiation or proceedings, depending on the facts.' : `Contact the relevant team on ${page.phone || siteConfig.phone} for a consultation. Fees, timelines and possible outcomes should be discussed after the documents and circumstances have been reviewed.`
}
