'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="bg-gray-900 text-white p-2 rounded-lg font-bold text-sm">
              BC
            </div>
            <span className="hidden sm:inline font-bold text-lg text-gray-900">BuildCraft</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            <Link href="/" className="text-gray-700 hover:text-gray-900 font-medium transition">
              Accueil
            </Link>
            <Link href="#services" className="text-gray-700 hover:text-gray-900 font-medium transition">
              Services
            </Link>
            <Link href="#portfolio" className="text-gray-700 hover:text-gray-900 font-medium transition">
              Réalisations
            </Link>
            <Link href="#about" className="text-gray-700 hover:text-gray-900 font-medium transition">
              À Propos
            </Link>
            <Link href="#contact" className="text-gray-700 hover:text-gray-900 font-medium transition">
              Contact
            </Link>
          </div>

          {/* CTA Button */}
          <Link
            href="#contact"
            className="hidden md:inline-block bg-gray-900 text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition font-medium"
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
          <div className="md:hidden pb-4 space-y-2">
            <Link href="/" className="block text-gray-700 hover:text-gray-900 py-2 font-medium">
              Accueil
            </Link>
            <Link href="#services" className="block text-gray-700 hover:text-gray-900 py-2 font-medium">
              Services
            </Link>
            <Link href="#portfolio" className="block text-gray-700 hover:text-gray-900 py-2 font-medium">
              Réalisations
            </Link>
            <Link href="#about" className="block text-gray-700 hover:text-gray-900 py-2 font-medium">
              À Propos
            </Link>
            <Link href="#contact" className="block text-gray-700 hover:text-gray-900 py-2 font-medium">
              Contact
            </Link>
            <Link
              href="#contact"
              className="block bg-gray-900 text-white px-4 py-2 rounded-lg text-center hover:bg-gray-800 transition font-medium"
            >
              Devis Gratuit
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
