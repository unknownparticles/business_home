import React, { useState } from 'react';
import { useTranslation } from '../i18n';
import { useTheme } from '../theme/ThemeContext';
import { ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

export const FinalCTA: React.FC = () => {
  const { t } = useTranslation();
  const { theme } = useTheme();
  const isLight = theme === 'light';
  const [product, setProduct] = useState('');
  const [targetMarket, setTargetMarket] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const { ref, isVisible } = useReveal();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!product || !targetMarket) return;
    setSubmitted(true);
  };

  return (
    <section ref={ref} id="cta" className={`py-28 border-t relative overflow-hidden transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} ${isLight ? 'bg-white border-zinc-200' : 'bg-[#040507] border-zinc-800'}`}>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-cyan-950/20 blur-[140px] pointer-events-none animate-pulse-glow" />

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center space-y-8">
        <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-mono ${isLight ? 'bg-zinc-100 border-zinc-200 text-zinc-600' : 'bg-zinc-900 border-zinc-800 text-zinc-400'}`}>
          <Sparkles className={`w-3.5 h-3.5 ${isLight ? 'text-cyan-600' : 'text-cyan-400'}`} />
          {t.cta.badge}
        </div>

        <h2 className={`text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight ${isLight ? 'text-zinc-900' : 'text-white'}`}>
          {t.cta.title.split('，')[0]},<br />
          <span className={`text-transparent bg-clip-text bg-gradient-to-r ${isLight ? 'from-zinc-900 via-cyan-600 to-cyan-500' : 'from-zinc-100 via-cyan-200 to-cyan-400'}`}>
            {t.cta.title.split('，')[1] || t.cta.title}
          </span>
        </h2>

        <p className={`text-sm sm:text-base max-w-xl mx-auto ${isLight ? 'text-zinc-600' : 'text-zinc-400'}`}>
          {t.cta.desc}
        </p>

        <div className="max-w-xl mx-auto">
          {submitted ? (
            <div className={`p-6 rounded-xl border text-left space-y-3 font-mono text-xs ${isLight ? 'bg-cyan-50 border-cyan-200' : 'bg-cyan-950/30 border-cyan-500/40'}`}>
              <div className={`flex items-center gap-2 font-bold text-sm ${isLight ? 'text-cyan-700' : 'text-emerald-400'}`}>
                <CheckCircle2 className="w-4 h-4" />
                {t.cta.success}
              </div>
              <p className={`font-sans ${isLight ? 'text-zinc-700' : 'text-zinc-300'}`}>
                针对 <strong className={isLight ? 'text-zinc-900' : 'text-white'}>"{product}"</strong> 进军 <strong className={isLight ? 'text-zinc-900' : 'text-white'}>"{targetMarket}"</strong> 的市场研判报告与前 50 家高意向买家画像已准备就绪。
              </p>
              <div className={`text-[11px] pt-2 border-t ${isLight ? 'text-cyan-700 border-zinc-200' : 'text-cyan-400 border-zinc-800'}`}>
                {t.cta.consultant}
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="text"
                  placeholder={t.cta.placeholder1}
                  value={product}
                  onChange={(e) => setProduct(e.target.value)}
                  className={`w-full px-4 py-3.5 rounded-lg text-sm focus:outline-none focus:border-cyan-400 transition-colors placeholder:text-zinc-600 font-sans ${
                    isLight
                      ? 'bg-zinc-100 border border-zinc-200 text-zinc-900 focus:border-cyan-500'
                      : 'bg-zinc-900 border border-zinc-800 text-zinc-200'
                  }`}
                  required
                />
                <input
                  type="text"
                  placeholder={t.cta.placeholder2}
                  value={targetMarket}
                  onChange={(e) => setTargetMarket(e.target.value)}
                  className={`w-full px-4 py-3.5 rounded-lg text-sm focus:outline-none focus:border-cyan-400 transition-colors placeholder:text-zinc-600 font-sans ${
                    isLight
                      ? 'bg-zinc-100 border border-zinc-200 text-zinc-900 focus:border-cyan-500'
                      : 'bg-zinc-900 border border-zinc-800 text-zinc-200'
                  }`}
                  required
                />
              </div>
              <button
                type="submit"
                className={`w-full py-4 rounded-lg font-bold text-sm transition-all flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(6,182,212,0.3)] cursor-pointer hover:shadow-[0_0_50px_rgba(6,182,212,0.5)] ${
                  isLight
                    ? 'bg-cyan-600 text-white hover:bg-cyan-500'
                    : 'bg-cyan-400 text-black hover:bg-cyan-300'
                }`}
              >
                <span>{t.cta.submit}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          )}
        </div>

        <div className={`flex flex-wrap items-center justify-center gap-6 text-xs font-mono pt-4 ${isLight ? 'text-zinc-500' : 'text-zinc-500'}`}>
          <span>✓ {t.cta.features.f1}</span>
          <span>✓ {t.cta.features.f2}</span>
          <span>✓ {t.cta.features.f3}</span>
        </div>
      </div>
    </section>
  );
};
