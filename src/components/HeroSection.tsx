import React from 'react';
import { ArrowRight } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-12 sm:pt-16 lg:pt-20 overflow-hidden">
      {/* Animated Dark Blue Gradient Overlay with moving light spots */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 w-full h-full" style={{background: 'linear-gradient(120deg, #181c2b 0%, #232946 60%, #0a192f 100%)', opacity: 0.98}}></div>
        {/* Animated gradient spotlights */}
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-gradient-to-br from-blue-700 via-blue-400 to-indigo-500 opacity-30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-32 right-1/3 w-96 h-96 bg-gradient-to-tr from-indigo-700 via-blue-400 to-cyan-400 opacity-20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-1/2 right-24 w-40 h-40 bg-gradient-to-tr from-cyan-400 via-blue-500 to-indigo-400 opacity-20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* More vibrant sparkles and floating dots */}
      <div className="absolute top-1/4 left-10 w-3 h-3 bg-indigo-300 rounded-full animate-float opacity-40"></div>
      <div className="absolute top-1/3 right-16 w-4 h-4 bg-white rounded-full animate-float opacity-30" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-1/4 left-1/4 w-2 h-2 bg-indigo-400 rounded-full animate-float opacity-50" style={{ animationDelay: '4s' }}></div>
      <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-white rounded-full animate-float opacity-40" style={{ animationDelay: '1.5s' }}></div>
      <div className="absolute top-1/3 left-1/3 w-1.5 h-1.5 bg-blue-400 rounded-full animate-float opacity-40" style={{ animationDelay: '3s' }}></div>



      <div className="relative z-10 max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 flex flex-col items-center justify-center text-center">
        <div className="animate-fade-in w-full flex flex-col items-center justify-center">
          <h1 className="font-montserrat font-bold text-3xl sm:text-5xl lg:text-7xl xl:text-8xl text-white leading-tight mb-4 sm:mb-6 drop-shadow-lg text-center">
            <span className="block">Engineeria</span>
          </h1>
          <p className="font-montserrat font-medium text-base sm:text-xl lg:text-3xl text-gray-200 mb-8 sm:mb-12 animate-slide-up text-center">
            "Engineers ka pehla pyaar"
          </p>
        </div>
      </div>

      {/* Vibrant Animated Arrow Down Indicator at Bottom Center, scrolls to next section on click */}
      <div className="absolute bottom-3 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex flex-col items-center">
        <button
          aria-label="Scroll Down"
          className="focus:outline-none flex items-center justify-center bg-transparent animate-bounce"
          onClick={() => {
            const aboutSection = document.getElementById('about-engineeria');
            if (aboutSection) {
              aboutSection.scrollIntoView({ behavior: 'smooth' });
            }
          }}
        >
          <span className="flex items-center justify-center">
            <ArrowRight style={{ transform: 'rotate(90deg)' }} size={28} color="#8B0000" />
          </span>
        </button>
      </div>
    </section>
  );
};