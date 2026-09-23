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
    description: 'Our primary office serving Karachi and surrounding areas',
    slug: 'karachi',
  },
  {
    id: 'islamabad',
    name: 'Islamabad',
    phone: '+92 333 1127836',
    description: 'Legal consultations for clients in Islamabad',
    slug: 'islamabad',
  },
  {
    id: 'rawalpindi',
    name: 'Rawalpindi',
    phone: '+92 333 1127831',
    description: 'Legal consultations for clients in Rawalpindi',
    slug: 'rawalpindi',
  },
  {
    id: 'lahore',
    name: 'Lahore',
    phone: '+92 333 1127835',
    description: 'Legal consultations for clients in Lahore',
    slug: 'lahore',
  },
]

export const practiceAreas = [
  {
    id: 'family-law',
    name: 'Family Law',
    slug: 'family-law',
    shortDescription: 'Expert guidance on family matters',
    description:
      'We provide comprehensive legal services in family law matters including divorce, custody arrangements, inheritance disputes, and family-related contracts. Our experienced attorneys understand the sensitivity of family matters and provide compassionate, professional guidance.',
    icon: 'HeartHandshake',
  },
  {
    id: 'divorce-custody',
    name: 'Divorce & Child Custody',
    slug: 'divorce-custody',
    shortDescription: 'Navigate complex family transitions',
    description:
      'Specialising in divorce proceedings and child custody arrangements. We advocate for fair settlements and prioritise the best interests of children while protecting your legal rights.',
    icon: 'ShieldCheck',
  },
  {
    id: 'property-law',
    name: 'Property Law',
    slug: 'property-law',
    shortDescription: 'Protecting your real estate interests',
    description:
      'From purchase and sale agreements to property disputes and registration, we handle all aspects of property law. Our team ensures all documentation is legally sound and your interests are protected.',
    icon: 'Scale',
  },
  {
    id: 'corporate-tax',
    name: 'Corporate & Tax Law',
    slug: 'corporate-tax',
    shortDescription: 'Business law and tax compliance',
    description:
      'We advise on corporate structure, compliance, taxation, mergers and acquisitions, and ongoing business matters. Our services help businesses navigate complex regulatory environments.',
    icon: 'BriefcaseBusiness',
  },
  {
    id: 'civil-litigation',
    name: 'Civil Litigation',
    slug: 'civil-litigation',
    shortDescription: 'Resolving disputes through the courts',
    description:
      'We represent clients in civil disputes including contract disputes, commercial disagreements, and other civil matters. Strategic advocacy and strong legal representation.',
    icon: 'Scale',
  },
  {
    id: 'criminal-law',
    name: 'Criminal Law',
    slug: 'criminal-law',
    shortDescription: 'Robust criminal defence',
    description:
      'Expert criminal defence representation for all types of charges. We protect your rights throughout investigation, trial, and appeal proceedings.',
    icon: 'ShieldCheck',
  },
  {
    id: 'court-marriage',
    name: 'Court Marriage',
    slug: 'court-marriage',
    shortDescription: 'Legal marriage registration',
    description:
      'We advise on Nikah documentation, free consent and the appropriate registration process according to the circumstances.',
    icon: 'HeartHandshake',
  },
  {
    id: 'marriage-registration',
    name: 'Marriage Registration',
    slug: 'marriage-registration',
    shortDescription: 'Official marriage documentation',
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
    answer:
      'You can contact us via phone, email, or our contact form. Our team will advise on appointment availability.',
  },
  {
    question: 'What are your fee structures?',
    answer:
      'Fees vary depending on the nature and complexity of your matter. We discuss fees transparently during your consultation and provide clear cost estimates.',
  },
  {
    question: 'Which cities do you serve?',
    answer:
      'You can contact our Karachi, Islamabad, Rawalpindi and Lahore teams using the city numbers listed above.',
  },
  {
    question: 'Do you handle urgent matters?',
    answer:
      'Yes, we handle urgent matters on a case-by-case basis. Please contact us immediately if you require urgent assistance.',
  },
  {
    question: 'Can I communicate with my attorney regularly?',
    answer:
      'Regular communication is essential to our service. Your assigned attorney will keep you informed of all developments in your matter.',
  },
  {
    question: 'What should I bring to my consultation?',
    answer:
      'Bring any relevant documents related to your matter, including contracts, correspondence, court documents, or other evidence.',
  },
]
