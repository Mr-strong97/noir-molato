'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, ArrowRight, X } from 'lucide-react';
import {
  COLLECTION_PIECES,
  CONFIG,
  CollectionPiece,
  GenreFilter,
  buildWhatsAppOrderUrl,
  filterPiecesByGenre,
} from '@/lib/molato-data';
import { PhotoSlot } from './PhotoSlot';

const FILTER_OPTIONS: { key: GenreFilter; label: string }[] = [
  { key: 'tout', label: 'Tout' },
  { key: 'homme', label: 'Homme' },
  { key: 'femme', label: 'Femme' },
];

export function CollectionSection() {
  const [genre, setGenre] = useState<GenreFilter>('tout');
  const [selectedPiece, setSelectedPiece] = useState<CollectionPiece | null>(null);
  const [selectedSize, setSelectedSize] = useState<string>('M');

  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLElement | null>(null);

  const visiblePieces = filterPiecesByGenre(COLLECTION_PIECES, genre);

  const openPieceModal = (piece: CollectionPiece, trigger?: HTMLElement | null) => {
    triggerRef.current = trigger || null;
    setSelectedPiece(piece);
    setSelectedSize(piece.tailles[1] || piece.tailles[0]);
  };

  const closeModal = () => {
    setSelectedPiece(null);
    setTimeout(() => triggerRef.current?.focus(), 40);
  };

  const navigatePiece = (dir: -1 | 1) => {
    if (!selectedPiece) return;
    const list = visiblePieces.length > 0 ? visiblePieces : COLLECTION_PIECES;
    const currentIdx = list.findIndex((p) => p.id === selectedPiece.id);
    const nextIdx = (currentIdx + dir + list.length) % list.length;
    const nextPiece = list[nextIdx];
    setSelectedPiece(nextPiece);
    setSelectedSize(nextPiece.tailles[1] || nextPiece.tailles[0]);
  };

  useEffect(() => {
    if (!selectedPiece) return;
    document.documentElement.classList.add('overflow-hidden');
    const focusTimer = setTimeout(() => closeBtnRef.current?.focus(), 50);

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedPiece(null);
        setTimeout(() => triggerRef.current?.focus(), 40);
      } else if (e.key === 'ArrowRight') {
        navigatePiece(1);
      } else if (e.key === 'ArrowLeft') {
        navigatePiece(-1);
      } else if (e.key === 'Tab' && modalRef.current) {
        const focusables = modalRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled])',
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedPiece, genre]);

  // Asymmetric editorial placement keeps the 20-piece catalogue easy to scan.
  const getGridPlacement = (index: number) => {
    const slot = index % 4;
    switch (slot) {
      case 0:
        return 'lg:col-start-1 lg:col-span-5';
      case 1:
        return 'lg:col-start-7 lg:col-span-5 lg:mt-14';
      case 2:
        return 'lg:col-start-2 lg:col-span-5';
      case 3:
      default:
        return 'lg:col-start-8 lg:col-span-5 lg:mt-14';
    }
  };

  return (
    <section
      id="collection"
      data-theme="dark"
      aria-labelledby="collection-titre"
      className="relative bg-black text-white py-16 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-[1440px] px-5 sm:px-10 lg:px-16">
        {/* Section header + filters */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 pb-10 lg:pb-14 border-b border-white/[0.12]">
          <div>
            <div className="flex items-center gap-4 mb-5">
              <motion.span
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="h-[1px] w-10 bg-white/50 origin-left"
                aria-hidden="true"
              />
              <span className="font-sans-editorial text-xs font-medium uppercase tracking-[0.18em] text-white/70">
                La sélection
              </span>
            </div>
            <h2
              id="collection-titre"
              className="font-serif-editorial font-normal leading-[0.98] tracking-[-0.02em] text-white"
              style={{ fontSize: 'var(--t-2xl)' }}
            >
              Trouvez votre style.
            </h2>
            <p className="mt-5 max-w-[34rem] font-sans-editorial font-light text-base leading-[1.7] text-white/70">
              Vêtements et chaussures pour homme, femme et enfant. Choisissez votre pièce, votre taille et commandez directement sur WhatsApp.
            </p>
          </div>

          {/* Filter controls: clean underlined text tabs (zero pill boxes) */}
          <div
            role="group"
            aria-label="Filtrer la collection par genre"
            className="flex items-center gap-6 sm:gap-8"
          >
            {FILTER_OPTIONS.map((option) => {
              const active = genre === option.key;
              return (
                <button
                  key={option.key}
                  type="button"
                  onClick={() => setGenre(option.key)}
                  aria-pressed={active}
                  className={`relative min-h-[44px] py-2 text-xs font-medium uppercase tracking-[0.18em] whitespace-nowrap shrink-0 transition-opacity duration-200 ${
                    active ? 'text-white opacity-100' : 'text-white/55 hover:text-white/85'
                  }`}
                >
                  <span>{option.label}</span>
                  <span
                    aria-hidden="true"
                    className={`absolute left-0 right-0 bottom-1 h-[1px] bg-white origin-left transition-transform duration-300 ${
                      active ? 'scale-x-100' : 'scale-x-0'
                    }`}
                  />
                </button>
              );
            })}
            <span className="font-sans-editorial text-xs tracking-[0.14em] tabular-nums text-white/50 whitespace-nowrap">
              ({String(visiblePieces.length).padStart(2, '0')})
            </span>
          </div>
        </div>

        {/* Staggered editorial product grid */}
        <ul
          data-testid="collection-grid"
          className="mt-12 lg:mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-y-12 md:gap-x-8 lg:gap-y-16"
        >
          {visiblePieces.map((piece, idx) => (
            <motion.li
              key={piece.id}
              initial={{ opacity: 0.35, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.05 }}
              transition={{
                delay: (idx % 2) * 0.1,
                duration: 0.75,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={`group flex flex-col will-change-transform ${getGridPlacement(idx)}`}
            >
              {/* Interactive photo card trigger */}
              <button
                type="button"
                data-cursor="view"
                onClick={(e) => openPieceModal(piece, e.currentTarget)}
                aria-label={`Voir la fiche de ${piece.nom} (${piece.id})`}
                className="relative block w-full text-left overflow-hidden focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-4"
              >
                <PhotoSlot
                  slot={piece.photo}
                  src={piece.imageSrc}
                  secondarySrc={piece.secondaryImageSrc}
                  alt={piece.alt}
                  theme="dark"
                  aspectClass="aspect-square"
                  hoverZoom
                  sizes="(max-width: 768px) 100vw, 42vw"
                />

                {/* Desktop hover quick-view slide-up bar */}
                <span
                  aria-hidden="true"
                  className="hidden lg:flex items-center justify-between absolute inset-x-0 bottom-0 h-12 px-5 bg-white text-black text-xs font-medium uppercase tracking-[0.16em] translate-y-full transition-transform duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0"
                >
                  <span>Voir la pièce</span>
                  <ArrowRight className="h-4 w-4" />
                </span>
              </button>

              {/* Card information block — clean baseline alignment, zero text overlap */}
              <div className="mt-5 pt-4 border-t border-white/[0.12] flex flex-col gap-2">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="font-serif-editorial text-xl sm:text-2xl font-normal text-white leading-snug">
                    <button
                      type="button"
                      onClick={(e) => openPieceModal(piece, e.currentTarget)}
                      className="text-left hover:italic focus-visible:outline-2 focus-visible:outline-white"
                    >
                      {piece.nom}
                    </button>
                  </h3>
                  <span className="font-sans-editorial text-sm sm:text-base font-medium tabular-nums text-white whitespace-nowrap shrink-0">
                    {piece.prix}
                  </span>
                </div>

                <p className="font-sans-editorial text-xs sm:text-sm text-white/65 tracking-[0.04em]">
                  <span>{piece.id}</span>
                  <span aria-hidden="true"> · </span>
                  <span>{piece.matiere}</span>
                  <span aria-hidden="true"> · </span>
                  <span className="uppercase">{piece.tailles.join(' ')}</span>
                </p>

                <div className="mt-3 flex flex-wrap items-center gap-3">
                  <a
                    href={buildWhatsAppOrderUrl(CONFIG.whatsapp, piece)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[44px] items-center justify-center gap-3 border border-white/40 px-5 py-2.5 text-xs font-medium uppercase tracking-[0.15em] text-white transition-colors duration-200 hover:bg-white hover:text-black active:opacity-80"
                  >
                    <span>Commander</span>
                    <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                    <span className="sr-only">
                      {piece.nom} sur WhatsApp (nouvel onglet)
                    </span>
                  </a>

                  <button
                    type="button"
                    onClick={(e) => openPieceModal(piece, e.currentTarget)}
                    className="inline-flex min-h-[44px] items-center px-3 text-xs font-medium uppercase tracking-[0.15em] text-white/65 underline underline-offset-4 hover:text-white transition-colors"
                  >
                    Détails
                  </button>
                </div>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>

      {/* Fullscreen Product Quick-View Modal */}
      <AnimatePresence>
        {selectedPiece && (
          <motion.div
            ref={modalRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-piece-nom"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[250] bg-black text-white flex flex-col overflow-y-auto"
          >
            {/* Modal top bar */}
            <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-10 lg:px-16 py-5 flex items-center justify-between border-b border-white/[0.12]">
              <span className="font-sans-editorial text-xs font-medium uppercase tracking-[0.2em] text-white/70">
                {selectedPiece.id} · {selectedPiece.genre}
              </span>
              <button
                ref={closeBtnRef}
                type="button"
                onClick={closeModal}
                aria-label="Fermer la fiche produit"
                className="inline-flex min-h-[44px] items-center gap-2 border border-white/30 px-4 text-xs font-medium uppercase tracking-[0.16em] text-white hover:bg-white hover:text-black transition-colors"
              >
                <span>Fermer</span>
                <X className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>

            {/* Modal body: 55% photo / 45% information on desktop */}
            <div className="mx-auto w-full max-w-[1440px] flex-1 px-5 sm:px-10 lg:px-16 py-8 lg:py-12 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              <div className="lg:col-span-7">
                <PhotoSlot
                  slot={selectedPiece.photo}
                  src={selectedPiece.imageSrc}
                  alt={selectedPiece.alt}
                  theme="dark"
                  aspectClass="aspect-square max-h-[68vh] mx-auto"
                  reveal={false}
                  sizes="(max-width: 1024px) 92vw, 50vw"
                />
              </div>

              <div className="lg:col-span-5 flex flex-col gap-6">
                <div>
                  <h3
                    id="modal-piece-nom"
                    className="font-serif-editorial text-3xl sm:text-5xl font-normal text-white leading-tight"
                  >
                    {selectedPiece.nom}
                  </h3>
                  <p className="mt-3 font-sans-editorial text-xl font-medium tabular-nums text-white">
                    {selectedPiece.prix}
                  </p>
                </div>

                <p className="font-sans-editorial text-sm uppercase tracking-[0.14em] text-white/65 border-y border-white/[0.12] py-4">
                  Matière : {selectedPiece.matiere}
                </p>

                <p className="font-sans-editorial font-light text-base leading-[1.7] text-white/80">
                  {selectedPiece.description}
                </p>

                {/* Size selector */}
                <div>
                  <span className="block font-sans-editorial text-xs font-medium uppercase tracking-[0.18em] text-white/65 mb-3">
                    Taille souhaitée
                  </span>
                  <div className="flex flex-wrap gap-3" role="radiogroup" aria-label="Choisir une taille">
                    {selectedPiece.tailles.map((t) => {
                      const active = selectedSize === t;
                      return (
                        <button
                          key={t}
                          type="button"
                          role="radio"
                          aria-checked={active}
                          onClick={() => setSelectedSize(t)}
                          className={`min-h-[44px] min-w-[52px] px-4 text-xs font-medium uppercase tracking-[0.14em] border transition-colors ${
                            active
                              ? 'bg-white text-black border-white'
                              : 'bg-transparent text-white border-white/30 hover:border-white'
                          }`}
                        >
                          {t}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <a
                  href={buildWhatsAppOrderUrl(CONFIG.whatsapp, selectedPiece, selectedSize)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex h-14 items-center justify-center gap-3 bg-white px-8 text-xs sm:text-sm font-medium uppercase tracking-[0.14em] text-black border border-white transition-colors hover:bg-black hover:text-white"
                >
                  <span>Commander sur WhatsApp</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  <span className="sr-only">(nouvel onglet)</span>
                </a>

                {/* Prev / Next piece navigation */}
                <div className="mt-4 pt-6 border-t border-white/[0.12] flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => navigatePiece(-1)}
                    className="inline-flex min-h-[44px] items-center gap-2 text-xs font-medium uppercase tracking-[0.16em] text-white/70 hover:text-white transition-colors"
                  >
                    <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                    <span>Précédent</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => navigatePiece(1)}
                    className="inline-flex min-h-[44px] items-center gap-2 text-xs font-medium uppercase tracking-[0.16em] text-white/70 hover:text-white transition-colors"
                  >
                    <span>Suivant</span>
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
