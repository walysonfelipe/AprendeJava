import Image from "next/image";

export default function Header({ activeArea }: { activeArea: 'java' | 'c' }) {
  return (
    <header className="w-full sticky top-0 z-50 bg-[#0f0f0f]/90 backdrop-blur-xl border-b border-[#2e2e2c]">
      <div className="max-w-[720px] mx-auto px-5 sm:px-6 h-[52px] flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-2.5">
          <Image
            src="/ads.png"
            alt="ADS"
            width={20}
            height={20}
            style={{ borderRadius: 10, objectFit: 'cover', width: 'auto', height: 'auto', boxShadow: '0 4px 16px rgba(0,0,0,0.4)' }}
          />
          <span className="text-[14px] font-medium tracking-tight">
            <span className="text-[#5a5956]">Ads</span>
            <span className="text-[#9a9894]">Study</span>
          </span>
        </div>

        {/* Trail chip */}
        <div className="flex items-center gap-2">
          <span className="hidden sm:block text-[10px] font-semibold uppercase tracking-[0.1em] text-[#3e3e3c]">
            trilha
          </span>
          <span className={`text-[11px] font-semibold px-2.5 py-1 rounded-md border tracking-tight transition-all duration-200 ${activeArea === 'java'
            ? 'bg-[#0d1e30] border-[#1a3550] text-[#6aaeea]'
            : 'bg-[#1a1209] border-[#3a2a10] text-[#d4922a]'
            }`}>
            {activeArea === 'java' ? 'Java + Spring' : 'C Fundamentos'}
          </span>
        </div>

      </div>
    </header>
  );
}
