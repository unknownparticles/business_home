import React from 'react';
import { useTranslation } from '../../i18n';
import { useTheme } from '../../theme/ThemeContext';
import { LeadGeneration } from './LeadGeneration';
import { Qualification } from './Qualification';
import { SocialMedia } from './SocialMedia';
import { CustomerSuccess } from './CustomerSuccess';
import { MarketIntel } from './MarketIntel';
import { OrderManagement } from './OrderManagement';

export const CoreCapabilities: React.FC = () => {
  const { t } = useTranslation();
  const { theme } = useTheme();
  const isLight = theme === 'light';

  return (
    <section id="capabilities" className={`py-24 relative ${isLight ? 'bg-white' : 'bg-black'}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-3">
            // UNIFIED GLOBAL INFRASTRUCTURE
          </div>
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight ${isLight ? 'text-zinc-900' : 'text-white'}`}>
            {t.capabilities.title}
          </h2>
          <p className={`mt-4 text-base sm:text-lg ${isLight ? 'text-zinc-600' : 'text-zinc-400'}`}>
            {t.capabilities.desc}
          </p>
        </div>

        <div className="space-y-6">
          <LeadGeneration />
          <Qualification />
          <SocialMedia />
          <CustomerSuccess />
          <MarketIntel />
          <OrderManagement />
        </div>
      </div>
    </section>
  );
};
