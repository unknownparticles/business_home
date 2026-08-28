import React from 'react';
import { useTheme } from '../../theme/ThemeContext';

interface TerminalProps {
  title: string;
  statusBadge?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

export const TerminalWindow: React.FC<TerminalProps> = ({
  title,
  statusBadge,
  children,
  className = '',
}) => {
  const { theme } = useTheme();
  const isLight = theme === 'light';

  return (
    <div className={`rounded-xl border overflow-hidden shadow-2xl ${className} ${isLight ? 'border-zinc-200 bg-zinc-50' : 'border-zinc-800/90 bg-[#08090C]'}`}>
      <div className={`flex items-center justify-between px-4 py-3 border-b ${isLight ? 'bg-zinc-100 border-zinc-200' : 'bg-zinc-900/60 border-zinc-800/80'}`}>
        <div className="flex items-center space-x-2">
          <div className={`w-2.5 h-2.5 rounded-full ${isLight ? 'bg-zinc-300' : 'bg-zinc-700'}`} />
          <div className={`w-2.5 h-2.5 rounded-full ${isLight ? 'bg-zinc-300' : 'bg-zinc-700'}`} />
          <div className={`w-2.5 h-2.5 rounded-full ${isLight ? 'bg-zinc-300' : 'bg-zinc-700'}`} />
          <span className={`ml-2 font-mono text-xs uppercase tracking-wider ${isLight ? 'text-zinc-600' : 'text-zinc-400'}`}>
            {title}
          </span>
        </div>
        <div>{statusBadge}</div>
      </div>
      <div className={`p-5 font-sans ${isLight ? 'text-zinc-800' : ''}`}>{children}</div>
    </div>
  );
};
