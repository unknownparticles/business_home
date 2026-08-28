import React from 'react';
import { useTranslation } from '../i18n';
import { useTheme } from '../theme/ThemeContext';
import { PAIN_POINTS } from '../data/mockData';
import { GlowCard } from './ui/GlowCard';
import { Unplug } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

export const PainPoints: React.FC = () => {
  const { t } = useTranslation();
  const { theme } = useTheme();
  const isLight = theme === 'light';
  const { ref, isVisible } = useReveal();

  return (
    <section ref={ref} className={`py-24 border-y transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} ${isLight ? 'bg-zinc-50 border-zinc-200' : 'bg-[#050608] border-zinc-900'}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-3">
            // THE FRAGMENTATION PROBLEM
          </div>
          <h2 className={`text-3xl sm:text-4xl font-bold tracking-tight leading-tight ${isLight ? 'text-zinc-900' : 'text-white'}`}>
            {t.painPoints.title}
          </h2>
          <p className={`mt-4 text-base sm:text-lg ${isLight ? 'text-zinc-600' : 'text-zinc-400'}`}>
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
              <h3 className={`text-lg font-semibold mb-2 ${isLight ? 'text-zinc-900' : 'text-zinc-100'}`}>{item.sub}</h3>
              <p className={`text-sm leading-relaxed ${isLight ? 'text-zinc-600' : 'text-zinc-400'}`}>{item.desc}</p>
            </GlowCard>
          ))}
        </div>

        <div className={`mt-12 p-6 rounded-xl border flex flex-col md:flex-row items-center justify-between gap-4 ${isLight ? 'bg-zinc-100 border-zinc-200' : 'bg-gradient-to-r from-zinc-950 via-zinc-900 to-zinc-950 border-zinc-800/80'}`}>
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-lg bg-cyan-950 border border-cyan-500/30 text-cyan-400">
              <Unplug className="w-5 h-5" />
            </div>
            <div>
              <div className={`font-medium text-sm ${isLight ? 'text-zinc-900' : 'text-white'}`}>{t.painPoints.loss}</div>
              <div className={`text-xs ${isLight ? 'text-zinc-600' : 'text-zinc-400'}`}>{t.painPoints.lossDesc}</div>
            </div>
          </div>
          <div className="text-right">
            <span className={`text-sm font-semibold font-mono ${isLight ? 'text-cyan-600' : 'text-cyan-400'}`}>
              {t.painPoints.connect}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
