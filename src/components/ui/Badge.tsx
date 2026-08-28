import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'cyan' | 'emerald' | 'amber' | 'muted';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({ children, variant = 'cyan', className = '' }) => {
  const styles = {
    cyan: 'bg-cyan-950/60 border-cyan-500/30 text-cyan-400',
    emerald: 'bg-emerald-950/60 border-emerald-500/30 text-emerald-400',
    amber: 'bg-amber-950/60 border-amber-500/30 text-amber-400',
    muted: 'bg-zinc-900/80 border-zinc-800 text-zinc-400',
  };

  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-mono tracking-wide border ${styles[variant]} ${className}`}>
      {children}
    </span>
  );
};
