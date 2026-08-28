import React from 'react';
import { useTranslation } from '../i18n';
import { GlowCard } from './ui/GlowCard';
import { useReveal } from '../hooks/useReveal';

export const Comparison: React.FC = () => {
  const { t } = useTranslation();
  const { ref, isVisible } = useReveal();

  const comparisons = [
    { title: t.comparison['01'].title, traditional: t.comparison['01'].traditional, nexus: t.comparison['01'].nexus },
    { title: t.comparison['02'].title, traditional: t.comparison['02'].traditional, nexus: t.comparison['02'].nexus },
    { title: t.comparison['03'].title, traditional: t.comparison['03'].traditional, nexus: t.comparison['03'].nexus },
    { title: t.comparison['04'].title, traditional: t.comparison['04'].traditional, nexus: t.comparison['04'].nexus },
  ];

  return (
    <section ref={ref} className={`py-24 bg-[#050608] border-t border-zinc-900 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-3">
            // PARADIGM SHIFT
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            {t.comparison.title}
          </h2>
          <p className="text-zinc-400 mt-4 text-base">
            {t.comparison.desc}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {comparisons.map((c, i) => (
            <GlowCard key={i} className={`p-7 space-y-4 glow-card-hover transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: `${i * 150}ms` }}>
              <h3 className="text-lg font-bold text-white font-mono flex items-center gap-2">
                <span className="text-cyan-400 text-sm">0{i + 1}.</span>
                {c.title}
              </h3>
              <div className="space-y-3 text-xs leading-relaxed">
                <div className="p-3 bg-zinc-900/50 rounded border border-zinc-800 text-zinc-400">
                  <span className="text-zinc-500 font-mono block mb-1 font-semibold">TRADITIONAL</span>
                  {c.traditional}
                </div>
                <div className="p-3 bg-cyan-950/20 rounded border border-cyan-500/30 text-zinc-200">
                  <span className="text-cyan-400 font-mono block mb-1 font-semibold">NEXUS GLOBAL OS</span>
                  {c.nexus}
                </div>
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
};
