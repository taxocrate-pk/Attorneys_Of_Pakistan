import { Analytics } from '@vercel/analytics/next'
import './globals.css'

export const metadata = {
  metadataBase: new URL('https://attorneys.com.pk'),
  title: 'Attorneys of Pakistan | Trusted Legal Counsel',
  description: 'Professional legal services in Karachi, Islamabad, Rawalpindi, Lahore, and Hyderabad. Expert family law, corporate law, civil litigation, and more.',
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

export const viewport = { colorScheme: 'light', themeColor: '#f7f5f0' }

export default function RootLayout({ children }) {
  return <html lang="en"><body className="antialiased">{children}{process.env.NODE_ENV === 'production' && <Analytics />}</body></html>
}
