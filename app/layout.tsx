import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Manrope } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });
const manrope = Manrope({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Eco Voice Foundation | Wildlife Conservation & Habitat Restoration',
  description: 'Eco Voice Foundation is dedicated to protecting threatened species and habitats in South India through research, restoration, community engagement, and policy advisory.',
  metadataBase: new URL('https://ecovoice.org'), // Change to your actual domain
  openGraph: {
    title: 'Eco Voice Foundation | Wildlife Conservation & Habitat Restoration',
    description: 'Eco Voice Foundation is dedicated to protecting threatened species and habitats in South India through research, restoration, community engagement, and policy advisory.',
    url: 'https://ecovoice.org',
    siteName: 'Eco Voice Foundation',
    images: [
      {
        url: '/images/impact.png', // Prefer a large, relevant image
        width: 1200,
        height: 630,
        alt: 'Eco Voice Foundation - Conservation in Action',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Eco Voice Foundation | Wildlife Conservation & Habitat Restoration',
    description: 'Eco Voice Foundation is dedicated to protecting threatened species and habitats in South India through research, restoration, community engagement, and policy advisory.',
    images: ['/images/impact.png'],
    site: '@EcoVoiceOrg', // Change to your Twitter handle if available
  },
  alternates: {
    canonical: 'https://ecovoice.org',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${manrope.className}`}>{children}</body>
    </html>
  );
}
