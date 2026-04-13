'use client';
import { useState } from 'react';
import { Phase } from '@/data/phases';

const badge: Record<string, string> = {
  'badge-purple': 'bg-[#1e1a3a] text-[#a89cef]',
  'badge-teal':   'bg-[#0d2620] text-[#4dc9a4]',
  'badge-blue':   'bg-[#0d1e30] text-[#6aaeea]',
  'badge-amber':  'bg-[#2a1a08] text-[#d4922a]',
  'badge-coral':  'bg-[#2a1008] text-[#e07a55]',
  'badge-green':  'bg-[#122009] text-[#72c44a]',
  'badge-indigo': 'bg-[#141430] text-[#8886e8]',
};

export default function PhaseAccordion({ phases }: { phases: Phase[] }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="flex flex-col gap-3">
      {phases.map((p, i) => {
        const isOpen = open === i;
        return (
          <div
            key={p.num}
            className="border border-[#2e2e2c] rounded-xl overflow-hidden bg-[#1a1a18] transition-colors duration-150"
          >
            {/* Header */}
            <button
              className="w-full flex items-center gap-3 px-4 py-3.5 cursor-pointer text-left"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
            >
              <span className={`text-[11px] font-medium px-2.5 py-0.5 rounded-full flex-shrink-0 ${badge[p.badge] ?? ''}`}>
                {p.label}
              </span>
              <span className="flex-1 text-[14px] sm:text-[15px] font-medium text-[#e2e1de] text-left">
                {p.num}. {p.title}
              </span>
              <span className="text-[11px] text-[#5a5956] flex-shrink-0 hidden sm:block">{p.duration}</span>
              <svg
                width="12" height="12"
                viewBox="0 0 24 24" fill="none"
                stroke="#3e3e3c" strokeWidth="2.5"
                strokeLinecap="round" strokeLinejoin="round"
                className={`flex-shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-90' : ''}`}
              >
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>

            {/* Duration — mobile only, below title */}
            {isOpen && (
              <div className="sm:hidden px-4 pb-2 text-[11px] text-[#5a5956]">{p.duration}</div>
            )}

            {/* Accordion body */}
            <div className={`acc-body ${isOpen ? 'open' : ''}`}>
              <div className="acc-inner">
                <div className="border-t border-[#2e2e2c] px-4 py-4 flex flex-col gap-4">

                  {/* Groups */}
                  {p.groups
                    ? p.groups.map(g => (
                        <div key={g.label}>
                          <p className="text-[10px] font-semibold uppercase tracking-[0.08em] text-[#3e3e3c] mb-2">
                            {g.label}
                          </p>
                          <ul className="flex flex-col gap-1">
                            {g.items.map((t, j) => (
                              <li key={j} className="flex gap-2.5 text-[13px] text-[#9a9894] leading-relaxed">
                                <span className="text-[#3e3e3c] flex-shrink-0 mt-0.5">–</span>
                                <span>{t}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))
                    : (
                        <ul className="flex flex-col gap-1">
                          {p.topics?.map((t, j) => (
                            <li key={j} className="flex gap-2.5 text-[13px] text-[#9a9894] leading-relaxed">
                              <span className="text-[#3e3e3c] flex-shrink-0 mt-0.5">–</span>
                              <span>{t}</span>
                            </li>
                          ))}
                        </ul>
                      )
                  }

                  {/* Resources */}
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.08em] text-[#3e3e3c] mb-2">
                      Recursos recomendados
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {p.resources.map(r => (
                        <span
                          key={r}
                          className="text-[11px] px-2.5 py-1 rounded-full border border-[#2e2e2c] text-[#9a9894] bg-[#141412]"
                        >
                          {r}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Tip */}
                  <div className="[border-left:2px_solid_#2a5a8a] pl-3 py-1 bg-[#141412] rounded-r-lg">
                    <p className="text-[12.5px] text-[#9a9894] leading-relaxed">{p.tip}</p>
                  </div>

                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
