import React from 'react';
import { useTranslation } from '../../i18n';
import { useTheme } from '../../theme/ThemeContext';
import { GlowCard } from '../../components/ui/GlowCard';
import { MOCK_MARKET_ALERT } from '../../data/mockData';
import { ShieldAlert } from 'lucide-react';
import { useReveal } from '../../hooks/useReveal';

export const MarketIntel: React.FC = () => {
  const { t } = useTranslation();
  const { theme } = useTheme();
  const isLight = theme === 'light';
  const cap = t.capabilities['05'];
  const alert = MOCK_MARKET_ALERT;
  const { ref, isVisible } = useReveal();

  return (
    <section ref={ref} id="market-intel" className={`py-24 relative transition-all duration-1000 ${isLight ? 'bg-white' : 'bg-black'} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      <div className="max-w-7xl mx-auto px-6">
        <GlowCard className="p-8 lg:p-10 glow-card-hover" highlight>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-4">
              <div className="font-mono text-xs text-cyan-400 font-semibold tracking-wider uppercase flex items-center gap-2">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 3v18h18" />
                  <path d="M7 14l4-4 4 4 5-6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {cap.label}
              </div>
              <h3 className={`text-2xl sm:text-3xl font-bold tracking-tight ${isLight ? 'text-zinc-900' : 'text-white'}`}>
                {cap.title}
              </h3>
              <p className={`text-sm leading-relaxed ${isLight ? 'text-zinc-600' : 'text-zinc-300'}`}>
                {cap.desc}
              </p>
              <div className={`p-3 rounded border text-xs text-zinc-400 font-mono ${isLight ? 'bg-zinc-100/60 border-zinc-200' : 'bg-zinc-900/60 border-zinc-800'}`}>
                {cap.monitor}
              </div>
            </div>

            <div className={`lg:col-span-7 rounded-xl border p-5 font-mono text-xs ${isLight ? 'bg-zinc-50/80 border-zinc-300' : 'bg-[#08090C] border-zinc-800'}`}>
              <div className={`flex items-center justify-between pb-3 mb-3 border-b text-[11px] ${isLight ? 'border-zinc-200' : 'border-zinc-800'}`}>
                <div className="flex items-center gap-2 text-amber-400 font-semibold">
                  <ShieldAlert className="w-4 h-4" />
                  <span>GLOBAL MARKET IMPACT ALERT</span>
                </div>
                <span className={isLight ? 'text-zinc-500' : 'text-zinc-500'}>ID: {alert.id}</span>
              </div>

              <div className={`text-sm font-sans font-semibold mb-3 ${isLight ? 'text-zinc-800' : 'text-zinc-100'}`}>
                {alert.title}
              </div>

              <div className="grid grid-cols-3 gap-2 mb-4">
                <div className={`p-2.5 rounded border ${isLight ? 'bg-white/80 border-zinc-200' : 'bg-black/60 border-zinc-800/80'}`}>
                  <div className={`text-[10px] ${isLight ? 'text-zinc-500' : 'text-zinc-500'}`}>Cost Impact</div>
                  <div className="text-sm font-bold text-amber-400 mt-0.5">{alert.costImpact}</div>
                </div>
                <div className={`p-2.5 rounded border ${isLight ? 'bg-white/80 border-zinc-200' : 'bg-black/60 border-zinc-800/80'}`}>
                  <div className={`text-[10px] ${isLight ? 'text-zinc-500' : 'text-zinc-500'}`}>Demand Impact</div>
                  <div className="text-sm font-bold text-cyan-400 mt-0.5">{alert.demandImpact}</div>
                </div>
                <div className={`p-2.5 rounded border ${isLight ? 'bg-white/80 border-zinc-200' : 'bg-black/60 border-zinc-800/80'}`}>
                  <div className={`text-[10px] ${isLight ? 'text-zinc-500' : 'text-zinc-500'}`}>Competitiveness</div>
                  <div className="text-sm font-bold text-rose-400 mt-0.5">{alert.competitiveness}</div>
                </div>
              </div>

              <div className={`p-3.5 rounded border ${isLight ? 'bg-cyan-50/80 border-cyan-200' : 'bg-cyan-950/20 border-cyan-500/30'}`}>
                <div className="text-[11px] text-cyan-400 font-semibold mb-2">
                  EXECUTIVE AI ACTION STRATEGY
                </div>
                <div className={`space-y-1.5 font-sans text-xs ${isLight ? 'text-zinc-700' : 'text-zinc-300'}`}>
                  {alert.recommendations.map((rec, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <span className="text-cyan-400 font-mono text-[11px] font-bold">0{i + 1}</span>
                      <span>{rec}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </GlowCard>
      </div>
    </section>
  );
};
