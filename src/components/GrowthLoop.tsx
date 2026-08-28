import React, { useState } from 'react';
import { useTranslation } from '../i18n';
import { useReveal } from '../hooks/useReveal';
import { Repeat, Sparkles } from 'lucide-react';

export const GrowthLoop: React.FC = () => {
  const { t } = useTranslation();
  const { ref, isVisible } = useReveal();
  const [activeNode, setActiveNode] = useState<number | null>(null);

  const loopSteps = [
    { num: '01', title: t.loop?.steps?.s1 || '市场情报', en: 'MARKET INTEL', desc: t.loop?.steps?.d1 || '监测关税、政策与行业采购热点' },
    { num: '02', title: t.loop?.steps?.s2 || '目标客群', en: 'TARGET AUDIENCE', desc: t.loop?.steps?.d2 || '锁定精准画像与重点国家赛道' },
    { num: '03', title: t.loop?.steps?.s3 || '寻找客户', en: 'LEAD GENERATION', desc: t.loop?.steps?.d3 || '多源扫描海关数据与企业决策层' },
    { num: '04', title: t.loop?.steps?.s4 || '客户筛选', en: 'QUALIFICATION', desc: t.loop?.steps?.d4 || 'AI Intent Scoring 剔除低效线索' },
    { num: '05', title: t.loop?.steps?.s5 || 'AI 触达', en: 'OUTREACH', desc: t.loop?.steps?.d5 || '本地化高意图上下文邮件与社媒互动' },
    { num: '06', title: t.loop?.steps?.s6 || '客户沟通', en: 'CONVERSATION', desc: t.loop?.steps?.d6 || '实时多语种商业会话与意向解析' },
    { num: '07', title: t.loop?.steps?.s7 || '商机推进', en: 'OPPORTUNITY', desc: t.loop?.steps?.d7 || '技术参数核对与关键痛点化解' },
    { num: '08', title: t.loop?.steps?.s8 || '报价 / 样品', en: 'QUOTATION / SAMPLE', desc: t.loop?.steps?.d8 || '智能核算成本与样品寄送跟踪' },
    { num: '09', title: t.loop?.steps?.s9 || '订单交付', en: 'ORDER & DELIVERY', desc: t.loop?.steps?.d9 || '生产排期、港口物流与风控预警' },
    { num: '10', title: t.loop?.steps?.s10 || '客户维护', en: 'CUSTOMER SUCCESS', desc: t.loop?.steps?.d10 || '开箱满意度、补货周期智能监控' },
    { num: '11', title: t.loop?.steps?.s11 || '复购驱动', en: 'REPEAT PURCHASE', desc: t.loop?.steps?.d11 || '反哺市场数据，形成长期增长引擎' },
  ];

  return (
    <section ref={ref} id="loop" className={`py-24 bg-[#060709] border-t border-zinc-900 relative overflow-hidden transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="text-xs font-mono text-cyan-400 uppercase tracking-widest">
            // END-TO-END BUSINESS LOOP
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            {t.loop.title}
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base">
            {t.loop.desc}
          </p>
        </div>

        <div className="relative rounded-2xl bg-black/90 border border-zinc-800 p-6 lg:p-12 overflow-hidden shadow-2xl">
          <div className="flex flex-col items-center justify-center py-6 mb-8 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-500/40 text-cyan-300 font-mono text-xs">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-spin" />
              {t.loop.engine}
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {loopSteps.slice(0, 6).map((step, idx) => (
              <div
                key={step.num}
                onMouseEnter={() => setActiveNode(idx)}
                onMouseLeave={() => setActiveNode(null)}
                className={`p-4 rounded-lg border transition-all cursor-pointer ${
                  activeNode === idx
                    ? 'bg-cyan-950/40 border-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.2)]'
                    : 'bg-zinc-900/60 border-zinc-800 hover:border-zinc-700'
                }`}
              >
                <div className="font-mono text-[11px] text-cyan-400 font-semibold">{step.num}</div>
                <div className="font-bold text-sm text-zinc-100 mt-1">{step.title}</div>
                <div className="text-[10px] font-mono text-zinc-500">{step.en}</div>
                <p className="text-[11px] text-zinc-400 mt-2 line-clamp-2">{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center my-4">
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400/80 bg-zinc-900/80 px-4 py-1.5 rounded-full border border-zinc-800">
              <Repeat className="w-3.5 h-3.5 animate-spin" />
              <span>{t.loop.pipeline}</span>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {loopSteps.slice(6).map((step, idx) => {
              const actualIdx = idx + 6;
              return (
                <div
                  key={step.num}
                  onMouseEnter={() => setActiveNode(actualIdx)}
                  onMouseLeave={() => setActiveNode(null)}
                  className={`p-4 rounded-lg border transition-all cursor-pointer ${
                    activeNode === actualIdx
                      ? 'bg-cyan-950/40 border-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.2)]'
                      : 'bg-zinc-900/60 border-zinc-800 hover:border-zinc-700'
                  }`}
                >
                  <div className="font-mono text-[11px] text-cyan-400 font-semibold">{step.num}</div>
                  <div className="font-bold text-sm text-zinc-100 mt-1">{step.title}</div>
                  <div className="text-[10px] font-mono text-zinc-500">{step.en}</div>
                  <p className="text-[11px] text-zinc-400 mt-2 line-clamp-2">{step.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
