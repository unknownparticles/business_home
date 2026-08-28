import React, { useState, useEffect } from 'react';
import { useTranslation } from '../i18n';
import { useTheme } from '../theme/ThemeContext';
import { ArrowUpRight, ExternalLink, Languages, Sun, Moon } from 'lucide-react';

export const Navbar: React.FC = () => {
  const { t, locale, setLocale } = useTranslation();
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-black/75 backdrop-blur-xl border-b border-zinc-800/80 py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollTo('hero')}>
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-600 to-sky-400 flex items-center justify-center p-0.5 shadow-[0_0_15px_rgba(6,182,212,0.4)]">
            <div className="w-full h-full bg-black rounded-[6px] flex items-center justify-center">
              <svg className="w-4 h-4 text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-semibold tracking-wider text-sm text-white uppercase font-mono">
              {t.nav.brand}
            </span>
            <span className="text-[10px] text-zinc-500 -mt-1 tracking-widest font-mono">
              {t.nav.subBrand}
            </span>
          </div>
        </div>

        <nav className="hidden md:flex items-center space-x-8 text-xs font-mono text-zinc-400">
          <button onClick={() => scrollTo('loop')} className="hover:text-cyan-400 transition-colors">{t.nav.loop}</button>
          <button onClick={() => scrollTo('capabilities')} className="hover:text-cyan-400 transition-colors">{t.nav.capabilities}</button>
          <button onClick={() => scrollTo('market-intel')} className="hover:text-cyan-400 transition-colors">{t.nav.marketIntel}</button>
          <button onClick={() => scrollTo('agent')} className="hover:text-cyan-400 transition-colors">{t.nav.agent}</button>
          <button onClick={() => scrollTo('results')} className="hover:text-cyan-400 transition-colors">{t.nav.results}</button>
        </nav>

        <div className="flex items-center space-x-3">
          <a
            href="https://business-workspace.pages.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 text-xs font-mono text-zinc-300 hover:text-white px-3 py-2 transition-colors"
          >
            <span>前往工作台</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
          <button
            onClick={toggleTheme}
            className="hidden sm:inline-flex items-center gap-1.5 text-xs font-mono text-zinc-300 hover:text-white px-3 py-2 transition-colors"
            title={t.nav.theme}
          >
            {theme === 'dark' ? <Sun className="w-3.5 h-3.5" /> : <Moon className="w-3.5 h-3.5" />}
          </button>
          <button
            onClick={() => setLocale(locale === 'zh' ? 'en' : 'zh')}
            className="hidden sm:inline-flex items-center gap-1.5 text-xs font-mono text-zinc-300 hover:text-white px-3 py-2 transition-colors"
          >
            <Languages className="w-3.5 h-3.5" />
            {locale === 'zh' ? 'EN' : '中文'}
          </button>
          <button
            onClick={() => scrollTo('cta')}
            className="inline-flex items-center gap-1.5 text-xs font-mono font-medium px-4 py-2 rounded-lg bg-zinc-100 text-black hover:bg-cyan-400 hover:text-black transition-all duration-200 shadow-md"
          >
            <span>{t.nav.cta}</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </header>
  );
};
