"use client";

import { useState } from 'react';
import Loader from '@/components/Loader';
import ProgressRow from '@/components/ProgressRow';
import PhaseAccordion from '@/components/PhaseAccordion';
import VideoCarousel from '@/components/VideoCarousel';
import Header from '@/components/Header';
import Image from 'next/image';
import { phases } from '@/data/phases';
import { phasesC } from '@/data/phasesC';

export default function Home() {
  const [activeArea, setActiveArea] = useState<'java' | 'c'>('java');
  const currentPhases = activeArea === 'java' ? phases : phasesC;

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-[#e2e1de] flex flex-col">
      <Loader />
      <Header activeArea={activeArea} />

      <main className="flex-1 max-w-[720px] mx-auto w-full px-5 sm:px-6 pt-10 sm:pt-12">

        {/* ── Trail switcher ── */}
        <div className="flex gap-1.5 p-1 bg-[#141412] border border-[#2e2e2c] rounded-xl w-max mb-10">
          <TrailBtn
            active={activeArea === 'java'}
            onClick={() => setActiveArea('java')}
            color="blue"
            icon={
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
              </svg>
            }
          >
            Java + Spring Boot
          </TrailBtn>
          <TrailBtn
            active={activeArea === 'c'}
            onClick={() => setActiveArea('c')}
            color="amber"
            icon={
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" /><path d="M14.5 9a3.5 3.5 0 1 0 0 6" />
              </svg>
            }
          >
            C Fundamentos
          </TrailBtn>
        </div>

        {/* ── Trail content ── */}
        {activeArea === 'java' ? (
          <div className="fade-in" key="java">
            <TrailHeading
              title="Plano de Estudos Java + Spring Boot"
              subtitle="Do zero até uma API em produção · ~12 a 17 semanas"
            />
            <ProgressRow phases={currentPhases} />
            <PhaseAccordion phases={currentPhases} />
          </div>
        ) : (
          <div className="fade-in" key="c">
            <TrailHeading
              title="Plano de Estudos C Fundamentos"
              subtitle="Do básico aos ponteiros, structs e arquivos · ~9 a 13 semanas"
            />
            <ProgressRow phases={currentPhases} />
            <PhaseAccordion phases={currentPhases} />
          </div>
        )}

      </main>

      {/* Videos — apenas trilha Java */}
      {activeArea === 'java' && (
        <div className="mt-10 border-t border-[#2e2e2c] pt-8 pb-2">
          <VideoCarousel />
        </div>
      )}

      {/* Footer */}
      <footer className="flex flex-col items-center gap-3 mt-10 pt-6 pb-8 border-t border-[#2e2e2c] px-6">
        <Image
          src="/ads.png"
          alt="ADS"
          width={140}
          height={140}
          style={{ borderRadius: 10, objectFit: 'cover', width: 'auto', height: 'auto', boxShadow: '0 4px 16px rgba(0,0,0,0.4)' }}
        />
        <span className="text-[12px] font-medium text-[#5a5956] tracking-wide">
          3º Semestre de ADS
        </span>
      </footer>
    </div>
  );
}

/* ── Sub-components ───────────────────────────────────── */

function TrailBtn({
  children,
  active,
  onClick,
  color,
  icon,
}: {
  children: React.ReactNode;
  active: boolean;
  onClick: () => void;
  color: 'blue' | 'amber';
  icon: React.ReactNode;
}) {
  const activeClass =
    color === 'blue'
      ? 'bg-[#0d1e30] text-[#6aaeea] border border-[#1a3550]'
      : 'bg-[#1a1209] text-[#d4922a] border border-[#3a2a10]';

  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-[12.5px] font-medium transition-all duration-150 ${active
        ? activeClass
        : 'text-[#5a5956] border border-transparent hover:text-[#9a9894] hover:bg-[#1a1a18]'
        }`}
    >
      {icon}
      {children}
    </button>
  );
}

function TrailHeading({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="mb-2">
      <h1 className="text-[1.75rem] sm:text-[2rem] font-semibold tracking-tight leading-tight text-[#e2e1de]">
        {title}
      </h1>
      <p className="text-[14px] text-[#9a9894] mt-1.5 leading-relaxed">{subtitle}</p>
    </div>
  );
}
