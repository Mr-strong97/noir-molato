'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ATELIER_MEDIA, ATELIER_STEPS } from '@/lib/molato-data';
import { PhotoSlot } from './PhotoSlot';

export function AtelierSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  const overlayPhotoY = useTransform(scrollYProgress, [0, 1], [38, -38]);

  return (
    <section
      id="atelier"
      ref={sectionRef}
      data-theme="dark"
      aria-labelledby="atelier-titre"
      className="relative overflow-hidden bg-black text-white py-16 sm:py-24 lg:py-28"
    >
      {/* Subtle infinite editorial marquee in background */}
      <div
        aria-hidden="true"
        className="pointer-events-none select-none absolute top-10 left-0 right-0 overflow-hidden whitespace-nowrap"
      >
        <div className="animate-marquee inline-flex gap-12 text-[5.5rem] sm:text-[8rem] lg:text-[10rem] leading-none tracking-[0.06em] uppercase molato-outline-marquee">
          <span>NOIR MOLATO</span><span>KINSHASA</span><span>COMMANDE</span><span>LIVRAISON</span>
          <span>NOIR MOLATO</span><span>KINSHASA</span><span>COMMANDE</span><span>LIVRAISON</span>
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-[1440px] px-5 sm:px-10 lg:px-16">
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
            Comment commander
          </span>
        </div>

        <motion.h2
          id="atelier-titre"
          initial={{ opacity: 0.2, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif-editorial font-normal leading-[1.02] tracking-[-0.02em] text-white mb-12 lg:mb-14"
          style={{ fontSize: 'var(--t-2xl)' }}
        >
          Commandez, on vous livre.
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left 7 columns: primary workshop photo + scroll-parallax overlapping photo */}
          <div className="lg:col-span-7 relative">
            <PhotoSlot
              slot={ATELIER_MEDIA.primary.slot}
              src={ATELIER_MEDIA.primary.imageSrc}
              alt={ATELIER_MEDIA.primary.alt}
              theme="dark"
              aspectClass="aspect-square"
              sizes="(max-width: 1024px) 100vw, 55vw"
            />

            <motion.div
              style={{ y: overlayPhotoY }}
              className="mt-6 sm:mt-8 lg:mt-0 lg:w-1/2 lg:ml-auto lg:-mt-24 lg:mr-6 relative z-20 border border-white/25 bg-black p-1 will-change-transform"
            >
              <PhotoSlot
                slot={ATELIER_MEDIA.secondary.slot}
                src={ATELIER_MEDIA.secondary.imageSrc}
                alt={ATELIER_MEDIA.secondary.alt}
                theme="dark"
                aspectClass="aspect-square"
                reveal={false}
                sizes="(max-width: 1024px) 90vw, 28vw"
              />
            </motion.div>
          </div>

          {/* Right 4 columns (col 9-12): copy + 4 numbered steps */}
          <div className="lg:col-start-9 lg:col-span-4 flex flex-col justify-between">
            <motion.p
              initial={{ opacity: 0.25, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="font-sans-editorial font-light text-base leading-[1.75] text-white/75 max-w-[32rem]"
            >
              Noir Molato vous accompagne du choix de l’article jusqu’à la livraison. Notre équipe répond à vos messages et nos agents livrent vos commandes à Kinshasa.
            </motion.p>

            <ol className="mt-8 divide-y divide-white/[0.12] border-y border-white/[0.12]">
              {ATELIER_STEPS.map((step, idx) => (
                <motion.li
                  key={step.numero}
                  initial={{ opacity: 0.25, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{
                    delay: idx * 0.08,
                    duration: 0.65,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="py-5 flex items-baseline gap-5"
                >
                  <span className="font-sans-editorial text-xs font-medium tracking-[0.18em] tabular-nums text-white/50 shrink-0">
                    {step.numero}
                  </span>
                  <div>
                    <h3 className="font-serif-editorial text-xl font-normal text-white">
                      {step.titre}
                    </h3>
                    <p className="mt-1 font-sans-editorial text-sm leading-[1.6] text-white/70">
                      {step.description}
                    </p>
                  </div>
                </motion.li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
