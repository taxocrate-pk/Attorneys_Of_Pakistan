import { ADDR, KARACHI_LINE, PHONE, REF, REVIEWER, S } from './common'

export default {
  keyphrase: 'Attorneys of Pakistan',
  metaTitle: 'Attorneys of Pakistan | About Our Law Firm, Lawyers and Offices',
  metaDescription: 'Attorneys of Pakistan is a law firm in the Qanoon Group network with offices in Karachi, Islamabad and Lahore, advising on family, property, criminal, corporate and tax matters.',
  h1: 'About Attorneys of Pakistan: Our Firm, Our Lawyers and How We Work',
  group: 'Company',
  phone: PHONE.karachi,
  officeLine: KARACHI_LINE,
  areaServed: 'Pakistan',
  schemaAddress: { street: ADDR.karachiGJ, locality: 'Karachi' },
  reviewer: REVIEWER.national,
  heroImage: null,
  intro: [
    'Attorneys of Pakistan is a law firm that advises and represents individuals, families, overseas Pakistanis and businesses across the country. We are part of the Qanoon Group, a network of member law firms. Our work covers family law and court marriage, property and civil litigation, criminal defence, company law and taxation.',
    'Our Karachi offices are at DHA Phase 7 and Gulistan-e-Jauhar, Karachi. We also have offices in Islamabad and Lahore and a Rawalpindi line. Call or WhatsApp +92 333 1127830 to speak to our team.',
  ],
  shortCta: 'Talk to our team — call or WhatsApp +92 333 1127830.',
  cards: {
    heading: 'What Attorneys of Pakistan stands for',
    items: [
      ['Honest advice', 'We tell clients what the law and the documents support, including the weaknesses of their case.'],
      ['Senior supervision', 'Every file is reviewed by a senior advocate before advice is given.'],
      ['Clear fees', 'Fees are confirmed in writing after document review, with official charges shown separately.'],
      ['Pakistan-wide reach', 'Offices in Karachi, Islamabad and Lahore, and network firms in other cities.'],
      ['Overseas clients', 'Video consultations, WhatsApp updates and powers of attorney for clients abroad.'],
      ['Confidentiality', 'Family, financial and business information is handled with discretion.'],
    ],
  },
  sections: [
    {
      h2: 'Who we are',
      paras: [
        'Attorneys of Pakistan brings together advocates who appear before the district courts, the High Courts and federal and provincial authorities. Mohsin Ali Shah (M.A., LL.B.), consulting lawyer, guides the firm’s corporate and tax practice and chairs the Pakistan Legal Forum. Punjab and Islamabad matters are reviewed by Fiaz Ahmed Khakh, Advocate Supreme Court. In Karachi, matters are reviewed by Syed Akhtar Rizvi, Advocate Supreme Court, and handled by a team that includes Khalid Mumtaz, Tahir Pervez Qureshi, Zaheer Ahmed Qazi and Shankar Lal Kataria (all Advocates High Court) and Mohsin Mirani, Advocate.',
        'As part of the Qanoon Group, we can draw on member firms in other cities when a client’s matter crosses provincial lines, without the client having to start again.',
      ],
    },
    {
      h2: 'Our practice areas',
      paras: [
        'We act in [family law cases](/explaining-family-law-rule/) — khula, talaq, maintenance, dower and custody — and arrange [court marriage in Pakistan](/court-marriage-services-fees-process-in-pakistan/) and [online Nikah in Pakistan](/online-marriage-karachi-islamabad-lahore-pakistan/) for couples in Pakistan and abroad. We advise families on guardianship through our [child adoption lawyers in Pakistan](/child-adoption-lawyers-pakistan/).',
        'Our litigation teams handle [civil and property disputes](/civil-lawyer/) and [criminal cases and bail](/criminal-law-in-pakistan/). For businesses, our [family and corporate lawyers](/family-and-corporate-lawyers-in-pakistan/) register companies with the SECP, draft commercial agreements and represent taxpayers before the FBR.',
      ],
    },
    {
      h2: 'How Attorneys of Pakistan works with clients',
      subs: [
        { h3: 'We start with the documents', paras: ['Advice is only as good as the facts behind it. We ask for the Nikah Nama, title papers, FIR, agreement or notice before giving a view, and we tell you which records are missing.'] },
        { h3: 'We explain options plainly', paras: ['Clients receive a clear explanation of the law, the forum, the evidence needed, the likely time and cost and the risks — in English or Urdu.'] },
        { h3: 'We keep you informed', paras: ['After each hearing or development we update you, usually by WhatsApp. You will know who is handling your file and how to reach them.'] },
        { h3: 'We do not promise results', paras: ['Courts decide cases. Our firm does not guarantee outcomes, and we advise clients to be cautious of anyone who does.'] },
      ],
    },
    {
      h2: 'Why Attorneys of Pakistan publishes legal guides',
      paras: [
        'Many people in Pakistan first learn about their rights from social media posts that are incomplete or simply wrong — for example, that a judge performs a court marriage, or that a talaq is effective without notice to the Union Council. Attorneys of Pakistan publishes guides that explain the actual law and procedure in plain English, with references to the statutes, so that clients arrive at their consultation better informed.',
        'Our guides are general information, not advice on a particular case. The right course always depends on the facts and documents, which is why we encourage readers to speak to a lawyer before acting.',
      ],
    },
    {
      h2: 'Serving overseas Pakistanis',
      paras: [
        'A large part of our work is for Pakistanis living abroad who have property, family or business matters at home. We arrange video consultations, receive documents securely, prepare powers of attorney for execution and attestation abroad, and represent clients in Pakistan so that they travel only when their presence is legally required.',
      ],
    },
  ],
  table: {
    heading: 'Attorneys of Pakistan offices',
    head: ['City', 'Office', 'Call or WhatsApp'],
    rows: [
      ['Karachi (Gulistan-e-Jauhar)', ADDR.karachiGJ, PHONE.karachi],
      ['Karachi (DHA)', ADDR.karachiDHA, PHONE.karachi],
      ['Islamabad', ADDR.islamabad, PHONE.islamabad],
      ['Rawalpindi', 'Seen at our Islamabad office by appointment', PHONE.rawalpindi],
      ['Lahore', ADDR.lahore, PHONE.lahore],
    ],
  },
  steps: {
    heading: 'Starting work with Attorneys of Pakistan',
    items: [
      ['Get in touch', 'Call or WhatsApp the number for your city with a short description of the matter.'],
      ['Send key papers', 'Share the main documents so the lawyer can read them before the meeting.'],
      ['Consultation', 'Meet in person or by video to discuss your options.'],
      ['Engagement', 'We confirm the scope of work and fee in writing.'],
      ['Representation', 'We act on your behalf and report progress regularly.'],
    ],
  },
  documents: {
    heading: 'Helpful information for your first contact',
    items: [
      'Your name, city and preferred contact number or WhatsApp',
      'The type of matter: family, marriage, property, criminal, corporate or tax',
      'Any court, police station or authority already involved',
      'The next hearing or reply date, if any',
      'Clear copies of the key documents',
    ],
  },
  afterSections: [
    {
      h2: 'Our commitment to legal accuracy',
      paras: [
        'The legal information on this website is written for Pakistani readers and reviewed by senior advocates. We refer to primary legislation such as the Muslim Family Laws Ordinance 1961, the Family Courts Act 1964, the Code of Criminal Procedure 1898, the Code of Civil Procedure 1908, the Companies Act 2017 and the Income Tax Ordinance 2001. Where the law differs between provinces — for example, on the minimum age of marriage — we say so. Pages show the reviewing advocate and the date of last update.',
      ],
    },
    {
      h2: 'How Attorneys of Pakistan Handles a New Enquiry',
      subs: [
        {
          h3: 'First Contact',
          paras: ['Most clients first call or send a WhatsApp message. We ask for your city, the type of matter and any date that is close, such as a hearing or a deadline for replying to a notice, so that urgent steps are not missed.'],
        },
        {
          h3: 'Review of Documents',
          paras: ['A lawyer reads the documents you send and identifies the forum, the law that applies and any limitation period. If something important is missing, we tell you exactly which record to obtain and where it is usually issued.'],
        },
        {
          h3: 'Written Scope and Fee',
          paras: ['Before any work starts, we confirm in writing what we will do, who will do it and the fee. Government charges, court fees and stamp duty are listed separately so that the total is clear.'],
        },
        {
          h3: 'Keeping You Informed',
          paras: ['After each hearing or filing we tell you what happened and what comes next. Copies of filings and orders are shared with you, and you can ask for an update at any time.'],
        },
      ],
    },
    {
      h2: 'Working With Families and Languages',
      subs: [
        {
          h3: 'Relatives Who Help You',
          paras: ['Family matters often involve several relatives. With your consent, we can speak to a family member who is helping you, but instructions come from you and confidential advice is given to you directly.'],
        },
        {
          h3: 'Urdu and English',
          paras: ['You can speak or write to us in Urdu or English. Documents filed in court are usually in English, and we explain their contents in the language you are comfortable with before you sign.'],
        },
      ],
    },
  ],
  faqHeading: 'Questions about Attorneys of Pakistan',
  faqs: [
    ['Where are your offices?', 'Karachi (Gulistan-e-Jauhar and DHA), Islamabad (G-9 Markaz) and Lahore (Chauburji Chowk). Rawalpindi clients are seen at our Islamabad office.'],
    ['Who leads the firm?', 'The firm’s corporate and tax practice is guided by Mohsin Ali Shah, consulting lawyer (corporate and tax). Punjab and Islamabad matters are reviewed by Fiaz Ahmed Khakh, Advocate Supreme Court.'],
    ['Is Attorneys of Pakistan part of a network?', 'Yes. We are part of the Qanoon Group network of member law firms.'],
    ['Do you handle cases outside your office cities?', 'Often, yes, directly or through network firms. Tell us where your matter is pending.'],
    ['How do your fees work?', 'Fees are confirmed in writing after we review your documents. Court fees and official charges are shown separately.'],
    ['Can I consult in Urdu?', 'Yes. Consultations are held in Urdu or English.'],
    ['Do your advocates appear in court themselves?', 'Our advocates appear in the courts of the cities where we have offices, from the district and family courts to the High Courts. Where a matter is in another city, we tell you before you instruct us whether we can act directly or would need to work with a local advocate.'],
    ['Who reviews the legal guides on this website?', 'Each guide names its reviewer at the end of the page. Punjab and Islamabad pages are reviewed by Fiaz Ahmed Khakh, Advocate Supreme Court, and corporate and tax pages by Syed Mohsin Ali Shah, Senior Consulting Lawyer.'],
    ['Do you take work on a fixed fee?', 'Routine work such as registrations and documentation can often be done for a fixed fee agreed in advance. Court cases are usually quoted after review, because the work depends on hearings and on the other side. We confirm the fee and what it covers in writing.'],
    ['How do you keep client information confidential?', 'Information you share with us is used only for your matter and is shared with a court, registry or authority only as the work requires. If you would rather not send documents on WhatsApp, ask us for another way to share them.'],
  ],
  related: {
    heading: 'Explore our services',
    items: [
      [S.pakistan, 'Attorneys in Pakistan'],
      [S.karachi, 'Attorneys in Karachi'],
      [S.islamabad, 'Lawyers in Islamabad'],
      [S.lahore, 'Attorneys in Lahore'],
      [S.rawalpindi, 'Lawyers in Rawalpindi'],
      [S.contact, 'Contact Attorneys of Pakistan'],
    ],
  },
  closing: {
    heading: 'Work with Attorneys of Pakistan',
    paras: [
      'If you have a legal problem — a family dispute, a marriage to arrange, property to protect, a criminal case, a company to set up or a tax notice to answer — our team will read your documents and tell you clearly what can be done.',
      'Call or WhatsApp +92 333 1127830, or see our [contact page](/contact-us/) for the number of each city office.',
    ],
  },
  references: [REF.pakcode],
}
