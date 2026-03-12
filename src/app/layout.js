import './globals.css'
import { ThemeProvider } from 'next-themes'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/layout/WhatsAppButton'

export const metadata = {
  metadataBase: new URL('https://hornbill-agency.vercel.app'),
  title: {
    default: 'Hornbill Tech Agency | Digital Solutions for African Businesses',
    template: '%s | Hornbill Tech Agency',
  },
  description:
    'Hornbill Tech Agency helps Kenyan businesses launch, grow, and automate with professional websites, e-commerce, AI assistants, WhatsApp marketing, and custom business systems.',
  keywords: [
    'web development Kenya',
    'website design Mombasa',
    'e-commerce Kenya',
    'M-Pesa integration',
    'WhatsApp marketing Kenya',
    'AI chatbot Kenya',
    'business software Kenya',
    'Hornbill Tech Agency',
  ],
  authors: [{ name: 'Hornbill Tech Agency', url: 'https://hornbill-agency.vercel.app' }],
  creator: 'Hornbill Tech Agency',
  publisher: 'Hornbill Tech Agency',
  openGraph: {
    type: 'website',
    locale: 'en_KE',
    url: 'https://hornbill-agency.vercel.app',
    siteName: 'Hornbill Tech Agency',
    title: 'Hornbill Tech Agency | Digital Solutions for African Businesses',
    description:
      'Professional websites, e-commerce, AI assistants, WhatsApp marketing, and custom business systems for Kenyan businesses.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Hornbill Tech Agency',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hornbill Tech Agency | Digital Solutions for African Businesses',
    description: 'Empowering African businesses with cutting-edge technology.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': ['Organization', 'LocalBusiness'],
  name: 'Hornbill Tech Agency',
  url: 'https://hornbill-agency.vercel.app',
  logo: 'https://hornbill-agency.vercel.app/logo.png',
  description:
    'Hornbill Tech Agency provides professional digital solutions for African businesses including web development, e-commerce, AI assistants, and marketing automation.',
  email: 'hornbillkenya@gmail.com',
  telephone: '+254759293030',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Mombasa',
    addressCountry: 'KE',
  },
  sameAs: ['https://www.facebook.com/profile.php?id=61585923812346'],
  openingHours: 'Mo-Fr 08:00-18:00',
  priceRange: 'KSh 10,000 - KSh 2,000,000',
  areaServed: {
    '@type': 'Country',
    name: 'Kenya',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="font-sans antialiased bg-white dark:bg-hornbill-dark text-hornbill-black dark:text-white">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <WhatsAppButton />
        </ThemeProvider>
      </body>
    </html>
  )
}
