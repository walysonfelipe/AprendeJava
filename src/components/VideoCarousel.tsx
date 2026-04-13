'use client';
import { useState, useCallback, useRef } from 'react';
import { videos } from '@/data/videos';

function getEmbedUrl(url: string): string {
  try {
    const u = new URL(url);
    let vid = u.searchParams.get('v');
    const list = u.searchParams.get('list');
    if (u.hostname === 'youtu.be') vid = u.pathname.slice(1);
    if (vid && list) return `https://www.youtube.com/embed/${vid}?list=${list}`;
    if (list) return `https://www.youtube.com/embed/videoseries?list=${list}`;
    if (vid)  return `https://www.youtube.com/embed/${vid}`;
  } catch { /* noop */ }
  return url;
}

const embedUrls = videos.map(v => getEmbedUrl(v.url));

export default function VideoCarousel() {
  const [current, setCurrent] = useState(0);
  const touchStartX = useRef<number | null>(null);

  const goTo = useCallback((i: number) => {
    setCurrent((i + videos.length) % videos.length);
  }, []);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) goTo(current + (diff > 0 ? 1 : -1));
    touchStartX.current = null;
  };

  const v = videos[current];
  const isPlaylist = v.url.includes('list=');

  return (
    <section className="max-w-[720px] mx-auto w-full px-5 sm:px-6 mt-6 mb-2">

      {/* Section heading */}
      <div className="flex flex-col items-center gap-1 mb-5">
        <h2 className="text-[15px] font-semibold text-[#e2e1de] tracking-tight">
          Vídeos Recomendados
        </h2>
        <p className="text-[12px] text-[#5a5956]">
          Aulas e playlists para complementar o estudo
        </p>
      </div>

      {/* Carousel row */}
      <div className="flex items-center gap-3">
        {/* Prev — desktop only */}
        <button
          onClick={() => goTo(current - 1)}
          aria-label="Anterior"
          className="hidden sm:flex flex-shrink-0 w-9 h-9 rounded-full border border-[#2e2e2c] bg-[#1a1a18] text-[#9a9894] items-center justify-center hover:bg-[#2e2e2c] hover:text-[#e2e1de] transition-colors"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>

        {/* Video frame */}
        <div className="flex-1 min-w-0">
          <div
            className="relative w-full aspect-video bg-[#141412] rounded-2xl overflow-hidden border border-[#2e2e2c]"
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            {/* Mobile overlay buttons */}
            <button
              onClick={() => goTo(current - 1)}
              aria-label="Anterior"
              className="sm:hidden absolute left-2 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-black/60 backdrop-blur-sm border border-white/10 text-white flex items-center justify-center"
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>

            <iframe
              key={current}
              src={embedUrls[current]}
              title={v.nome}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              loading="lazy"
              className="absolute inset-0 w-full h-full border-0"
            />

            <button
              onClick={() => goTo(current + 1)}
              aria-label="Próximo"
              className="sm:hidden absolute right-2 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-black/60 backdrop-blur-sm border border-white/10 text-white flex items-center justify-center"
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>

          {/* Video meta */}
          <div className="flex items-center gap-2 mt-2.5 px-0.5">
            <span className={`text-[10.5px] font-medium px-2 py-0.5 rounded-full flex-shrink-0 ${
              isPlaylist ? 'bg-[#1e1a3a] text-[#a89cef]' : 'bg-[#0d2620] text-[#4dc9a4]'
            }`}>
              {isPlaylist ? 'Playlist' : 'Vídeo'}
            </span>
            <p className="text-[12.5px] text-[#9a9894] truncate">
              <span className="text-[#5a5956]">{v.canal}</span>
              <span className="mx-1 text-[#3e3e3c]">—</span>
              {v.nome}
            </p>
          </div>
        </div>

        {/* Next — desktop only */}
        <button
          onClick={() => goTo(current + 1)}
          aria-label="Próximo"
          className="hidden sm:flex flex-shrink-0 w-9 h-9 rounded-full border border-[#2e2e2c] bg-[#1a1a18] text-[#9a9894] items-center justify-center hover:bg-[#2e2e2c] hover:text-[#e2e1de] transition-colors"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      </div>

      {/* Dots */}
      <div className="flex justify-center items-center gap-1.5 mt-4">
        {videos.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Slide ${i + 1}`}
            className={`rounded-full border-0 cursor-pointer transition-all duration-200 ${
              i === current
                ? 'w-4 h-1.5 bg-[#9a9894]'
                : 'w-1.5 h-1.5 bg-[#2e2e2c] hover:bg-[#3e3e3c]'
            }`}
          />
        ))}
      </div>

    </section>
  );
}
