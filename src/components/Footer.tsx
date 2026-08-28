import React from 'react';
import { useTranslation } from '../i18n';
import { useTheme } from '../theme/ThemeContext';
import { Globe } from 'lucide-react';

export const Footer: React.FC = () => {
  const { t } = useTranslation();
  const { theme } = useTheme();
  const isLight = theme === 'light';

  return (
    <footer className={`py-12 border-t text-xs font-mono ${isLight ? 'bg-white border-zinc-200 text-zinc-500' : 'bg-black border-zinc-900 text-zinc-500'}`}>
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className={`flex items-center gap-2 font-semibold ${isLight ? 'text-zinc-800' : 'text-zinc-300'}`}>
          <Globe className={`w-4 h-4 ${isLight ? 'text-cyan-600' : 'text-cyan-400'}`} />
          <span>NEXUS GLOBAL OS</span>
          <span className={`text-[10px] ${isLight ? 'text-zinc-400' : 'text-zinc-600'}`}>© 2026</span>
        </div>

        <div className={`flex items-center space-x-6 ${isLight ? 'text-zinc-600' : 'text-zinc-400'}`}>
          <button onClick={() => document.getElementById('loop')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-cyan-400 transition-colors">{t.nav.loop}</button>
          <button onClick={() => document.getElementById('capabilities')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-cyan-400 transition-colors">{t.nav.capabilities}</button>
          <button onClick={() => document.getElementById('market-intel')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-cyan-400 transition-colors">{t.nav.marketIntel}</button>
          <button onClick={() => document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-cyan-400 transition-colors">{t.nav.cta}</button>
        </div>

        <div className={`text-[11px] ${isLight ? 'text-zinc-400' : 'text-zinc-600'}`}>
          {t.footer.tagline}
        </div>
      </div>
    </footer>
  );
};
