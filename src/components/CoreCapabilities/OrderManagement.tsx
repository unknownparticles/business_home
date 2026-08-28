import React from 'react';
import { useTranslation } from '../../i18n';
import { GlowCard } from '../../components/ui/GlowCard';
import { MOCK_ORDER } from '../../data/mockData';
import { AlertTriangle } from 'lucide-react';
import { useReveal } from '../../hooks/useReveal';

export const OrderManagement: React.FC = () => {
  const { t } = useTranslation();
  const cap = t.capabilities['06'];
  const order = MOCK_ORDER;
  const { ref, isVisible } = useReveal();

  return (
    <div ref={ref} className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      <GlowCard className="p-8 lg:p-10 glow-card-hover">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 space-y-4">
            <div className="font-mono text-xs text-cyan-400 font-semibold tracking-wider uppercase">
              {cap.label}
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              {cap.title}
            </h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              {cap.desc}
            </p>
          </div>

          <div className="lg:col-span-7 bg-[#090A0E] rounded-xl border border-zinc-800 p-5 font-mono text-xs">
            <div className="flex items-center justify-between pb-3 border-b border-zinc-900 text-[11px]">
              <span className="text-zinc-200 font-bold">{order.id} // {order.customer}</span>
              <span className="text-emerald-400 font-bold">{order.amount}</span>
            </div>

            <div className="my-4 space-y-3">
              <div>
                <div className="flex justify-between text-[11px] text-zinc-400 mb-1.5">
                  <span>Production Progress</span>
                  <span className="text-cyan-400 font-bold">{order.progress}% Completed</span>
                </div>
                <div className="w-full h-2 bg-zinc-900 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-cyan-500 to-sky-400 rounded-full transition-all duration-1000 ease-out" style={{ width: `${order.progress}%` }} />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2 pt-2 text-[11px]">
                <div className="p-2 bg-black rounded border border-zinc-800">
                  <div className="text-zinc-500 text-[10px]">Payment</div>
                  <div className="text-zinc-200 mt-0.5">{order.paymentStatus}</div>
                </div>
                <div className="p-2 bg-black rounded border border-zinc-800">
                  <div className="text-zinc-500 text-[10px]">Logistics</div>
                  <div className="text-zinc-200 mt-0.5">{order.logisticsStatus}</div>
                </div>
                <div className="p-2 bg-black rounded border border-zinc-800">
                  <div className="text-zinc-500 text-[10px]">ETA</div>
                  <div className="text-cyan-400 mt-0.5 font-bold">{order.eta}</div>
                </div>
              </div>

              <div className="p-2.5 rounded bg-amber-950/30 border border-amber-500/40 text-amber-300 flex items-center gap-2 text-[11px]">
                <AlertTriangle className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                <span>{order.riskAlert}</span>
              </div>
            </div>
          </div>
        </div>
      </GlowCard>
    </div>
  );
};
