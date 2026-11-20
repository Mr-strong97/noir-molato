'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { CONFIG } from '@/lib/molato-data';

const NAV_ITEMS = [
  { id: 'marque', label: 'À propos' },
  { id: 'collection', label: 'Produits' },
  { id: 'details', label: 'Commande' },
  { id: 'atelier', label: 'Livraison' },
  { id: 'lookbook', label: 'Nouveautés' },
  { id: 'contact', label: 'Nous écrire' },
] as const;

export function HeaderNav() {
  const [headerTheme, setHeaderTheme] = useState<'dark' | 'light'>('dark');
  const [activeSection, setActiveSection] = useState<string>('accueil');
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const lastScrollY = useRef(0);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const menuOverlayRef = useRef<HTMLDivElement>(null);

  // Automatic light/dark section detection under header + scroll direction hide/show
  useEffect(() => {
    let rafId = 0;
    const updateOnScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const currentY = window.scrollY;
        const nextScrolled = currentY > 8;
        setScrolled((prev) => (prev === nextScrolled ? prev : nextScrolled));
        if (!menuOpen) {
          if (currentY > 140 && currentY > lastScrollY.current + 8) {
            setHidden((prev) => (prev ? prev : true));
          } else if (currentY < lastScrollY.current - 8 || currentY <= 80) {
            setHidden((prev) => (prev ? false : prev));
          }
        }
        lastScrollY.current = currentY;

        const sections = document.querySelectorAll<HTMLElement>(
          'section[data-theme], footer[data-theme]',
        );
        const probeY = 48;
        sections.forEach((sec) => {
          const rect = sec.getBoundingClientRect();
          if (rect.top <= probeY && rect.bottom > probeY) {
            const theme = sec.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
            setHeaderTheme((prev) => (prev === theme ? prev : theme));
            if (sec.id) {
              setActiveSection((prev) => (prev === sec.id ? prev : sec.id));
            }
          }
        });
      });
    };

    updateOnScroll();
    window.addEventListener('scroll', updateOnScroll, { passive: true });
    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('scroll', updateOnScroll);
    };
  }, [menuOpen]);

  // Menu body lock, focus trap & Escape handler
  useEffect(() => {
    if (!menuOpen) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    setTimeout(() => closeButtonRef.current?.focus(), 60);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
        return;
      }
      if (e.key === 'Tab' && menuOverlayRef.current) {
        const focusable = menuOverlayRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled])',
        );
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [menuOpen]);

  const isLight = headerTheme === 'light';

  return (
    <>
      <a href="#contenu" className="skip-link">
        Aller au contenu principal
      </a>

      <header
        id="entete"
        className={`fixed top-0 left-0 right-0 z-[100] h-16 md:h-[72px] transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          hidden ? '-translate-y-full' : 'translate-y-0'
        } ${
          isLight
            ? 'bg-white/95 backdrop-blur-md text-black border-b border-black/[0.12]'
            : scrolled
              ? 'bg-black/95 backdrop-blur-md text-white border-b border-white/[0.12]'
              : 'bg-black/90 text-white border-b border-transparent'
        }`}
      >
        <div className="mx-auto flex h-full max-w-[1440px] items-center justify-between gap-8 px-5 sm:px-10 lg:px-16">
          {/* Zone 1: Brand mark */}
          <a
            href="#accueil"
            aria-label="Noir Molato — Retour à l'accueil"
            className="inline-flex items-center shrink-0 whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-4"
          >
            <BrandLogo variant={isLight ? 'light' : 'dark'} size="header" />
          </a>

          {/* Zone 2: Navigation links (desktop) */}
          <nav
            aria-label="Navigation principale"
            className="hidden lg:flex items-center gap-7 text-sm font-normal tracking-[0.04em]"
          >
            {NAV_ITEMS.slice(0, 5).map((item) => {
              const active = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="group relative py-1 whitespace-nowrap shrink-0 transition-opacity duration-200 hover:opacity-80"
                >
                  <span>{item.label}</span>
                  <span
                    aria-hidden="true"
                    className={`absolute left-0 right-0 bottom-0 h-[1px] origin-left bg-current transition-transform duration-350 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                      active ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                    }`}
                  />
                </a>
              );
            })}
          </nav>

          {/* Zone 3: Single primary action (desktop) & Menu trigger (mobile) */}
          <div className="flex items-center gap-4 shrink-0">
            <a
              href="#collection"
              className={`hidden lg:inline-flex items-center justify-center px-5 py-2.5 text-xs font-medium uppercase tracking-[0.14em] whitespace-nowrap shrink-0 border transition-colors duration-200 ${
                isLight
                  ? 'border-black text-black hover:bg-black hover:text-white'
                  : 'border-white text-white hover:bg-white hover:text-black'
              }`}
            >
              Commander
            </a>

            <button
              ref={menuButtonRef}
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-expanded={menuOpen}
              aria-controls="menu-plein-ecran"
              className="lg:hidden inline-flex items-center justify-center min-h-[44px] min-w-[44px] px-3 text-xs font-medium uppercase tracking-[0.18em] whitespace-nowrap shrink-0 border border-current/30"
            >
              Menu
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Editorial Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="menu-plein-ecran"
            ref={menuOverlayRef}
            role="dialog"
            aria-modal="true"
            aria-label="Menu principal"
            initial={{ clipPath: 'inset(0 0 100% 0)' }}
            animate={{ clipPath: 'inset(0 0 0% 0)' }}
            exit={{ clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[200] flex flex-col justify-between bg-black text-white px-5 py-5 sm:px-10 sm:py-8 overflow-y-auto"
          >
            <div className="flex items-center justify-between">
              <a
                href="#accueil"
                onClick={() => setMenuOpen(false)}
                aria-label="Noir Molato — Accueil"
              >
                <BrandLogo variant="dark" size="header" />
              </a>
              <button
                ref={closeButtonRef}
                type="button"
                onClick={() => {
                  setMenuOpen(false);
                  menuButtonRef.current?.focus();
                }}
                aria-label="Fermer le menu"
                className="inline-flex items-center gap-2 min-h-[44px] px-4 text-xs font-medium uppercase tracking-[0.18em] border border-white/30 text-white hover:bg-white hover:text-black transition-colors"
              >
                <span>Fermer</span>
                <X className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>

            <nav aria-label="Menu mobile" className="my-10">
              <ul className="flex flex-col gap-3">
                {NAV_ITEMS.map((item, idx) => (
                  <motion.li
                    key={item.id}
                    initial={{ opacity: 0, y: 28 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 0.1 + idx * 0.06,
                      duration: 0.5,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  >
                    <a
                      href={`#${item.id}`}
                      onClick={() => setMenuOpen(false)}
                      className="inline-flex items-baseline gap-4 py-2 font-serif-editorial text-4xl sm:text-5xl text-white hover:italic transition-all"
                    >
                      <span className="font-sans-editorial text-xs tracking-[0.18em] text-white/50">
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                      <span>{item.label}</span>
                    </a>
                  </motion.li>
                ))}
              </ul>
            </nav>

            <div className="border-t border-white/15 pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-xs text-white/70">
              <div className="flex flex-col gap-1">
                <span>{CONFIG.adresse}</span>
                <span>{CONFIG.horaires}</span>
              </div>
              <div className="flex items-center gap-6 uppercase tracking-[0.16em]">
                <a
                  href={`https://wa.me/${CONFIG.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-4 hover:text-white"
                >
                  WhatsApp
                </a>
                <a
                  href={CONFIG.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-4 hover:text-white"
                >
                  Instagram
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
