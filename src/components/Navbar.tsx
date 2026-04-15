'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="bg-gradient-to-br from-gray-900 to-gray-700 text-white p-2 rounded-xl font-bold text-sm shadow-lg">
              BC
            </div>
            <span className="hidden sm:inline font-extrabold text-lg bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              BuildCraft
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            <Link href="/" className="text-gray-700 hover:text-gray-900 font-semibold transition duration-300 relative group">
              Accueil
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-gray-900 to-gray-700 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="#services" className="text-gray-700 hover:text-gray-900 font-semibold transition duration-300 relative group">
              Services
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-gray-900 to-gray-700 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="#portfolio" className="text-gray-700 hover:text-gray-900 font-semibold transition duration-300 relative group">
              Réalisations
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-gray-900 to-gray-700 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="#about" className="text-gray-700 hover:text-gray-900 font-semibold transition duration-300 relative group">
              À Propos
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-gray-900 to-gray-700 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="#contact" className="text-gray-700 hover:text-gray-900 font-semibold transition duration-300 relative group">
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-gray-900 to-gray-700 group-hover:w-full transition-all duration-300"></span>
            </Link>
          </div>

          {/* CTA Button */}
          <Link
            href="#contact"
            className="hidden md:inline-block bg-gradient-to-r from-gray-900 to-gray-800 text-white px-7 py-2.5 rounded-xl hover:shadow-lg transition-all duration-300 font-bold text-sm tracking-wide"
          >
            Devis Gratuit
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2 border-t border-gray-100 pt-4">
            <Link href="/" className="block text-gray-700 hover:text-gray-900 py-2 font-semibold">
              Accueil
            </Link>
            <Link href="#services" className="block text-gray-700 hover:text-gray-900 py-2 font-semibold">
              Services
            </Link>
            <Link href="#portfolio" className="block text-gray-700 hover:text-gray-900 py-2 font-semibold">
              Réalisations
            </Link>
            <Link href="#about" className="block text-gray-700 hover:text-gray-900 py-2 font-semibold">
              À Propos
            </Link>
            <Link href="#contact" className="block text-gray-700 hover:text-gray-900 py-2 font-semibold">
              Contact
            </Link>
            <Link
              href="#contact"
              className="block bg-gradient-to-r from-gray-900 to-gray-800 text-white px-4 py-2.5 rounded-xl text-center hover:shadow-lg transition-all duration-300 font-bold mt-2"
            >
              Devis Gratuit
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
