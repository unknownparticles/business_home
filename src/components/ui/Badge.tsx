import React from 'react';
import { useTheme } from '../../theme/ThemeContext';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'cyan' | 'emerald' | 'amber' | 'muted';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({ children, variant = 'cyan', className = '' }) => {
  const { theme } = useTheme();
  const isLight = theme === 'light';

  const cyanStyle = isLight ? 'bg-cyan-50 border-cyan-200 text-cyan-700' : 'bg-cyan-950/60 border-cyan-500/30 text-cyan-400';
  const emeraldStyle = isLight ? 'bg-emerald-50 border-emerald-200 text-emerald-700' : 'bg-emerald-950/60 border-emerald-500/30 text-emerald-400';
  const amberStyle = isLight ? 'bg-amber-50 border-amber-200 text-amber-700' : 'bg-amber-950/60 border-amber-500/30 text-amber-400';
  const mutedStyle = isLight ? 'bg-zinc-100 border-zinc-200 text-zinc-600' : 'bg-zinc-900/80 border-zinc-800 text-zinc-400';

  const styles = {
    cyan: cyanStyle,
    emerald: emeraldStyle,
    amber: amberStyle,
    muted: mutedStyle,
  };

  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-mono tracking-wide border ${styles[variant]} ${className}`}>
      {children}
    </span>
  );
};
