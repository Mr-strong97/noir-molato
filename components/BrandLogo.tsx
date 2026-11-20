'use client';

import Image from 'next/image';

interface BrandLogoProps {
  variant?: 'light' | 'dark';
  className?: string;
  size?: 'header' | 'preloader' | 'footer';
}

export function BrandLogo({
  variant = 'dark',
  className = '',
  size = 'header',
}: BrandLogoProps) {
  const isDarkSurface = variant === 'dark';

  const sizeClasses =
    size === 'header'
      ? 'h-12 w-24 sm:h-14 sm:w-28'
      : size === 'preloader'
        ? 'h-32 w-56 sm:h-40 sm:w-64'
        : 'w-full max-w-[680px] aspect-[16/9]';

  return (
    <span
      className={`relative inline-flex items-center justify-center shrink-0 select-none overflow-hidden ${sizeClasses} ${className}`}
    >
      <Image
        src="/assets/aistudio/noirmolato_48aacad3.png"
        alt="Noir Molato"
        fill
        sizes={size === 'footer' ? '(max-width: 768px) 92vw, 680px' : size === 'preloader' ? '256px' : '112px'}
        priority={size !== 'footer'}
        referrerPolicy="no-referrer"
        style={{
          filter: isDarkSurface
            ? 'brightness(1.12) contrast(2.2) invert(1)'
            : 'brightness(1.06) contrast(1.4)',
        }}
        className={`object-cover object-center transition-all duration-300 ${
          isDarkSurface ? 'mix-blend-screen' : 'mix-blend-multiply'
        }`}
      />
    </span>
  );
}
