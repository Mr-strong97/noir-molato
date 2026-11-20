'use client';

import { motion } from 'motion/react';
import { ArrowUp } from 'lucide-react';
import { CONFIG } from '@/lib/molato-data';
import { BrandLogo } from './BrandLogo';

export function FooterSection() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      id="pied"
      data-theme="dark"
      className="relative bg-black text-white pt-16 sm:pt-24 pb-24 sm:pb-20 overflow-hidden"
    >
      <div className="mx-auto max-w-[1440px] px-5 sm:px-10 lg:px-16">
        {/* 4-column directory */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 pb-12 lg:pb-16">
          <div>
            <h2 className="font-sans-editorial text-xs font-medium uppercase tracking-[0.18em] text-white/50 mb-5">
              Navigation
            </h2>
            <ul className="space-y-3 font-sans-editorial text-sm text-white/80">
              <li>
                <a href="#marque" className="hover:text-white transition-colors">
                  À propos
                </a>
              </li>
              <li>
                <a href="#collection" className="hover:text-white transition-colors">
                  Produits
                </a>
              </li>
              <li>
                <a href="#atelier" className="hover:text-white transition-colors">
                  Livraison
                </a>
              </li>
              <li>
                <a href="#lookbook" className="hover:text-white transition-colors">
                  Nouveautés
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-sans-editorial text-xs font-medium uppercase tracking-[0.18em] text-white/50 mb-5">
              Réseaux
            </h2>
            <ul className="space-y-3 font-sans-editorial text-sm text-white/80">
              <li>
                <a
                  href={CONFIG.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Instagram
                  <span className="sr-only"> (nouvel onglet)</span>
                </a>
              </li>
              <li>
                <a
                  href={CONFIG.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Facebook
                  <span className="sr-only"> (nouvel onglet)</span>
                </a>
              </li>
              <li>
                <a
                  href={CONFIG.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  TikTok
                  <span className="sr-only"> (nouvel onglet)</span>
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-sans-editorial text-xs font-medium uppercase tracking-[0.18em] text-white/50 mb-5">
              Contact
            </h2>
            <ul className="space-y-3 font-sans-editorial text-sm text-white/80">
              <li>
                <a
                  href={`https://wa.me/${CONFIG.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  {CONFIG.whatsappDisplay}
                  <span className="sr-only"> (nouvel onglet)</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${CONFIG.email}`}
                  className="hover:text-white transition-colors"
                >
                  {CONFIG.email}
                </a>
              </li>
              <li className="text-white/60">{CONFIG.ville}</li>
            </ul>
          </div>

          <div>
            <h2 className="font-sans-editorial text-xs font-medium uppercase tracking-[0.18em] text-white/50 mb-5">
              Maison
            </h2>
            <ul className="space-y-3 font-sans-editorial text-sm text-white/80">
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Commander
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Livraison
                </a>
              </li>
              <li>
                <a href="#details" className="hover:text-white transition-colors">
                  Service client
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Signature giant Noir Molato logo rising on viewport entry */}
        <motion.div
          initial={{ opacity: 0.92, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.05 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="py-4 sm:py-6 flex items-center justify-start transition-transform duration-700 hover:scale-[1.01]"
        >
          <a
            href="#accueil"
            aria-label="Noir Molato — Retour en haut"
            className="block w-full max-w-[680px]"
          >
            <BrandLogo variant="dark" size="footer" />
          </a>
        </motion.div>

        {/* Bottom baseline bar */}
        <div className="mt-8 pt-6 border-t border-white/[0.12] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:pr-60 font-sans-editorial text-xs text-white/60">
          <p>© {CONFIG.annee} Noir Molato. Tous droits réservés.</p>

          <button
            type="button"
            onClick={scrollToTop}
            className="group inline-flex min-h-[44px] w-fit items-center gap-2 text-xs font-medium uppercase tracking-[0.14em] text-white/80 hover:text-white transition-colors"
          >
            <span>Retour en haut</span>
            <ArrowUp
              aria-hidden="true"
              className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-1"
            />
          </button>
        </div>
      </div>
    </footer>
  );
}
