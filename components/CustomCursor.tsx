'use client';

import { useEffect, useRef, useState } from 'react';

type CursorVariant = 'default' | 'link' | 'view' | 'open';

export function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [variant, setVariant] = useState<CursorVariant>('default');
  const [pressed, setPressed] = useState(false);
  const [hidden, setHidden] = useState(true);

  const cursorRef = useRef<HTMLDivElement>(null);
  const enabledRef = useRef(false);
  const pos = useRef({ x: -100, y: -100, targetX: -100, targetY: -100 });

  useEffect(() => {
    const canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!canHover || reduced) return;

    let rafId = 0;
    const render = () => {
      pos.current.x += (pos.current.targetX - pos.current.x) * 0.18;
      pos.current.y += (pos.current.targetY - pos.current.y) * 0.18;
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0) translate(-50%, -50%)`;
      }
      rafId = requestAnimationFrame(render);
    };
    rafId = requestAnimationFrame(render);

    const onMouseMove = (e: MouseEvent) => {
      if (!enabledRef.current) {
        enabledRef.current = true;
        setEnabled(true);
      }
      pos.current.targetX = e.clientX;
      pos.current.targetY = e.clientY;
      setHidden(false);

      const target = e.target as HTMLElement | null;
      if (!target) return;

      if (target.closest('input, textarea, select')) {
        setHidden(true);
        return;
      }
      const cursorTarget = target.closest('[data-cursor]') as HTMLElement | null;
      if (cursorTarget) {
        const mode = cursorTarget.getAttribute('data-cursor') as CursorVariant;
        setVariant(mode || 'link');
        return;
      }
      if (target.closest('a, button')) {
        setVariant('link');
        return;
      }
      setVariant('default');
    };

    const onMouseDown = () => setPressed(true);
    const onMouseUp = () => setPressed(false);
    const onMouseLeave = () => setHidden(true);

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    document.addEventListener('mouseleave', onMouseLeave);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseleave', onMouseLeave);
    };
  }, []);

  if (!enabled) return null;

  const sizeClass = pressed
    ? 'w-2 h-2'
    : variant === 'view' || variant === 'open'
      ? 'w-[84px] h-[84px]'
      : variant === 'link'
        ? 'w-10 h-10'
        : 'w-3 h-3';

  return (
    <div
      ref={cursorRef}
      aria-hidden="true"
      className={`custom-cursor-layer pointer-events-none fixed top-0 left-0 z-[400] flex items-center justify-center rounded-full bg-white text-black mix-blend-difference transition-[width,height,opacity] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${sizeClass} ${
        hidden ? 'opacity-0' : 'opacity-100'
      }`}
    >
      {(variant === 'view' || variant === 'open') && !pressed && (
        <span className="font-sans-editorial text-[10px] font-semibold tracking-[0.2em] uppercase">
          {variant === 'view' ? 'VOIR' : 'OUVRIR'}
        </span>
      )}
    </div>
  );
}
