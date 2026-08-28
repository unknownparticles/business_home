import React from 'react';

interface GlowCardProps {
  children: React.ReactNode;
  className?: string;
  highlight?: boolean;
  id?: string;
  style?: React.CSSProperties;
}

export const GlowCard: React.FC<GlowCardProps> = ({ children, className = '', highlight = false, style }) => {
  return (
    <div
      className={`relative rounded-xl bg-zinc-950/80 backdrop-blur-md border transition-all duration-300 ${
        highlight
          ? 'border-cyan-500/40 shadow-[0_0_30px_-5px_rgba(6,182,212,0.15)]'
          : 'border-zinc-800/80 hover:border-zinc-700/90 shadow-xl'
      } ${className}`}
      style={style}
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      {children}
    </div>
  );
};
