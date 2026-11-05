import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { siteConfig } from '../lib/content'

// Site-wide identity; page-level LegalService entries point at this Organization by @id.
const identity = [
  { '@context': 'https://schema.org', '@type': 'Organization', '@id': `${siteConfig.url}/#organization`, name: siteConfig.name, url: `${siteConfig.url}/`, logo: `${siteConfig.url}/apple-icon.png`, email: siteConfig.email, telephone: siteConfig.phone },
  { '@context': 'https://schema.org', '@type': 'WebSite', '@id': `${siteConfig.url}/#website`, name: siteConfig.name, url: `${siteConfig.url}/`, publisher: { '@id': `${siteConfig.url}/#organization` }, inLanguage: 'en' },
]

export const metadata = {
  metadataBase: new URL('https://attorneys.com.pk'),
  title: 'Attorneys of Pakistan | Trusted Legal Counsel',
  description: 'Legal advice for family, property, corporate, tax, civil and criminal matters. Contact the Karachi, Islamabad, Rawalpindi or Lahore team.',
  generator: 'v0.app',
  icons: { icon: '/icon.svg', apple: '/apple-icon.png' },
  openGraph: {
    title: 'Attorneys of Pakistan',
    description: 'Professional legal services across Pakistan',
    url: 'https://attorneys.com.pk',
    siteName: 'Attorneys of Pakistan',
    type: 'website',
  },
}

export const viewport = { colorScheme: 'light', themeColor: '#5a1420' }

export default function RootLayout({ children }) {
  return <html lang="en"><head><link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" /><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=Inter:wght@400;600;700&display=swap" /></head><body className="antialiased" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>{identity.map((entry, index) => <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(entry) }} />)}{children}{process.env.NODE_ENV === 'production' && <Analytics />}</body></html>
}
