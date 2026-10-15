/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  async redirects() {
    return [
      { source: '/attorneys-with-unmatched-expertise-in-pakistan-laws-our-expert-attorneys-fight-for-your-right/', destination: '/attorneys-in-pakistan/', permanent: true },
      { source: '/attorneys-legal-advisors-and-advocates-in-karachi-expert-lawyers-and-consultants-ready-to-assist-you/', destination: '/lawyers-in-karachi/', permanent: true },
      { source: '/attorneys-and-lawyers-in-islamabad-experienced-legal-consultants-and-advocates-of-qanoon-group-at-your-service/', destination: '/lawyers-in-islamabad/', permanent: true },
      { source: '/expert-attorneys-and-lawyers-in-rawalpindi-premier-legal-consultants-and-advisors-of-qanoon-group/', destination: '/lawyers-in-rawalpindi/', permanent: true },
      { source: '/comprehensive-legal-services-in-punjab-meet-our-team-of-attorneys-advocates-and-legal-consultants-in-lahore/', destination: '/lawyers-in-lahore/', permanent: true },
      { source: '/court-marriage-services-fees-process-in-pakistan/', destination: '/court-marriage-pakistan/', permanent: true },
      { source: '/online-marriage-karachi-islamabad-lahore-pakistan/', destination: '/online-nikah-pakistan/', permanent: true },
      { source: '/child-adoption-lawyers-pakistan/', destination: '/child-guardianship-pakistan/', permanent: true },
      { source: '/explaining-family-law-rule/', destination: '/family-lawyers-pakistan/', permanent: true },
      { source: '/criminal-law-in-pakistan/', destination: '/criminal-lawyers-pakistan/', permanent: true },
      { source: '/civil-lawyer/', destination: '/civil-lawyers-pakistan/', permanent: true },
      { source: '/family-and-corporate-lawyers-in-pakistan/', destination: '/corporate-lawyers-pakistan/', permanent: true },
      { source: '/about-us/', destination: '/about/', permanent: true },
      { source: '/contact-us/', destination: '/contact/', permanent: true },
      { source: '/comprehensive-privacy-policy-for-attorneys-com-pk/', destination: '/privacy-policy/', permanent: true },
      { source: '/income-tax-return-filing-business-owners-pakistan-records-wealth-statements-fbr-risk/', destination: '/income-tax-return-business-owners/', permanent: true },
    ]
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
