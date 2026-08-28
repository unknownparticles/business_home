import React from 'react';
import { useTranslation } from '../i18n';
import { PAIN_POINTS } from '../data/mockData';
import { GlowCard } from './ui/GlowCard';
import { Unplug } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

export const PainPoints: React.FC = () => {
  const { t } = useTranslation();
  const { ref, isVisible } = useReveal();

  return (
    <section ref={ref} className={`py-24 bg-[#050608] border-y border-zinc-900 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-3">
            // THE FRAGMENTATION PROBLEM
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight">
            {t.painPoints.title}
          </h2>
          <p className="text-zinc-400 mt-4 text-base sm:text-lg">
            {t.painPoints.desc}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {PAIN_POINTS.map((item, idx) => (
            <GlowCard key={item.key} className={`p-6 glow-card-hover transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: `${idx * 100}ms` }}>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-cyan-400">
                  {item.key}
                </span>
                <span className="text-[11px] font-mono text-zinc-500 tracking-wider">
                  {t.painPoints.disconnected}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-zinc-100 mb-2">{item.sub}</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">{item.desc}</p>
            </GlowCard>
          ))}
        </div>

        <div className="mt-12 p-6 rounded-xl bg-gradient-to-r from-zinc-950 via-zinc-900 to-zinc-950 border border-zinc-800/80 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-lg bg-cyan-950 border border-cyan-500/30 text-cyan-400">
              <Unplug className="w-5 h-5" />
            </div>
            <div>
              <div className="text-white font-medium text-sm">{t.painPoints.loss}</div>
              <div className="text-zinc-400 text-xs">{t.painPoints.lossDesc}</div>
            </div>
          </div>
          <div className="text-right">
            <span className="text-sm font-semibold text-cyan-400 font-mono">
              {t.painPoints.connect}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
