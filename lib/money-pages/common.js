// Shared constants for the money pages. Addresses and numbers mirror lib/content.js exactly.
export const S = {
  pakistan: 'attorneys-with-unmatched-expertise-in-pakistan-laws-our-expert-attorneys-fight-for-your-right',
  karachi: 'attorneys-legal-advisors-and-advocates-in-karachi-expert-lawyers-and-consultants-ready-to-assist-you',
  islamabad: 'attorneys-and-lawyers-in-islamabad-experienced-legal-consultants-and-advocates-of-qanoon-group-at-your-service',
  rawalpindi: 'expert-attorneys-and-lawyers-in-rawalpindi-premier-legal-consultants-and-advisors-of-qanoon-group',
  lahore: 'comprehensive-legal-services-in-punjab-meet-our-team-of-attorneys-advocates-and-legal-consultants-in-lahore',
  courtMarriage: 'court-marriage-services-fees-process-in-pakistan',
  onlineNikah: 'online-marriage-karachi-islamabad-lahore-pakistan',
  adoption: 'child-adoption-lawyers-pakistan',
  family: 'explaining-family-law-rule',
  criminal: 'criminal-law-in-pakistan',
  civil: 'civil-lawyer',
  corporate: 'family-and-corporate-lawyers-in-pakistan',
  about: 'about-us',
  contact: 'contact-us',
}
export const L = key => `/${S[key]}/`

export const PHONE = { karachi: '+92 333 1127830', islamabad: '+92 333 1127836', rawalpindi: '+92 333 1127831', lahore: '+92 333 1127835' }

export const ADDR = {
  karachiGJ: 'Mezzanine Floor, Muneer Mobile Mall, Block 17, Gulistan-e-Jauhar, Karachi',
  karachiDHA: 'Mezzanine Floor, Main Jami Commercial, Phase 7, DHA, Karachi',
  islamabad: '2nd Floor, Laraib Plaza, Karachi Company, G-9 Markaz, Islamabad',
  lahore: '1st Floor, Al-Mairaj Arcade, near Surayya Azeem Trust Hospital, Chauburji Chowk, Lahore',
}
export const KARACHI_LINE = `${ADDR.karachiGJ} and ${ADDR.karachiDHA}`

export const REVIEWER = {
  karachi: 'Mohsin Ali Shah, Consulting Lawyer (Corporate & Tax)',
  national: 'Fiaz Ahmed Khakh, Advocate Supreme Court',
}

export const REF = {
  mflo: ['Muslim Family Laws Ordinance, 1961 (Pakistan Code)', 'https://pakistancode.gov.pk/pdffiles/administratordf5df7bd70945d88e28f6a85c1a9ef6b.pdf'],
  gwa: ['Guardians and Wards Act, 1890 (Pakistan Code)', 'https://www.pakistancode.gov.pk/english/UY2FqaJw2-apaUY2Fqa-cJc%3D-sg-jjjjjjjjjjjjj-con-909'],
  fca: ['Family Courts Act, 1964 (Pakistan Code)', 'https://pakistancode.gov.pk/english/UY2FqaJw1-apaUY2Fqa-apaUY2Npa5lraQ%3D%3D-sg-jjjjjjjjjjjjj'],
  crpc: ['Code of Criminal Procedure, 1898 (Pakistan Code)', 'https://pakistancode.gov.pk/pdffiles/administrator7db1e56f0f1d39a6e67573ec6b0944e2.pdf'],
  sra: ['Specific Relief Act, 1877 (Pakistan Code)', 'https://pakistancode.gov.pk/pdffiles/administratorf257754bbb3c6863d879492bc8cd8f6e.pdf'],
  secp: ['SECP company registration guidance', 'https://www.secp.gov.pk/company-formation/registration-of-company/'],
  fbr: ['FBR income tax return guidance', 'https://www.fbr.gov.pk/categ/file-income-tax-return/51147/80860/71160'],
  pakcode: ['Pakistan Code — federal laws database', 'https://pakistancode.gov.pk/'],
  nadra: ['NADRA (National Database and Registration Authority)', 'https://www.nadra.gov.pk/'],
}
