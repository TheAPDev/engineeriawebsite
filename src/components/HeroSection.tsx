import React from 'react';
import { ArrowRight } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 lg:pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <h1 className="font-montserrat font-bold text-4xl sm:text-5xl lg:text-7xl xl:text-8xl text-white leading-tight mb-6">
            <span className="block">Engineeria</span>
          </h1>
                <p className="font-montserrat font-medium text-xl sm:text-2xl lg:text-3xl text-gray-300 mb-12 animate-slide-up">
                  "Engineers ka pehla pyaar"
                </p>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-1/4 left-10 w-2 h-2 bg-brand-red-600 rounded-full animate-float opacity-60"></div>
        <div className="absolute top-1/3 right-16 w-3 h-3 bg-white rounded-full animate-float opacity-40" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/4 left-1/4 w-1 h-1 bg-brand-red-600 rounded-full animate-float opacity-80" style={{ animationDelay: '4s' }}></div>
      </div>
    </section>
  );
};