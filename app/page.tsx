'use client';

import { useCallback, useState } from 'react';
import { Preloader } from '@/components/Preloader';
import { HeaderNav } from '@/components/HeaderNav';
import { CustomCursor } from '@/components/CustomCursor';
import { HeroSection } from '@/components/HeroSection';
import { ManifesteSection } from '@/components/ManifesteSection';
import { CollectionSection } from '@/components/CollectionSection';
import { DetailsSection } from '@/components/DetailsSection';
import { AtelierSection } from '@/components/AtelierSection';
import { LookbookSection } from '@/components/LookbookSection';
import { CitationSection } from '@/components/CitationSection';
import { ContactSection } from '@/components/ContactSection';
import { FooterSection } from '@/components/FooterSection';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { ScrollProgressBar } from '@/components/ScrollProgressBar';
import { CONFIG } from '@/lib/molato-data';

export default function HomePage() {
  const [preloaderDone, setPreloaderDone] = useState(false);
  const handlePreloaderComplete = useCallback(() => setPreloaderDone(true), []);

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'ClothingStore',
    name: CONFIG.marque,
    description:
      'Maison de mode contemporaine à Kinshasa. Prêt-à-porter homme et femme, coupes précises et minimalisme éditorial noir et blanc.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Kinshasa',
      addressCountry: 'CD',
    },
    sameAs: [CONFIG.instagram, CONFIG.facebook, CONFIG.tiktok],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <ScrollProgressBar />
      <CustomCursor />
      <Preloader onComplete={handlePreloaderComplete} />
      <HeaderNav />

      <main id="contenu">
        <HeroSection ready={preloaderDone} />
        <ManifesteSection />
        <CollectionSection />
        <DetailsSection />
        <AtelierSection />
        <LookbookSection />
        <CitationSection />
        <ContactSection />
      </main>

      <FooterSection />
      <WhatsAppButton />
    </>
  );
}
