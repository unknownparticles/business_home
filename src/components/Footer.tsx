import React from 'react';
import { useTranslation } from '../i18n';
import { Globe } from 'lucide-react';

export const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="py-12 bg-black border-t border-zinc-900 text-zinc-500 text-xs font-mono">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2 text-zinc-300 font-semibold">
          <Globe className="w-4 h-4 text-cyan-400" />
          <span>NEXUS GLOBAL OS</span>
          <span className="text-zinc-600 text-[10px]">© 2026</span>
        </div>

        <div className="flex items-center space-x-6 text-zinc-400">
          <button onClick={() => document.getElementById('loop')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-cyan-400 transition-colors">{t.nav.loop}</button>
          <button onClick={() => document.getElementById('capabilities')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-cyan-400 transition-colors">{t.nav.capabilities}</button>
          <button onClick={() => document.getElementById('market-intel')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-cyan-400 transition-colors">{t.nav.marketIntel}</button>
          <button onClick={() => document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-cyan-400 transition-colors">{t.nav.cta}</button>
        </div>

        <div className="text-zinc-600 text-[11px]">
          {t.footer.tagline}
        </div>
      </div>
    </footer>
  );
};
