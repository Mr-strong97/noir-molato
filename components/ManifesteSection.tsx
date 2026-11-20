'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { COLLECTION_PIECES, CONFIG, MANIFESTE_MEDIA } from '@/lib/molato-data';
import { PhotoSlot } from './PhotoSlot';

export function ManifesteSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  const photoY = useTransform(scrollYProgress, [0, 1], [32, -32]);

  return (
    <section
      id="marque"
      ref={sectionRef}
      data-theme="light"
      aria-labelledby="marque-titre"
      className="relative bg-white text-black py-16 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-[1440px] px-5 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-start">
          {/* Left column: editorial text (6 columns) */}
          <div className="lg:col-span-6 relative">
            <div className="relative mb-6">
              <span
                aria-hidden="true"
                className="molato-outline-num pointer-events-none select-none block text-[5rem] sm:text-[7rem] leading-none font-normal -mb-9 sm:-mb-12"
              >
                01
              </span>
              <div className="relative z-10 flex items-center gap-4">
                <motion.span
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className="h-[1px] w-10 bg-black/50 origin-left"
                  aria-hidden="true"
                />
                <span className="font-sans-editorial text-xs font-medium uppercase tracking-[0.18em] text-black/70">
                  Noir Molato à Kinshasa
                </span>
              </div>
            </div>

            <motion.h2
              id="marque-titre"
              initial={{ opacity: 0.2, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif-editorial font-normal leading-[1.06] tracking-[-0.015em] text-black"
              style={{ fontSize: 'var(--t-xl)' }}
            >
              La mode que vous aimez,{' '}
              <span className="italic">sans quitter Kinshasa.</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0.2, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ delay: 0.1, duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
              className="mt-7 space-y-5 max-w-[36rem] font-sans-editorial font-normal text-base leading-[1.75] text-black/75"
            >
              <p>
                Noir Molato est la boutique en ligne créée par Mbumba Yaki Edgard. Elle rend les vêtements et les chaussures plus simples à trouver pour toute la famille, ici à Kinshasa.
              </p>
              <p>
                Notre sélection réunit des articles homme, femme et enfant. Vous choisissez votre modèle, nous confirmons sa disponibilité puis nos agents organisent la livraison.
              </p>
            </motion.div>

            {/* Clean unboxed key studio facts (zero pills) */}
            <motion.div
              initial={{ opacity: 0.2, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ delay: 0.18, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="mt-8 pt-6 border-t border-black/[0.12] flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-medium uppercase tracking-[0.14em] text-black/75"
            >
              <span>{CONFIG.ville}</span>
              <span aria-hidden="true">·</span>
              <span>{COLLECTION_PIECES.length} produits en ligne</span>
              <span aria-hidden="true">·</span>
              <span>Livraison à Kinshasa</span>
            </motion.div>

            <p className="mt-7 font-serif-editorial italic text-lg text-black/80">
              — {CONFIG.fondateur}
            </p>
          </div>

          {/* 1 empty column spacer on desktop + 5 columns right photo with scroll parallax */}
          <motion.div
            style={{ y: photoY }}
            className="lg:col-start-8 lg:col-span-5 lg:-mt-4 will-change-transform"
          >
            <PhotoSlot
              slot={MANIFESTE_MEDIA.slot}
              src={MANIFESTE_MEDIA.imageSrc}
              alt={MANIFESTE_MEDIA.alt}
              theme="light"
              aspectClass="aspect-square"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
