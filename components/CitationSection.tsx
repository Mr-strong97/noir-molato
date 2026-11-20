'use client';

import { useRef } from 'react';
import { MotionValue, motion, useScroll, useTransform } from 'motion/react';

const QUOTE_WORDS = [
  'L’élégance,',
  'c’est',
  'ce',
  'qu’il',
  'reste',
  'quand',
  'on',
  'retire',
  'le',
  'superflu.',
];

function QuoteWord({
  word,
  index,
  total,
  progress,
}: {
  word: string;
  index: number;
  total: number;
  progress: MotionValue<number>;
}) {
  const start = (index / total) * 0.65;
  const end = Math.min(start + 0.25, 0.95);
  const opacity = useTransform(progress, [start, end], [0.18, 1]);
  const y = useTransform(progress, [start, end], [10, 0]);

  return (
    <motion.span
      style={{ opacity, y }}
      className="inline-block mr-[0.26em] will-change-transform"
    >
      {word}
    </motion.span>
  );
}

export function CitationSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start 0.85', 'center 0.45'],
  });

  return (
    <section
      id="citation"
      ref={sectionRef}
      data-theme="dark"
      aria-label="Citation Noir Molato"
      className="relative bg-black text-white py-20 sm:py-28 lg:py-36 overflow-hidden"
    >
      {/* Optional dark ambient background slot */}
      <div
        aria-hidden="true"
        data-photo="photo-citation"
        className="pointer-events-none absolute inset-0 bg-[#070707] opacity-70"
      />

      <div className="relative z-10 mx-auto max-w-[1100px] px-5 sm:px-10 lg:px-16 text-center">
        <blockquote
          className="font-serif-editorial italic font-normal leading-[1.16] tracking-[-0.015em] text-white"
          style={{ fontSize: 'var(--t-xl)' }}
        >
          {QUOTE_WORDS.map((word, idx) => (
            <QuoteWord
              key={`${word}-${idx}`}
              word={word}
              index={idx}
              total={QUOTE_WORDS.length}
              progress={scrollYProgress}
            />
          ))}
        </blockquote>

        <motion.p
          initial={{ opacity: 0.2, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 font-sans-editorial text-xs font-medium uppercase tracking-[0.24em] text-white/60"
        >
          — Noir Molato
        </motion.p>
      </div>
    </section>
  );
}
