'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, ArrowRight, X } from 'lucide-react';
import { CONFIG, LOOKBOOK_ITEMS, formatLookIndex } from '@/lib/molato-data';
import { PhotoSlot } from './PhotoSlot';

export function LookbookSection() {
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLElement | null>(null);
  const touchStartX = useRef<number | null>(null);

  const openLightbox = (idx: number, trigger?: HTMLElement | null) => {
    triggerRef.current = trigger || null;
    setLightboxIdx(idx);
  };

  const closeLightbox = () => {
    setLightboxIdx(null);
    setTimeout(() => triggerRef.current?.focus(), 40);
  };

  const stepLightbox = (dir: -1 | 1) => {
    setLightboxIdx((prev) => {
      if (prev === null) return null;
      return (prev + dir + LOOKBOOK_ITEMS.length) % LOOKBOOK_ITEMS.length;
    });
  };

  useEffect(() => {
    if (lightboxIdx === null) return;
    document.documentElement.classList.add('overflow-hidden');
    const focusTimer = setTimeout(() => closeBtnRef.current?.focus(), 50);

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeLightbox();
      } else if (e.key === 'ArrowRight') {
        stepLightbox(1);
      } else if (e.key === 'ArrowLeft') {
        stepLightbox(-1);
      } else if (e.key === 'Tab' && dialogRef.current) {
        const focusables = dialogRef.current.querySelectorAll<HTMLElement>(
          'button:not([disabled])',
        );
        if (focusables.length === 0) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => {
      clearTimeout(focusTimer);
      document.documentElement.classList.remove('overflow-hidden');
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [lightboxIdx]);

  // Masonry 12-column span per prompt section 19.3
  const getColClass = (idx: number) => {
    switch (idx) {
      case 0:
        return 'lg:col-span-7';
      case 1:
        return 'lg:col-start-9 lg:col-span-4 lg:mt-16';
      case 2:
        return 'lg:col-span-4';
      case 3:
        return 'lg:col-span-4 lg:mt-12';
      case 4:
        return 'lg:col-span-4';
      case 5:
        return 'lg:col-span-4 lg:mt-14';
      case 6:
        return 'lg:col-start-6 lg:col-span-7';
      case 7:
      default:
        return 'lg:col-span-12';
    }
  };

  const activeItem = lightboxIdx !== null ? LOOKBOOK_ITEMS[lightboxIdx] : null;

  return (
    <section
      id="lookbook"
      data-theme="light"
      aria-labelledby="lookbook-titre"
      className="relative bg-white text-black py-16 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-[1440px] px-5 sm:px-10 lg:px-16">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 pb-10 lg:pb-12 border-b border-black/[0.12]">
          <div>
            <div className="flex items-center gap-4 mb-5">
              <motion.span
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="h-[1px] w-10 bg-black/50 origin-left"
                aria-hidden="true"
              />
              <span className="font-sans-editorial text-xs font-medium uppercase tracking-[0.18em] text-black/70">
                Nos nouveautés
              </span>
            </div>
            <h2
              id="lookbook-titre"
              className="font-serif-editorial font-normal leading-[1.0] tracking-[-0.02em] text-black"
              style={{ fontSize: 'var(--t-2xl)' }}
            >
              En images, <span className="italic">vos prochains looks.</span>
            </h2>
          </div>

          <p className="font-sans-editorial text-xs font-medium uppercase tracking-[0.18em] text-black/60">
            8 pièces à découvrir
          </p>
        </div>

        {/* Asymmetric editorial masonry grid */}
        <div className="mt-12 lg:mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-y-12 md:gap-x-8 lg:gap-y-14 items-start">
          {LOOKBOOK_ITEMS.map((item, idx) => (
            <motion.figure
              key={item.id}
              initial={{ opacity: 0.35, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.05 }}
              transition={{
                delay: (idx % 3) * 0.08,
                duration: 0.75,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={`group will-change-transform ${getColClass(idx)}`}
            >
              <button
                type="button"
                data-cursor="open"
                onClick={(e) => openLightbox(idx, e.currentTarget)}
                aria-label={`Ouvrir ${item.legende} en plein écran`}
                className="block w-full text-left overflow-hidden focus-visible:outline-2 focus-visible:outline-black focus-visible:outline-offset-4"
              >
                <PhotoSlot
                  slot={item.photo}
                  src={item.imageSrc}
                  alt={item.alt}
                  theme="light"
                  aspectClass={item.aspect}
                  hoverZoom
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 45vw"
                />
              </button>
              <figcaption className="mt-3 flex items-center justify-between gap-4 font-sans-editorial text-xs font-medium uppercase tracking-[0.16em] text-black/70">
                <span className="group-hover:underline underline-offset-4">{item.legende}</span>
                <span className="tabular-nums text-black/45 shrink-0">
                  {String(idx + 1).padStart(2, '0')}
                </span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>

      {/* Fullscreen Lookbook Lightbox */}
      <AnimatePresence>
        {activeItem && lightboxIdx !== null && (
          <motion.div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-label={`Visionneuse lookbook — ${activeItem.legende}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            onTouchStart={(e) => {
              touchStartX.current = e.touches[0].clientX;
            }}
            onTouchEnd={(e) => {
              if (touchStartX.current === null) return;
              const delta = e.changedTouches[0].clientX - touchStartX.current;
              if (delta > 50) stepLightbox(-1);
              if (delta < -50) stepLightbox(1);
              touchStartX.current = null;
            }}
            className="fixed inset-0 z-[260] bg-black/95 text-white flex flex-col justify-between p-5 sm:p-10"
          >
            {/* Top bar: counter & close */}
            <div className="flex items-center justify-between">
              <span
                data-testid="lightbox-counter"
                className="font-sans-editorial text-xs font-medium uppercase tracking-[0.2em] tabular-nums text-white/80"
              >
                {formatLookIndex(lightboxIdx, LOOKBOOK_ITEMS.length)}
              </span>

              <button
                ref={closeBtnRef}
                type="button"
                onClick={closeLightbox}
                aria-label="Fermer la visionneuse"
                className="inline-flex min-h-[44px] items-center gap-2 border border-white/30 px-4 text-xs font-medium uppercase tracking-[0.16em] text-white hover:bg-white hover:text-black transition-colors"
              >
                <span>Fermer</span>
                <X className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>

            {/* Center frame */}
            <motion.div
              key={activeItem.id}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="mx-auto w-full max-w-4xl my-4 flex items-center justify-center"
            >
              <PhotoSlot
                slot={activeItem.photo}
                src={activeItem.imageSrc}
                alt={activeItem.alt}
                theme="dark"
                aspectClass="aspect-square max-h-[68vh] w-full max-w-2xl"
                reveal={false}
                sizes="(max-width: 768px) 92vw, 680px"
              />
            </motion.div>

            {/* Bottom bar: caption & arrow navigation */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-t border-white/[0.12] pt-4">
              <p className="font-sans-editorial text-xs sm:text-sm uppercase tracking-[0.16em] text-white/80">
                {activeItem.legende}
              </p>

              <div className="flex items-center gap-4">
                <button
                  type="button"
                  onClick={() => stepLightbox(-1)}
                  aria-label="Image précédente"
                  className="inline-flex min-h-[48px] min-w-[56px] items-center justify-center gap-2 border border-white/30 px-4 text-xs font-medium uppercase tracking-[0.16em] text-white hover:bg-white hover:text-black transition-colors"
                >
                  <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                  <span>Précédent</span>
                </button>
                <button
                  type="button"
                  onClick={() => stepLightbox(1)}
                  aria-label="Image suivante"
                  className="inline-flex min-h-[48px] min-w-[56px] items-center justify-center gap-2 border border-white/30 px-4 text-xs font-medium uppercase tracking-[0.16em] text-white hover:bg-white hover:text-black transition-colors"
                >
                  <span>Suivant</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
