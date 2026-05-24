import type { Metadata, Viewport } from 'next';
import './globals.css';
import { COMPANY_NAME, COMPANY_DESCRIPTION, COMPANY_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: `${COMPANY_NAME} | NFC Smart Cards & Digital Marketing Hyderabad`,
  description: COMPANY_DESCRIPTION,
  metadataBase: new URL(COMPANY_URL),
  keywords: [
    'NFC smart cards',
    'digital marketing Hyderabad',
    'social media marketing',
    'Google My Business',
    'website development',
    'local SEO',
    'GMB optimization',
    'GSV services',
    'smart visiting cards',
    'Hyderabad business solutions',
  ],
  authors: [
    {
      name: COMPANY_NAME,
      url: COMPANY_URL,
    },
  ],
  creator: COMPANY_NAME,
  publisher: COMPANY_NAME,
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: COMPANY_URL,
    siteName: COMPANY_NAME,
    title: `${COMPANY_NAME} | NFC Smart Cards & Digital Marketing Hyderabad`,
    description: COMPANY_DESCRIPTION,
    images: [
      {
        url: `${COMPANY_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: COMPANY_NAME,
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@pinnaclegrid',
    creator: '@pinnaclegrid',
    title: `${COMPANY_NAME} - Intelligent Electrical Grid Solutions`,
    description: COMPANY_DESCRIPTION,
    images: [`${COMPANY_URL}/og-image.jpg`],
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: COMPANY_NAME,
  },
  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },
  verification: {
    google: 'your-google-verification-code-here',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // JSON-LD Schema for Organization
  const schemaOrg = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': COMPANY_URL,
    name: COMPANY_NAME,
    url: COMPANY_URL,
    description: COMPANY_DESCRIPTION,
    email: 'hello@pinnaclegrid.com',
    phone: '+1 (800) 123-4567',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '123 Energy Boulevard',
      addressLocality: 'San Francisco',
      addressRegion: 'CA',
      postalCode: '94102',
      addressCountry: 'US',
    },
    sameAs: [
      'https://linkedin.com/company/pinnaclegrid',
      'https://twitter.com/pinnaclegrid',
      'https://facebook.com/pinnaclegrid',
    ],
  };

  return (
    <html lang="en" className="bg-background">
      <head>
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
        />

        {/* Preconnect to external resources */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* DNS Prefetch */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
      </head>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
