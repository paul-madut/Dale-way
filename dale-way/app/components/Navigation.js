'use client';

import { useState, useEffect } from 'react';
import { gsap } from 'gsap';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      gsap.fromTo('.mobile-menu', 
        { x: '100%' }, 
        { x: '0%', duration: 0.5, ease: 'power2.out' }
      );
      gsap.fromTo('.mobile-menu-item',
        { opacity: 0, x: 50 },
        { opacity: 1, x: 0, duration: 0.3, stagger: 0.1, delay: 0.2 }
      );
    } else {
      gsap.to('.mobile-menu', 
        { x: '100%', duration: 0.4, ease: 'power2.in' }
      );
    }
  }, [isOpen]);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold text-black tracking-wider">Dale Way</h1>
          </div>

          {/* Navigation Menu - Desktop */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Services</a>
            <a href="#about" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">About</a>
            <a href="#team" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Team</a>
            <a href="#contact" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Contact</a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="w-8 h-8 flex items-center justify-center text-gray-600 hover:text-gray-900 transition-colors"
            >
              <svg className="h-5 w-5" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path
                  className={isOpen ? 'hidden' : 'inline-flex'}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
                <path
                  className={isOpen ? 'inline-flex' : 'hidden'}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu fixed inset-y-0 right-0 w-full max-w-sm bg-white backdrop-blur-sm border-l border-gray-200 shadow-lg transform ${isOpen ? '' : 'translate-x-full'} md:hidden`}>
        <div className="flex flex-col h-full pt-20 pb-6 px-6">
          <nav className="flex-1">
            <div className="space-y-6">
              <a
                href="#services"
                className="mobile-menu-item block text-lg font-medium text-gray-900 hover:text-blue-600 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Services
              </a>
              <a
                href="#about"
                className="mobile-menu-item block text-lg font-medium text-gray-900 hover:text-blue-600 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                About
              </a>
              <a
                href="#team"
                className="mobile-menu-item block text-lg font-medium text-gray-900 hover:text-blue-600 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Team
              </a>
              <a
                href="#contact"
                className="mobile-menu-item block text-lg font-medium text-gray-900 hover:text-blue-600 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </a>
            </div>
          </nav>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-25 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </nav>
  );
}