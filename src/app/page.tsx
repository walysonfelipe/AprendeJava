import Loader from '@/components/Loader';
import ProgressRow from '@/components/ProgressRow';
import PhaseAccordion from '@/components/PhaseAccordion';
import VideoCarousel from '@/components/VideoCarousel';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Loader />

      <div className="main-container">
        <h1>Plano de Estudos Java + Spring Boot (opcional)</h1>
        <p className="subtitle">Do zero até uma API em produção · ~12 a 17 semanas</p>
        <ProgressRow />
        <PhaseAccordion />
      </div>

      <VideoCarousel />

      <footer style={{ marginTop: '4rem', padding: '2.5rem 1rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px', borderTop: '0.5px solid #2e2e2c', background: '#0f0f0f' }}>
        <Image src="/ads.png" alt="Java + Spring Boot Ad" width={180} height={180} style={{ borderRadius: '12px', objectFit: 'cover', boxShadow: '0 4px 12px rgba(0,0,0,0.3)', width: 'auto', height: 'auto' }} />
        <span style={{ fontSize: '16px', fontWeight: 500, color: '#9a9894', letterSpacing: '0.02em' }}>3 Semestre de ADS</span>
      </footer>
    </>
  );
}
