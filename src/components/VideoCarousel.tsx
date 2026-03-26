'use client';
import { useState, useCallback, useMemo } from 'react';
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

  const goTo = useCallback((index: number) => {
    setCurrent((index + videos.length) % videos.length);
  }, []);

  const currentVideo = useMemo(() => videos[current], [current]);
  const isPlaylist = currentVideo.url.includes('list=');

  return (
    <section style={{ maxWidth: '720px', margin: '3rem auto 0', padding: '0 1rem' }}>
      <h2 style={{ fontSize: '20px', fontWeight: 500, color: '#e2e1de', textAlign: 'center', marginBottom: '4px' }}>
        🎬 Vídeos Recomendados
      </h2>
      <p style={{ fontSize: '13px', color: '#5a5956', textAlign: 'center', marginBottom: '1.5rem' }}>
        Aulas e playlists para complementar o estudo
      </p>

      <div style={{ position: 'relative', display: 'flex', alignItems: 'center', gap: '12px' }}>
        <button
          onClick={() => goTo(current - 1)}
          aria-label="Anterior"
          style={{ flexShrink: 0, width: '40px', height: '40px', borderRadius: '50%', border: '0.5px solid #2e2e2c', background: '#1a1a18', color: '#9a9894', fontSize: '16px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >
          &#10094;
        </button>

        {/* Container com todos os iframes pré-renderizados — apenas visibilidade muda */}
        <div style={{ flex: 1, borderRadius: '14px', overflow: 'hidden', position: 'relative' }}>
          {videos.map((v, i) => {
            const active = i === current;
            return (
              <div
                key={i}
                className="carousel-slide"
                style={{
                  display: active ? 'block' : 'none',
                }}
              >
                <div className="video-frame">
                  <iframe
                    src={embedUrls[i]}
                    title={v.nome}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px 4px 0' }}>
                  <span
                    style={{
                      fontSize: '11px', fontWeight: 500, padding: '3px 10px', borderRadius: '99px', whiteSpace: 'nowrap',
                      ...(v.url.includes('list=') ? { background: '#1e1a3a', color: '#a89cef' } : { background: '#0d2620', color: '#4dc9a4' }),
                    }}
                  >
                    {v.url.includes('list=') ? 'Playlist' : 'Vídeo'}
                  </span>
                  <span
                    style={{ fontSize: '14px', color: '#9a9894', fontWeight: 400, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', flex: 1 }}
                    title={`${v.canal} — ${v.nome}`}
                  >
                    {v.canal} — {v.nome}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        <button
          onClick={() => goTo(current + 1)}
          aria-label="Próximo"
          style={{ flexShrink: 0, width: '40px', height: '40px', borderRadius: '50%', border: '0.5px solid #2e2e2c', background: '#1a1a18', color: '#9a9894', fontSize: '16px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >
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
