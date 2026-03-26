import { phases } from '@/data/phases';

export default function ProgressRow() {
  return (
    <div className="progress-row" style={{ display: 'flex', gap: '6px', marginBottom: '2.5rem', marginTop: '2.5rem', flexWrap: 'wrap' }}>
      {phases.map((p) => (
        <div key={p.num} style={{ flex: 1, minWidth: '80px', textAlign: 'center', fontSize: '11px', color: '#5a5956' }}>
          <div style={{ width: '28px', height: '28px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: 500, margin: '0 auto 4px', border: '0.5px solid #2e2e2c', background: '#1a1a18', color: '#9a9894' }}>
            {p.num}
          </div>
          <div>{p.title.split(' ').slice(0, 2).join(' ')}</div>
        </div>
      ))}
    </div>
  );
}
