import React from 'react';
import { useTranslation } from '../../i18n';
import { useTheme } from '../../theme/ThemeContext';
import { GlowCard } from '../../components/ui/GlowCard';
import { RefreshCcw, BellRing } from 'lucide-react';
import { useReveal } from '../../hooks/useReveal';

export const CustomerSuccess: React.FC = () => {
  const { t } = useTranslation();
  const { theme } = useTheme();
  const isLight = theme === 'light';
  const cap = t.capabilities['04'];
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

          <div className={`lg:col-span-7 rounded-xl border p-5 ${isLight ? 'bg-white/80 border-zinc-300' : 'bg-[#090A0E] border-zinc-800'}`}>
            <div className={`flex items-center justify-between text-xs font-mono pb-3 border-b ${isLight ? 'text-zinc-600 border-zinc-200' : 'text-zinc-400 border-zinc-900'}`}>
              <span className="flex items-center gap-2 text-zinc-200">
                <BellRing className="w-3.5 h-3.5 text-amber-400" />
                CUSTOMER CHURN RISK & REPEAT ALERT
              </span>
              <span className="text-zinc-500">ACCOUNT: ABC CORP</span>
            </div>

            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-xs">
              <div className={`p-3.5 rounded-lg border space-y-2 ${isLight ? 'bg-zinc-100/60 border-zinc-200' : 'bg-black/60 border-zinc-800/80'}`}>
                <div className={`text-[11px] ${isLight ? 'text-zinc-600' : 'text-zinc-400'}`}>METRICS SNAPSHOT</div>
                <div className={`flex justify-between py-1 border-b ${isLight ? 'border-zinc-200' : 'border-zinc-900'}`}>
                  <span className={isLight ? 'text-zinc-500' : 'text-zinc-500'}>Last Contact</span>
                  <span className={isLight ? 'text-zinc-800' : 'text-zinc-200'}>18 days ago</span>
                </div>
                <div className={`flex justify-between py-1 border-b ${isLight ? 'border-zinc-200' : 'border-zinc-900'}`}>
                  <span className={isLight ? 'text-zinc-500' : 'text-zinc-500'}>Re-order Cycle</span>
                  <span className="text-amber-400 font-semibold">Delayed (-32%)</span>
                </div>
                <div className="flex justify-between pt-1">
                  <span className={isLight ? 'text-zinc-500' : 'text-zinc-500'}>LTV Value</span>
                  <span className="text-emerald-400 font-bold">$142,000</span>
                </div>
              </div>

              <div className={`p-3.5 rounded-lg border border-cyan-500/30 flex flex-col justify-between ${isLight ? 'bg-cyan-50/80' : 'bg-cyan-950/20'}`}>
                <div>
                  <div className="text-[11px] font-mono text-cyan-400 font-semibold mb-1">
                    AI RECOMMENDATION
                  </div>
                  <p className={`text-xs font-sans leading-normal ${isLight ? 'text-zinc-700' : 'text-zinc-300'}`}>
                    "检测到其竞品发布 Q3 促销，建议本周主动提供定制化阶梯折扣方案与新品免费样品。"
                  </p>
                </div>
                <div className="pt-2 text-[10px] font-mono text-cyan-400/80 flex items-center gap-1.5">
                  <RefreshCcw className="w-3 h-3" /> Auto-drafting email template...
                </div>
              </div>
            </div>
          </div>
        </div>
      </GlowCard>
    </div>
  );
};
