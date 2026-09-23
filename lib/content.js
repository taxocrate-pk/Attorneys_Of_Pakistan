export const siteConfig = {
  name: 'Attorneys of Pakistan',
  description: 'Professional legal services',
  url: 'https://attorneys.com.pk',
  email: 'info@attorneys.com.pk',
  address: 'A-220, Supreme Corner, Block 18, Johar Chowrangi, Gulistan-e-Johar, Karachi',
  phone: '+92 333 1127830',
}

export const cities = [
  {
    id: 'karachi',
    name: 'Karachi',
    phone: '+92 333 1127830',
    description: 'The verified Karachi office is at A-220, Supreme Corner, Block 18, Johar Chowrangi, Gulistan-e-Johar. Call before visiting to arrange a consultation. Mention any hearing date and bring the relevant notices, agreements and orders for a focused review.',
    slug: 'karachi',
  },
  {
    id: 'islamabad',
    name: 'Islamabad',
    phone: '+92 333 1127836',
    description: 'For Islamabad enquiries, state the authority or court involved and whether a response or appearance is due. The team can advise which records to prepare and how to arrange an initial consultation. A federal regulatory issue may require different documents from a family proceeding.',
    slug: 'islamabad',
  },
  {
    id: 'rawalpindi',
    name: 'Rawalpindi',
    phone: '+92 333 1127831',
    description: 'Call the Rawalpindi number for local enquiries and explain where any property or proceeding is located. An agreement, title record, court order or official notice can change the immediate step. The first review should identify missing documents and the appropriate forum.',
    slug: 'rawalpindi',
  },
  {
    id: 'lahore',
    name: 'Lahore',
    phone: '+92 333 1127835',
    description: 'For a Lahore matter, provide a brief chronology and identify the documents you hold. Whether the issue concerns family, property, business or litigation, the team can discuss the consultation process and the papers needed for a proper legal assessment.',
    slug: 'lahore',
  },
]

export const practiceAreas = [
  {
    id: 'family-law',
    name: 'Family Law',
    slug: 'family-law',
    shortDescription: 'Advice on marriage, divorce, maintenance and related family proceedings. We begin with the documents and the particular relief you need, then explain the appropriate legal route and the questions that still require evidence.',
    description:
      'We provide comprehensive legal services in family law matters including divorce, custody arrangements, inheritance disputes, and family-related contracts. Our experienced attorneys understand the sensitivity of family matters and provide compassionate, professional guidance.',
    icon: 'HeartHandshake',
  },
  {
    id: 'divorce-custody',
    name: 'Divorce & Child Custody',
    slug: 'divorce-custody',
    shortDescription: 'Practical advice on divorce, khula, custody and contact arrangements. Existing orders, children’s records and the immediate welfare concern help determine whether a new case, interim request or enforcement step is appropriate.',
    description:
      'Specialising in divorce proceedings and child custody arrangements. We advocate for fair settlements and prioritise the best interests of children while protecting your legal rights.',
    icon: 'ShieldCheck',
  },
  {
    id: 'property-law',
    name: 'Property Law',
    slug: 'property-law',
    shortDescription: 'Review agreements, title records, possession and payment evidence before a purchase or property dispute develops further. The appropriate response may involve due diligence, a notice, negotiation or a properly supported claim.',
    description:
      'From purchase and sale agreements to property disputes and registration, we handle all aspects of property law. Our team ensures all documentation is legally sound and your interests are protected.',
    icon: 'Scale',
  },
  {
    id: 'corporate-tax',
    name: 'Corporate & Tax Law',
    slug: 'corporate-tax',
    shortDescription: 'Company formation, governance, commercial contracts and tax notices raise distinct questions. We identify the responsible entity, relevant SECP or FBR record and deadline before advising on documentation, compliance or a dispute.',
    description:
      'We advise on corporate structure, compliance, taxation, mergers and acquisitions, and ongoing business matters. Our services help businesses navigate complex regulatory environments.',
    icon: 'BriefcaseBusiness',
  },
  {
    id: 'civil-litigation',
    name: 'Civil Litigation',
    slug: 'civil-litigation',
    shortDescription: 'Civil claims require a clear basis, the correct forum and evidence supporting the remedy sought. We review contracts, property records, correspondence and existing orders before discussing notices, interim protection or proceedings.',
    description:
      'We represent clients in civil disputes including contract disputes, commercial disagreements, and other civil matters. Strategic advocacy and strong legal representation.',
    icon: 'Scale',
  },
  {
    id: 'criminal-law',
    name: 'Criminal Law',
    slug: 'criminal-law',
    shortDescription: 'An allegation, FIR, investigation, bail application and trial call for different steps. Early advice should use the actual official record, identify urgent dates and protect the client’s ability to present reliable evidence.',
    description:
      'Expert criminal defence representation for all types of charges. We protect your rights throughout investigation, trial, and appeal proceedings.',
    icon: 'ShieldCheck',
  },
  {
    id: 'court-marriage',
    name: 'Court Marriage',
    slug: 'court-marriage',
    shortDescription: 'Discuss legal capacity, free consent, identity, Nikah documentation and registration before arranging a marriage. Fees, required documents and timelines depend on the parties’ city, status and intended use of the record.',
    description:
      'We advise on Nikah documentation, free consent and the appropriate registration process according to the circumstances.',
    icon: 'HeartHandshake',
  },
  {
    id: 'marriage-registration',
    name: 'Marriage Registration',
    slug: 'marriage-registration',
    shortDescription: 'Check the Nikah Nama, registration entry and certificate for accuracy. Where a record is missing or incorrect, the appropriate issuing authority and correction procedure should be identified rather than relying on an altered copy.',
    description:
      'Complete assistance with marriage registration, certificate processing, and related documentation. Legal compliance and proper record-keeping.',
    icon: 'Scale',
  },
]

export const attorneys = [
  {
    id: 'attorney-1',
    name: '[Name to be confirmed]',
    title: 'Senior Attorney',
    specialities: ['Family Law', 'Divorce & Child Custody'],
    image: '/placeholder-user.jpg',
    slug: 'senior-attorney-1',
  },
  {
    id: 'attorney-2',
    name: '[Name to be confirmed]',
    title: 'Corporate Law Specialist',
    specialities: ['Corporate & Tax Law', 'Civil Litigation'],
    image: '/placeholder-user.jpg',
    slug: 'corporate-specialist-1',
  },
  {
    id: 'attorney-3',
    name: '[Name to be confirmed]',
    title: 'Property Law Expert',
    specialities: ['Property Law'],
    image: '/placeholder-user.jpg',
    slug: 'property-expert-1',
  },
]

export const blogArticles = [
  {
    id: 'article-1',
    title: 'Understanding Custody Arrangements in Pakistan',
    slug: 'understanding-custody-arrangements',
    excerpt:
      'A comprehensive guide to custody laws and arrangements under Pakistani law.',
    date: '2025-09-15',
    category: 'Family Law',
    image: '/placeholder.jpg',
  },
  {
    id: 'article-2',
    title: 'Property Rights and Registration: A Complete Overview',
    slug: 'property-rights-registration',
    excerpt:
      'Key information about property ownership and the registration process in Pakistan.',
    date: '2025-09-10',
    category: 'Property Law',
    image: '/placeholder.jpg',
  },
  {
    id: 'article-3',
    title: 'What You Need to Know About Court Marriage',
    slug: 'court-marriage-guide',
    excerpt:
      'Step-by-step guide to court marriage procedures and documentation requirements.',
    date: '2025-09-05',
    category: 'Court Marriage',
    image: '/placeholder.jpg',
  },
]

export const faqs = [
  {
    question: 'How do I schedule an initial consultation?',
    answer: 'Call the number for the city relevant to your matter or email info@attorneys.com.pk with a short summary. Mention the nature of the issue, where the parties or property are located, and any notice or hearing date. The team can tell you which records to prepare and how an appointment can be arranged. A first call can identify urgency, while detailed advice normally requires reviewing the documents. Do not send the only original of an important record before an appropriate delivery arrangement has been agreed.',
  },
  {
    question: 'What are your fee structures?',
    answer: 'Fees depend on the work required, its urgency, the forum and the documents available. A consultation, drafting an agreement, sending a notice, filing a case and appearing at hearings are different tasks. Ask what the proposed amount covers and whether court fees, registration charges, travel or third-party expenses are separate. If more work may be needed after reviewing the papers or receiving the other side’s response, the scope should explain how that additional work will be discussed.',
  },
  {
    question: 'Which cities do you serve?',
    answer: 'The contact numbers shown on this site are Karachi +92 333 1127830, Islamabad +92 333 1127836, Rawalpindi +92 333 1127831 and Lahore +92 333 1127835. The verified Karachi address is A-220, Supreme Corner, Block 18, Johar Chowrangi, Gulistan-e-Johar. If you are elsewhere, explain where the matter is pending or the property is located. The team can advise whether an initial review may be arranged remotely and whether a local appearance or original-document step is needed.',
  },
  {
    question: 'Do you handle urgent matters?',
    answer: 'State the exact deadline or event when you call: a hearing, notice response, potential arrest, threatened property transfer or immediate concern for a child. Availability and the appropriate legal step depend on the facts and the records. Preserve documents and note when a notice was received. A phone conversation does not automatically pause a court or regulatory deadline, so seek advice promptly and provide the full paperwork rather than relying on a brief description of what someone said.',
  },
  {
    question: 'Can I communicate with my attorney regularly?',
    answer: 'At the start, agree who will be your contact, how documents and instructions will be shared and when you should expect updates. Send new notices or hearing information as soon as they arrive. If a company or family has several interested people, identify the person authorised to give instructions. Clear communication also means discussing changes in evidence, cost or strategy when they arise; no lawyer can responsibly promise a particular response from the opposing party or the court.',
  },
  {
    question: 'What should I bring to my consultation?',
    answer: 'Bring a short timeline, your questions and complete copies of the papers relevant to the issue. These may include identity records, agreements, payment evidence, official notices, correspondence, earlier pleadings and every court order. Keep originals safe but available if counsel needs to inspect them. Include records that may weaken your position, because an incomplete file can produce unreliable advice. If something is missing, identify who has it and whether an official copy can be obtained.',
  },
]
