'use client';
import { useState, useCallback, useRef } from 'react';
import { videos } from '@/data/videos';

function getYouTubeEmbedUrl(url: string): string {
  try {
    const parsed = new URL(url);
    let videoId = parsed.searchParams.get('v');
    const playlistId = parsed.searchParams.get('list');
    if (parsed.hostname === 'youtu.be') videoId = parsed.pathname.slice(1);
    if (videoId && playlistId) return `https://www.youtube.com/embed/${videoId}?list=${playlistId}`;
    if (playlistId) return `https://www.youtube.com/embed/videoseries?list=${playlistId}`;
    if (videoId) return `https://www.youtube.com/embed/${videoId}`;
  } catch { /* noop */ }
  return url;
}

// Pré-computa todas as URLs uma única vez fora do componente
const embedUrls = videos.map((v) => getYouTubeEmbedUrl(v.url));

export default function VideoCarousel() {
  const [current, setCurrent] = useState(0);
  const touchStartX = useRef<number | null>(null);

  const goTo = useCallback((index: number) => {
    setCurrent((index + videos.length) % videos.length);
  }, []);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) goTo(current + (diff > 0 ? 1 : -1));
    touchStartX.current = null;
  };

  return (
    <section className="main-container" style={{ marginTop: '1rem' }}>
      <h2 style={{ fontSize: '1.25rem', fontWeight: 500, color: '#e2e1de', textAlign: 'center', marginBottom: '4px' }}>
        🎬 Vídeos Recomendados
      </h2>
      <p style={{ fontSize: '0.8125rem', color: '#5a5956', textAlign: 'center', marginBottom: '1.5rem' }}>
        Aulas e playlists para complementar o estudo
      </p>

      <div className="carousel-nav-wrapper">
        <button onClick={() => goTo(current - 1)} aria-label="Anterior" className="carousel-nav-btn desktop-only prev">
          &#10094;
        </button>

        {/* Container com todos os iframes pré-renderizados — apenas visibilidade muda */}
        <div
          className="carousel-slide-container"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {videos.map((v, i) => {
            const active = i === current;
            return (
              <div
                key={i}
                className="carousel-slide"
                style={{ display: active ? 'block' : 'none' }}
              >
                <div className="video-frame">
                  <button onClick={(e) => { e.preventDefault(); goTo(current - 1); }} aria-label="Anterior" className="carousel-nav-btn mobile-overlay prev">
                    &#10094;
                  </button>
                  <iframe
                    src={embedUrls[i]}
                    title={v.nome}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    loading="lazy"
                  />
                  <button onClick={(e) => { e.preventDefault(); goTo(current + 1); }} aria-label="Próximo" className="carousel-nav-btn mobile-overlay next">
                    &#10095;
                  </button>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px 4px 0' }}>
                  <span
                    style={{
                      fontSize: '11px', fontWeight: 500, padding: '3px 10px', borderRadius: '99px', whiteSpace: 'nowrap', flexShrink: 0,
                      ...(v.url.includes('list=') ? { background: '#1e1a3a', color: '#a89cef' } : { background: '#0d2620', color: '#4dc9a4' }),
                    }}
                  >
                    {v.url.includes('list=') ? 'Playlist' : 'Vídeo'}
                  </span>
                    <span
                      style={{ fontSize: '0.8125rem', color: '#9a9894', fontWeight: 400, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', flex: 1, minWidth: 0 }}
                      title={`${v.canal} — ${v.nome}`}
                    >
                      {v.canal} — {v.nome}
                    </span>
                </div>
              </div>
            );
          })}
        </div>

        <button onClick={() => goTo(current + 1)} aria-label="Próximo" className="carousel-nav-btn desktop-only next">
          &#10095;
        </button>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '1rem' }}>
        {videos.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Slide ${i + 1}`}
            style={{
              width: '8px', height: '8px', borderRadius: '50%', border: 'none', cursor: 'pointer',
              background: i === current ? '#a89cef' : '#2e2e2c',
              transform: i === current ? 'scale(1.3)' : 'scale(1)',
              transition: 'background .25s, transform .2s',
            }}
          />
        ))}
      </div>
    </section>
  );
}
