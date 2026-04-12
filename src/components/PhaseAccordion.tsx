'use client';
import { useState } from 'react';
import { phases } from '@/data/phases';

const badgeStyles: Record<string, React.CSSProperties> = {
  'badge-purple': { background: '#1e1a3a', color: '#a89cef' },
  'badge-teal':   { background: '#0d2620', color: '#4dc9a4' },
  'badge-blue':   { background: '#0d1e30', color: '#6aaeea' },
  'badge-amber':  { background: '#2a1a08', color: '#d4922a' },
  'badge-coral':  { background: '#2a1008', color: '#e07a55' },
  'badge-green':  { background: '#122009', color: '#72c44a' },
  'badge-indigo': { background: '#141430', color: '#8886e8' },
};

export default function PhaseAccordion() {
  const [open, setOpen] = useState<number | null>(null);

  function toggle(i: number) {
    setOpen(prev => prev === i ? null : i);
  }

  return (
    <div id="phases">
      {phases.map((p, i) => (
        <div key={p.num} className="phase" style={{ marginBottom:'1rem', border:'0.5px solid #2e2e2c', borderRadius:'12px', overflow:'hidden', background:'#1a1a18' }}>
          <div
            className="phase-header"
            onClick={() => toggle(i)}
          >
            <span className="badge" style={{ fontSize:'11px', fontWeight:500, padding:'3px 10px', borderRadius:'99px', whiteSpace:'nowrap', ...badgeStyles[p.badge] }}>
              {p.label}
            </span>
            <span className="title" style={{ fontSize:'15px', fontWeight:500, color:'#e2e1de' }}>{p.num}. {p.title}</span>
            <span className="duration" style={{ fontSize:'12px', color:'#5a5956' }}>{p.duration}</span>
            <span className={`chevron${open === i ? ' open' : ''}`}>&#9654;</span>
          </div>
          <div className={`phase-body${open === i ? ' open' : ''}`}>
            {p.groups
              ? p.groups.map(g => (
                  <div key={g.label} style={{ marginBottom:'0.75rem' }}>
                    <div style={{ fontSize:'11px', fontWeight:600, color:'#3e3e3c', textTransform:'uppercase', letterSpacing:'0.06em', marginBottom:'2px', paddingLeft:'2px' }}>{g.label}</div>
                    <ul style={{ listStyle:'none', marginBottom:'0.9rem' }}>
                      {g.items.map((t, j) => (
                        <li key={j} style={{ fontSize:'13.5px', color:'#9a9894', padding:'4px 0', paddingLeft:'14px', position:'relative', lineHeight:1.5 }}>
                          <span style={{ position:'absolute', left:0, color:'#3e3e3c' }}>–</span>{t}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))
              : (
                <ul style={{ listStyle:'none', marginBottom:'0.9rem' }}>
                  {p.topics?.map((t, j) => (
                    <li key={j} style={{ fontSize:'13.5px', color:'#9a9894', padding:'4px 0', paddingLeft:'14px', position:'relative', lineHeight:1.5 }}>
                      <span style={{ position:'absolute', left:0, color:'#3e3e3c' }}>–</span>{t}
                    </li>
                  ))}
                </ul>
              )
            }
            <div style={{ fontSize:'11px', fontWeight:500, color:'#3e3e3c', textTransform:'uppercase', letterSpacing:'0.04em', marginBottom:'6px' }}>Recursos recomendados</div>
            <div style={{ display:'flex', flexWrap:'wrap', gap:'6px', marginBottom:'0.75rem' }}>
              {p.resources.map(r => (
                <span key={r} style={{ fontSize:'12px', padding:'3px 10px', borderRadius:'99px', border:'0.5px solid #2e2e2c', color:'#9a9894', background:'#141412' }}>{r}</span>
              ))}
            </div>
            <div style={{ fontSize:'12.5px', color:'#9a9894', background:'#141412', borderLeft:'2.5px solid #2a5a8a', borderRadius:'0 8px 8px 0', padding:'8px 12px', lineHeight:1.5 }}>{p.tip}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
