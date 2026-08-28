import React from 'react';
import { useTranslation } from '../../i18n';
import { useTheme } from '../../theme/ThemeContext';
import { GlowCard } from '../../components/ui/GlowCard';
import { Share2 } from 'lucide-react';
import { useReveal } from '../../hooks/useReveal';

export const SocialMedia: React.FC = () => {
  const { t } = useTranslation();
  const { theme } = useTheme();
  const isLight = theme === 'light';
  const cap = t.capabilities['03'];
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
            <div className={`flex items-center gap-3 pt-2 text-xs font-mono ${isLight ? 'text-zinc-600' : 'text-zinc-400'}`}>
              <span className={`px-2 py-1 rounded border ${isLight ? 'bg-zinc-100 border-zinc-200' : 'bg-zinc-900 border-zinc-800'}`}>LinkedIn B2B</span>
              <span className={`px-2 py-1 rounded border ${isLight ? 'bg-zinc-100 border-zinc-200' : 'bg-zinc-900 border-zinc-800'}`}>X Tech Wire</span>
              <span className={`px-2 py-1 rounded border ${isLight ? 'bg-zinc-100 border-zinc-200' : 'bg-zinc-900 border-zinc-800'}`}>YouTube Case Studies</span>
            </div>
          </div>

          <div className={`lg:col-span-7 rounded-xl border p-5 font-mono text-xs ${isLight ? 'bg-white/80 border-zinc-300' : 'bg-black/60 border-zinc-800'}`}>
            <div className={`flex items-center justify-between mb-3 pb-2 border-b text-[11px] ${isLight ? 'text-zinc-600 border-zinc-200' : 'text-zinc-400 border-zinc-900'}`}>
              <span className="flex items-center gap-1.5 text-zinc-300">
                <Share2 className="w-3.5 h-3.5 text-cyan-400" />
                GLOBAL CONTENT DISPATCH PIPELINE
              </span>
              <span className="text-emerald-400">STATUS: ACTIVE SCHEDULE</span>
            </div>

            <div className="space-y-3">
              <div className={`p-3 rounded border flex items-start justify-between gap-4 ${isLight ? 'bg-zinc-100/60 border-zinc-200' : 'bg-zinc-900/60 border-zinc-800'}`}>
                <div>
                  <div className={`font-sans font-medium text-xs ${isLight ? 'text-zinc-800' : 'text-zinc-300'}`}>
                    "How High-Efficiency Industrial Optics Beat European ESG Benchmarks"
                  </div>
                  <div className={`text-[10px] mt-1 font-mono ${isLight ? 'text-zinc-500' : 'text-zinc-500'}`}>
                    Channels: LinkedIn Corporate + X Tech Thread • Target: DACH Region Buyers
                  </div>
                </div>
                <span className={`text-[10px] font-mono px-2 py-0.5 rounded border whitespace-nowrap ${isLight ? 'bg-cyan-50 text-cyan-700 border-cyan-200' : 'bg-cyan-950 text-cyan-300 border-cyan-500/30'}`}>
                  Scheduled 14:00 CET
                </span>
              </div>

              <div className={`p-3 rounded border flex items-start justify-between gap-4 ${isLight ? 'bg-zinc-100/40 border-zinc-200' : 'bg-zinc-900/40 border-zinc-800'}`}>
                <div>
                  <div className={`font-sans font-medium text-xs ${isLight ? 'text-zinc-800' : 'text-zinc-300'}`}>
                    "Factory Floor Video Walkthrough: UL/CE Cert Quality Check Series"
                  </div>
                  <div className={`text-[10px] mt-1 font-mono ${isLight ? 'text-zinc-500' : 'text-zinc-500'}`}>
                    Channels: YouTube Shorts + Meta B2B • Target: North America Importers
                  </div>
                </div>
                <span className={`text-[10px] font-mono px-2 py-0.5 rounded border whitespace-nowrap ${isLight ? 'bg-emerald-50 text-emerald-700 border-emerald-200' : 'bg-emerald-950 text-emerald-400 border-emerald-500/30'}`}>
                  Engaged: 14 RFQs
                </span>
              </div>
            </div>
          </div>
        </div>
      </GlowCard>
    </div>
  );
};
