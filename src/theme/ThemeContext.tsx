import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Theme = 'dark' | 'light' | 'auto';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  effectiveTheme: 'dark' | 'light';
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme') as Theme | null;
      if (saved === 'light' || saved === 'dark' || saved === 'auto') return saved;
      return 'auto';
    }
    return 'auto';
  });

  const [effectiveTheme, setEffectiveTheme] = useState<'dark' | 'light'>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme') as Theme | null;
      if (saved === 'light') return 'light';
      if (saved === 'dark') return 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return 'dark';
  });

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    if (typeof document === 'undefined') return;
    document.body.setAttribute('data-theme', effectiveTheme);
    document.documentElement.setAttribute('data-theme', effectiveTheme);

    let styleEl: HTMLStyleElement | null = null;
    if (effectiveTheme === 'light') {
      styleEl = document.createElement('style');
      styleEl.setAttribute('data-theme-override', 'light');
      styleEl.textContent = `
        html[data-immersive-translate-page-theme='dark'][data-theme='light'],
        html[data-immersive-translate-page-theme='dark'][data-theme='light'] body,
        html[data-immersive-translate-page-theme='dark'][data-theme='light'] div#root {
          background-color: #ffffff !important;
          color: #0f172a !important;
        }
      `;
      document.head.appendChild(styleEl);
    } else {
      const existing = document.querySelector('style[data-theme-override="light"]');
      if (existing) existing.remove();
    }

    return () => {
      if (styleEl && styleEl.parentNode) {
        styleEl.parentNode.removeChild(styleEl);
      }
    };
  }, [effectiveTheme]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      const saved = localStorage.getItem('theme') as Theme | null;
      if (saved === 'auto' || !saved) {
        const next = e.matches ? 'dark' : 'light';
        setEffectiveTheme(next);
      }
    };
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const applyTheme = (next: Theme) => {
    setTheme(next);
    if (next === 'auto') {
      const prefersDark = typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches;
      setEffectiveTheme(prefersDark ? 'dark' : 'light');
    } else {
      setEffectiveTheme(next);
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme: applyTheme, effectiveTheme }}>
      <div data-theme={effectiveTheme} className="min-h-screen font-sans antialiased selection:bg-cyan-500 selection:text-black">
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
};
