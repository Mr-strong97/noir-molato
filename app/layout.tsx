import type { Metadata, Viewport } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500'],
  style: ['normal', 'italic'],
  variable: '--font-serif',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-sans',
  display: 'swap',
});

const siteUrl = process.env.APP_URL && process.env.APP_URL.startsWith('http')
  ? process.env.APP_URL
  : 'http://localhost:3000';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Noir Molato — Mode Contemporaine · Kinshasa',
  description:
    'Maison de mode contemporaine à Kinshasa. Prêt-à-porter homme et femme, coupes précises et minimalisme éditorial noir et blanc.',
  openGraph: {
    title: 'Noir Molato — Porter l’essentiel.',
    description:
      'Des vêtements coupés avec précision, pensés pour la ville. Collection Automne — Hiver 2026.',
    type: 'website',
    locale: 'fr_FR',
    images: [
      {
        url: '/images/catalogue/silhouette-monochrome-chemise-pantalon-noir-molato.jpg',
        width: 1254,
        height: 1254,
        alt: 'Noir Molato — Silhouette monochrome et pantalon ample à pinces',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Noir Molato — Porter l’essentiel.',
    description:
      'Des vêtements coupés avec précision, pensés pour la ville. Collection Automne — Hiver 2026.',
    images: ['/images/catalogue/silhouette-monochrome-chemise-pantalon-noir-molato.jpg'],
  },
};

export const viewport: Viewport = {
  themeColor: '#000000',
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${playfair.variable} ${inter.variable}`}>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
