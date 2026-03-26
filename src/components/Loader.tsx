'use client';
import { useEffect, useRef } from 'react';

export default function Loader() {
  const loaderRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLImageElement>(null);
  const fillRef = useRef<HTMLDivElement>(null);
  const percentRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const loader = loaderRef.current;
    const logo = logoRef.current;
    const fill = fillRef.current;
    const percent = percentRef.current;
    if (!loader || !logo || !fill || !percent) return;

    setTimeout(() => logo.classList.add('visible'), 150);

    function startCountdown() {
      let current = 0;
      const total = 100;
      function easeOut(t: number) { return 1 - Math.pow(1 - t, 2); }
      const startTime = performance.now();
      const duration = 5000;
      let logoSwapped = false;

      function step(now: number) {
        const elapsed = now - startTime;
        const linear = Math.min(elapsed / duration, 1);
        const value = Math.floor(easeOut(linear) * total);

        if (!logoSwapped && elapsed >= (duration - 2000)) {
          logoSwapped = true;
          logo!.style.opacity = '0';
          setTimeout(() => {
            logo!.src = '/ads.png';
            logo!.style.opacity = '1';
            setTimeout(() => { logo!.style.opacity = ''; }, 500);
          }, 500);
        }

        if (value !== current) {
          current = value;
          fill!.style.width = current + '%';
          percent!.textContent = current + '%';
        }

        if (linear < 1) {
          requestAnimationFrame(step);
        } else {
          setTimeout(() => {
            loader!.classList.add('fade-out');
            setTimeout(() => loader!.remove(), 650);
          }, 300);
        }
      }
      requestAnimationFrame(step);
    }

    if (logo.complete && logo.naturalWidth) {
      startCountdown();
    } else {
      logo.addEventListener('load', startCountdown, { once: true });
    }
  }, []);

  return (
    <div id="loader" ref={loaderRef}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        id="loader-logo"
        ref={logoRef}
        src="/cats.webp"
        alt="Logo"
        fetchPriority="high"
        decoding="async"
        loading="eager"
      />
      <div id="loader-bottom">
        <div id="loader-bar-track">
          <div id="loader-bar-fill" ref={fillRef}></div>
        </div>
        <span id="loader-percent" ref={percentRef}>0%</span>
      </div>
    </div>
  );
}
