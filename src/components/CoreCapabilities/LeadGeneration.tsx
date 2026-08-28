import React from 'react';
import { useTranslation } from '../../i18n';
import { useTheme } from '../../theme/ThemeContext';
import { GlowCard } from '../../components/ui/GlowCard';
import { TerminalWindow } from '../../components/ui/TerminalWindow';
import { UserCheck, Zap } from 'lucide-react';
import { useReveal } from '../../hooks/useReveal';

export const LeadGeneration: React.FC = () => {
  const { t } = useTranslation();
  const { theme } = useTheme();
  const isLight = theme === 'light';
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
            <h3 className={`text-2xl sm:text-3xl font-bold tracking-tight ${isLight ? 'text-zinc-900' : 'text-white'}`}>
              {cap.title}
            </h3>
            <p className={`text-sm leading-relaxed ${isLight ? 'text-zinc-600' : 'text-zinc-400'}`}>
              {cap.desc}
            </p>
            <div className={`pt-2 flex items-center gap-4 text-xs font-mono ${isLight ? 'text-zinc-600' : 'text-zinc-300'}`}>
              <span className="flex items-center gap-1.5"><Zap className="w-3.5 h-3.5 text-cyan-400" /> {cap.feat1}</span>
              <span className="flex items-center gap-1.5"><UserCheck className="w-3.5 h-3.5 text-cyan-400" /> {cap.feat2}</span>
            </div>
          </div>

          <div className="lg:col-span-7">
            <TerminalWindow title="LEAD_PIPELINE_RESOLVER">
              <div className="grid grid-cols-3 gap-2 mb-4 text-center">
                <div className={`p-2.5 rounded border ${isLight ? 'bg-zinc-100/80 border-zinc-300' : 'bg-zinc-900/80 border-zinc-800'}`}>
                  <div className={`text-[10px] font-mono uppercase ${isLight ? 'text-zinc-500' : 'text-zinc-500'}`}>Potential Pool</div>
                  <div className={`text-lg font-bold font-mono mt-0.5 ${isLight ? 'text-zinc-900' : 'text-zinc-200'}`}>12,483</div>
                </div>
                <div className={`p-2.5 rounded border ${isLight ? 'bg-zinc-100/80 border-zinc-300' : 'bg-zinc-900/80 border-zinc-800'}`}>
                  <div className={`text-[10px] font-mono uppercase ${isLight ? 'text-zinc-500' : 'text-zinc-500'}`}>Qualified Leads</div>
                  <div className="text-lg font-bold font-mono text-cyan-400 mt-0.5">2,184</div>
                </div>
                <div className={`p-2.5 rounded border ${isLight ? 'bg-cyan-50/60 border-cyan-200' : 'bg-cyan-950/40 border-cyan-500/30'}`}>
                  <div className="text-[10px] font-mono text-cyan-400 uppercase">High Intent RFQ</div>
                  <div className="text-lg font-bold font-mono text-emerald-400 mt-0.5">326</div>
                </div>
              </div>

              <div className={`p-3 rounded border font-mono text-xs space-y-2 ${isLight ? 'bg-white/80 border-zinc-300' : 'bg-black/60 border-zinc-800'}`}>
                <div className={`flex items-center justify-between pb-1 border-b text-[11px] ${isLight ? 'text-zinc-600 border-zinc-200' : 'text-zinc-400 border-zinc-900'}`}>
                  <span>TARGET MATCHING WORKFLOW</span>
                  <span className="text-emerald-400">ACTIVE</span>
                </div>
                <div className={`flex flex-wrap items-center gap-2 text-[11px] ${isLight ? 'text-zinc-600' : 'text-zinc-300'}`}>
                  <span className={`px-2 py-1 rounded ${isLight ? 'bg-zinc-100 text-zinc-700 border border-zinc-200' : 'bg-zinc-900 text-zinc-300'}`}>全球企业库</span>
                  <span className={isLight ? 'text-zinc-400' : 'text-zinc-600'}>→</span>
                  <span className={`px-2 py-1 rounded ${isLight ? 'bg-zinc-100 text-zinc-700 border border-zinc-200' : 'bg-zinc-900 text-zinc-300'}`}>行业细分</span>
                  <span className={isLight ? 'text-zinc-400' : 'text-zinc-600'}>→</span>
                  <span className={`px-2 py-1 rounded ${isLight ? 'bg-zinc-100 text-zinc-700 border border-zinc-200' : 'bg-zinc-900 text-zinc-300'}`}>关务进出口匹配</span>
                  <span className={isLight ? 'text-zinc-400' : 'text-zinc-600'}>→</span>
                  <span className={`px-2 py-1 rounded border font-semibold ${isLight ? 'bg-cyan-50 text-cyan-700 border-cyan-200' : 'bg-cyan-950 text-cyan-300 border-cyan-500/40'}`}>精准触达</span>
                </div>
              </div>
            </TerminalWindow>
          </div>
        </div>
      </GlowCard>
    </div>
  );
};
