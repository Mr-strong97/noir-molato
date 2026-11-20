'use client';

import Image from 'next/image';
import { motion } from 'motion/react';

interface PhotoSlotProps {
  slot: string;
  src?: string;
  secondarySrc?: string;
  alt: string;
  theme?: 'dark' | 'light';
  aspectClass?: string;
  className?: string;
  imageClassName?: string;
  fit?: 'contain' | 'cover';
  reveal?: boolean;
  hoverZoom?: boolean;
  priority?: boolean;
  sizes?: string;
}

export function PhotoSlot({
  slot,
  src,
  secondarySrc,
  alt,
  theme = 'dark',
  aspectClass = 'aspect-[3/4]',
  className = '',
  imageClassName = '',
  fit = 'contain',
  reveal = true,
  hoverZoom = false,
  priority = false,
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw',
}: PhotoSlotProps) {
  const isDark = theme === 'dark';
  const isContain = fit === 'contain';

  const innerContent = (
    <div
      data-photo={slot}
      className={`relative w-full h-full overflow-hidden border transition-colors duration-300 ${
        src
          ? isDark
            ? 'bg-white border-white/20'
            : 'bg-white border-black/[0.10]'
          : isDark
            ? 'bg-[#0d0d0d] border-white/[0.14] text-white/50'
            : 'bg-[#f2f2f2] border-black/[0.10] text-black/50'
      } ${aspectClass} ${className}`}
    >
      {src ? (
        <>
          <Image
            src={src}
            alt={alt}
            fill
            priority={priority}
            sizes={sizes}
            referrerPolicy="no-referrer"
            className={`${
              isContain ? 'object-contain p-3 sm:p-4' : 'object-cover'
            } transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              hoverZoom ? 'group-hover:scale-[1.045]' : ''
            } ${imageClassName}`}
          />

          {secondarySrc && (
            <Image
              src={secondarySrc}
              alt=""
              aria-hidden="true"
              fill
              sizes={sizes}
              referrerPolicy="no-referrer"
              className={`${
                isContain ? 'object-contain p-3 sm:p-4' : 'object-cover'
              } bg-white opacity-0 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:opacity-100 ${
                hoverZoom ? 'group-hover:scale-[1.045]' : ''
              } ${imageClassName}`}
            />
          )}

          {/* Subtle corner framing vignette inside studio sheet */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/[0.06]"
          />
        </>
      ) : (
        <div
          role="img"
          aria-label={alt}
          className="absolute inset-0 flex items-center justify-center px-6 text-center"
        >
          <span className="font-sans-editorial text-xs font-medium tracking-[0.22em] uppercase">
            {slot.toUpperCase()}
          </span>
        </div>
      )}
    </div>
  );

  if (!reveal) {
    return innerContent;
  }

  return (
    <motion.div
      initial={{ clipPath: 'inset(0 0 14% 0)', scale: 1.04, opacity: 0.72 }}
      whileInView={{ clipPath: 'inset(0 0 0% 0)', scale: 1, opacity: 1 }}
      viewport={{ once: true, amount: 0.05 }}
      transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
      className="w-full h-full overflow-hidden will-change-transform"
    >
      {innerContent}
    </motion.div>
  );
}
