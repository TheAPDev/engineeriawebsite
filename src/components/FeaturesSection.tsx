import React from 'react';
import { Globe, Trophy, Users, Smartphone } from 'lucide-react';

const features = [
  {
    icon: Globe,
    title: "Domestic & Abroad Internships",
    description: "Paid and non-paid opportunities worldwide"
  },
  {
    icon: Trophy,
    title: "Curated Hackathons",
    description: "Filtered events tailored to your skills"
  },
  {
    icon: Users,
    title: "In-App Team Building",
    description: "Connect and collaborate with peers"
  },
  {
    icon: Smartphone,
    title: "Simple Swipe Feature",
    description: "Explore opportunities effortlessly"
  }
];

export const FeaturesSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-32 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-montserrat font-bold text-3xl lg:text-4xl text-white mb-6">
            Powerful Features
          </h2>
          <p className="font-inter text-lg text-gray-300 max-w-2xl mx-auto">
            Everything you need to advance your engineering career in one elegant platform
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group bg-gray-800 p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-slide-up border border-gray-700 hover:border-brand-red-600"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 bg-gray-700 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-red-600 transition-colors duration-300">
                <feature.icon size={28} className="text-gray-300 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="font-montserrat font-semibold text-xl text-white mb-3">
                {feature.title}
              </h3>
              <p className="font-inter text-gray-300 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};