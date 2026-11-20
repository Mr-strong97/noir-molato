'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { CONFIG, HERO_SLIDES } from '@/lib/molato-data';

interface HeroSectionProps {
  ready: boolean;
}

export function HeroSection({ ready }: HeroSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const [slideIndex, setSlideIndex] = useState(0);
  const activeSlide = HERO_SLIDES[slideIndex];

  useEffect(() => {
    const rotation = window.setInterval(() => {
      setSlideIndex((current) => (current + 1) % HERO_SLIDES.length);
    }, 30_000);
    return () => window.clearInterval(rotation);
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const frameY = useTransform(scrollYProgress, [0, 1], ['0px', '56px']);
  const frameScale = useTransform(scrollYProgress, [0, 1], [1, 1.04]);
  const contentY = useTransform(scrollYProgress, [0, 1], ['0px', '-32px']);
  const contentOpacity = useTransform(scrollYProgress, [0.5, 0.96], [1, 0.15]);

  return (
    <section
      id="accueil"
      ref={sectionRef}
      data-theme="dark"
      aria-labelledby="hero-titre"
      className="relative min-h-[100svh] w-full overflow-hidden bg-black text-white flex flex-col justify-between pt-20 sm:pt-24 md:pt-28 pb-24 sm:pb-24 md:pb-14"
    >
      {/* Top season marker */}
      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-5 sm:px-10 lg:px-16 flex justify-end">
        <motion.p
          initial={{ opacity: 0 }}
          animate={ready ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.45, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="font-sans-editorial text-xs font-medium uppercase tracking-[0.2em] text-white/75"
        >
          {CONFIG.saison}
        </motion.p>
      </div>

      {/* Main split editorial composition */}
      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-5 sm:px-10 lg:px-16 my-auto py-4 sm:py-6 lg:py-10 grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-8 items-end">
        {/* Left editorial typography & primary CTA */}
        <motion.div
          style={{ y: contentY, opacity: contentOpacity }}
          className="lg:col-span-7 order-2 lg:order-1 will-change-transform"
        >
          <div className="max-w-3xl">
            <h1
              id="hero-titre"
              className="font-serif-editorial font-normal leading-[0.95] tracking-[-0.02em] text-white"
              style={{ fontSize: 'var(--t-3xl)' }}
            >
              <span className="block overflow-hidden">
                <motion.span
                  initial={{ y: '110%' }}
                  animate={ready ? { y: '0%' } : { y: '110%' }}
                  transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
                  className="block"
                >
                  Porter
                </motion.span>
              </span>
              <span className="block overflow-hidden">
                <motion.span
                  initial={{ y: '110%' }}
                  animate={ready ? { y: '0%' } : { y: '110%' }}
                  transition={{ delay: 0.08, duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
                  className="block italic"
                >
                  l’essentiel.
                </motion.span>
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={ready ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
              transition={{ delay: 0.32, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="mt-4 sm:mt-6 max-w-[34rem] font-sans-editorial font-light text-sm sm:text-lg leading-[1.6] text-white/80"
            >
              {CONFIG.sousTitreHero}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={ready ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
              transition={{ delay: 0.48, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 sm:mt-8 flex flex-wrap items-center gap-6"
            >
              <a
                href="#collection"
                className="group relative inline-flex h-12 sm:h-14 items-center justify-center gap-4 overflow-hidden bg-white px-7 sm:px-8 text-xs sm:text-sm font-medium uppercase tracking-[0.14em] text-black border border-white transition-colors duration-300"
              >
                <span
                  aria-hidden="true"
                  className="absolute inset-0 bg-black translate-y-full transition-transform duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0"
                />
                <span className="relative z-10 transition-colors duration-300 group-hover:text-white whitespace-nowrap">
                  Découvrir la collection
                </span>
                <ArrowRight
                  aria-hidden="true"
                  className="relative z-10 h-4 w-4 transition-all duration-300 group-hover:translate-x-1.5 group-hover:text-white"
                />
              </a>
            </motion.div>
          </div>
        </motion.div>

        {/* Right monochrome campaign frame with GPU scroll parallax */}
        <motion.div
          style={{ y: frameY, scale: frameScale }}
          className="lg:col-span-5 order-1 lg:order-2 flex items-end justify-start lg:justify-end gap-6 will-change-transform"
        >
          <motion.div
            initial={{ clipPath: 'inset(0 0 18% 0)', opacity: 0.6 }}
            animate={
              ready
                ? { clipPath: 'inset(0 0 0% 0)', opacity: 1 }
                : { clipPath: 'inset(0 0 18% 0)', opacity: 0.6 }
            }
            transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
            data-photo={activeSlide.slot}
            className="relative w-[220px] sm:w-[320px] lg:w-full lg:max-w-none aspect-square lg:aspect-[4/4.6] lg:max-h-[68vh] bg-white border border-white/25 overflow-hidden"
          >
            <motion.div
              key={activeSlide.imageSrc}
              initial={{ opacity: 0, scale: 1.025 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0"
            >
              <Image
                src={activeSlide.imageSrc}
                alt={activeSlide.alt}
                fill
                priority={slideIndex === 0}
                sizes="(max-width: 1024px) 60vw, 40vw"
                className="object-contain p-2 sm:p-4"
              />
            </motion.div>
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/10"
            />
          </motion.div>

          {/* Desktop vertical scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={ready ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.65, duration: 0.6 }}
            aria-hidden="true"
            className="hidden lg:flex items-center gap-3 shrink-0 pb-12"
          >
            <span
              className="font-sans-editorial text-[11px] font-medium uppercase tracking-[0.22em] text-white/70"
              style={{ writingMode: 'vertical-rl' }}
            >
              Défiler
            </span>
            <div className="relative h-14 w-[1px] overflow-hidden bg-white/25">
              <div className="animate-scroll-line absolute top-0 left-0 w-full h-4 bg-white" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
