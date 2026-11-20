'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { DETAILS_ITEMS } from '@/lib/molato-data';
import { PhotoSlot } from './PhotoSlot';

export function DetailsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const blockRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number(entry.target.getAttribute('data-detail-index'));
            if (!Number.isNaN(idx)) {
              setActiveIndex(idx);
            }
          }
        });
      },
      {
        rootMargin: '-35% 0px -45% 0px',
        threshold: 0.1,
      },
    );

    blockRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const current = DETAILS_ITEMS[activeIndex] || DETAILS_ITEMS[0];

  return (
    <section
      id="details"
      data-theme="light"
      aria-labelledby="details-titre"
      className="relative bg-white text-black py-16 sm:py-24 lg:py-28 border-t border-black/[0.08]"
    >
      <div className="mx-auto max-w-[1440px] px-5 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left column: Sticky editorial summary & vertical 1/3 progress on desktop */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
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
                De la sélection à la livraison
              </span>
            </div>

            <h2
              id="details-titre"
              className="font-serif-editorial font-normal leading-[1.02] tracking-[-0.015em] text-black"
              style={{ fontSize: 'var(--t-xl)' }}
            >
              Acheter devient simple.
            </h2>

            {/* Desktop sticky active detail text switcher */}
            <div className="hidden lg:flex items-stretch gap-6 mt-12">
              {/* Thin vertical progress line */}
              <div className="relative w-[1px] bg-black/15 shrink-0" aria-hidden="true">
                <motion.div
                  className="w-full bg-black origin-top"
                  animate={{ height: `${((activeIndex + 1) / DETAILS_ITEMS.length) * 100}%` }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                />
              </div>

              <div className="flex-1 min-h-[170px] flex flex-col justify-between">
                <div className="flex items-center gap-3 font-sans-editorial text-xs font-medium uppercase tracking-[0.18em] text-black/60 tabular-nums">
                  <span className="overflow-hidden inline-block h-4">
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={current.index}
                        initial={{ y: 12, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -12, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="block"
                      >
                        {current.index}
                      </motion.span>
                    </AnimatePresence>
                  </span>
                  <span>/ 03</span>
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={current.index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    className="mt-4"
                  >
                    <h3 className="font-serif-editorial text-3xl font-normal text-black">
                      {current.titre}
                    </h3>
                    <p className="mt-2 font-serif-editorial italic text-lg text-black/75">
                      {current.accroche}
                    </p>
                    <p className="mt-4 max-w-[30rem] font-sans-editorial text-base leading-[1.7] text-black/70">
                      {current.texte}
                    </p>
                  </motion.div>
                </AnimatePresence>

                <div className="mt-8 flex items-center gap-5">
                  {DETAILS_ITEMS.map((item, idx) => (
                    <button
                      key={item.index}
                      type="button"
                      onClick={() => {
                        setActiveIndex(idx);
                        blockRefs.current[idx]?.scrollIntoView({
                          behavior: 'smooth',
                          block: 'center',
                        });
                      }}
                      className={`min-h-[44px] text-xs font-medium uppercase tracking-[0.16em] transition-opacity ${
                        idx === activeIndex
                          ? 'text-black underline underline-offset-4'
                          : 'text-black/45 hover:text-black'
                      }`}
                    >
                      {item.index} · {item.titre}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right column: Three detail photography blocks */}
          <div className="lg:col-span-7 flex flex-col gap-12 lg:gap-16">
            {DETAILS_ITEMS.map((item, idx) => (
              <motion.div
                key={item.index}
                ref={(el) => {
                  blockRefs.current[idx] = el;
                }}
                data-detail-index={idx}
                initial={{ opacity: 0.35, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col gap-5 will-change-transform"
              >
                <PhotoSlot
                  slot={item.photo}
                  src={item.imageSrc}
                  alt={item.alt}
                  theme="light"
                  aspectClass="aspect-square"
                  sizes="(max-width: 1024px) 100vw, 55vw"
                />
                {/* Mobile & tablet inline text (hidden on lg where left sticky column displays it) */}
                <div className="lg:hidden pt-2">
                  <span className="font-sans-editorial text-xs font-medium uppercase tracking-[0.18em] text-black/55 tabular-nums">
                    {item.index} / 03
                  </span>
                  <h3 className="mt-1 font-serif-editorial text-2xl font-normal text-black">
                    {item.titre}
                  </h3>
                  <p className="mt-1 font-serif-editorial italic text-base text-black/75">
                    {item.accroche}
                  </p>
                  <p className="mt-2 font-sans-editorial text-base leading-[1.65] text-black/70">
                    {item.texte}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
