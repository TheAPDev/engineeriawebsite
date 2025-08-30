import React from 'react';
import { ArrowRight } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 lg:pt-20 overflow-hidden">
      {/* Professional Gradient Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none" style={{background: 'linear-gradient(120deg, #181c2b 0%, #232946 70%, #3d5a80 100%)', opacity: 0.92}}></div>

      {/* Subtle Accent Circles */}
      <div className="absolute top-16 left-1/4 w-56 h-56 bg-blue-500 opacity-15 rounded-full blur-2xl z-0"></div>
      <div className="absolute bottom-24 right-1/3 w-72 h-72 bg-indigo-400 opacity-10 rounded-full blur-2xl z-0"></div>
      <div className="absolute top-1/2 right-20 w-32 h-32 bg-cyan-400 opacity-10 rounded-full blur-2xl z-0"></div>

      {/* Minimal Sparkle Effects for Elegance */}
      <div className="absolute top-1/4 left-10 w-2 h-2 bg-indigo-300 rounded-full animate-float opacity-30"></div>
      <div className="absolute top-1/3 right-16 w-3 h-3 bg-white rounded-full animate-float opacity-20" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-1/4 left-1/4 w-1 h-1 bg-indigo-400 rounded-full animate-float opacity-40" style={{ animationDelay: '4s' }}></div>
      <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-white rounded-full animate-float opacity-30" style={{ animationDelay: '1.5s' }}></div>



      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <h1 className="font-montserrat font-bold text-4xl sm:text-5xl lg:text-7xl xl:text-8xl text-white leading-tight mb-6 drop-shadow-lg">
            <span className="block">Engineeria</span>
          </h1>
          <p className="font-montserrat font-medium text-xl sm:text-2xl lg:text-3xl text-gray-200 mb-12 animate-slide-up">
            "Engineers ka pehla pyaar"
          </p>
        </div>
      </div>

      {/* Double Shadow Arrow Down Indicator at Bottom Center */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center">
        <span className="animate-bounce">
          <ArrowRight style={{ transform: 'rotate(90deg)', filter: 'drop-shadow(0 2px 6px #fff) drop-shadow(0 0px 16px #3d5a80)' }} size={48} className="text-gray-200" />
        </span>
      </div>
    </section>
  );
};