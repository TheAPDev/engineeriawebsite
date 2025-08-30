import React from 'react';
import { ArrowRight } from 'lucide-react';

export const CallToAction: React.FC = () => {
  return (
    <section className="py-10 lg:py-16 bg-gradient-to-br from-[#181c2b] via-[#232946] to-[#0a192f] relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="animate-fade-in">
          <h2 className="font-montserrat font-bold text-4xl lg:text-5xl text-white mb-4">
            Ready to Start Your
            <span className="text-brand-red-500"> Engineering Journey?</span>
          </h2>
          <p className="font-inter text-lg lg:text-xl text-gray-300 mb-6 max-w-2xl mx-auto leading-relaxed">
            Join thousands of engineers who trust Engineeria to find their perfect opportunities. Sign up now and unlock access to exclusive internships, hackathons, and a supportive community.
          </p>
          <a
            href="https://app.engineeria.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-brand-red-500 text-white font-bold rounded-lg shadow-lg hover:bg-brand-red-600 transition-all duration-200"
          >
            Get Started
            <ArrowRight className="ml-2" size={22} />
          </a>
        </div>
      </div>

      {/* Background Decorative Elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-brand-red-600 rounded-full animate-float opacity-60"></div>
      <div className="absolute top-1/2 right-20 w-6 h-6 bg-brand-red-600 rounded-full animate-float opacity-40" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-20 left-1/4 w-2 h-2 bg-brand-red-600 rounded-full animate-float opacity-80" style={{ animationDelay: '3s' }}></div>
    </section>
  );
};