import React from 'react';

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
  return (
    <div className={`rounded-xl border border-zinc-800/90 bg-[#08090C] overflow-hidden shadow-2xl ${className}`}>
      <div className="flex items-center justify-between px-4 py-3 bg-zinc-900/60 border-b border-zinc-800/80">
        <div className="flex items-center space-x-2">
          <div className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
          <div className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
          <div className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
          <span className="ml-2 font-mono text-xs text-zinc-400 uppercase tracking-wider">
            {title}
          </span>
        </div>
        <div>{statusBadge}</div>
      </div>
      <div className="p-5 font-sans">{children}</div>
    </div>
  );
};
