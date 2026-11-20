'use client';

import { MessageCircle } from 'lucide-react';
import { CONFIG, buildGeneralWhatsAppUrl } from '@/lib/molato-data';

export function WhatsAppButton() {
  return (
    <a
      href={buildGeneralWhatsAppUrl(CONFIG.whatsapp)}
      target="_blank"
      rel="noopener noreferrer"
      data-testid="whatsapp-floating-btn"
      aria-label="Discuter sur WhatsApp (nouvel onglet)"
      className="group fixed bottom-4 right-5 sm:bottom-7 sm:right-10 lg:right-16 z-[90] inline-flex min-h-[44px] h-11 sm:h-12 items-center gap-3 bg-black px-4 sm:px-5 text-xs font-medium uppercase tracking-[0.14em] text-white border border-white/80 ring-1 ring-black transition-colors duration-200 hover:bg-white hover:text-black hover:border-black whitespace-nowrap shrink-0"
    >
      <MessageCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
      <span>Discuter sur WhatsApp</span>
      <span className="sr-only">(nouvel onglet)</span>
    </a>
  );
}
