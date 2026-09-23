import Link from 'next/link'
import { notFound } from 'next/navigation'
import SiteHeader from '../../components/site-header'
import { allPages, blogPosts, pages, pathFor } from '../../lib/routes'
import { siteConfig } from '../../lib/content'
import { guides } from '../../lib/page-guides'
import { sharedSections, sharedOrder, officialReferences } from '../../lib/longform'

const entries = [...allPages, ...blogPosts]

export function generateStaticParams() { return entries.map(({ slug }) => ({ slug })) }

export async function generateMetadata({ params }) {
  const { slug } = await params
  const page = entries.find(entry => entry.slug === slug)
  if (!page) return {}
  return { title: `${guides[slug]?.focus || page.title} | Attorneys of Pakistan`, description: page.summary, alternates: { canonical: pathFor(slug) } }
}

export default async function ContentPage({ params }) {
  const { slug } = await params
  const page = entries.find(entry => entry.slug === slug)
  if (!page) notFound()
  const phone = page.phone || siteConfig.phone
  const guide = guides[slug]
  const sections = guide ? [...guide.sections, ...sharedOrder[guide.kind].map(key => sharedSections[key])] : (page.topics || ['Documents and records', 'When to seek professional advice', 'Next steps']).map((topic, index) => [topic, sectionCopy(page, index)])
  const questions = guide ? guideQuestions(page, guide, phone) : []
  const canonical = `${siteConfig.url}${pathFor(slug)}`
  const schema = guide ? [
    { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: siteConfig.url }, { '@type': 'ListItem', position: 2, name: page.title, item: canonical }] },
    ...(pages.some(entry => entry.slug === slug) ? [{ '@context': 'https://schema.org', '@type': 'LegalService', name: siteConfig.name, url: canonical, telephone: phone, areaServed: page.title, address: { '@type': 'PostalAddress', streetAddress: siteConfig.address, addressLocality: 'Karachi', addressCountry: 'PK' } }] : []),
    { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: questions.map(([question, answer]) => ({ '@type': 'Question', name: question, acceptedAnswer: { '@type': 'Answer', text: answer } })) },
  ] : []
  return <div className="min-h-screen bg-[var(--paper)] text-[var(--ink)]"><SiteHeader />
    {schema.map((entry, index) => <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(entry).replace(/</g, '\\u003c') }} />)}
    <main className="mx-auto max-w-5xl px-5 py-16 lg:px-8 lg:py-24">
      <nav aria-label="Breadcrumb" className="mb-12 text-sm text-[var(--muted)]"><Link href="/">Home</Link> / {page.group || 'Blog'} / {page.title}</nav>
      <p className="mb-5 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--brass)]">{page.group || 'Legal insight'}</p>
      <h1 className="max-w-4xl font-serif text-5xl leading-tight tracking-tight md:text-6xl">{page.title}</h1>
      <p className="mt-7 max-w-3xl text-lg leading-8 text-[var(--muted)]">{guide?.introduction || page.summary}</p>
      <a href={`tel:${phone.replaceAll(' ', '')}`} className="mt-9 inline-block rounded-full bg-[var(--ink)] px-7 py-4 text-sm font-semibold text-white">Discuss your matter: {phone}</a>
      <div className="mt-16 grid gap-12 border-t border-black/10 pt-12 lg:grid-cols-[1fr_250px]">
        <article className="space-y-12 text-base leading-8">
          {sections.map(([heading, body], index) => <section key={`${heading}-${index}`}>
            <h2 className="mb-4 font-serif text-3xl leading-tight">{guide && index % 4 !== 3 ? `${guide.focus}: ${heading}` : heading}</h2>
            <p>{body}</p>
          </section>)}
          {guide && <section className="border-t border-black/10 pt-10"><h2 className="mb-6 font-serif text-3xl">Questions about {guide.focus.toLowerCase()}</h2><div className="space-y-8">{questions.map(([question, answer]) => <div key={question}><h3 className="mb-2 font-serif text-xl">{question}</h3><p>{answer}</p></div>)}</div></section>}
          {officialReferences[slug] && <p className="text-sm">Official reference: <a className="underline" href={officialReferences[slug][1]}>{officialReferences[slug][0]}</a>. Check the current applicable law and local procedure for your circumstances.</p>}
          {guide && <nav aria-label="Related legal services" className="border-t border-black/10 pt-8"><h2 className="mb-4 font-serif text-2xl">Related reading</h2><ul className="space-y-2 text-sm">{allPages.filter(entry => entry.slug !== slug && entry.group === page.group).slice(0, 3).map(entry => <li key={entry.slug}><Link className="underline hover:text-[var(--brass)]" href={pathFor(entry.slug)}>{entry.title}</Link></li>)}</ul></nav>}
          <p className="border-t border-black/10 pt-8 text-sm text-[var(--muted)]">This page provides general information. The appropriate procedure depends on the facts, documents and applicable law in your case. Discuss your circumstances with a qualified lawyer before taking action.</p>
        </article>
        <aside className="h-fit rounded-2xl border border-black/10 p-6"><h2 className="font-serif text-2xl">Arrange a consultation</h2><p className="mt-3 text-sm leading-6 text-[var(--muted)]">Tell us your city, the nature of the matter and the documents you already have.</p><a className="mt-5 block font-semibold text-[var(--brass)]" href={`tel:${phone.replaceAll(' ', '')}`}>{phone}</a><a className="mt-3 block text-sm underline" href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a></aside>
      </div>
    </main>
    <footer className="bg-[var(--ink)] px-5 py-10 text-sm text-white/70 lg:px-8"><div className="mx-auto max-w-7xl"><Link href="/" className="font-serif text-xl text-white">Attorneys of Pakistan</Link><p className="mt-3">{siteConfig.address}</p><Link href="/comprehensive-privacy-policy-for-attorneys-com-pk/" className="mt-3 inline-block underline">Privacy Policy</Link></div></footer>
  </div>
}

function guideQuestions(page, guide, phone) {
  const subject = guide.focus.toLowerCase()
  return [
    [`When should I speak to a lawyer about ${subject}?`, `Seek advice before signing a document, responding to a formal notice or missing a stated deadline. If proceedings are already underway, provide every order and the next hearing date. The first conversation can identify urgent protective steps and the documents needed for a considered assessment.`],
    [`Which documents should I bring for ${subject}?`, `Bring identity records, complete agreements or official papers, notices, payment evidence and earlier court orders where relevant. A dated summary of events is useful. Do not rely only on selected screenshots; preserve the original source and any missing context so the legal team can assess the record accurately.`],
    [`Can the result of this ${subject} matter be guaranteed?`, `No responsible lawyer can guarantee a court decision, registration outcome or action by the opposing party. A proper assessment identifies the governing process, available evidence, risks and realistic options. The advice may change when an official record or the other party’s response supplies new information.`],
    [`How are fees for ${subject} agreed?`, `Fees depend on the city, complexity, urgency and work required. Ask whether the proposed scope includes consultation, drafting, filing, official charges or court appearances. A clear written scope and explanation of possible additional work are more useful than a general price displayed for a different case.`],
    [`Can my ${subject} consultation take place remotely?`, `An initial discussion and document review may be possible remotely. The specific procedure may still require originals, a signed document, an appearance or verification by an authority. Tell the team where you and any other parties are located so they can explain what can be arranged remotely in your case.`],
    [`How do I contact Attorneys of Pakistan about ${subject}?`, `Call ${phone} and state your city, the issue and any upcoming deadline. You can also write to ${siteConfig.email} with a short summary. Avoid sending highly sensitive original documents through an unagreed channel; the team can explain how to provide papers for a proper consultation.`],
  ]
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
