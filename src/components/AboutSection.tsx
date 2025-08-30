import React from 'react';

export const AboutSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-32 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <h2 className="font-montserrat font-bold text-3xl lg:text-4xl text-white mb-8">
            About Engineeria
          </h2>
          <p className="font-inter text-lg lg:text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
            An all-in-one platform where engineers discover internships and hackathons effortlessly. 
            <span className="text-brand-red-400 font-medium"> We research, you just chill and apply.</span>
          </p>
        </div>
      </div>
    </section>
  );
};