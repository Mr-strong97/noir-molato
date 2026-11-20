'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BrandLogo } from './BrandLogo';

interface PreloaderProps {
  onComplete: () => void;
}

export function Preloader({ onComplete }: PreloaderProps) {
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const autostart = params.get('autostart') === '1';
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let alreadyShown = false;
    try {
      alreadyShown = window.sessionStorage.getItem('molato_preloader_done') === '1';
    } catch {
      alreadyShown = false;
    }

    if (autostart || reducedMotion || alreadyShown) {
      onComplete();
      return;
    }

    let rafId = 0;
    let finishTimer: ReturnType<typeof setTimeout> | undefined;

    const startRaf = requestAnimationFrame(() => {
      setVisible(true);
      document.documentElement.classList.add('overflow-hidden');

      const duration = 1500;
      const start = performance.now();

      const tick = (now: number) => {
        const elapsed = now - start;
        const ratio = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - ratio, 3);
        setProgress(Math.round(eased * 100));

        if (ratio < 1) {
          rafId = requestAnimationFrame(tick);
        } else {
          setExiting(true);
          try {
            window.sessionStorage.setItem('molato_preloader_done', '1');
          } catch {
            // Ignore storage errors
          }
          finishTimer = setTimeout(() => {
            document.documentElement.classList.remove('overflow-hidden');
            setVisible(false);
            onComplete();
          }, 700);
        }
      };

      rafId = requestAnimationFrame(tick);
    });

    const hardCap = setTimeout(() => {
      cancelAnimationFrame(startRaf);
      cancelAnimationFrame(rafId);
      setProgress(100);
      setExiting(true);
      document.documentElement.classList.remove('overflow-hidden');
      setVisible(false);
      onComplete();
    }, 3000);

    return () => {
      cancelAnimationFrame(startRaf);
      cancelAnimationFrame(rafId);
      if (finishTimer) clearTimeout(finishTimer);
      clearTimeout(hardCap);
      document.documentElement.classList.remove('overflow-hidden');
    };
  }, [onComplete]);

  if (!visible) return null;

  const padded = String(progress).padStart(3, '0');

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          id="chargement"
          role="status"
          aria-live="polite"
          aria-label="Chargement Noir Molato"
          initial={{ y: '0%' }}
          animate={exiting ? { y: '-100%' } : { y: '0%' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[300] flex flex-col items-center justify-center bg-black text-white px-6"
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={exiting ? { opacity: 0, y: -12 } : { opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center gap-6"
          >
            <BrandLogo variant="dark" size="preloader" />
            <div className="w-[120px] h-[1px] bg-white/20 overflow-hidden">
              <div
                className="h-full bg-white transition-none"
                style={{ transform: `scaleX(${progress / 100})`, transformOrigin: 'left' }}
              />
            </div>
          </motion.div>

          <div
            aria-hidden="true"
            className="absolute bottom-8 right-6 sm:right-10 lg:right-16 font-sans-editorial text-xs font-medium tracking-[0.18em] tabular-nums text-white/80"
          >
            {padded}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
