// File: app/layout.tsx

import './globals.css';
import type { Metadata } from 'next';
import { Quicksand } from 'next/font/google';

const quicksand = Quicksand({
  subsets: ['latin'],
  variable: '--font-quicksand',
});

export const metadata: Metadata = {
  title: 'Pebble Platforms - Innovative Software Solutions',
  description:
    'Empowering users with intuitive applications and platforms that make life easier. Experience seamless digital solutions.',
  keywords:
    'Pebble Platforms, software products, innovative software, consumer software, user experience, great design, digital solutions, tech company',
  icons: {
    icon: [
      {
        url: '/images/favicon.ico',
        sizes: 'any',
      },
      {
        url: '/images/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png',
      },
      {
        url: '/images/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png',
      },
    ],
  },
  openGraph: {
    title: 'Pebble Platforms - Innovative Software Solutions',
    description:
      'Pebble Platforms LLC specializes in crafting beautifully designed software products that deliver outstanding user experiences.',
    url: 'https://www.pebbleplatforms.com',
    siteName: 'Pebble Platforms',
    images: [
      {
        url: 'https://www.pebbleplatforms.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Pebble Platforms - Innovative Software Solutions',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pebble Platforms - Innovative Software Solutions',
    description:
      'Pebble Platforms LLC creates beautifully designed software products offering superior user experiences.',
    images: ['https://www.pebbleplatforms.com/og-image.jpg'],
    site: '@pebbleplatforms',
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
  alternates: {
    canonical: 'https://www.pebbleplatforms.com',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${quicksand.className} antialiased dark`}>
        {children}
      </body>
    </html>
  );
}