import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PainPoints } from './components/PainPoints';
import { GrowthLoop } from './components/GrowthLoop';
import { CoreCapabilities } from './components/CoreCapabilities';
import { AIAgentLive } from './components/AIAgentLive';
import { Comparison } from './components/Comparison';
import { ResultsKpi } from './components/ResultsKpi';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { I18nProvider } from './i18n';
import { ThemeProvider } from './theme/ThemeContext';
import { MouseBackground } from './components/MouseBackground';

export const App: React.FC = () => {
  return (
    <I18nProvider>
      <ThemeProvider>
        <MouseBackground />
        <div className="relative z-10">
          <Navbar />
          <main>
            <Hero />
            <PainPoints />
            <GrowthLoop />
            <CoreCapabilities />
            <AIAgentLive />
            <Comparison />
            <ResultsKpi />
            <FinalCTA />
          </main>
          <Footer />
        </div>
      </ThemeProvider>
    </I18nProvider>
  );
};

export default App;
