import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout';
import { Footer } from '@/components/layout';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Avioemart - AI-Powered Aviation Marketplace',
  description:
    'AI-Powered Aviation Marketplace - Connect buyers and suppliers worldwide with AI-powered RFQs, automated quoting, and smart procurement workflows. Save 68% time and 17% costs.',
  keywords:
    'aviation marketplace, aircraft parts, RFQ, procurement, aviation suppliers, AI procurement, aircraft components',
  authors: [{ name: 'Avioemart' }],
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    url: 'https://avioemart.com/',
    title: 'Avioemart - AI-Powered Aviation Marketplace',
    description:
      'Connect buyers and suppliers worldwide with AI-powered RFQs, automated quoting, and smart procurement workflows.',
    images: [{ url: 'https://avioemart.com/og-image.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Avioemart - AI-Powered Aviation Marketplace',
    description:
      'Connect buyers and suppliers worldwide with AI-powered RFQs, automated quoting, and smart procurement workflows.',
    images: ['https://avioemart.com/og-image.jpg'],
  },
  icons: {
    icon: '/favicon.svg',
    apple: '/favicon.svg',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Avioemart',
    url: 'https://avioemart.com',
    logo: 'https://avioemart.com/logo.png',
    description: 'AI-Powered Aviation Marketplace connecting buyers and suppliers worldwide',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-800-AVIOEMART',
      contactType: 'customer service',
      email: 'support@avioemart.com',
    },
    sameAs: [
      'https://www.linkedin.com/company/avioemart',
      'https://twitter.com/avioemart',
      'https://www.facebook.com/avioemart',
    ],
  };

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body className={inter.className}>
        <div className="min-h-screen bg-gray-50 flex flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
