import { Phase } from '@/data/phases';

export default function ProgressRow({ phases }: { phases: Phase[] }) {
  return (
    <div className="flex items-start overflow-x-auto scrollbar-hide gap-0 my-8 sm:justify-center">
      {phases.map((p, i) => (
        <div key={p.num} className="flex items-start flex-shrink-0">
          {/* Fase */}
          <div className="flex flex-col items-center w-[76px] sm:w-[84px]">
            <div className="w-8 h-8 rounded-full border border-[#2e2e2c] bg-[#1a1a18] flex items-center justify-center text-[11px] font-semibold text-[#9a9894]">
              {p.num}
            </div>
            <p className="text-[10px] text-[#5a5956] text-center leading-snug mt-1.5 px-0.5 line-clamp-2">
              {p.title}
            </p>
          </div>
          {/* Connector */}
          {i < phases.length - 1 && (
            <div className="w-5 sm:w-6 h-px bg-[#2e2e2c] flex-shrink-0 mt-4" />
          )}
        </div>
      ))}
    </div>
  );
}
