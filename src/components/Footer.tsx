import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 py-8 border-t border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <div className="font-montserrat font-bold text-xl text-white mb-4 sm:mb-0">
            Engineeria
          </div>
          <div className="font-inter text-sm text-gray-300">
            © 2025 Engineeria. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};