import React from 'react';
import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { FeaturesSection } from './components/FeaturesSection';
import { CallToAction } from './components/CallToAction';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen w-full relative overflow-hidden">
      {/* Animated dark blue gradient background with moving spotlights */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-[#181c2b] via-[#232946] to-[#0a192f] opacity-95"></div>
        <div className="absolute top-32 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-700 via-blue-400 to-indigo-500 opacity-25 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-40 right-1/3 w-96 h-96 bg-gradient-to-tr from-indigo-700 via-blue-400 to-cyan-400 opacity-15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-1/2 right-24 w-40 h-40 bg-gradient-to-tr from-cyan-400 via-blue-500 to-indigo-400 opacity-15 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      <Navigation />
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <CallToAction />
      <Footer />
    </div>
  );
}

export default App;