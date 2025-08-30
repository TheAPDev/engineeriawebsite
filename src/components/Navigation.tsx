import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-gray-900/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex w-full items-center h-16 lg:h-20">
          <div className="flex w-full justify-center items-center">
            <div className="font-montserrat font-bold text-xl lg:text-2xl text-white text-center w-full">
              Engineeria
            </div>
          </div>
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-end absolute right-0 top-0 h-16 lg:h-20 pr-4">
            <a
              href="https://app.engineeria.in"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-1.5 text-sm bg-brand-red-600 text-white font-inter font-medium rounded-md hover:bg-brand-red-700 transition-all duration-200"
            >
              Login / Sign Up
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-1.5"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Navigation - Only Login/Sign Up Button */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-[#181c2b]/95 backdrop-blur-md border-t border-gray-700 animate-slide-up flex justify-center items-center py-6">
            <a
              href="https://app.engineeria.in"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full max-w-xs px-4 py-2 text-sm bg-brand-red-600 text-white font-inter font-medium rounded-md hover:bg-brand-red-700 transition-colors duration-200 text-center"
            >
              Login / Sign Up
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};