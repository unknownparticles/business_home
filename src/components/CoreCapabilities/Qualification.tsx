import React from 'react';
import { useTranslation } from '../../i18n';
import { GlowCard } from '../../components/ui/GlowCard';
import { MOCK_LEADS } from '../../data/mockData';
import { useReveal } from '../../hooks/useReveal';

export const Qualification: React.FC = () => {
  const { t } = useTranslation();
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
            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              {cap.title}
            </h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              {cap.desc}
            </p>
          </div>

          <div className="lg:col-span-7 bg-black/60 rounded-xl border border-zinc-800 p-4 font-mono text-xs">
            <div className="flex items-center justify-between text-zinc-400 pb-2.5 mb-2.5 border-b border-zinc-900 text-[11px]">
              <span>BUYER FIT & INTENT RANKING</span>
              <span>AUTO-SCORING ENGINE</span>
            </div>

            <div className="space-y-2">
              {MOCK_LEADS.map((lead) => (
                <div
                  key={lead.id}
                  className="flex items-center justify-between p-2.5 rounded bg-zinc-900/50 hover:bg-zinc-900 border border-zinc-800/80 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-5 text-zinc-500 font-bold">{lead.country}</span>
                    <div>
                      <div className="text-zinc-200 font-sans font-medium text-xs">{lead.company}</div>
                      <div className="text-[10px] text-zinc-500">{lead.signal}</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <span
                        className={`font-bold font-mono text-xs px-2 py-0.5 rounded ${
                          lead.score >= 85
                            ? 'bg-emerald-950 text-emerald-400 border border-emerald-500/40'
                            : lead.score >= 70
                            ? 'bg-cyan-950 text-cyan-400 border border-cyan-500/40'
                            : 'bg-zinc-900 text-zinc-500 border border-zinc-800'
                        }`}
                      >
                        SCORE {lead.score}
                      </span>
                    </div>
                    <span className="text-[10px] text-zinc-400 w-12 text-right">{lead.level}</span>
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
