import React, { useState, useEffect } from 'react';
import { useTranslation } from '../i18n';
import { TerminalWindow } from './ui/TerminalWindow';
import { INITIAL_AGENT_LOGS } from '../data/mockData';
import { AgentLog } from '../types';
import { ShieldCheck } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

export const AIAgentLive: React.FC = () => {
  const { t } = useTranslation();
  const [logs, setLogs] = useState<AgentLog[]>(INITIAL_AGENT_LOGS);
  const { ref, isVisible } = useReveal();

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const timeStr = now.toTimeString().split(' ')[0];
      const newLog: AgentLog = {
        id: Date.now().toString(),
        time: timeStr,
        content: `Live Event: Scanned ${Math.floor(Math.random() * 20) + 10} customs manifest entries in Rotterdam Port.`,
        status: 'done',
      };
      setLogs((prev) => [newLog, ...prev.slice(0, 6)]);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section ref={ref} id="agent" className={`py-24 bg-black border-t border-zinc-900 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5 space-y-5">
            <div className="text-xs font-mono text-cyan-400 uppercase tracking-widest">
              // AUTONOMOUS EXECUTION
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              {t.agent.title}
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
              {t.agent.desc}
            </p>
            <div className="space-y-2.5 pt-2 text-xs font-mono text-zinc-300">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>{t.agent.benefit1}</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>{t.agent.benefit2}</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <TerminalWindow
              title={t.agent.terminal}
              statusBadge={
                <span className="font-mono text-xs text-cyan-400 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                  {t.agent.logging}
                </span>
              }
            >
              <div className="space-y-2.5 font-mono text-xs max-h-[340px] overflow-y-auto pr-1">
                {logs.map((log) => (
                  <div
                    key={log.id}
                    className="flex items-start gap-3 p-2 rounded bg-zinc-900/40 border border-zinc-800/60"
                  >
                    <span className="text-zinc-500 font-mono text-[11px]">{log.time}</span>
                    <span
                      className={`text-[11px] ${
                        log.status === 'alert'
                          ? 'text-amber-400 font-bold'
                          : log.status === 'processing'
                          ? 'text-cyan-300'
                          : 'text-zinc-300'
                      }`}
                    >
                      {log.content}
                    </span>
                  </div>
                ))}
              </div>
            </TerminalWindow>
          </div>
        </div>
      </div>
    </section>
  );
};
