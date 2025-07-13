import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Manrope } from 'next/font/google';
import { Analytics } from "@vercel/analytics/next"

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
        url: 'https://i.ibb.co/XZyZ616G/eco.jpg',
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
    images: ['https://i.ibb.co/XZyZ616G/eco.jpg'],
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
      <Analytics />
      <body className={`${inter.className} ${manrope.className}`}>{children}</body>
    </html>
  );
}
