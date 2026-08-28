import React from 'react';
import { useTranslation } from '../i18n';
import { useTheme } from '../theme/ThemeContext';
import { GlowCard } from './ui/GlowCard';
import { useReveal } from '../hooks/useReveal';

export const Comparison: React.FC = () => {
  const { t } = useTranslation();
  const { theme } = useTheme();
  const isLight = theme === 'light';
  const { ref, isVisible } = useReveal();

  const comparisons = [
    { title: t.comparison['01'].title, traditional: t.comparison['01'].traditional, nexus: t.comparison['01'].nexus },
    { title: t.comparison['02'].title, traditional: t.comparison['02'].traditional, nexus: t.comparison['02'].nexus },
    { title: t.comparison['03'].title, traditional: t.comparison['03'].traditional, nexus: t.comparison['03'].nexus },
    { title: t.comparison['04'].title, traditional: t.comparison['04'].traditional, nexus: t.comparison['04'].nexus },
  ];

  return (
    <section ref={ref} className={`py-24 border-t transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} ${isLight ? 'bg-zinc-50 border-zinc-200' : 'bg-[#050608] border-zinc-900'}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-3">
            // PARADIGM SHIFT
          </div>
          <h2 className={`text-3xl sm:text-4xl font-bold tracking-tight ${isLight ? 'text-zinc-900' : 'text-white'}`}>
            {t.comparison.title}
          </h2>
          <p className={`mt-4 text-base ${isLight ? 'text-zinc-600' : 'text-zinc-400'}`}>
            {t.comparison.desc}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {comparisons.map((c, i) => (
            <GlowCard key={i} className={`p-7 space-y-4 glow-card-hover transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: `${i * 150}ms` }}>
              <h3 className="text-lg font-bold font-mono flex items-center gap-2">
                <span className="text-cyan-400 text-sm">0{i + 1}.</span>
                {c.title}
              </h3>
              <div className="space-y-3 text-xs leading-relaxed">
                <div className={`p-3 rounded border ${isLight ? 'bg-zinc-100 border-zinc-200 text-zinc-600' : 'bg-zinc-900/50 rounded border border-zinc-800 text-zinc-400'}`}>
                  <span className={`font-mono block mb-1 font-semibold ${isLight ? 'text-zinc-500' : 'text-zinc-500'}`}>TRADITIONAL</span>
                  {c.traditional}
                </div>
                <div className={`p-3 rounded border ${isLight ? 'bg-cyan-50 border-cyan-200 text-zinc-800' : 'bg-cyan-950/20 rounded border border-cyan-500/30 text-zinc-200'}`}>
                  <span className={`font-mono block mb-1 font-semibold ${isLight ? 'text-cyan-600' : 'text-cyan-400'}`}>NEXUS GLOBAL OS</span>
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
