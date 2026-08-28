import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from '../i18n';
import { GlowCard } from './ui/GlowCard';
import { Badge } from './ui/Badge';
import { useReveal } from '../hooks/useReveal';

const AnimatedCounter: React.FC<{ value: string }> = ({ value }) => {
  const [display, setDisplay] = useState('0');
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    const numericPart = value.replace(/[^0-9]/g, '');
    const target = parseInt(numericPart) || 0;
    const prefix = value.match(/^[^0-9]*/)?.[0] || '';
    const suffixInner = value.match(/[^0-9]*$/)?.[0] || '';
    const duration = 1500;
    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(target * eased);
      setDisplay(`${prefix}${current.toLocaleString()}${suffixInner}`);
      if (progress < 1) requestAnimationFrame(animate);
    };
    animate();
  }, [isVisible, value]);

  return <div ref={ref}>{display}</div>;
};

export const ResultsKpi: React.FC = () => {
  const { t } = useTranslation();
  const { ref, isVisible } = useReveal();
  const kpis = [
    { label: t.results.labels.leads, value: '+1,284', desc: t.results.descs.leads },
    { label: t.results.labels.qualified, value: '326', desc: t.results.descs.qualified },
    { label: t.results.labels.opportunities, value: '47', desc: t.results.descs.opportunities },
    { label: t.results.labels.quotations, value: '18', desc: t.results.descs.quotations },
    { label: t.results.labels.orders, value: '9', desc: t.results.descs.orders },
    { label: t.results.labels.pipeline, value: '$284K', desc: t.results.descs.pipeline },
  ];

  return (
    <section ref={ref} id="results" className={`py-24 bg-black border-t border-zinc-900 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <div className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-3">
              // BUSINESS OUTCOMES
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              {t.results.title}
            </h2>
          </div>
          <div>
            <Badge variant="muted">{t.results.badge}</Badge>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {kpis.map((kpi, idx) => (
            <GlowCard key={idx} className={`p-5 text-center glow-card-hover transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: `${idx * 100}ms` }}>
              <div className="text-xs font-mono text-zinc-500 uppercase">{kpi.label}</div>
              <div className="text-2xl sm:text-3xl font-bold font-mono text-cyan-400 my-2">
                <AnimatedCounter value={kpi.value} />
              </div>
              <div className="text-[11px] text-zinc-400">{kpi.desc}</div>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
};
