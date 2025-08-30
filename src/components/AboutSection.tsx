import React from 'react';

export const AboutSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-32 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <h2 className="font-montserrat font-bold text-3xl lg:text-4xl text-white mb-8">
            About Engineeria
          </h2>
          <p className="font-inter text-lg lg:text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto mb-6">
            Engineeria is your trusted companion for every step of your engineering journey. We bring together the best internships, hackathons, and learning resources, all in one place. Our mission is to empower engineers to grow, connect, and succeed—whether you're a student, a recent graduate, or a professional looking to upskill.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div className="bg-gray-800 rounded-xl p-6 shadow-lg">
              <h3 className="font-montserrat font-semibold text-xl text-brand-red-400 mb-2">Curated Opportunities</h3>
              <p className="font-inter text-base text-gray-300">We handpick internships and hackathons so you can focus on what matters—your growth.</p>
            </div>
            <div className="bg-gray-800 rounded-xl p-6 shadow-lg">
              <h3 className="font-montserrat font-semibold text-xl text-brand-red-400 mb-2">Community & Support</h3>
              <p className="font-inter text-base text-gray-300">Join a vibrant community, get guidance, and share your experiences with fellow engineers.</p>
            </div>
            <div className="bg-gray-800 rounded-xl p-6 shadow-lg">
              <h3 className="font-montserrat font-semibold text-xl text-brand-red-400 mb-2">Learn & Grow</h3>
              <p className="font-inter text-base text-gray-300">Access resources, workshops, and expert tips to help you excel in your career.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};