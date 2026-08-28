import React, { useState, useEffect } from 'react';
import { useTranslation } from '../i18n';
import { TerminalWindow } from './ui/TerminalWindow';
import { Badge } from './ui/Badge';
import { ArrowRight, CheckCircle2, RefreshCw } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

export const Hero: React.FC = () => {
  const { t } = useTranslation();
  const { ref: leftRef, isVisible: leftVisible } = useReveal();
  const { ref: rightRef, isVisible: rightVisible } = useReveal();
  const [stats, setStats] = useState({ leads: 1284, qualified: 326, opportunities: 47, orders: 12, pipeline: 284000 });

  useEffect(() => {
    const interval = setInterval(() => {
      setStats((prev) => ({
        ...prev,
        leads: prev.leads + (Math.random() > 0.6 ? 1 : 0),
        pipeline: prev.pipeline + (Math.random() > 0.8 ? 2400 : 0),
      }));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden bg-black">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-b from-cyan-950/20 via-sky-900/10 to-transparent blur-[120px] pointer-events-none animate-pulse-glow" />
      <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          <div
            ref={leftRef}
            className={`lg:col-span-6 space-y-7 transition-all duration-1000 ${
              leftVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div>
              <Badge variant="cyan" className="mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                {t.hero.badge}
              </Badge>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
                让 AI，<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-100 via-cyan-200 to-cyan-400">
                  {t.hero.titleHighlight}
                </span>
              </h1>
            </div>

            <p className="text-base sm:text-lg text-zinc-400 leading-relaxed max-w-xl font-normal">
              {t.hero.desc}
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={() => document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-cyan-400 text-black font-semibold text-sm hover:bg-cyan-300 transition-all shadow-[0_0_25px_rgba(6,182,212,0.3)] cursor-pointer hover:shadow-[0_0_40px_rgba(6,182,212,0.5)]"
              >
                <span>{t.hero.cta}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => document.getElementById('loop')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 font-mono text-sm hover:bg-zinc-800 hover:text-white transition-all cursor-pointer hover:border-cyan-500/50"
              >
                <span>{t.hero.ctaSecondary}</span>
                <span className="text-cyan-400">→</span>
              </button>
            </div>

            <div className="pt-4 border-t border-zinc-900 flex items-center gap-6 text-xs text-zinc-500 font-mono">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" /> {t.hero.features.f1}
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" /> {t.hero.features.f2}
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" /> {t.hero.features.f3}
              </span>
            </div>
          </div>

          <div
            ref={rightRef}
            className={`lg:col-span-6 transition-all duration-1000 delay-200 ${
              rightVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <TerminalWindow
              title={t.hero.terminal.title}
              statusBadge={
                <div className="flex items-center gap-2">
                  <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  <span className="text-[11px] font-mono font-semibold text-emerald-400 tracking-wider">
                    {t.hero.terminal.live}
                  </span>
                </div>
              }
            >
              <div className="space-y-6">
                <div className="grid grid-cols-3 gap-3">
                  <div className="p-3 bg-zinc-900/70 border border-zinc-800/80 rounded-lg hover:border-cyan-500/30 transition-colors">
                    <div className="text-[11px] font-mono text-zinc-400">{t.hero.terminal.newLeads}</div>
                    <div className="text-xl font-bold font-mono text-white mt-1">
                      {stats.leads.toLocaleString()}
                    </div>
                    <div className="text-[10px] text-cyan-400 font-mono mt-0.5">↑ 24% 今日新增</div>
                  </div>
                  <div className="p-3 bg-zinc-900/70 border border-zinc-800/80 rounded-lg hover:border-cyan-500/30 transition-colors">
                    <div className="text-[11px] font-mono text-zinc-400">{t.hero.terminal.qualified}</div>
                    <div className="text-xl font-bold font-mono text-cyan-400 mt-1">
                      {stats.qualified}
                    </div>
                    <div className="text-[10px] text-zinc-500 font-mono mt-0.5">High Intent 85+</div>
                  </div>
                  <div className="p-3 bg-zinc-900/70 border border-zinc-800/80 rounded-lg hover:border-cyan-500/30 transition-colors">
                    <div className="text-[11px] font-mono text-zinc-400">{t.hero.terminal.pipeline}</div>
                    <div className="text-xl font-bold font-mono text-emerald-400 mt-1">
                      ${(stats.pipeline / 1000).toFixed(0)}K
                    </div>
                    <div className="text-[10px] text-emerald-500/80 font-mono mt-0.5">12 Live Orders</div>
                  </div>
                </div>

                <div className="p-4 rounded-lg bg-black/60 border border-zinc-800/80 space-y-2.5 font-mono text-xs">
                  <div className="flex items-center justify-between text-[11px] text-zinc-400 pb-2 border-b border-zinc-900">
                    <span className="flex items-center gap-1.5 text-zinc-300">
                      <RefreshCw className="w-3 h-3 text-cyan-400 animate-spin" />
                      {t.hero.terminal.agentActive}
                    </span>
                    <span className="text-[10px] text-zinc-500">{t.hero.terminal.nonStop}</span>
                  </div>

                  <div className="space-y-1.5 text-zinc-300">
                    <div className="flex items-center gap-2">
                      <span className="text-emerald-400">✓</span>
                      <span>Discovered 428 target buyers in North America</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-emerald-400">✓</span>
                      <span>Qualified 86 decision-makers with buying signals</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-emerald-400">✓</span>
                      <span>Dispatched 214 contextual B2B intro sequences</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-cyan-400">⚡</span>
                      <span>Detected 12 urgent quote requests & initiated triage</span>
                    </div>
                    <div className="flex items-center gap-2 text-amber-400">
                      <span>⚠</span>
                      <span>Flagged 3 container ETA variances in Hamburg port</span>
                    </div>
                  </div>

                  <div className="pt-2 text-[11px] text-zinc-500 flex items-center gap-2">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                    <span>{t.hero.terminal.executing}</span>
                  </div>
                </div>
              </div>
            </TerminalWindow>
          </div>
        </div>
      </div>
    </section>
  );
};
