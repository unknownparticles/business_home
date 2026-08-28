import React from 'react';
import { useTranslation } from '../../i18n';
import { useTheme } from '../../theme/ThemeContext';
import { GlowCard } from '../../components/ui/GlowCard';
import { MOCK_LEADS } from '../../data/mockData';
import { useReveal } from '../../hooks/useReveal';

export const Qualification: React.FC = () => {
  const { t } = useTranslation();
  const { theme } = useTheme();
  const isLight = theme === 'light';
  const cap = t.capabilities['02'];
  const { ref, isVisible } = useReveal();

  return (
    <div ref={ref} className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      <GlowCard className="p-8 lg:p-10 glow-card-hover">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 space-y-4">
            <div className="font-mono text-xs text-cyan-400 font-semibold tracking-wider uppercase">
              {cap.label}
            </div>
            <h3 className={`text-2xl sm:text-3xl font-bold tracking-tight ${isLight ? 'text-zinc-900' : 'text-white'}`}>
              {cap.title}
            </h3>
            <p className={`text-sm leading-relaxed ${isLight ? 'text-zinc-600' : 'text-zinc-400'}`}>
              {cap.desc}
            </p>
          </div>

          <div className={`lg:col-span-7 rounded-xl border p-4 font-mono text-xs ${isLight ? 'bg-white/80 border-zinc-300' : 'bg-black/60 border-zinc-800'}`}>
            <div className={`flex items-center justify-between pb-2.5 mb-2.5 border-b text-[11px] ${isLight ? 'text-zinc-600 border-zinc-200' : 'text-zinc-400 border-zinc-900'}`}>
              <span>BUYER FIT & INTENT RANKING</span>
              <span>AUTO-SCORING ENGINE</span>
            </div>

            <div className="space-y-2">
              {MOCK_LEADS.map((lead) => (
                <div
                  key={lead.id}
                  className={`flex items-center justify-between p-2.5 rounded border transition-colors ${isLight ? 'bg-zinc-100/50 border-zinc-200 hover:bg-zinc-200' : 'bg-zinc-900/50 border-zinc-800/80 hover:bg-zinc-900'}`}
                >
                  <div className="flex items-center gap-3">
                    <span className={`w-5 font-bold ${isLight ? 'text-zinc-500' : 'text-zinc-500'}`}>{lead.country}</span>
                    <div>
                      <div className={`font-sans font-medium text-xs ${isLight ? 'text-zinc-800' : 'text-zinc-200'}`}>{lead.company}</div>
                      <div className={`text-[10px] ${isLight ? 'text-zinc-500' : 'text-zinc-500'}`}>{lead.signal}</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <span
                        className={`font-bold font-mono text-xs px-2 py-0.5 rounded ${
                          lead.score >= 85
                            ? isLight ? 'bg-emerald-100 text-emerald-700 border border-emerald-300' : 'bg-emerald-950 text-emerald-400 border border-emerald-500/40'
                            : lead.score >= 70
                            ? isLight ? 'bg-cyan-100 text-cyan-700 border border-cyan-300' : 'bg-cyan-950 text-cyan-400 border border-cyan-500/40'
                            : isLight ? 'bg-zinc-200 text-zinc-600 border border-zinc-300' : 'bg-zinc-900 text-zinc-500 border border-zinc-800'
                        }`}
                      >
                        SCORE {lead.score}
                      </span>
                    </div>
                    <span className={`text-[10px] w-12 text-right ${isLight ? 'text-zinc-500' : 'text-zinc-400'}`}>{lead.level}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </GlowCard>
    </div>
  );
};
