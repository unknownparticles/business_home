import React from 'react';
import { useTranslation } from '../../i18n';
import { GlowCard } from '../../components/ui/GlowCard';
import { TerminalWindow } from '../../components/ui/TerminalWindow';
import { UserCheck, Zap } from 'lucide-react';
import { useReveal } from '../../hooks/useReveal';

export const LeadGeneration: React.FC = () => {
  const { t } = useTranslation();
  const cap = t.capabilities['01'];
  const { ref, isVisible } = useReveal();

  return (
    <div ref={ref} className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      <GlowCard className="p-8 lg:p-10 glow-card-hover">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 space-y-4">
          <div className="font-mono text-xs text-cyan-400 font-semibold tracking-wider uppercase flex items-center gap-2">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <circle cx="12" cy="12" r="3" fill="currentColor" opacity="0.3" />
              <path d="M12 2v4M12 18v4M2 12h4M18 12h4" opacity="0.5" />
            </svg>
            {cap.label}
          </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              {cap.title}
            </h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              {cap.desc}
            </p>
            <div className="pt-2 flex items-center gap-4 text-xs font-mono text-zinc-300">
              <span className="flex items-center gap-1.5"><Zap className="w-3.5 h-3.5 text-cyan-400" /> {cap.feat1}</span>
              <span className="flex items-center gap-1.5"><UserCheck className="w-3.5 h-3.5 text-cyan-400" /> {cap.feat2}</span>
            </div>
          </div>

          <div className="lg:col-span-7">
            <TerminalWindow title="LEAD_PIPELINE_RESOLVER">
              <div className="grid grid-cols-3 gap-2 mb-4 text-center">
                <div className="bg-zinc-900/80 p-2.5 rounded border border-zinc-800">
                  <div className="text-[10px] font-mono text-zinc-500 uppercase">Potential Pool</div>
                  <div className="text-lg font-bold font-mono text-zinc-200 mt-0.5">12,483</div>
                </div>
                <div className="bg-zinc-900/80 p-2.5 rounded border border-zinc-800">
                  <div className="text-[10px] font-mono text-zinc-500 uppercase">Qualified Leads</div>
                  <div className="text-lg font-bold font-mono text-cyan-400 mt-0.5">2,184</div>
                </div>
                <div className="bg-cyan-950/40 p-2.5 rounded border border-cyan-500/30">
                  <div className="text-[10px] font-mono text-cyan-400 uppercase">High Intent RFQ</div>
                  <div className="text-lg font-bold font-mono text-emerald-400 mt-0.5">326</div>
                </div>
              </div>

              <div className="p-3 bg-black/60 rounded border border-zinc-800 font-mono text-xs space-y-2">
                <div className="flex items-center justify-between text-zinc-400 pb-1 border-b border-zinc-900 text-[11px]">
                  <span>TARGET MATCHING WORKFLOW</span>
                  <span className="text-emerald-400">ACTIVE</span>
                </div>
                <div className="flex flex-wrap items-center gap-2 text-zinc-300 text-[11px]">
                  <span className="px-2 py-1 bg-zinc-900 rounded">全球企业库</span>
                  <span className="text-zinc-600">→</span>
                  <span className="px-2 py-1 bg-zinc-900 rounded">行业细分</span>
                  <span className="text-zinc-600">→</span>
                  <span className="px-2 py-1 bg-zinc-900 rounded">关务进出口匹配</span>
                  <span className="text-zinc-600">→</span>
                  <span className="px-2 py-1 bg-cyan-950 text-cyan-300 border border-cyan-500/40 rounded font-semibold">精准触达</span>
                </div>
              </div>
            </TerminalWindow>
          </div>
        </div>
      </GlowCard>
    </div>
  );
};
